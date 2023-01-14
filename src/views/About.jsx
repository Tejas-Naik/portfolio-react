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
                        Hello! My name is Ishwar and I enjoy creating things that live on the internet and helps out people. My interest in programming grew back in 2017 when I decided to write a blog, lack of good themes on the platform and thinking lot of people will read my blog I decided to make my own templates — turns out customizing blogger templates and creating new from scratch taught me a lot about the whole front end world.
                    </p>
                    <p className={"dark-slate w-full mb-4 leading-7"}>
                        Initiating with Python fast-forward to today, I have added C, Java, JavaScript, React, SQL and many other tools to my skill set and now learning new frameworks and technologies . My main focus these days is exploring my interests like data science and machine learning, while continuously improving as a full stack developer.
                    </p>
                    <p className={"dark-slate w-full mb-4 leading-7"}>
                        Here are a few technologies I’ve been working with recently:
                    </p>
                    <ul className={"dark-slate font-monospace text-[14px] grid grid-cols-2 gap-2 bullet-list w-full "}>
                        <li>HTML, CSS</li>
                        <li>Javascript (ES6+)</li>
                        <li>React</li>
                        <li>Python</li>
                        <li>Flask</li>
                        <li>SQL</li>

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


