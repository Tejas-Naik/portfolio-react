import React from "react";
import Reveal from "../components/Reveal";

const impactStats = [
  { label: "Live classes delivered", value: "1000+" },
  { label: "Students mentored", value: "150+" },
  { label: "Countries taught", value: "25+" }
];

const teachingHighlights = [
  "Founder of Tezcode.tech — a personal bootcamp built like a startup.",
  "Hands-on projects: Python, Web Dev, AI tools, and shipping MVPs fast.",
  "Students learn by building and launch their first income-generating work.",
  "Workshops on AI integrations, APIs, and product thinking.",
  "Mentorship focused on clarity, feedback, and founder mindset."
];

export default function Teaching() {
  return (
    <Reveal>
      <div
        id="teaching"
        className={"flex flex-col items-center max-w-[1100px] pt-16 pb-32 w-full"}
      >
        <div className={"flex items-center w-full header-line pb-8"}>
          <span className={"accent mr-4 text-xl font-monospace"}>04.</span>
          <h3 className={"text-2xl whitespace-nowrap slate font-[600]"}>
            Teaching & Bootcamp
          </h3>
        </div>
        <div className={"w-full grid lg:grid-cols-2 gap-8"}>
          <div className={"div-back rounded-2xl p-8 border border-slate-800/70"}>
            <h4 className={"slate text-xl font-[600] mb-3"}>Tezcode.tech</h4>
            <p className={"dark-slate leading-7 mb-5 text-[15px]"}>
              A personal coding bootcamp where I combine teaching, product thinking,
              and AI-first development. We build real products, practice shipping fast,
              and focus on outcomes: confidence, portfolio pieces, and early revenue.
            </p>
            <ul className={"dark-slate font-monospace text-[14px] grid gap-2 bullet-list"}>
              {teachingHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a
              href="https://tezcode.tech"
              target="_blank"
              rel="noreferrer"
              className={"btn-primary inline-block mt-6"}
            >
              Visit Tezcode.tech
            </a>
          </div>
          <div className={"grid gap-6"}>
            <div className={"rounded-2xl p-6 border border-slate-800/70 bg-gradient-to-r from-[#0f1c30] to-[#0f1625]"}>
              <h5 className={"slate text-lg font-[600] mb-3"}>Global Classroom</h5>
              <p className={"dark-slate leading-7 text-[15px]"}>
                I teach Python, Web Development, and AI fundamentals to students around the world.
                Sessions mix live coding, projects, and coaching so learners become builders.
              </p>
            </div>
            <div className={"grid grid-cols-3 gap-4"}>
              {impactStats.map((stat) => (
                <div
                  key={stat.label}
                  className={"div-back rounded-xl border border-slate-800/70 p-4 text-center"}
                >
                  <div className={"accent text-2xl font-[700]"}>{stat.value}</div>
                  <div className={"dark-slate text-xs font-monospace uppercase tracking-[0.08em] mt-1"}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <div className={"div-back rounded-2xl p-6 border border-slate-800/70"}>
              <h5 className={"slate text-lg font-[600] mb-2"}>How I can help</h5>
              <p className={"dark-slate text-[15px] leading-7"}>
                Workshops for teams, guest lectures, and tailored mentorship on AI product strategy,
                front-end architecture, and launching MVPs quickly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
