import { FormEvent, useState } from "react";

const TO_EMAIL = "praiseekpo2@gmail.com"; // Update to your inbox

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [mailtoHref, setMailtoHref] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const subject = encodeURIComponent(`Portfolio contact from ${name || "Visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    );
    const href = `mailto:${TO_EMAIL}?subject=${subject}&body=${body}`;
    setMailtoHref(href);
    // Attempt to open the user's email client
    try {
      window.location.href = href;
      const anchor = document.createElement("a");
      anchor.href = href;
      anchor.style.display = "none";
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    } catch (err) {
      // If the browser blocks it, we still show the manual link below
      console.warn("mailto open blocked:", err);
    }
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setSubmitting(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-transparent blur-3xl pointer-events-none"></div>
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-12">
          <h2 className="mb-3">Contact Me</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I'm available for projects and collaborations. Send a quick note and it will open in your email client.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 space-y-4 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm text-gray-200">Name *</span>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-purple-300 focus:ring-1 focus:ring-purple-300"
                placeholder="Your name"
                type="text"
              />
            </label>
            <label className="block">
              <span className="text-sm text-gray-200">Email *</span>
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-purple-300 focus:ring-1 focus:ring-purple-300"
                placeholder="you@example.com"
                type="email"
              />
            </label>
          </div>

          <label className="block">
            <span className="text-sm text-gray-200">Phone</span>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-2 w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-purple-300 focus:ring-1 focus:ring-purple-300"
              placeholder="Optional"
              type="tel"
            />
          </label>

          <label className="block">
            <span className="text-sm text-gray-200">Message</span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-2 w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-purple-300 focus:ring-1 focus:ring-purple-300 min-h-[140px]"
              placeholder="Tell me about your project..."
            />
          </label>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={submitting}
              className={`px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg transition-all duration-300 ${
                submitting ? "opacity-70 cursor-not-allowed" : "hover:shadow-purple-500/30 hover:translate-y-[-1px]"
              }`}
            >
              {submitting ? "Opening email..." : "Send Message"}
            </button>
          </div>

          {sent && (
            <div className="text-sm text-emerald-200 text-center space-y-2">
              <p>Opening your email client—please hit send to deliver the message.</p>
              {mailtoHref && (
                <div className="flex flex-wrap gap-3 justify-center text-xs text-gray-200">
                  <a
                    href={mailtoHref}
                    className="underline text-white hover:text-gray-200"
                  >
                    Click here if it didn&apos;t open
                  </a>
                  <button
                    type="button"
                    className="underline text-white hover:text-gray-200"
                    onClick={() => {
                      navigator.clipboard?.writeText(TO_EMAIL).catch(() => {});
                    }}
                  >
                    Copy email
                  </button>
                </div>
              )}
            </div>
          )}
        </form>

      </div>
    </section>
  );
}
