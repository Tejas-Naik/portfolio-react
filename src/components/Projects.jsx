import React from 'react'

function Projects({ title, description, links, tags }) {
    return (
        <div className={"div-back rounded-2xl flex flex-col drop-shadow-2xl p-8 hover:-translate-y-2 transition-all duration-300 border border-slate-800/70"}>
            <div className={"flex items-center justify-between"}>
                <i className={"far fa-folder accent text-3xl"} />
                <div className={"flex items-center dark-slate"}>
                    {
                        Object.keys(links).map((l, i) => {
                            // eslint-disable-next-line jsx-a11y/anchor-has-content
                            return <a key={i} target="_blank" rel="noreferrer" href={links[l]} className={`hover-accent text-2xl ${l} ${i === (Object.keys(links).length - 1) ? "" : "mx-6"}`} />
                        })
                    }
                </div>
            </div>
            <h4 className={"slate pt-6 cursor-default font-[600]"}>{title}</h4>
            <p className={`dark-slate pt-2 text-sm cursor-default`}>
                {description}
            </p>
            <ul className={"flex cursor-default items-center flex-wrap text-sm mt-6 dark-slate opacity-60 font-monospace"}>
                {
                    tags.map((t, i) => {
                        return <li key={i} className={'whitespace-nowrap mr-5'}>{t}</li>
                    })
                }
            </ul>
        </div>

    )
}

export default Projects;