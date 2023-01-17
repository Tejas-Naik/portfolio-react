import { useState } from "react";
import FeaturedProject from "../components/FeaturedProjects";
import Project from "../components/Projects";
import Forkify from "../images/projects/forkify.png";
import Netflix from "../images/projects/netflix.png";
import Slack from "../images/projects/slack.png";

export default function Work() {

    const [projects, setProjects] = useState([
        {
            name: "Slack - Realtime chatting (clone)",
            description: " A real-time collaboration tool that streamlines communication and improves productivity for teams of all sizes.",
            tags: ["JavaScript", "React", "Firebase", "Styled Components"],
            links: {
                "fas fa-external-link": "https://slack-clone-3356e.web.app/",
                "fab fa-github": "https://github.com/tejas-naik/slack-clone",
            },
            image: Slack
        },
        {
            name: "Forkify - 1,000,000 Recipes",
            description: "A comprehensive recipe app with over a million delicious recipes to choose from. Easily search and filter by ingredients, dietary restrictions, and meal type to find the perfect recipe for any occasion.",
            tags: ["Javascript", "HTML, CSS", "API", "Netlify"],
            links: {
                "fas fa-external-link": "https://forkify-tejas.netlify.app/",
                "fab fa-github": "https://github.com/tejas-naik/forkify"
            },
            image: Forkify
        },
        {
            name: "Netflix (clone)",
            description: "Stay up to date with the latest and greatest in entertainment with our Netflix clone, featuring the most popular and trending shows, and trailers for all the newest movies and series.",
            tags: ["Javascript", "API", "react-youtube", "TMDB", "MovieTrailer"],
            links: {
                "fas fa-external-link": "https://netflix-tejas.netlify.app/",
                "fab fa-github": "https://github.com/tejas-naik/netflix-clone"
            },
            image: Netflix
        }
    ]);

    const [otherProjects, setOtherProjects] = useState([
        {
            title: "Omnifood - Never cook again",
            description: "a food delivery app that uses machine learning to create personalized meal plans based on dietary preferences, allergies, and nutritional goals.",
            links: {
                "fas fa-external-link": "https://tejas-naik.github.io/omnifood",
                "fab fa-github": "https://github.com/Tejas-Naik/omnifood",
            },
            tags: ["HTML", "CSS", "UI-Principles", "Responsive Design"],
        },
        {
            title: "Score-A-Thon",
            description: '"Roll to 100" is a dice game where players roll and accumulate points trying to reach 100 before other players.',
            links: {
                "fas fa-external-link": "https://tejas-naik.github.io/Pig-Game/",
                "fab fa-github": "https://github.com/Tejas-Naik/Pig-Game",
            },
            tags: ["HTML", "CSS", "JavaScript", "Game Logic"],
        },
        {
            title: "Tesla Clone",
            description: 'Tesla clone website, built using React for a seamless user interface and optimized performance.',
            links: {
                "fas fa-external-link": "https://tesla-tejas.netlify.app/",
                "fab fa-github": "https://github.com/Tejas-Naik/tesla-clone",
            },
            tags: ["JavaScript", "React", "styled-coomponents", "react-reveal"],
        },

    ])

    return (
        <>
            <div className={"flex flex-col items-center max-w-[1000px] pt-16 pb-32 w-full"}>
                <div className={"flex items-center w-full header-line pb-16"}>
                    <span className={"accent mr-4 text-xl font-monospace"}>03.</span><h3 className={"text-2xl whitespace-nowrap slate font-[600]"}>Some Things I've Built</h3>
                </div>
                {
                    projects.map((p, i) => {
                        return <FeaturedProject
                            image={p.image}
                            title={p.name}
                            description={p.description}
                            tags={p.tags}
                            links={p.links}
                            orientation={!(i % 2)}
                        />
                    })
                }
            </div>
            <div className={"flex flex-col items-center max-w-[1000px] pb-32 w-full"}>
                <div className={"flex flex-col items-center justify-center w-full pb-16"}>
                    <h3 className={"text-2xl slate mb-[10px] font-[600]"}>Other Noteworthy Projects</h3>
                    <a href={"https://github.com/ishwarjagdale"} className={"accent text-sm font-monospace"}>view the archive</a>
                </div>
                <div className={"grid md:grid-cols-3 gap-4 w-full"}>
                    {otherProjects.map((project) => (
                        <Project
                            title={project.title}
                            description={project.description}
                            links={project.links}
                            tags={project.tags}
                        />
                    ))}
                </div>
            </div>
        </>

    )
}
