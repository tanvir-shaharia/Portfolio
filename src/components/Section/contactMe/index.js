import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { Fade } from "react-reveal";
import swal from "sweetalert";
import ThankYouImg from "../../../assets/images/thank-you-envelope.png";
import Title from "../title";
import ContactInp from "./contactInp";
import SocialContact from "./socialContact";

export default function ContactMe() {
  const [loading, setLoading] = useState(false);
  const [showContactForm, setShowContactForm] = useState(true);
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    await emailjs
      .sendForm(
        "service_2x0ooox", //SERVICE ID
        "template_qaeo3sv", //TEMPLATE ID
        form.current,
        "bgpIbO0GlRBgWuCzu" // PUBLIC KEY
      )
      .then(
        (result) => {
          swal({
            title: "E-mail sent successful",
            icon: "success",
            button: "Close",
            dangerMode: true,
          }).then(setShowContactForm(false));
        },
        (err) => {
          swal({
            title: "Something went wrong",
            icon: "error",
            button: "close",
            dangerMode: true,
          });
          console.log(err);
        }
      );

    setLoading(false);
  };

  if (loading) {
    swal({
      title: "Sending message",
      icon: "warning",
      text: "Please wait ...",
      button: false,
      closeOnClickOutside: false,
    });
  }

  return (
    <>
      <div className="containerCustom gap">
        <Title title="CONTACT" />
        <div className="md:grid grid-cols-12 gap-4">
          <div className="md:col-span-5 lg:col-span-4">
            <div className="w-full p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 dark:bg-zinc-900/60 dark:border-zinc-800">
              <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-zinc-100">
                Tell me on
              </h5>
              <ul className="my-4 space-y-3">
                <SocialContact
                  icon="fa-solid fa-envelope"
                  name="email"
                  link="mailto:tanvirshaharia120@gmail.com"
                  delay={100}
                />
                <SocialContact
                  icon="fa-brands fa-whatsapp"
                  name="whatsapp"
                  link="https://wa.me/+8801644566945/"
                  delay={150}
                />
                <SocialContact
                  icon="fa-brands fa-facebook-messenger"
                  name="messenger"
                  link="https://www.facebook.com/messages/t/100076360894745"
                  delay={200}
                />
                <SocialContact
                  icon="fab fa-linkedin-in"
                  name="linkedin"
                  link="https://www.linkedin.com/in/tanvir-shaharia/"
                  delay={250}
                />
                <SocialContact
                  icon="fa-brands fa-x-twitter"
                  name="X"
                  link="https://x.com/tanvir_shaharia"
                  delay={300}
                />
                <SocialContact
                  icon="fab fa-instagram"
                  name="instagram"
                  link="https://www.instagram.com/tanvir_shaharia/"
                  delay={350}
                />
              </ul>
            </div>
          </div>
          <div className="inline-flex justify-center items-center w-full md:hidden mt-4">
            <hr className="my-8 w-[70%] h-px bg-gray-200 border-0 dark:bg-zinc-800" />
            <span className="absolute left-1/2 px-3 font-medium text-gray-900 bg-gray-50 -translate-x-1/2 dark:text-zinc-300 dark:bg-[#09090b]">
              or
            </span>
          </div>
          {showContactForm ? (
            <form
              ref={form}
              onSubmit={sendEmail}
              className="md:col-span-7 lg:col-span-8 w-full h-full flex flex-col justify-between"
            >
              <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 w-full mt-4 md:mt-0">
                <ContactInp
                  placeholder="Your Name"
                  type="text"
                  name="from_name"
                  required
                />
                <ContactInp
                  placeholder="Your Email"
                  type="email"
                  delay={150}
                  name="email"
                  required
                />
                <ContactInp
                  placeholder="Your phone number (optional)"
                  type="text"
                  delay={200}
                  name="phone"
                />
                <ContactInp
                  placeholder="Subject"
                  type="text"
                  delay={230}
                  name="subject"
                  required
                />
              </div>
              <div className="w-full  my-4 flex-1">
                <Fade up delay={240}>
                  <textarea
                    className="w-full rounded-lg shadow-sm border border-gray-200 dark:border-zinc-700/80 text-gray-900 dark:text-zinc-100 bg-white dark:bg-zinc-900 placeholder-gray-400 dark:placeholder-zinc-400 focus:border-brand-500 dark:focus:border-brand-500 focus:ring-1 focus:ring-brand-500 min-h-[200px] md:min-h-full p-3.5 text-sm transition-all"
                    placeholder="Your Message"
                    name="message"
                    required
                  />
                </Fade>
              </div>

              <Fade up delay={450}>
                <div className="text-center mt-1">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-brand-600 via-brand-500 to-accent-violet hover:from-brand-500 hover:to-indigo-600 font-medium rounded-3xl text-sm px-8 py-3.5 text-center text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-75 disabled:cursor-progress"
                    name="message"
                    disabled={loading}
                  >
                    Send Message
                  </button>
                </div>
              </Fade>
            </form>
          ) : (
            <div className="md:col-span-7 lg:col-span-8 w-full h-full flex items-center justify-center">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-32 h-32 flex items-center justify-center bg-brand-500 rounded-full bg-gradient-to-tr from-brand-600 via-brand-500 to-accent-violet">
                  <img
                    src={ThankYouImg}
                    alt="thank-you-envelope"
                    border="0"
                    className="w-20"
                  />
                </div>
                <h1 className="text-4xl font-bold">Thank You !</h1>
                <p className="text-center">
                  for contacting with me, I will reply promptly once your
                  message is received.
                </p>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-brand-600 via-brand-500 to-accent-violet hover:from-brand-500 hover:to-indigo-600 font-medium rounded-3xl text-sm px-8 py-3.5 text-center text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-lg"
                  name="message"
                  onClick={() => setShowContactForm(true)}
                >
                  Send Another
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
