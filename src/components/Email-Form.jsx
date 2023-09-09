import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function EmailForm() {
  const form = useRef();

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
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="max-w-[600px] mx-auto p-4">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col slate max-w-[600px]"
      >
        <label className="text-md font-md dark-slate">Name</label>
        <input
          type="text"
          name="user_name"
          className="w-[600px] p-2 rounded-md mb-2 bg-[#ccd6f6]"
        />
        <label className="text-md font-md dark-slate">Email</label>
        <input
          type="email"
          name="user_email"
          className="w-[600px] p-2 rounded-md mb-2 bg-[#ccd6f6]"
        />
        <label className="text-md font-md dark-slate">Message</label>
        <textarea
          name="message"
          className="w-[600px] p-2 rounded-md mb-2 bg-[#ccd6f6]"
        />
        <input
          type="submit"
          value="Send"
          className="w-10 md:w-fit accent hover-btn accent-border border py-2 px-4 text-md font-monospace rounded"
        />
      </form>
    </div>
  );
}

export default EmailForm;
