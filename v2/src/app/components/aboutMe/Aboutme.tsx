import React from "react";
// font awearsome 
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faAward } from "@fortawesome/free-solid-svg-icons";


// backgrounds img

const Aboutme = () => {
    return ( <>
        {/* ---- Main about section --- - */}

        <div className={`section w-screen h-screen bg-center bg-fixed bg-cover bg-no-repeat `}
         style={{ backgroundImage: "url('/bg-big.jpg')" }} // ACOUT SECTION BG-IMAGE
         >
        </div>
        <div className=" absolute inset-0 bg-gradient-to-l from-black/80 to-transparent" />
        <div className="wrapper py-5 px-10">
          {/* == some personal discriptions */}
          <div className="title">
            {/* - What I do */}
             <h1 className="text-lg md:text-4xl pl-10 font-bold border-l-4 border-violet-600">What I Do</h1>
            <p className="py-2  md:py-4 px-8 text-justify">I specialize in backend development with a focus on building scalable and efficient web applications and APIs. With expertise in various backend technologies, I help create robust solutions for businesses. I build APIs that are secure, fast, and easy to use, ensuring smooth interactions between systems. Below is a quick overview of the main technical skills and technologies I use. Want to find out more about my experience? Check out my</p>
          </div>
        </div>
        <div className="counter-up">
            <div className="content">
                <div className="box">
                    <div className="icon"><FontAwesomeIcon icon={faClockRotateLeft} /></div>
                    <div className="counter">87</div>
                    <div className="text">Working Hours</div>
                </div>
                <div className="box">
                    <div className="icon"> <FontAwesomeIcon icon={faGift}/></div>
                    <div className="counter">20</div>
                    <div className="text">Project Completed</div>
                </div>
                <div className="box">
                    <div className="icon"> <FontAwesomeIcon icon={faUsers}/></div>
                    <div className="counter">12</div>
                    <div className="text">Happy Clients</div>
                </div>
                <div className="box">
                    <div className="icon"> <FontAwesomeIcon icon={faAward}/></div>
                    <div className="counter">6+</div>
                    <div className="text">Years of Experience</div>
                </div>
            </div>
        </div>
    </> );
}
 
export default Aboutme;