import React, { useRef,useState } from "react";
import emailjs from "@emailjs/browser";

function EmailForm() {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rss4bhv",
        "template_d1zm5an",
        form.current,
        "DZmrJ04GNV4_EQO3M"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent");
          setMessage("Message sent, will get back to you soon!")
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setMessage(error.text)
        }
      );
  };
  return (
    <div className="max-w-[640px] mx-auto p-4 w-full">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col slate max-w-[640px] gap-3"
      >
        <label className="text-sm uppercase tracking-[0.08em] font-monospace dark-slate">Name</label>
        <input
          type="text"
          name="user_name"
          className="w-full text-gray-50 p-3 rounded-md bg-[#0f1c30] border border-slate-800/80 focus:border-[#64ffda] outline-none"
        />
        <label className="text-sm uppercase tracking-[0.08em] font-monospace dark-slate">Email</label>
        <input
          type="email"
          name="user_email"
          className="w-full text-gray-50 p-3 rounded-md bg-[#0f1c30] border border-slate-800/80 focus:border-[#64ffda] outline-none"
        />
        <label className="text-sm uppercase tracking-[0.08em] font-monospace dark-slate">Message</label>
        <textarea
          name="message"
          className="w-full text-gray-50 p-3 rounded-md h-32 bg-[#0f1c30] border border-slate-800/80 focus:border-[#64ffda] outline-none"
        />
        <input
          type="submit"
          value="Send"
          className="md:w-fit accent hover-btn accent-border border py-3 px-6 text-md font-monospace rounded cursor-pointer"
        />
        <p className="text-sm dark-slate mt-1 min-h-[20px]">{message}</p>
      </form>
    </div>
  );
}

export default EmailForm;
