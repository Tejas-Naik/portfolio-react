import React from 'react';

function About() {
    return (
        <>
            <div id="about" className={"flex max-w-[1000px] pt-24 pb-32 gap-24 flex-col md:flex-row h-auto w-auto"}>
                <div className={"flex flex-col text-md text-left items-center md:w-full"}>
                    <div className={"flex items-center w-full header-line pb-16"}>
                        <span className={"accent mr-4 text-xl font-monospace"}>01.</span>
                        <span className={"text-2xl whitespace-nowrap slate font-Poppins font-[600]"}>About me</span>
                    </div>
                    <p className={"dark-slate w-full mb-4 leading-7"}>
                        Hello, I'm Tejas Naik and I'm passionate about creating beautiful and functional
                        web applications. My interest in web development started when I saw an ad about
                        creating an App. I was fascinated by the idea of being able to build something
                        that could be accessed and used by people all over the world.
                    </p>
                    <p className={"dark-slate w-full mb-4 leading-7"}>
                        Since then, I've learned a lot about frontend development online. And have built
                        several web applications, including a <a href='https://netflix-tejas.netlify.app' target="_blank" rel="noreferrer" >Netflix Clone </a>
                        , a <a href='https://slack-tejas.netlify.app' target='_blank' rel="noreferrer">Slack clone</a>
                        , and a recipe search app called <a href='https://forkify-tejas.netlify.app' target='_blank' rel="noreferrer">Forkify</a> using the Forkify API. These projects have given me
                        a solid foundation in HTML, CSS, JavaScript, and React.
                    </p>
                    <p className={"dark-slate w-full mb-4 leading-7"}>
                        I have worked as a frontend developer at <a href='https://404solutions.netlify.app' target='_blank' rel="noreferrer">404 Solutions</a>,
                        where I had the opportunity
                        to work on Taxi Management System that improved my skills in collaboration,
                        problem-solving, and attention to detail. I'm excited to continue building on this
                        experience and explore new opportunities.
                    </p>
                    <p className={"dark-slate w-full mb-4 leading-7"}>
                        Here are a few technologies I’ve been working with recently:
                    </p>
                    <ul className={"dark-slate font-monospace text-[14px] grid grid-cols-2 gap-2 bullet-list w-full "}>
                        <li>HTML, CSS</li>
                        <li>Javascript (ES6+)</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Tailwind CSS</li>
                        <li>Styled Components</li>
                        <li>Supabase</li>
                        <li>Firebase</li>
                        {/* <li>Python</li>
                        <li>Flask</li> */}

                    </ul>
                </div>

                <div className={"flex justify-around self-center w-1/2"}>
                    <div className={"w-300 h-300"}>
                        <img src="https://pbs.twimg.com/profile_images/1546160607786778625/X1i2Leku_400x400.jpg" alt="Headshot" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;


