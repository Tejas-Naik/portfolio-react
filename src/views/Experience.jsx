import { useState } from "react";
import Reveal from "../components/Reveal";

const roles = [
  {
    company: "Tezcode.tech",
    url: "https://tezcode.tech",
    position: "Founder & Instructor",
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
    company: "BrightChamps",
    url: "https://brightchamps.com/",
    position: "Coding Instructor",
    duration: "Oct 2023 – Present",
    bullets: [
      "Delivered 1000+ live coding classes to learners worldwide.",
      "Mentored 500+ students across multiple countries and time zones.",
      "Taught Python, Web Development, AI fundamentals, and Game Development.",
      "Focused on logic building, confidence, and real-world skills.",
      "Scaled teaching impact through curriculum systems and project templates."
    ]
  },
  {
    company: "404 Solutions",
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
      title: "The Complete JavaScript Course 2022",
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
      title: "The Ultimate React Course (Redux) 2023",
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
          {/* Tabs */}
          <ul
            className={
              "flex md:flex-col text-sm slate-alt overflow-x-auto font-monospace mr-0 md:mr-6 work-list mb-6 md:mb-0 md:border-l-2 p-0 shrink-0 md:w-max snap-x gap-4 md:gap-0 border-b border-slate-800/50 md:border-b-0 pb-2 md:pb-0"
            }
          >
            {roles.map((role, i) => {
              return (
                <li
                  key={role.company}
                  onClick={() => setActiveTab(i)}
                  className={`cursor-pointer px-2 md:px-6 py-2 md:py-3 whitespace-nowrap snap-center transition-all duration-300 relative ${
                    activeTab === i 
                    ? "text-accent md:border-l-2 md:-ml-[2px] border-accent font-semibold" 
                    : "hover:text-accent"
                  }`}
                >
                  <span className={`hidden md:block absolute left-0 top-0 h-full w-[2px] transition-all bg-accent ${activeTab === i ? 'opacity-100' : 'opacity-0'}`}></span>
                  <span className={`md:hidden absolute bottom-0 left-0 w-full h-[2px] transition-all bg-accent ${activeTab === i ? 'opacity-100' : 'opacity-0'}`}></span>
                  {role.company}
                </li>
              );
            })}
          </ul>
          
          {/* Content */}
          <div className={"flex-1"}>
            {roles.map((role, i) => {
              return (
                <div key={role.company} className={`${activeTab === i ? "block animate-fadeIn" : "hidden"}`}>
                  <div className={`font-Poppins mb-1 flex flex-col md:flex-row md:items-baseline`}>
                    <span className={"text-xl md:text-2xl font-[600] text-slate-200 mr-2"}>{role.position}</span>
                    <a href={role.url} className={"accent text-base md:text-lg font-mono mt-1 md:mt-0"} target={"_blank"} rel="noreferrer">
                      @ {role.company}
                    </a>
                  </div>
                  <span className={"slate-alt text-sm font-monospace block mt-1 uppercase tracking-wider"}>
                    {role.duration}
                  </span>
                  <ul
                    className={
                      "flex flex-col bullet-list mt-6 max-w-[620px] slate-alt leading-7 text-[15px]"
                    }
                  >
                    {role.bullets.map((item) => (
                      <li key={item} className={"mb-3 pl-4 relative"}>
                        <span className="absolute left-0 top-2 text-accent text-xs">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className={"flex items-center w-full header-line pb-8 mt-16"}>
          <span className={"accent mr-4 text-xl font-monospace"}>03.</span>
          <span
            className={
              "text-[20px] whitespace-nowrap slate font-Poppins font-[600]"
            }
          >
            Certifications
          </span>
        </div>
        
        <ul className={"grid grid-cols-1 gap-3 w-full font-monospace cert-list"}>
          {certifications.map((certificate) => (
            <li key={certificate.title} className={"group p-3 cursor-pointer rounded md:hover:-translate-y-1 transition-all duration-300 bg-[#112240]/20 hover:bg-[#112240]/40 border border-slate-800/50 hover:border-accent/30"}>
              <a
                href={certificate.url}
                target={"_blank"}
                rel="noreferrer"
                className={"flex flex-row items-center h-full gap-4"}
              >
                 <div className="flex-shrink-0 text-accent group-hover:scale-110 transition-transform duration-300 bg-[#112240] p-2 rounded-full w-10 h-10 flex items-center justify-center">
                   <i className={`${certificate.icon} text-lg`} />
                 </div>
                 <div className="flex flex-col justify-center min-w-0">
                     <span className="text-slate-200 text-[15px] font-semibold leading-tight group-hover:text-accent transition-colors truncate w-full pr-4">{certificate.title}</span>
                     <span className={"text-xs slate-alt mt-1 font-sans truncate"}>
                      {certificate.provider}
                     </span>
                 </div>
                 <div className="ml-auto text-slate-600 group-hover:text-accent transition-colors">
                    <i className="fas fa-external-link-alt text-xs"></i>
                 </div>
              </a>
            </li>
          ))}
        </ul>
        </div>
      </Reveal>
    </>
  );
}
