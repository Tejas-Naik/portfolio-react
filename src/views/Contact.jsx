import React from 'react';

function Contact() {
    return (
        <div className={"flex flex-col h-full mb-24 items-start md:items-center justify-center max-w-[1000px] w-full"}>
            <span className={"accent font-monospace mb-4 text-lg"}>04. What's Next?</span>
            <h3 className={"slate font-[600] mb-6 text-5xl md:text-6xl"}>Get In Touch</h3>
            <p className={"dark-slate max-w-[600px] md:text-center mb-12"}>
                Please feel free to contact me for any job opportunities or to discuss how I can contribute to your team's success.
            </p>
            <a href={"mailto:rntejas2005@gmail.com"} className={"w-full md:w-fit accent hover-btn accent-border border p-4 px-8 text-md font-monospace rounded"}>
                Say Hello
            </a>
        </div>
    )
}

export default Contact;