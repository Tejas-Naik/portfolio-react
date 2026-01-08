import React from 'react';
import Reveal from "../components/Reveal";

function Home() {
    return (
        <>
            <Reveal>
                <div id='home' className={"flex flex-col h-full pt-12 md:pt-24 mb-24 justify-center max-w-[1080px] w-full"}>
                    <div className="flex items-center gap-2 mb-6">
                        <span className={"px-3 py-1 text-[11px] uppercase tracking-[0.15em] font-monospace text-accent bg-accent/10 rounded-full border border-accent/20"}>
                            Builder & Educator
                        </span>
                    </div>
                    
                    <h1 className={"text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-100 leading-tight mb-6"}>
                        I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64ffda] to-[#48bfe3]">AI-first</span> web apps.
                    </h1>
                    
                    <h2 className={
                        "text-lg sm:text-xl lg:text-2xl font-light text-slate-400 tracking-wide max-w-[760px] leading-relaxed"
                    }>
                        Founder mindset. Full-stack execution. <br className="hidden md:block"/>
                        I teach developers how to ship production-ready SaaS.
                    </h2>

                    <div className={"flex flex-wrap gap-3 text-sm font-monospace text-slate-300 mt-8"}>
                        <div className={"glass-pill flex items-center gap-2 px-4 py-2"}>
                            <i className="fas fa-video text-accent text-xs"></i>
                            <span>1000+ classes data</span>
                        </div>
                        <div className={"glass-pill flex items-center gap-2 px-4 py-2"}>
                             <i className="fas fa-users text-accent text-xs"></i>
                            <span>500+ students</span>
                        </div>
                        <div className={"glass-pill flex items-center gap-2 px-4 py-2"}>
                             <i className="fas fa-globe text-accent text-xs"></i>
                            <span>30+ countries</span>
                        </div>
                    </div>

                    <p className={"py-8 text-slate-400 text-[16px] leading-8 max-w-[720px]"}>
                        I design and ship modern web experiences, launch lean SaaS products,
                        and run a hands-on bootcamp. My focus is on <span className="text-slate-200">clarity</span>, 
                        <span className="text-slate-200">performance</span>, and <span className="text-slate-200">shipping fast</span>.
                    </p>

                    <div className={"flex flex-col sm:flex-row gap-4 mt-2"}>
                        <a href={"#work"} className={"btn-primary cta-glow group"}>
                            View Projects 
                            <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform text-xs"></i>
                        </a>
                        <a href={"#contact"} className={"btn-secondary"}>
                            Contact Me
                        </a>
                    </div>
                    {/* Secondary Links */}
                    <div className="flex gap-6 mt-12 text-sm font-monospace text-slate-400">
                        <a href="https://calendar.app.google/7cqRrikvBjMEsY2s8" target="_blank" rel="noreferrer" className="hover:text-accent flex items-center gap-2 transition-colors">
                            <i className="far fa-calendar-alt"></i> Book a call
                        </a>
                        <a href="/Resume-Tejas.pdf" target="_blank" rel="noreferrer" className="hover:text-accent flex items-center gap-2 transition-colors">
                             <i className="far fa-file-alt"></i> View Resume
                        </a>
                    </div>
                </div>
            </Reveal>
        </>
    )
}

export default Home;
