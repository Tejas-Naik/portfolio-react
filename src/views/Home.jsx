import React from 'react';
import Reveal from "../components/Reveal";

function Home() {
    return (
        <>
            <Reveal>
                <div id='home' className={"flex flex-col h-full pt-24 mb-24 justify-center max-w-[1080px] w-full"}>
                    <span className={"accent text-[13px] uppercase tracking-[0.2em] font-monospace mb-4"}>
                        Entrepreneur • AI Web Developer • Coding Educator
                    </span>
                    <h1 className={"text-4xl sm:text-5xl lg:text-6xl font-[700] slate leading-tight mb-3"}>
                        I build AI-powered web apps and teach developers to ship real products.
                    </h1>
                    <h2 className={
                        "text-xl sm:text-2xl lg:text-3xl font-[500] dark-slate tracking-tight max-w-[760px]"
                    }>
                        Founder mindset. SaaS builder. Coding educator reaching students worldwide.
                    </h2>
                    <div className={"flex flex-wrap gap-3 text-sm font-monospace dark-slate mt-5"}>
                        <span className={"pill"}>1000+ classes</span>
                        <span className={"pill"}>150+ students</span>
                        <span className={"pill"}>10+ countries</span>
                    </div>
                    <p className={"py-8 dark-slate text-[16px] leading-8 max-w-[720px]"}>
                        I design and ship AI-first experiences for the web, launch lean SaaS products,
                        and run a hands-on bootcamp that helps developers learn by building. Every project is
                        focused on clarity, performance, and shipping quickly for real users.
                    </p>
                    <div className={"flex flex-col sm:flex-row gap-4"}>
                        <a href={"#work"} className={"btn-primary cta-glow"}>
                            View Projects
                        </a>
                        <a href={"#contact"} className={"btn-secondary"}>
                            Contact Me
                        </a>
                        <a href="https://calendar.app.google/7cqRrikvBjMEsY2s8" className={"btn-ghost"}>
                            Book a call
                        </a>
                        <a href={"/Resume-Tejas.pdf"} target={"_blank"} rel="noreferrer" className={"btn-ghost"}>
                            View Resume
                        </a>
                    </div>
                </div>
            </Reveal>
        </>
    )
}

export default Home;
