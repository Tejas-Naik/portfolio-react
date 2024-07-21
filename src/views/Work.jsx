import { useState } from "react";
import FeaturedProject from "../components/FeaturedProjects";
import Project from "../components/Projects";
import Forkify from "../images/projects/forkify.png";
import Netflix from "../images/projects/netflix.png";
import Slack from "../images/projects/slack.png";
import TheWildOasis from "../images/projects/the-wild-oasis.png";

export default function Work() {
  const [projects, setProjects] = useState([
    {
      name: "The Wild Oasis - Hotel Management",
      description:
        " The 'Wild Oasis Hotel Management App' is a staff-centric application designed to simplify guest check-in, booking management, and related tasks for hotel staff, providing a user-friendly interface to efficiently handle guest arrivals, reservations, and other hotel management functions.",
      tags: ["React", "Supabase", "React Query", "Styled-Components", "HOC"],
      links: {
        "fas fa-external-link":
          "https://the-wild-oasis-alpha-rose.vercel.app/login",
        "fab fa-github": "https://github.com/tejas-naik/the-wild-oasis",
      },
      image: TheWildOasis,
    },
    {
      name: "Forkify - 1,000,000 Recipes",
      description:
        "A comprehensive recipe app with over a million delicious recipes to choose from. Easily search and filter by ingredients, dietary restrictions, and meal type to find the perfect recipe for any occasion.",
      tags: ["Javascript", "HTML, CSS", "API", "Netlify"],
      links: {
        "fas fa-external-link": "https://forkify-tejas.netlify.app/",
        "fab fa-github": "https://github.com/tejas-naik/forkify",
      },
      image: Forkify,
    },
    {
      name: "Netflix (clone)",
      description:
        "Stay up to date with the latest and greatest in entertainment with our Netflix clone, featuring the most popular and trending shows, and trailers for all the newest movies and series.",
      tags: ["React", "API", "react-youtube", "TMDB", "MovieTrailer"],
      links: {
        "fas fa-external-link": "https://netflix-tejas.netlify.app/",
        "fab fa-github": "https://github.com/tejas-naik/netflix-clone",
      },
      image: Netflix,
    },
  ]);

  const [otherProjects, setOtherProjects] = useState([
    {
      title: "WebWave Solutions",
      description:
        "3D AI-driven Agency landing page for web development solutions",
      links: {
        "fas fa-external-link": "https://brainwave-tejas.netlify.app/",
        "fab fa-github": "https://github.com/Tejas-Naik/brainwave",
      },
      tags: ["React", "3D", "Animation", "API", "JavaScript", "TailwindCSS"],
    },
    {
      title: "Crwn Clothing e-commerce",
      description:
        "Full-Stack e-commerce clothing app that accepts order with stripe payments ",
      links: {
        "fas fa-external-link": "https://ecom-tejas.netlify.app/",
        "fab fa-github": "https://github.com/Tejas-Naik/ecommerce-react",
      },
      tags: ["React", "Firebase", "Redux", "API", "Typescript", "Stripe"],
    },
    {
      title: "Omnifood - Never cook again",
      description:
        "a food delivery app that uses machine learning to create personalized meal plans based on dietary preferences, allergies, and nutritional goals.",
      links: {
        "fas fa-external-link": "https://tejas-naik.github.io/omnifood",
        "fab fa-github": "https://github.com/Tejas-Naik/omnifood",
      },
      tags: ["HTML", "CSS", "UI-Principles", "Responsive Design"],
    },
    {
      title: "Fast Pizza Co.",
      description:
        "a simple e-commerce app for a restaurant for showing pizzas. customers can order pizzas.",
      links: {
        "fas fa-external-link": "https://fastpizzaco-tejas.netlify.app/",
        "fab fa-github": "https://github.com/Tejas-Naik/Fast-React-Pizzaa-Co",
      },
      tags: ["React", "Redux", "Hooks", "Tailwind-CSS"],
    },
    {
      title: "WorldWise - track your tours",
      description:
        "an app for keeping track of your travels around the world with notes",
      links: {
        "fas fa-external-link": "https://worldwise-tejas.netlify.app",
        "fab fa-github":
          "https://github.com/Tejas-Naik/React-Full-Course/tree/main/11-worldwise/starter",
      },
      tags: ["React", "Context-API", "Hooks", "CSS-Modules"],
    },
    {
      title: "Score-A-Thon",
      description:
        '"Roll to 100" is a dice game where players roll and accumulate points trying to reach 100 before other players.',
      links: {
        "fas fa-external-link": "https://tejas-naik.github.io/Pig-Game/",
        "fab fa-github": "https://github.com/Tejas-Naik/Pig-Game",
      },
      tags: ["HTML", "CSS", "JavaScript", "Game Logic"],
    },
    {
      title: "Tesla Clone",
      description:
        "Tesla clone website, built using React for a seamless user interface and optimized performance.",
      links: {
        "fas fa-external-link": "https://tesla-tejas.netlify.app/",
        "fab fa-github": "https://github.com/Tejas-Naik/tesla-clone",
      },
      tags: ["JavaScript", "React", "styled-coomponents", "react-reveal"],
    },
    {
      title: "Keeper Notes App",
      description:
        "Efficiently organize and keep track of your thoughts and ideas with our note-taking app.",
      links: {
        "fas fa-external-link": "https://tejas-naik.github.io/notes/",
        "fab fa-github": "https://github.com/Tejas-Naik/notes",
      },
      tags: ["JavaScript", "React", "localstorage", "React Hooks"],
    },
    {
      title: "Hulu Clone",
      description:
        "Hulu clone built for practice of HTML, CSS, Responsive design and best UI practices",
      links: {
        "fas fa-external-link": "https://tejas-naik.github.io/Hulu-Clone/",
        "fab fa-github": "https://github.com/Tejas-Naik/hulu-clone",
      },
      tags: ["HTML", "CSS", "responsive-design"],
    },
    {
      title: "2D Snake Game",
      description:
        "Our 2D Snake game built using Python's Turtle library is a fun and nostalgic experience.",
      links: {
        "fab fa-github":
          "https://github.com/Tejas-Naik/-100DaysOfCode/tree/master/Day20%20Snake%20Game",
      },
      tags: ["Python", "turtle-graphics", "OOP", "Game-Logic"],
    },
    {
      title: "Data Entry Automation",
      description:
        "Data Entry Automation bot that scrapes the website and stores the data to the Google Sheets",
      links: {
        "fab fa-github":
          "https://github.com/Tejas-Naik/-100DaysOfCode/tree/master/Day53%20Data%20Entry%20Automation",
      },
      tags: ["Python", "API", "Web-Scraping", "Selenium", "BeautifulSoup"],
    },
    {
      title: "Blog Site (Flask)",
      description:
        "Blog website built using Flask is a powerful and easy to use platform for creating, managing and publishing blog content.",
      links: {
        "fab fa-github":
          "https://github.com/Tejas-Naik/-100DaysOfCode/tree/master/Day57%20Blog%20Post%20website/blog-templating-start",
      },
      tags: ["Python", "Flask", "API", "Bootstrap"],
    },
  ]);

  const [showMore, setShowMore] = useState(false); // State to toggle showing more projects

  const visibleProjectsCount = showMore ? otherProjects.length : 3; // Initially show 3 projects or all if "Show More" is clicked

  const projectsToShow = otherProjects.slice(0, visibleProjectsCount);

  const toggleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore); // Toggle the state when the button is clicked
  };
  return (
    <>
      <div
        id="work"
        className={
          "flex flex-col items-center max-w-[1000px] pt-16 pb-32 w-full"
        }
      >
        <div className={"flex items-center w-full header-line pb-16"}>
          <span className={"accent mr-4 text-xl font-monospace"}>03.</span>
          <h3 className={"text-2xl whitespace-nowrap slate font-[600]"}>
            Some Things I've Built
          </h3>
        </div>
        {projects.map((p, i) => {
          return (
            <FeaturedProject
              key={i}
              image={p.image}
              title={p.name}
              description={p.description}
              tags={p.tags}
              links={p.links}
              orientation={!(i % 2)}
            />
          );
        })}
      </div>
      <div className={"flex flex-col items-center max-w-[1000px] pb-32 w-full"}>
        <div
          className={"flex flex-col items-center justify-center w-full pb-16"}
        >
          <h3 className={"text-2xl slate mb-[10px] font-[600]"}>
            Other Noteworthy Projects
          </h3>
          <a
            target="_blank"
            rel="noreferrer"
            href={"https://github.com/Tejas-Naik?tab=repositories"}
            className={"accent text-sm font-monospace"}
          >
            view the archive
          </a>
        </div>
        <div className={"grid md:grid-cols-3 gap-4 w-full"}>
          {projectsToShow.map((project, i) => (
            <Project
              key={i}
              title={project.title}
              description={project.description}
              links={project.links}
              tags={project.tags}
            />
          ))}
        </div>
        <button
          onClick={toggleShowMore}
          className={
            "w-30 flex align-center justify-between accent md:w-fit w-full hover-btn cursor-pointer text-[14px] hover-accent accent-border border rounded font-monospace p-4 px-6 mt-4"
          }
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </>
  );
}
