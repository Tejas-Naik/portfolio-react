import React from 'react';

function Home() {
    return (
        <>
            <div id='home' className={"flex flex-col h-full pt-24 mb-24 justify-center max-w-[1000px] w-full"}>
                <span className={"accent text-[14px] font-monospace mb-4"}>
                    Hi, my name is
                </span>
                <h1 className={"text-6xl lg:text-7xl font-[600] slate mb-2"}>
                    RN Tejas,
                </h1>
                <h2 className={
                    "text-4xl md:text-5xl lg:text-7xl font-[600] opacity-60 slate tracking-tight"
                }>
                    I build things for the web.
                </h2>
                <p className={"py-8 slate text-md leading-7 opacity-60 max-w-[600px]"}>
                    As a Front-End Developer, I specialize in crafting visually stunning and intuitive user experiences that help businesses achieve their goals. With expertise in JavaScript, React and Redux, I'm passionate about bringing ideas to life and creating seamless digital experiences that leave a lasting impression.
                </p>
                <a href={"/work"} className={"accent md:w-fit w-full hover-btn cursor-pointer text-[14px] hover-accent accent-border border rounded font-monospace p-4 px-6 mt-4"}>
                    Check out my work!
                </a>
            </div>
        </>
    )
}

export default Home;
