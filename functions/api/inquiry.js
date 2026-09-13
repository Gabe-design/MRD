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

  const name = clean(payload.name);
  const business = clean(payload.business);
  const email = clean(payload.email);
  const phone = clean(payload.phone);
  const services = clean(payload.services);
  const website = clean(payload.website);
  const style = clean(payload.style);

  // Services is required alongside the contact details: it is the one field
  // a demo cannot be built without, and a request missing it would only
  // bounce back as a question.
  if (!name || !business || !email || !services) {
    return json(
      { error: "Name, business, email and what your business does are all required." },
      400,
    );
  }
  if (!EMAIL_PATTERN.test(email)) {
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

  // Laid out as a brief someone can build from top to bottom: who they are,
  // how to reach them, then what to build and what it should feel like.
  const body = [
    `Name:     ${name}`,
    `Business: ${business}`,
    `Email:    ${email}`,
    `Phone:    ${phone || "not given"}`,
    `Website:  ${website || "none"}`,
    `Style:    ${style || "not chosen"}`,
    "",
    "What the business does:",
    services,
  ].join("\n");

  const sent = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.INQUIRY_FROM || "Moss & Ross <onboarding@resend.dev>",
      to: [to],
      reply_to: email,
      subject: `Demo request: ${business}`,
      text: body,
    }),
  });

  if (!sent.ok) {
    console.error("inquiry: resend responded", sent.status, await sent.text());
    return json({ error: "We could not send that just now." }, 502);
  }

  return json({ ok: true });
}

