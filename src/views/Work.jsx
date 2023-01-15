import { useState } from "react";
import FeaturedProject from "../components/FeaturedProjects";
import Project from "../components/Projects";
import Forkify from "../images/projects/forkify.png";
import Slack from "../images/projects/slack.png";

export default function Work() {

    const [projects, setProjects] = useState([
        {
            name: "Slack Clone - Realtime chatting app",
            description: " A real-time collaboration tool that streamlines communication and improves productivity for teams of all sizes.",
            tags: ["JavaScript", "React", "Firebase", "Styled Components"],
            links: { "fab fa-github": "https://github.com/tejas-naik/slack-clone", "fas fa-external-link": "https://https://slack-clone-3356e.web.app/" },
            image: Slack
        },
        {
            name: "Forkify - 1,000,000 Recipes",
            description: "A comprehensive recipe app with over a million delicious recipes to choose from. Easily search and filter by ingredients, dietary restrictions, and meal type to find the perfect recipe for any occasion.",
            tags: ["Javascript", "HTML, CSS", "API", "Netlify"],
            links: { "fab fa-github": "https://github.com/tejas-naik/forkify" },
            image: Forkify
        },
        {
            name: "Forkify - 1,000,000 Recipes",
            description: "A comprehensive recipe app with over a million delicious recipes to choose from. Easily search and filter by ingredients, dietary restrictions, and meal type to find the perfect recipe for any occasion.",
            tags: ["Javascript", "HTML, CSS", "API", "Netlify"],
            links: { "fab fa-github": "https://github.com/tejas-naik/forkify" },
            image: Forkify
        }
    ]);

    const [otherProjects, setOtherProjects] = useState([
        {
            title: "",
            description: "",
            links: "",
            tags: "",
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
                    <Project
                        title={"SysMon's Backend Server"}
                        description={"SysMon applications backend server made with Python. "}
                        links={{ "fab fa-github": "https://github.com/ishwarjagdale/sys.mon" }}
                        tags={["Python-Flask", "Threading", "Postgres", "Sockets", "REST"]}
                    />
                    <Project
                        title={"Docket - Cloud based note application"}
                        description={"A simple & secure note taking application with ExpressJS backend connected with Postgres SQL."}
                        links={{ "fab fa-github": "https://github.com/ishwarjagdale/docket" }}
                        tags={["React", "Express", "Postgres"]}
                    />
                    <Project
                        title={"Apple Airpods Website Clone"}
                        description={"An attempt to clone Apple's airpods animation by applying lottie animation on a custom a 3D phone model."}
                        links={{ "fab fa-github": "https://github.com/ishwarjagdale/lottie-animation", "fas fa-external-link": "https://ishwarjagdale.github.io/lottie-animation" }}
                        tags={["Lottie Animation", "Javascript", "CSS"]}
                    />
                </div>
            </div>
        </>

    )
}
