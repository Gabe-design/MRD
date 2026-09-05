const founders = [
  {
    initial: "M",
    name: "Henry Moss",
    role: "Co-founder · Client Relations & Design",
    bio: "I was born and raised in Westlake Village, and I'm studying accounting at Moorpark College. At Moss & Ross I handle the client side: the first call, the questions about how your business actually runs, and the check-ins while we build. I look forward to meeting you if you decide to work with us.",
  },
  {
    initial: "R",
    name: "Gabriel Ross",
    role: "Co-founder · Design & Development",
    bio: "[Where you're from and what you're studying or your background. What you handle at Moss & Ross. A closing line to the reader. Match Henry's length.]",
  },
];

export default function MeetUs() {
  return (
    <section id="about" className="bg-ivory py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-clay font-medium text-xs uppercase tracking-[0.25em] mb-4">
            Meet Moss &amp; Ross
          </p>
          <h2 className="text-3xl sm:text-4xl font-medium text-charcoal tracking-tight mb-4">
            The People You&apos;ll Work With
          </h2>
          <p className="text-charcoal/60 text-lg max-w-xl mx-auto">
            When you hire Moss &amp; Ross, you work with the two of us and
            nobody else.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {founders.map((f) => (
            <div key={f.initial} className="bg-white border border-charcoal/10 p-8">
              <div
                className="w-20 h-20 rounded-full bg-charcoal text-clay flex items-center justify-center text-2xl font-semibold mb-6"
                aria-hidden="true"
              >
                {f.initial}
              </div>
              <h3 className="font-semibold text-charcoal text-xl mb-1">
                {f.name}
              </h3>
              <p className="text-clay-dark text-xs font-medium uppercase tracking-[0.15em] mb-4">
                {f.role}
              </p>
              <p className="text-charcoal/60 text-sm leading-relaxed">{f.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
