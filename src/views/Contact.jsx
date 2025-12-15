import React from "react";
import EmailForm from "../components/Email-Form";
import Reveal from "../components/Reveal";

function Contact() {
  return (
    <Reveal>
      <div
        id="contact"
        className={
          "flex flex-col h-full mb-24 items-center justify-center max-w-[1080px] w-full px-4"
        }
      >
        <div className={"flex items-center w-full header-line pb-6 justify-start md:justify-center"}>
          <span className={"accent font-monospace mr-4 text-lg"}>05.</span>
          <h3 className={"slate font-[600] text-3xl md:text-4xl"}>Let’s build what’s next</h3>
        </div>
        <div className={"w-full mt-4 grid md:grid-cols-[1.1fr_1fr] gap-6"}>
          <div className={"div-back rounded-3xl p-8 border border-slate-800/70 shadow-xl"}>
            <p className={"dark-slate max-w-[640px] mb-6 leading-7 text-[15px]"}>
              Open to collaborations, AI/SaaS product builds, workshops, and teaching partnerships.
              If you need an AI-first web experience, a lean SaaS launch, or founder-style coaching
              for your team, reach out and let’s ship it.
            </p>
            <ul className={"dark-slate font-monospace text-[13px] grid gap-3 bullet-list"}>
              <li>AI-powered web apps and SaaS builds</li>
              <li>Workshops and team training on AI + front-end</li>
              <li>Bootcamp partnerships and mentoring at scale</li>
              <li>Advisory on fast MVP launches</li>
            </ul>
          </div>
          <div className={"div-back rounded-3xl p-8 border border-slate-800/70 shadow-xl"}>
            <EmailForm />
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default Contact;
