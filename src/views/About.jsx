import React from 'react';
import Reveal from "../components/Reveal";
import Profile from "../images/profile.jpeg";
import ProfileWebp from "../images/profile.webp";

function About() {
    return (
        <>
            <Reveal>
                <div id="about" className={"flex max-w-[1100px] pt-24 pb-32 gap-16 flex-col lg:flex-row h-auto w-auto"}>
                    <div className={"flex flex-col text-md text-left items-start md:w-full"}>
                        <div className={"flex items-center w-full header-line pb-10"}>
                            <span className={"accent mr-4 text-xl font-monospace"}>01.</span>
                            <span className={"text-2xl whitespace-nowrap slate font-Poppins font-[600]"}>About</span>
                        </div>
                        <p className={"dark-slate w-full mb-4 leading-7 text-[16px]"}>
                            I'm Tejas Naik — an entrepreneur, AI-focused web developer, and coding educator.
                            I build and launch SaaS products, integrate AI/LLM experiences into web apps,
                            and teach developers globally to ship production-ready projects.
                        </p>
                        <p className={"dark-slate w-full mb-4 leading-7 text-[16px]"}>
                            My journey moved from developer → teacher → product builder. Today I run a
                            personal bootcamp (Tezcode.tech), ship products used by real users, and mentor
                            students worldwide to think like founders.
                        </p>
                        <div className={"grid md:grid-cols-2 gap-6 w-full mt-6"}>
                            <div className={"div-back rounded-xl p-5 border border-slate-700/50"}>
                                <h4 className={"slate font-[600] text-lg mb-3"}>What I do</h4>
                                <ul className={"dark-slate font-monospace text-[14px] grid gap-2 bullet-list"}>
                                    <li>Build AI-powered web applications</li>
                                    <li>Create and launch SaaS products</li>
                                    <li>Teach Python, Web Development & AI</li>
                                    <li>Mentor students worldwide</li>
                                    <li>Help people ship real projects</li>
                                </ul>
                            </div>
                            <div className={"div-back rounded-xl p-5 border border-slate-700/50"}>
                                <h4 className={"slate font-[600] text-lg mb-3"}>Tech I work with</h4>
                                <ul className={"dark-slate font-monospace text-[14px] grid grid-cols-2 gap-2 bullet-list"}>
                                    <li>JavaScript (ES6+)</li>
                                    <li>React</li>
                                    <li>Next.js</li>
                                    <li>Tailwind CSS</li>
                                    <li>Styled Components</li>
                                    <li>Supabase</li>
                                    <li>Firebase</li>
                                    <li>APIs</li>
                                    <li>AI / LLM Integrations</li>
                                    <li>Python (Flask)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={"flex justify-around self-start w-full lg:w-2/5"}>
                        <div className={"rounded-2xl overflow-hidden border border-slate-700/50 shadow-xl"}>
                            <picture>
                                <source srcSet={ProfileWebp} type="image/webp" />
                                <img src={Profile} alt="Tejas Naik profile" className={"w-full object-cover"} />
                            </picture>
                        </div>
                    </div>
                </div>
            </Reveal>
        </>
    )
}

export default About;


