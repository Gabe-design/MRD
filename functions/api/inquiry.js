// Cloudflare Pages Function: POST /api/inquiry
//
// Deployed automatically by Cloudflare Pages from this functions/ directory.
// It does not exist under `next dev`, so the form falls back to the mailto
// link locally.
//
// Environment variables (set in Cloudflare: Pages project > Settings >
// Environment variables):
//   RESEND_API_KEY  required, from resend.com
//   INQUIRY_TO      required, the inbox that should receive inquiries
//   INQUIRY_FROM    optional, defaults to Resend's shared sending address.
//                   Switch this to an address on your own domain once the
//                   domain is verified in Resend.

const FIELD_LIMIT = 2000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function clean(value) {
  return typeof value === "string" ? value.trim().slice(0, FIELD_LIMIT) : "";
}

const or = (value, fallback) => value || fallback;

/**
 * One entry per form on the site. Each says which fields it reads, which of
 * them it cannot do without, how to subject the email, and how to lay the
 * body out so it reads as something the two of us can act on top to bottom.
 *
 * The forms send a hidden `track` naming their entry. Keeping both lanes in
 * one function means one honeypot, one email pipeline, and one place to
 * look when something does not arrive.
 */
const TRACKS = {
  // The studio's demo request: a brief we can build a first version from.
  demo: {
    fields: ["name", "business", "email", "phone", "services", "website", "tier", "style"],
    required: ["name", "business", "email", "services"],
    missing: "Name, business, email and what your business does are all required.",
    subject: (f) => `Demo request: ${f.business}`,
    body: (f) => [
      `Name:     ${f.name}`,
      `Business: ${f.business}`,
      `Email:    ${f.email}`,
      `Phone:    ${or(f.phone, "not given")}`,
      `Website:  ${or(f.website, "none")}`,
      `Tier:     ${or(f.tier, "not chosen")}`,
      `Style:    ${or(f.style, "not chosen")}`,
      "",
      "What the business does:",
      f.services,
    ],
  },

  // The community track's application: what is eating a nonprofit's week.
  community: {
    fields: ["name", "organization", "email", "mission", "process", "owner"],
    required: ["name", "organization", "email", "mission", "process"],
    missing:
      "Name, organization, email, what you do and the process that costs the most time are all required.",
    subject: (f) => `Community track application: ${f.organization}`,
    body: (f) => [
      `Name:         ${f.name}`,
      `Organization: ${f.organization}`,
      `Email:        ${f.email}`,
      `Would own it: ${or(f.owner, "not sure yet")}`,
      "",
      "What the organization does:",
      f.mission,
      "",
      "The process that costs the most staff time:",
      f.process,
    ],
  },
};

export async function onRequestPost({ request, env }) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return json({ error: "Could not read that submission." }, 400);
  }

  // Honeypot: a real person never fills a field they cannot see. Answer 200 so
  // a bot cannot tell it was rejected.
  if (clean(payload.company)) return json({ ok: true });

  // Anything that is not the community track is a demo request, so a
  // submission with no track at all still lands where it always did.
  const track = TRACKS[clean(payload.track)] || TRACKS.demo;
  const f = Object.fromEntries(
    track.fields.map((key) => [key, clean(payload[key])]),
  );

  if (track.required.some((key) => !f[key])) {
    return json({ error: track.missing }, 400);
  }
  if (!EMAIL_PATTERN.test(f.email)) {
    return json({ error: "That email address does not look right." }, 400);
  }

  const apiKey = env.RESEND_API_KEY;
  const to = env.INQUIRY_TO;
  if (!apiKey || !to) {
    // Misconfiguration is ours, not the visitor's. Say so plainly rather than
    // showing a success screen for a message that went nowhere.
    console.error("inquiry: RESEND_API_KEY or INQUIRY_TO is not set");
    return json({ error: "The form is not connected yet." }, 503);
  }

  const body = track.body(f).join("\n");

  const sent = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.INQUIRY_FROM || "Moss & Ross <onboarding@resend.dev>",
      to: [to],
      reply_to: f.email,
      subject: track.subject(f),
      text: body,
    }),
  });

  if (!sent.ok) {
    console.error("inquiry: resend responded", sent.status, await sent.text());
    return json({ error: "We could not send that just now." }, 502);
  }

  return json({ ok: true });
}

