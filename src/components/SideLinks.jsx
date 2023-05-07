export default function SideLinks() {
    return (
        <>
            <ul className={"hidden xl:flex flex-col fixed bottom-0 left-0 items-center px-14 slate after-line text-xl"}>
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <li className={"py-2"}><a href={"https://github.com/Tejas-Naik"} target={"_blank"} className={"hover-accent hover-displace fab fa-github"} rel="noreferrer" /></li>
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <li className={"py-2"}><a href={"https://twitter.com/@rn_tejas"} target={"_blank"} className={"hover-accent hover-displace fab fa-twitter"} rel="noreferrer" /></li>
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <li className={"py-2"}><a href={"https://www.linkedin.com/in/tejas-naik-219a40245/"} target={"_blank"} className={"hover-accent hover-displace fab fa-linkedin"} rel="noreferrer" /></li>
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <li className={"py-2 pb-4"}><a href={"https://www.instagram.com/webdev.is.fun/"} target={"_blank"} className={"hover-accent hover-displace fab fa-instagram"} rel="noreferrer" /></li>
            </ul>
            <div className={"slate hidden xl:flex flex-col fixed bottom-0 right-0 items-center px-14 after-line w-fit"}>
                <a href={"mailto:rntejas2005@gmail.com"} className={"vertical-text text-sm hover-accent pb-4 hover-displace cursor-pointer font-monospace opacity-60 font-medium tracking-widest"}>RNTejas2005@gmail.com</a>
            </div>
        </>
    )
}
