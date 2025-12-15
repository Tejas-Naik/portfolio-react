import { useState } from "react";
import FeaturedProject from "../components/FeaturedProjects";
import Project from "../components/Projects";
import Reveal from "../components/Reveal";
import Forkify from "../images/projects/forkify.png";
import ChatWithPdfImg from "../images/projects/chat-with-pdf.png";
import ChatWithPdfWebp from "../images/projects/chat-with-pdf.webp";
import AgentTubeImg from "../images/projects/ai-content.png";
import AgentTubeWebp from "../images/projects/ai-content.webp";
import MockInterviewImg from "../images/projects/ai-mock-interview.png";
import MockInterviewWebp from "../images/projects/ai-mock-interview.webp";

const featuredProjects = [
  {
    name: "ChatWithPDF",
    description:
      "AI workspace for turning static documents into conversational knowledge.",
    problem:
      "Operators and legal teams waste hours skimming dense PDFs to find answers.",
    audience: "Teams that need instant, trustworthy insights from long-form docs.",
    builtFor: "Teams and founders handling heavy documentation",
    role: "Founder / Full-stack web + AI",
    tags: ["AI", "SaaS", "LLMs", "PDF", "Web App"],
    links: {
      "fas fa-external-link": "https://zalos.ca",
      "fab fa-github": "https://github.com/RNTejas"
    },
    image: ChatWithPdfImg,
    imageWebp: ChatWithPdfWebp,
    alt: "ChatWithPDF dashboard preview"
  },
  {
    name: "AgentTube",
    description:
      "AI assistant that converts a YouTube URL into a launch-ready content plan.",
    problem:
      "Creators struggle to brainstorm thumbnails, scripts, and titles fast enough.",
    audience: "YouTube founders and media teams who need faster content cycles.",
    builtFor: "YouTube creators and media teams",
    role: "Founder / Front-end + AI integration",
    tags: ["AI", "Content", "YouTube", "SaaS"],
    links: {
      "fas fa-external-link": "https://ai-agent-challenge-2.vercel.app/",
      "fab fa-github": "https://github.com/RNTejas"
    },
    image: AgentTubeImg,
    imageWebp: AgentTubeWebp,
    alt: "AgentTube AI content assistant interface"
  },
  {
    name: "MockInterviewAI",
    description:
      "AI-powered simulator for practicing interviews with measurable feedback.",
    problem:
      "Candidates rarely get structured, repeatable interview practice or coaching.",
    audience: "Students and professionals needing real-time interview rehearsal.",
    builtFor: "Job seekers and students preparing for interviews",
    role: "Founder / Product + AI experience",
    tags: ["AI", "Education", "Interview Prep", "Web App"],
    links: {
      "fas fa-external-link": "https://ai-mock-interview-eta-one.vercel.app/",
      "fab fa-github": "https://github.com/RNTejas"
    },
    image: MockInterviewImg,
    imageWebp: MockInterviewWebp,
    alt: "MockInterviewAI session screen"
  },
  {
    name: "Forkify - 1,000,000 Recipes",
    description:
      "High-performance recipe explorer that showcases my frontend fundamentals.",
    problem:
      "Home cooks need reliable, filterable recipes without bloated UX or noise.",
    audience: "Everyday users searching, saving, and cooking from curated recipes.",
    builtFor: "Home cooks and recipe explorers",
    role: "Front-end developer",
    tags: ["JavaScript", "API", "Netlify"],
    links: {
      "fas fa-external-link": "https://forkify-tejas.netlify.app/",
      "fab fa-github": "https://github.com/tejas-naik/forkify"
    },
    image: Forkify,
    alt: "Forkify recipe search UI"
  }
];

const otherProjectsData = [
  {
    title: "The Wild Oasis - Hotel Management",
    description:
      "Staff-facing hotel management tool for check-ins, bookings, and ops visibility.",
    links: {
      "fas fa-external-link":
        "https://the-wild-oasis-alpha-rose.vercel.app/login",
      "fab fa-github": "https://github.com/tejas-naik/the-wild-oasis"
    },
    tags: ["React", "Supabase", "React Query", "Styled Components"]
  },
  {
    title: "Netflix (clone)",
    description:
      "Streaming experience for discovering trending titles, trailers, and genres.",
    links: {
      "fas fa-external-link": "https://netflix-tejas.netlify.app/",
      "fab fa-github": "https://github.com/tejas-naik/netflix-clone"
    },
    tags: ["React", "API", "TMDB"]
  },
  {
    title: "WebWave Solutions",
    description:
      "AI-themed agency site with layered 3D style interactions and gradients.",
    links: {
      "fas fa-external-link": "https://brainwave-tejas.netlify.app/",
      "fab fa-github": "https://github.com/Tejas-Naik/brainwave"
    },
    tags: ["React", "3D", "TailwindCSS"]
  },
  {
    title: "Crwn Clothing",
    description:
      "E-commerce storefront with Stripe payments, auth, and collection pages.",
    links: {
      "fas fa-external-link": "https://ecom-tejas.netlify.app/",
      "fab fa-github": "https://github.com/Tejas-Naik/ecommerce-react"
    },
    tags: ["React", "Firebase", "Redux", "Stripe"]
  },
  {
    title: "Omnifood",
    description:
      "Landing page demoing responsive layouts, UI polish, and conversion UX.",
    links: {
      "fas fa-external-link": "https://tejas-naik.github.io/omnifood",
      "fab fa-github": "https://github.com/Tejas-Naik/omnifood"
    },
    tags: ["HTML", "CSS", "Responsive Design"]
  },
  {
    title: "Fast Pizza Co.",
    description:
      "Lightweight ordering flow with cart state, delivery logic, and Tailwind UI.",
    links: {
      "fas fa-external-link": "https://fastpizzaco-tejas.netlify.app/",
      "fab fa-github": "https://github.com/Tejas-Naik/Fast-React-Pizzaa-Co"
    },
    tags: ["React", "Redux", "Tailwind"]
  }
];

export default function Work() {
  const [showMore, setShowMore] = useState(false);

  const visibleProjectsCount = showMore ? otherProjectsData.length : 6;
  const projectsToShow = otherProjectsData.slice(0, visibleProjectsCount);

  const toggleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  return (
    <>
      <Reveal>
        <div
          id="work"
          className={
            "flex flex-col items-center max-w-[1100px] pt-16 pb-32 w-full"
          }
        >
          <div className={"flex items-center w-full header-line pb-12"}>
            <span className={"accent mr-4 text-xl font-monospace"}>03.</span>
            <h3 className={"text-2xl whitespace-nowrap slate font-[600]"}>
              Featured Projects
            </h3>
          </div>
          {featuredProjects.map((p, i) => {
            return (
              <FeaturedProject
                key={p.name}
                image={p.image}
                imageWebp={p.imageWebp}
                alt={p.alt}
                title={p.name}
                description={p.description}
                problem={p.problem}
                audience={p.audience}
                builtFor={p.builtFor}
                role={p.role}
                tags={p.tags}
                links={p.links}
                orientation={!(i % 2)}
              />
            );
          })}
        </div>
      </Reveal>
      <Reveal>
        <div className={"flex flex-col items-center max-w-[1100px] pb-32 w-full"}>
          <div
            className={"flex flex-col items-center justify-center w-full pb-12"}
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
            {projectsToShow.map((project) => (
              <Project
                key={project.title}
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
      </Reveal>
    </>
  );
}
