import { useState } from "react";

export default function Experience() {
  const [work, setWork] = useState({
    "404 Solutions.Inc": {
      url: "https://oasisinfobyte.com/",
      position: "Web Developer",
      duration: "Feb 2022 - Dec 2022",
      content: [
        "Developing and maintaining web applications using Javascript, Python, and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Employed Python and Flask for efficient DBMS and API development",
      ],
    },
  });

  const [certifications, setCertifications] = useState({
    "Python For Everybody Specialization": {
      url: "https://coursera.org/share/38a28c002034c0dd6f049ce250a932ae",
      provider: "University of Michigan & Coursera",
      font: "gg",
    },
    "#100DaysOfCode Python Pro Bootcamp": {
      url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-8a5c4488-95dd-4eb3-9f5a-8b0a424d8b5c.pdf",
      provider: "Udemy & London App Brewery",
      font: "gg",
    },
    "Javascript: All-in-One Development Suite": {
      url: "https://github.com/RNTejas/certificates/blob/master/JSSimplilearn.pdf",
      provider: "Simplilearn",
      font: "gg",
    },
    "The Complete JavaScript Course 2022: From Zero to Expert!": {
      url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-6f80c187-5b46-426f-8950-56c0d88d017e.pdf",
      provider: "Jonas Schmedtmann & Udemy",
      font: "gg",
    },
    "Introduction to Internet Of Things(IoT)": {
      url: "https://github.com/RNTejas/certificates/blob/master/30449834_SCPDRecordofCompletion.pdf",
      provider: "Stanford University (SCPD)",
      font: "gg",
    },
    "The Ultimate React Course (React, Redux) 2023": {
      url: "https://www.udemy.com/certificate/UC-5f72bf4f-565a-4bdb-a1a9-4d8a663dd647/",
      provider: "Jonas Schmedtmann & Udemy",
      font: "gg",
    },
  });

  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div
        id="experience"
        className={
          "flex flex-col text-left items-center max-w-[880px] pt-24 pb-32 w-full"
        }
      >
        <div className={"flex items-center w-full header-line"}>
          <span className={"accent mr-4 text-xl font-monospace"}>02.</span>
          <span
            className={
              "text-[22px] whitespace-nowrap slate font-Poppins font-[600]"
            }
          >
            Experience & Achievements
          </span>
        </div>
        <div
          className={
            "flex flex-col justify-start ml-14 mb-24 md:flex-row w-full mt-12"
          }
        >
          <ul
            className={
              "flex md:flex-col text-sm slate-alt overflow-x-scroll font-monospace mr-6 work-list mb-8 md:mb-0"
            }
          >
            {Object.keys(work).map((k, i) => {
              return (
                <li
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`p-3 px-6 cursor-pointer border-b-2 md:border-b-0 md:border-l-2 ${
                    activeTab === i ? "active-item" : ""
                  }`}
                >
                  {k}
                </li>
              );
            })}
          </ul>
          <div className={"p-2"}>
            {Object.keys(work).map((k, i) => {
              return (
                <div key={i} className={`${activeTab === i ? "" : "hidden"}`}>
                  <div className={`font-Poppins text-xl mb-1 font-[500]`}>
                    <span className={"slate mr-2"}>{work[k].position}</span>
                    <a href={work[k].url} className={"accent"}>
                      @ {k}
                    </a>
                  </div>
                  <span className={"slate text-sm font-monospace"}>
                    {work[k].duration}
                  </span>
                  <ul
                    className={
                      "flex flex-col bullet-list mt-4 max-w-[540px] slate-alt leading-6 text-sm"
                    }
                  >
                    {Object.values(work[k].content).map((v, i) => (
                      <li key={i} className={"mb-2"}>
                        {v}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className={"flex items-center w-full header-line pb-8"}>
          <span className={"accent mr-4 text-xl font-monospace"}>2.1</span>
          <span
            className={
              "text-[20px] whitespace-nowrap slate font-Poppins font-[600]"
            }
          >
            Certifications
          </span>
        </div>
        <ul
          className={
            "flex w-full flex-col text-md slate font-monospace cert-list"
          }
        >
          {Object.keys(certifications).map((certificate, i) => {
            return (
              <li
                key={i}
                onClick={() => setActiveTab(i)}
                className={`p-3 px-6 cursor-pointer`}
              >
                <a
                  href={certifications[certificate].url}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <i
                    className={`mr-4 w-[20px] text-center accent fab fa-${certifications[certificate].font}`}
                  />
                  <span>{certificate}</span>
                  <span className={"ml-2 hidden md:block text-sm slate-alt"}>
                    - {certifications[certificate].provider}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
