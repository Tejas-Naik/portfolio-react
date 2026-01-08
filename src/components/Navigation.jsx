import React, { useEffect, useState } from "react";

function Navigation() {
  const [sideMenu, setSideMenu] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        { threshold: 0.3, rootMargin: "-10% 0px -40% 0px" } 
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    if (sideMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [sideMenu]);

  const navLinks = [
    { id: "about", label: "About", number: "01" },
    { id: "experience", label: "Experience", number: "02" },
    { id: "work", label: "Projects", number: "03" },
    { id: "teaching", label: "Teaching", number: "04" },
    { id: "contact", label: "Contact", number: "05" },
  ];

  return (
    <>
      <nav
        id={"navigation"}
        className={`fixed top-0 left-0 right-0 z-[200] flex w-full items-center justify-between px-6 md:px-12 transition-all duration-300 ${
          scrolled
            ? "h-[70px] backdrop-blur-md bg-[#0a192f]/85 shadow-lg border-b border-slate-800/50"
            : "h-[100px] bg-transparent"
        }`}
      >
        <a
          href={"/"}
          className={"z-[250] text-3xl md:text-4xl cursor-pointer accent fab fa-typo3 transition-transform hover:scale-110"}
          aria-label="Home"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-[13px] font-monospace text-slate-200">
            {navLinks.map((link, i) => (
              <li key={link.id} className="group">
                <a
                  href={`#${link.id}`}
                  className={`flex items-center gap-2 py-2 hover:text-accent transition-colors ${
                    active === link.id ? "text-accent" : ""
                  }`}
                >
                  <span className="text-accent">{link.number}.</span>
                  <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={"/Resume-Tejas.pdf"}
            target={"_blank"}
            rel="noreferrer"
            className="px-5 py-2.5 rounded text-[13px] font-monospace text-accent border border-accent hover:bg-accent/10 transition-all hover:scale-105"
          >
            Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div
          onClick={() => setSideMenu(!sideMenu)}
          className="md:hidden z-[250] cursor-pointer group flex flex-col items-end gap-[5px] p-2"
        >
          <span className={`h-[2px] bg-accent rounded-full transition-all duration-300 ${sideMenu ? "w-8 rotate-45 translate-y-[7px]" : "w-8 group-hover:w-10"}`}></span>
          <span className={`h-[2px] bg-accent rounded-full transition-all duration-300 ${sideMenu ? "w-8 opacity-0" : "w-6 group-hover:w-10"}`}></span>
          <span className={`h-[2px] bg-accent rounded-full transition-all duration-300 ${sideMenu ? "w-8 -rotate-45 -translate-y-[7px]" : "w-4 group-hover:w-10"}`}></span>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[220] flex justify-end md:hidden transition-all duration-500 ease-in-out ${
          sideMenu ? "translate-x-0 backdrop-blur-sm bg-black/20" : "translate-x-full delay-200"
        }`}
      >
        <div 
            onClick={() => setSideMenu(false)}
            className={`absolute inset-0 ${sideMenu ? "block" : "hidden"}`}
        />
        <div
          className={`h-full w-[75vw] max-w-[400px] bg-[#112240] shadow-2xl flex flex-col items-center justify-center gap-10 transition-transform duration-300 ${
            sideMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-center gap-6 font-monospace text-lg text-slate-200 w-full">
            {navLinks.map((link, i) => (
              <li 
                key={link.id} 
                className={`w-full text-center transition-all duration-500 delay-[${i * 100}ms] ${
                    sideMenu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <a
                  href={`#${link.id}`}
                  onClick={() => setSideMenu(false)}
                  className={`flex flex-col items-center gap-1 py-2 hover:text-accent transition-colors ${
                    active === link.id ? "text-accent" : ""
                  }`}
                >
                  <span className="text-accent text-sm block mb-1">{link.number}.</span>
                  <span className="text-xl">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={"/Resume-Tejas.pdf"}
            target={"_blank"}
            rel="noreferrer"
            className={`px-8 py-4 rounded text-base font-monospace text-accent border border-accent hover:bg-accent/10 transition-all duration-500 delay-500 ${
                sideMenu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Resume
          </a>
        </div>
      </div>
    </>
  );
}

export default Navigation;
