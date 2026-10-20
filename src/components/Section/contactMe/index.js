import React, { useRef, useState, useEffect } from "react";
import swal from "sweetalert";
import ThankYouImg from "../../../assets/images/thank-you-envelope.png";
import ContactInp from "./contactInp";
import ScrollReveal from "../../ScrollReveal";
import CopyButton from "../../CopyButton";
import {
  GitHubIcon,
  LinkedInIcon,
  GooglePlayIcon,
  WhatsAppIcon,
  TelegramIcon,
  GmailIcon,
  FacebookIcon,
  InstagramIcon,
  XIcon,
} from "../../SocialBrandIcon";

export default function ContactMe() {
  const [loading, setLoading] = useState(false);
  const [showContactForm, setShowContactForm] = useState(true);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [attachedEstimate, setAttachedEstimate] = useState(() => {
    if (typeof window === "undefined") return null;
    try {
      const saved = sessionStorage.getItem("portfolio:attached-estimate");
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      // ignore
    }
    return null;
  });
  const form = useRef();

  // Listen for estimate transfer events and check sessionStorage for cross-page prefill
  useEffect(() => {
    // 1. Check sessionStorage for cross-page navigation handoff
    if (typeof window !== "undefined") {
      try {
        const stored = sessionStorage.getItem("portfolio:prefill-contact");
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed && typeof parsed.subject === "string") {
            setSubject(parsed.subject);
          }
          if (parsed && typeof parsed.message === "string") {
            setMessage(parsed.message);
          }
          if (parsed?.estimateData) {
            setAttachedEstimate(parsed.estimateData);
            sessionStorage.setItem(
              "portfolio:attached-estimate",
              JSON.stringify(parsed.estimateData)
            );
          }
          sessionStorage.removeItem("portfolio:prefill-contact");
          setShowContactForm(true);

          setTimeout(() => {
            const nameInput = document.querySelector('input[name="from_name"]');
            if (nameInput) {
              nameInput.focus();
            }
          }, 500);
        } else {
          const saved = sessionStorage.getItem("portfolio:attached-estimate");
          if (saved) {
            setAttachedEstimate(JSON.parse(saved));
          }
        }
      } catch (e) {
        // ignore JSON parsing or storage issues
      }
    }

    // 2. Listen for runtime in-page custom events
    const handlePrefill = (event) => {
      if (event?.detail) {
        if (typeof event.detail.subject === "string") {
          setSubject(event.detail.subject);
        }
        if (typeof event.detail.message === "string") {
          setMessage(event.detail.message);
        }
        if (event.detail.estimateData) {
          setAttachedEstimate(event.detail.estimateData);
          try {
            sessionStorage.setItem(
              "portfolio:attached-estimate",
              JSON.stringify(event.detail.estimateData)
            );
          } catch (e) {}
        }
        setShowContactForm(true);
      }
    };

    window.addEventListener("portfolio:prefill-contact", handlePrefill);
    return () => {
      window.removeEventListener("portfolio:prefill-contact", handlePrefill);
    };
  }, []);

  const handleDismissEstimateBanner = () => {
    setAttachedEstimate(null);
    try {
      sessionStorage.removeItem("portfolio:attached-estimate");
    } catch (e) {
      // ignore
    }
  };

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
        setAttachedEstimate(null);
        try {
          sessionStorage.removeItem("portfolio:attached-estimate");
        } catch (e) {}
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
      className="mt-14 sm:mt-20 mb-10 sm:mb-14 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12"
      aria-label="Direct engineering inquiry and project discussion"
    >
      <ScrollReveal>
        <div className="bg-white/80 dark:bg-surface-panel/90 border border-gray-200/80 dark:border-white/15 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl backdrop-blur-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Direct Communication Channels & Telemetry */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-4">
            <span className="font-mono-tag text-xs text-sky-700 dark:text-sky-400 font-semibold uppercase tracking-widest">
              DIRECT INQUIRY &amp; CONTACT
            </span>
            <h2 className="font-display-hero text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-text-primary font-extrabold tracking-tight">
              Let's Build Something Ultra-Reliable
            </h2>
            <p className="font-body-md text-xs sm:text-sm text-gray-600 dark:text-text-muted leading-relaxed">
              Direct high-throughput communication channels for mobile architecture consulting,
              native Android contracts, and Flutter engineering.
            </p>

            {/* Response Time Telemetry Indicator */}
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 font-mono-tag text-xs text-emerald-700 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold">Typical response time: within 24 hours</span>
            </div>

            {/* Direct Connect Channels */}
            <div className="flex flex-col gap-3 pt-2">
              {/* Email */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50/80 dark:bg-surface-glass border border-gray-200/50 dark:border-white/5 hover:border-sky-500/40 transition-all group">
                <a
                  href="mailto:tanvirshaharia120@gmail.com"
                  className="flex items-center gap-3 min-w-0 flex-1"
                >
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center flex-shrink-0">
                    <GmailIcon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col truncate">
                    <span className="font-mono-tag text-[10px] text-gray-500 dark:text-text-muted uppercase">
                      Direct Email
                    </span>
                    <span className="font-label-ui text-xs sm:text-sm text-gray-900 dark:text-text-primary group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors truncate font-semibold">
                      tanvirshaharia120@gmail.com
                    </span>
                  </div>
                </a>
                <CopyButton text="tanvirshaharia120@gmail.com" label="email" className="ml-2 flex-shrink-0" />
              </div>

              {/* WhatsApp */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50/80 dark:bg-surface-glass border border-gray-200/50 dark:border-white/5 hover:border-emerald-500/40 transition-all group">
                <a
                  href="https://wa.me/8801644566945"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 min-w-0 flex-1"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col truncate">
                    <span className="font-mono-tag text-[10px] text-gray-500 dark:text-text-muted uppercase">
                      WhatsApp Direct
                    </span>
                    <span className="font-label-ui text-xs sm:text-sm text-gray-900 dark:text-text-primary group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors truncate font-semibold">
                      +880 1644-566945
                    </span>
                  </div>
                </a>
                <CopyButton text="+8801644566945" label="phone number" className="ml-2 flex-shrink-0" />
              </div>

              {/* Location & Remote */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/80 dark:bg-surface-glass border border-gray-200/50 dark:border-white/5">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-700 dark:text-indigo-400 flex-shrink-0">
                  <span className="material-symbols-outlined text-lg">location_on</span>
                </div>
                <div className="flex flex-col truncate">
                  <span className="font-mono-tag text-[10px] text-gray-500 dark:text-text-muted uppercase">
                    Location &amp; Status
                  </span>
                  <span className="font-label-ui text-xs sm:text-sm text-gray-900 dark:text-text-primary truncate font-semibold">
                    Dhaka, Bangladesh (Global Remote Available)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center gap-2.5 pt-2 border-t border-gray-100 dark:border-white/5 flex-wrap">
            <a
              href="https://github.com/tanvir-shaharia"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-xl bg-white/80 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 flex items-center justify-center text-gray-800 dark:text-white hover:border-gray-400 dark:hover:border-white/30 hover:scale-110 hover:-translate-y-0.5 transition-all shadow-sm"
            >
              <GitHubIcon className="w-5 h-5 text-gray-900 dark:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/tanvir-shaharia/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-xl bg-white/80 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 flex items-center justify-center hover:border-[#0A66C2]/50 hover:scale-110 hover:-translate-y-0.5 transition-all shadow-sm"
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/tanvir_shaharia"
              target="_blank"
              rel="noreferrer"
              aria-label="X (formerly Twitter) Profile"
              className="w-10 h-10 rounded-xl bg-white/80 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 flex items-center justify-center text-gray-900 dark:text-white hover:border-gray-400 dark:hover:border-white/30 hover:scale-110 hover:-translate-y-0.5 transition-all shadow-sm"
            >
              <XIcon className="w-4 h-4 text-gray-900 dark:text-white" />
            </a>
            <a
              href="https://www.facebook.com/tanvir.softwaredev"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook Page"
              className="w-10 h-10 rounded-xl bg-white/80 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 flex items-center justify-center hover:border-[#1877F2]/50 hover:scale-110 hover:-translate-y-0.5 transition-all shadow-sm"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/tanvir_shaharia"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram Profile"
              className="w-10 h-10 rounded-xl bg-white/80 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 flex items-center justify-center hover:border-pink-500/50 hover:scale-110 hover:-translate-y-0.5 transition-all shadow-sm"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href="https://t.me/tanvir_shaharia"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              className="w-10 h-10 rounded-xl bg-white/80 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 flex items-center justify-center hover:border-[#24A1DE]/50 hover:scale-110 hover:-translate-y-0.5 transition-all shadow-sm"
            >
              <TelegramIcon className="w-5 h-5" />
            </a>
            <a
              href="https://play.google.com/store/apps/dev?id=7594744948572165866"
              target="_blank"
              rel="noreferrer"
              aria-label="Google Play Store Profile"
              className="w-10 h-10 rounded-xl bg-white/80 dark:bg-surface-glass border border-gray-200/80 dark:border-white/10 flex items-center justify-center hover:border-sky-500/50 hover:scale-110 hover:-translate-y-0.5 transition-all shadow-sm"
            >
              <GooglePlayIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form or Thank You state */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {showContactForm ? (
            <>
              {/* Obsidian Cyber-Glass Project Estimate Attached Confirmation Banner */}
              {attachedEstimate && (
                <div
                  role="region"
                  aria-label="Attached Project Estimate"
                  className="p-4 sm:p-5 rounded-2xl bg-indigo-500/10 dark:bg-brand-950/80 border border-indigo-500/30 dark:border-indigo-400/30 backdrop-blur-xl shadow-lg flex flex-col gap-3 relative mb-4 animate-fade-in"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                        <span className="material-symbols-outlined text-base">calculate</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-ui text-xs sm:text-sm font-bold text-gray-900 dark:text-text-primary">
                          Project Estimate Attached
                        </span>
                        <span className="font-mono-tag text-[10px] text-sky-700 dark:text-sky-400 font-semibold uppercase tracking-wider">
                          SPECIFICATION PRELOADED
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleDismissEstimateBanner}
                      aria-label="Dismiss estimate banner"
                      title="Dismiss estimate banner"
                      className="p-1 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-base">close</span>
                    </button>
                  </div>

                  {/* Specification Details Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono-tag text-xs">
                    <div className="flex flex-col p-2 rounded-lg bg-white/70 dark:bg-white/5 border border-gray-200/60 dark:border-white/5">
                      <span className="text-[10px] text-gray-500 dark:text-text-muted uppercase">Platform</span>
                      <span className="font-bold text-gray-800 dark:text-zinc-200 truncate">{attachedEstimate.projectTypeName}</span>
                    </div>
                    <div className="flex flex-col p-2 rounded-lg bg-white/70 dark:bg-white/5 border border-gray-200/60 dark:border-white/5">
                      <span className="text-[10px] text-gray-500 dark:text-text-muted uppercase">Complexity</span>
                      <span className="font-bold text-indigo-700 dark:text-indigo-300 truncate">{attachedEstimate.complexityName}</span>
                    </div>
                    <div className="flex flex-col p-2 rounded-lg bg-white/70 dark:bg-white/5 border border-gray-200/60 dark:border-white/5">
                      <span className="text-[10px] text-gray-500 dark:text-text-muted uppercase">Budget Range</span>
                      <span className="font-bold text-emerald-700 dark:text-emerald-400 truncate">{attachedEstimate.usdRange}</span>
                    </div>
                    <div className="flex flex-col p-2 rounded-lg bg-white/70 dark:bg-white/5 border border-gray-200/60 dark:border-white/5">
                      <span className="text-[10px] text-gray-500 dark:text-text-muted uppercase">Timeline</span>
                      <span className="font-bold text-gray-800 dark:text-zinc-200 truncate">{attachedEstimate.timelineRange}</span>
                    </div>
                  </div>

                  {/* Selected feature scope chips if any */}
                  {Array.isArray(attachedEstimate.featureNames) && attachedEstimate.featureNames.length > 0 && (
                    <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
                      <span className="font-mono-tag text-[10px] text-gray-500 dark:text-text-muted uppercase">
                        Features:
                      </span>
                      {attachedEstimate.featureNames.map((fn, idx) => (
                        <span
                          key={idx}
                          className="font-mono-tag text-[10px] px-2 py-0.5 rounded-md bg-white/80 dark:bg-white/5 border border-gray-200/60 dark:border-white/5 text-gray-800 dark:text-zinc-200"
                        >
                          +{fn}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="font-body-sm text-[11px] text-gray-600 dark:text-text-muted leading-relaxed border-t border-gray-200/50 dark:border-white/5 pt-2">
                    Review and edit your message before submitting. Your selected specification has been preloaded.
                  </p>
                </div>
              )}

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
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>

              <div className="w-full">
                <textarea
                  className="w-full rounded-xl shadow-sm border border-gray-200/80 dark:border-white/10 text-gray-900 dark:text-zinc-100 bg-white/80 dark:bg-surface-canvas/90 placeholder-gray-400 dark:placeholder-zinc-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 min-h-[160px] p-4 text-sm transition-all font-body-md"
                  placeholder="Your Message"
                  aria-label="Your Message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-label-ui font-bold text-sm px-8 py-3.5 rounded-xl shadow-md transition-all cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  disabled={loading}
                >
                  <span className="material-symbols-outlined text-base">send</span>
                  <span>{loading ? "Sending..." : "Send Message"}</span>
                </button>
              </div>
            </form>
          </>
          ) : (
            <div className="w-full h-full flex items-center justify-center py-8">
              <div className="flex flex-col items-center text-center space-y-4 max-w-md">
                <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center rounded-2xl bg-indigo-500/10 border border-indigo-500/20 p-4 shadow-xl">
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
