import { useState } from "react";

import React, { useEffect } from "react";

function Navigation() {
  const [sideMenu, setSideMenu] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = ["home", "about", "experience", "work", "teaching", "contact"];
    const observers = [];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(id);
            }
          });
        },
        { threshold: 0.35 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      id={"navigation"}
      className={
        "fixed top-0 left-0 right-0 z-[200] flex w-full h-[88px] px-6 md:px-14 items-center justify-between backdrop-blur supports-[backdrop-filter]:bg-[#0b1424d9] border-b border-slate-800/60"
      }
    >
      <a
        href={"/"}
        className={"z-[100] text-3xl md:text-4xl cursor-pointer accent fab fa-typo3"}
      />
      <a
        href={"/"}
        className={
          "md:hidden hover-btn cursor-pointer text-[13px] hover-accent font-monospace px-4 py-2 ml-auto mr-2 rounded border border-transparent"
        }
      >
        Home
      </a>
      <div
        className={`${
          sideMenu ? "flex" : "hidden md:flex"
        } flex-col p-8 md:p-0 w-full h-full md:w-auto md:h-auto fixed md:relative top-0 left-0 backdrop-blur bg-[#0b1424e6] md:bg-transparent justify-center md:flex-row items-start md:items-center z-[100] gap-6 md:gap-0`}
      >
        <ul
          className={
            "flex flex-col md:flex-row slate font-monospace text-xl md:text-[13px] mr-4 tracking-wide gap-4 md:gap-2"
          }
        >
          <li className={"py-2 md:px-4 md:py-0"}>
            <a className={`hover-accent ${active === "about" ? "active-item" : ""}`} href={"#about"}>
              <span className={"mr-2 accent"}>01.</span>
              <span>About</span>
            </a>
          </li>
          <li className={"py-2 md:px-4 md:py-0"}>
            <a className={`hover-accent ${active === "experience" ? "active-item" : ""}`} href={"#experience"}>
              <span className={"mr-2 accent"}>02.</span>
              <span>Experience</span>
            </a>
          </li>
          <li className={"py-2 md:px-4 md:py-0"}>
            <a className={`hover-accent ${active === "work" ? "active-item" : ""}`} href={"#work"}>
              <span className={"mr-2 accent"}>03.</span>
              <span>Projects</span>
            </a>
          </li>
          <li className={"py-2 md:px-4 md:py-0"}>
            <a className={`hover-accent ${active === "teaching" ? "active-item" : ""}`} href={"#teaching"}>
              <span className={"mr-2 accent"}>04.</span>
              <span>Teaching</span>
            </a>
          </li>
          <li className={"py-2 md:px-4 md:py-0"}>
            <a className={`hover-accent ${active === "contact" ? "active-item" : ""}`} href={"#contact"}>
              <span className={"mr-2 accent"}>05.</span>
              <span>Contact</span>
            </a>
          </li>
        </ul>
        <a
          href={"/Resume-Tejas.pdf"}
          target={"_blank"}
          className={
            "mt-6 w-full md:w-fit max-w-md md:mt-0 p-3 px-5 rounded cursor-pointer hover-btn accent accent-border text-sm border font-monospace text-center"
          }
          rel="noreferrer"
        >
          View Resume
        </a>
      </div>
      <i
        onClick={() => setSideMenu(!sideMenu)}
        className={`cursor-pointer fas fa-${
          sideMenu ? "close" : "bars-staggered"
        } z-[100] w-[20px] text-center text-xl md:hidden`}
      />
    </nav>
  );
}

export default Navigation;
