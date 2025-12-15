import React from 'react';

function FeaturedProjects({ image, title, description, tags, links, orientation = 1, problem, audience }) {
    return (
        <div className={"flex flex-col md:flex-row gap-6 w-full mb-12 rounded-3xl border border-slate-800/70 bg-gradient-to-br from-[#0e1b2f] via-[#0b1424] to-[#081020] p-6 md:p-10 shadow-2xl shadow-black/30 hover:-translate-y-1 hover:shadow-cyan-500/10 transition-all duration-300"}>
            <div className={`relative w-full md:w-1/2 overflow-hidden rounded-2xl border border-slate-800/60 ${orientation ? "" : "md:order-2"}`}>
                <div className={"absolute inset-0 bg-gradient-to-br from-[#0e213b]/40 to-transparent"} />
                <a target="_blank" rel="noreferrer" href={Object.values(links)[0]}>
                    <img src={image} className={"w-full h-full object-cover scale-[1.02] transition-transform duration-500 hover:scale-105"} alt={title} />
                </a>
            </div>
            <div className={`flex flex-col w-full md:w-1/2 ${orientation ? "" : "md:order-1"}`}>
                <span className={"font-monospace text-sm cursor-default accent mb-2 uppercase tracking-[0.2em]"}>Featured Project</span>
                <a target="_blank" rel="noreferrer" href={Object.values(links)[0]}><h3 className={"cursor-pointer slate hover-accent text-3xl font-[600]"}>{title}</h3></a>
                <p className={"dark-slate text-[15px] leading-7 my-4"}>
                    {description}
                </p>
                <div className={"grid gap-4 my-4"}>
                    {problem && (
                        <div className={"glass-pill"}>
                            <span className={"label"}>Problem</span>
                            <p className={"dark-slate text-sm leading-6"}>{problem}</p>
                        </div>
                    )}
                    {audience && (
                        <div className={"glass-pill"}>
                            <span className={"label"}>Who it’s for</span>
                            <p className={"dark-slate text-sm leading-6"}>{audience}</p>
                        </div>
                    )}
                </div>
                <ul className={"flex flex-wrap cursor-default gap-3 items-center text-sm my-1 dark-slate font-monospace whitespace-nowrap"}>
                    {
                        tags.map((t, i) => {
                            return <li key={i} className={'pill'}>{t}</li>
                        })
                    }
                </ul>
                <div className={"flex flex-wrap items-center text-lg mt-4 dark-slate gap-4"}>
                    {
                        Object.keys(links).map((l, i) => {
                            // eslint-disable-next-line jsx-a11y/anchor-has-content
                            return <a
                                key={i}
                                target="_blank"
                                rel="noreferrer"
                                href={links[l]}
                                className={`hover-accent ${l}`}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    )

}

export default FeaturedProjects;