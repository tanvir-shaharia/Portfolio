import React, { useRef, useState } from "react";
import swal from "sweetalert";
import ThankYouImg from "../../../assets/images/thank-you-envelope.png";
import ContactInp from "./contactInp";
import ScrollReveal from "../../ScrollReveal";
import CopyButton from "../../CopyButton";

export default function ContactMe() {
  const [loading, setLoading] = useState(false);
  const [showContactForm, setShowContactForm] = useState(true);
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const apiUrl = process.env.REACT_APP_API_URL || "/api/send-email";

    const formData = new FormData(e.target);
    const payload = {
      from_name: formData.get("from_name") || "",
      email: formData.get("email") || "",
      phone: formData.get("phone") || "",
      subject: formData.get("subject") || "",
      message: formData.get("message") || "",
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        await swal({
          title: "E-mail sent successfully!",
          text: "Your message has been delivered via Gmail SMTP.",
          icon: "success",
          button: "Close",
        });
        setShowContactForm(false);
      } else {
        throw new Error(data.error || "Failed to send email.");
      }
    } catch (err) {
      console.error("Gmail SMTP Submission Error:", err);
      const rawError = err?.message || String(err);

      await swal({
        title: "Message Delivery Failed",
        text: `Failed to deliver email via Gmail SMTP: ${rawError}`,
        icon: "error",
        button: "Close",
        dangerMode: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="mt-24 sm:mt-32 mb-16 sm:mb-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12"
      aria-label="Direct engineering inquiry and project discussion"
    >
      <ScrollReveal>
        <div className="bg-white/80 dark:bg-surface-panel/90 border border-gray-200/80 dark:border-white/15 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl backdrop-blur-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Direct Communication Channels & Telemetry */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-4">
            <span className="font-mono-tag text-xs text-secondary font-semibold uppercase tracking-widest">
              {"// DIRECT_INQUIRY & CONTRACTS"}
            </span>
            <h2 className="font-display-hero text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-text-primary font-extrabold tracking-tight">
              Let's Build Something Ultra-Reliable
            </h2>
            <p className="font-body-md text-xs sm:text-sm text-gray-600 dark:text-text-muted leading-relaxed">
              Direct high-throughput communication channels for mobile architecture consulting,
              native Android contracts, and Flutter engineering.
            </p>

            {/* Response Time Telemetry Indicator */}
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-100/90 dark:bg-surface-glass border border-gray-200/60 dark:border-white/10 font-mono-tag text-xs text-tertiary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
              </span>
              <span className="font-semibold">Typical response time: within 24 hours</span>
            </div>

            {/* Direct Connect Channels */}
            <div className="flex flex-col gap-3 pt-2">
              {/* Email */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50/80 dark:bg-surface-glass border border-gray-200/50 dark:border-white/5 hover:border-secondary/40 transition-all group">
                <a
                  href="mailto:tanvirshaharia120@gmail.com"
                  className="flex items-center gap-3 min-w-0 flex-1"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center text-secondary flex-shrink-0">
                    <span className="material-symbols-outlined text-lg">mail</span>
                  </div>
                  <div className="flex flex-col truncate">
                    <span className="font-mono-tag text-[10px] text-gray-500 dark:text-text-muted uppercase">
                      Direct Email
                    </span>
                    <span className="font-label-ui text-xs sm:text-sm text-gray-900 dark:text-text-primary group-hover:text-secondary transition-colors truncate font-semibold">
                      tanvirshaharia120@gmail.com
                    </span>
                  </div>
                </a>
                <CopyButton text="tanvirshaharia120@gmail.com" label="email" className="ml-2 flex-shrink-0" />
              </div>

              {/* WhatsApp */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50/80 dark:bg-surface-glass border border-gray-200/50 dark:border-white/5 hover:border-tertiary/40 transition-all group">
                <a
                  href="https://wa.me/8801644566945"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 min-w-0 flex-1"
                >
                  <div className="w-10 h-10 rounded-lg bg-tertiary/15 flex items-center justify-center text-tertiary flex-shrink-0">
                    <i className="fa-brands fa-whatsapp text-lg"></i>
                  </div>
                  <div className="flex flex-col truncate">
                    <span className="font-mono-tag text-[10px] text-gray-500 dark:text-text-muted uppercase">
                      WhatsApp Direct
                    </span>
                    <span className="font-label-ui text-xs sm:text-sm text-gray-900 dark:text-text-primary group-hover:text-tertiary transition-colors truncate font-semibold">
                      +880 1644-566945
                    </span>
                  </div>
                </a>
                <CopyButton text="+8801644566945" label="phone number" className="ml-2 flex-shrink-0" />
              </div>

              {/* Location & Remote */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/80 dark:bg-surface-glass border border-gray-200/50 dark:border-white/5">
                <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center text-primary flex-shrink-0">
                  <span className="material-symbols-outlined text-lg">location_on</span>
                </div>
                <div className="flex flex-col truncate">
                  <span className="font-mono-tag text-[10px] text-gray-500 dark:text-text-muted uppercase">
                    Location & Status
                  </span>
                  <span className="font-label-ui text-xs sm:text-sm text-gray-900 dark:text-text-primary truncate font-semibold">
                    Dhaka, Bangladesh (Global Remote Available)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center gap-2 pt-2 border-t border-gray-100 dark:border-white/5">
            <a
              href="https://github.com/tanvir-shaharia"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-surface-glass border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-on-surface hover:text-secondary hover:border-secondary/50 transition-all"
            >
              <i className="fa-brands fa-github text-base"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/tanvir-shaharia/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-surface-glass border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-on-surface hover:text-secondary hover:border-secondary/50 transition-all"
            >
              <i className="fa-brands fa-linkedin text-base"></i>
            </a>
            <a
              href="https://t.me/tanvir_shaharia"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-surface-glass border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-on-surface hover:text-secondary hover:border-secondary/50 transition-all"
            >
              <i className="fa-brands fa-telegram text-base"></i>
            </a>
            <a
              href="https://play.google.com/store/apps/dev?id=7594744948572165866"
              target="_blank"
              rel="noreferrer"
              aria-label="Google Play Store Profile"
              className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-surface-glass border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-on-surface hover:text-secondary hover:border-secondary/50 transition-all"
            >
              <i className="fa-brands fa-google-play text-sm"></i>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form or Thank You state */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {showContactForm ? (
            <form
              ref={form}
              onSubmit={sendEmail}
              className="w-full flex flex-col justify-between gap-4"
            >
              <div className="grid gap-3.5 grid-cols-1 sm:grid-cols-2 w-full">
                <ContactInp
                  placeholder="Your Name"
                  type="text"
                  name="from_name"
                  required
                />
                <ContactInp
                  placeholder="Your Email"
                  type="email"
                  name="email"
                  required
                />
                <ContactInp
                  placeholder="Your phone number (optional)"
                  type="text"
                  name="phone"
                />
                <ContactInp
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                />
              </div>

              <div className="w-full">
                <textarea
                  className="w-full rounded-xl shadow-sm border border-gray-200/80 dark:border-white/10 text-gray-900 dark:text-zinc-100 bg-white/80 dark:bg-surface-canvas/90 placeholder-gray-400 dark:placeholder-zinc-400 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/50 min-h-[160px] p-4 text-sm transition-all font-body-md"
                  placeholder="Your Message"
                  aria-label="Your Message"
                  name="message"
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-gradient-to-r from-primary via-primary-container to-secondary text-white font-label-ui font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  disabled={loading}
                >
                  <span className="material-symbols-outlined text-base">send</span>
                  <span>{loading ? "Sending..." : "Send Message"}</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="w-full h-full flex items-center justify-center py-8">
              <div className="flex flex-col items-center text-center space-y-4 max-w-md">
                <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center rounded-2xl bg-gradient-to-tr from-primary to-secondary p-4 shadow-xl">
                  <img
                    src={ThankYouImg}
                    alt="thank-you-envelope"
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h1 className="font-display-hero text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-text-primary tracking-tight">
                  Thank You !
                </h1>
                <p className="font-body-md text-sm text-gray-600 dark:text-text-muted leading-relaxed">
                  for contacting with me, I will reply promptly once your message is received.
                </p>
                <button
                  type="button"
                  className="bg-gray-100 hover:bg-gray-200 dark:bg-surface-glass dark:hover:bg-white/10 border border-gray-200 dark:border-white/15 text-gray-800 dark:text-on-surface font-label-ui font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-xl transition-all shadow-sm"
                  onClick={() => setShowContactForm(true)}
                >
                  Send Another
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </ScrollReveal>
  </section>
  );
}
