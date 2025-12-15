import { useState } from "react";
import Reveal from "../components/Reveal";

const roles = [
  {
    company: "Founder & Coding Instructor @ Tezcode.tech",
    url: "https://tezcode.tech",
    position: "Founder, Coding Bootcamp",
    duration: "Apr 2024 – Present",
    bullets: [
      "Built a founder-first coding bootcamp focused on AI and SaaS projects.",
      "Taught 100+ students and helped every cohort ship production-ready work.",
      "Guided students to earn their first income through freelancing and micro-SaaS.",
      "Designed playbooks for Python, Web, and AI toolchains that move fast.",
      "Positioned Tezcode.tech as a growing education startup with global reach."
    ]
  },
  {
    company: "Coding Teacher @ BrightChamps",
    url: "https://brightchamps.com/",
    position: "Coding Instructor (Global)",
    duration: "Oct 2023 – Present",
    bullets: [
      "Delivered 1000+ live coding classes to learners worldwide.",
      "Mentored 150+ students across multiple countries and time zones.",
      "Taught Python, Web Development, AI fundamentals, and Game Development.",
      "Focused on logic building, confidence, and real-world skills.",
      "Scaled teaching impact through curriculum systems and project templates."
    ]
  },
  {
    company: "Web Developer @ 404 Solutions Inc",
    url: "https://oasisinfobyte.com/",
    position: "Web Developer",
    duration: "Feb 2022 – Dec 2022",
    bullets: [
      "Built and maintained web applications using JavaScript, Python, and Flask.",
      "Implemented APIs, DBMS integrations, and responsive UI workflows.",
      "Collaborated with cross-functional design and product teams.",
      "Ensured accessibility, performance, and cross-browser compatibility.",
      "Shipped iterative releases fast while improving code quality."
    ]
  }
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const certifications = [
    {
      title: "Python For Everybody Specialization",
      url: "https://coursera.org/share/38a28c002034c0dd6f049ce250a932ae",
      provider: "University of Michigan & Coursera",
      icon: "fab fa-gg"
    },
    {
      title: "#100DaysOfCode Python Pro Bootcamp",
      url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-8a5c4488-95dd-4eb3-9f5a-8b0a424d8b5c.pdf",
      provider: "Udemy & London App Brewery",
      icon: "fab fa-gg"
    },
    {
      title: "Javascript: All-in-One Development Suite",
      url: "https://github.com/RNTejas/certificates/blob/master/JSSimplilearn.pdf",
      provider: "Simplilearn",
      icon: "fab fa-gg"
    },
    {
      title: "The Complete JavaScript Course 2022: From Zero to Expert!",
      url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-6f80c187-5b46-426f-8950-56c0d88d017e.pdf",
      provider: "Jonas Schmedtmann & Udemy",
      icon: "fab fa-gg"
    },
    {
      title: "Introduction to Internet Of Things (IoT)",
      url: "https://github.com/RNTejas/certificates/blob/master/30449834_SCPDRecordofCompletion.pdf",
      provider: "Stanford University (SCPD)",
      icon: "fab fa-gg"
    },
    {
      title: "The Ultimate React Course (React, Redux) 2023",
      url: "https://www.udemy.com/certificate/UC-5f72bf4f-565a-4bdb-a1a9-4d8a663dd647/",
      provider: "Jonas Schmedtmann & Udemy",
      icon: "fab fa-gg"
    }
  ];

  return (
    <>
      <Reveal>
        <div
          id="experience"
          className={
            "flex flex-col text-left items-center max-w-[1000px] pt-24 pb-32 w-full"
          }
        >
        <div className={"flex items-center w-full header-line"}>
          <span className={"accent mr-4 text-xl font-monospace"}>02.</span>
          <span
            className={
              "text-[22px] whitespace-nowrap slate font-Poppins font-[600]"
            }
          >
            Experience
          </span>
        </div>
        <div
          className={
            "flex flex-col justify-start md:flex-row w-full mt-12 gap-6"
          }
        >
          <ul
            className={
              "flex md:flex-col text-sm slate-alt overflow-x-scroll font-monospace mr-6 work-list mb-4 md:mb-0 rounded-xl border border-slate-800/70"
            }
          >
            {roles.map((role, i) => {
              return (
                <li
                  key={role.company}
                  onClick={() => setActiveTab(i)}
                  className={`p-4 px-6 cursor-pointer border-b-2 md:border-b-0 md:border-l-2 ${
                    activeTab === i ? "active-item" : ""
                  }`}
                >
                  {role.company}
                </li>
              );
            })}
          </ul>
          <div className={"p-2 flex-1"}>
            {roles.map((role, i) => {
              return (
                <div key={role.company} className={`${activeTab === i ? "" : "hidden"}`}>
                  <div className={`font-Poppins text-xl mb-1 font-[600]`}>
                    <span className={"slate mr-2"}>{role.position}</span>
                    <a href={role.url} className={"accent"} target={"_blank"} rel="noreferrer">
                      @ {role.company}
                    </a>
                  </div>
                  <span className={"slate text-sm font-monospace"}>
                    {role.duration}
                  </span>
                  <ul
                    className={
                      "flex flex-col bullet-list mt-4 max-w-[620px] slate-alt leading-6 text-sm"
                    }
                  >
                    {role.bullets.map((item) => (
                      <li key={item} className={"mb-2"}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className={"flex items-center w-full header-line pb-8 mt-10"}>
          <span className={"accent mr-4 text-xl font-monospace"}>2.1</span>
          <span
            className={
              "text-[20px] whitespace-nowrap slate font-Poppins font-[600]"
            }
          >
            Certifications
          </span>
        </div>
        <ul className={"flex w-full flex-col text-md slate font-monospace cert-list"}>
          {certifications.map((certificate) => (
            <li key={certificate.title} className={"p-3 px-6 cursor-pointer rounded hover:bg-[#112240]"}>
              <a
                href={certificate.url}
                target={"_blank"}
                rel="noreferrer"
                className={"flex items-center"}
              >
                <i className={`mr-4 w-[20px] text-center accent ${certificate.icon}`} />
                <span>{certificate.title}</span>
                <span className={"ml-2 hidden md:block text-sm slate-alt"}>
                  - {certificate.provider}
                </span>
              </a>
            </li>
          ))}
        </ul>
        </div>
      </Reveal>
    </>
  );
}
