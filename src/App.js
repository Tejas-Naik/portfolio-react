// import Navigation from "./components/Navigation";
// import SideLinks from "./components/SideLinks";
// import {Outlet} from "react-router-dom";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <>
//         <Navigation />
//         <div id={"content"} className={"flex flex-col w-[100vw] px-8 lg:p-0 overflow-x-hidden overflow-y-auto flex-1 justify-center items-center"}>
//             <Outlet/>
//         </div>
//         <SideLinks />
//         <Footer/>
//     </>
//   );
// }

// export default App;

import React from 'react';

import About from "./views/About";
import Contact from "./views/Contact";
import Experience from "./views/Experience";
import Home from "./views/Home";
import Work from "./views/Work";
import Teaching from "./views/Teaching";

import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import SideLinks from "./components/SideLinks";

function App() {
  return (
    <>
      <Navigation />
      <div
        id={"content"}
        className={
          "flex flex-col w-full px-6 md:px-10 lg:px-0 justify-center items-center pt-[100px] md:pt-[120px]"
        }
      >
        <Home />
        <About />
        <Experience />
        <Work />
        <Teaching />
        <Contact />
      </div>
      <SideLinks />
      <Footer />
    </>
  )
}

export default App;