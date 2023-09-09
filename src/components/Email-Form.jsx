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
          className="w-[300px] text-gray-900 p-2 rounded-md mb-2 bg-[#ccd6f6] md:w-[600px]"
        />
        <label className="text-md font-md dark-slate">Email</label>
        <input
          type="email"
          name="user_email"
          className="w-[300px] text-gray-900 p-2 rounded-md mb-2 bg-[#ccd6f6] md:w-[600px]"
        />
        <label className="text-md font-md dark-slate">Message</label>
        <textarea
          name="message"
          className="w-[300px] text-gray-900 p-2 rounded-md mb-2 bg-[#ccd6f6] md:w-[600px]"
        />
        <input
          type="submit"
          value="Send"
          className="md:w-fit accent hover-btn accent-border border py-2 px-4 text-md font-monospace rounded"
        />
        <p>{message}</p>
      </form>
    </div>
  );
}

export default EmailForm;
