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
    return ( <div className="w-75% bg-amber-600"> {/* ---- Main about section --- - */}
        
            <div className={`section relative w-full h-screen bg-[url(/bg-big.jpg)] bg-center bg-fixed bg-cover bg-no-repeat `}></div>
            {/* <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-transparent z-10" /> */}
        
        
                <div className="wrapper  z-25 px-6 py-10 md:px-20 md:py-24 max-w-4xl">
            {/* == some personal discriptions */}
            <h1 className="text-2xl md:text-4xl font-bold border-l-4 border-violet-600 pl-4 mb-4">
                What I Do
            </h1>
                <p className="text-justify leading-relaxed">
                    I specialize in backend development with a focus on building scalable and efficient web applications and APIs. With expertise in various backend technologies, I help create robust solutions for businesses. I build APIs that are secure, fast, and easy to use, ensuring smooth interactions between systems. Below is a quick overview of the main technical skills and technologies I use.
                </p>
            </div>
            <div className="counter-up w-screen h-[50vh] px-4 py-4 flex justify-center items-center bg-[url(/bg-2.jpeg)]  bg-center bg-cover bg-fixed bg-no-repeat relative"
                    >
                <div className="content w-full h-full flex justify-between flex-col md:flex-row bg-red-100">
                    {[
                        {icon: faClockRotateLeft, value: "87", label: "Working Hours"},
                        { icon: faGift, value: "20", label: "Project Completed" },
                        { icon: faUsers, value: "12", label: "Happy Clients" },
                        { icon: faAward, value: "6+", label: "Years of Experience" },
                    ].map((item, idx) => (
                        // box to handle content
                        <div key={idx}
                        className="w-36 h-36 md:w-40 md:h-40 border-1 border-dashed border-[rgba(255,255,255,0.6)] rounded-lg flex flex-col items-center justify-center text-white bg-black/30 backdrop-blur-sm"
                        >
                            <FontAwesomeIcon icon={item.icon} className="text-[#e6e6e6] text-[48px] mb-2" />
                            <div className="text-2xl font-bold">{item.value}</div>
                            <div className="text-sm text-center">{item.label}</div>
                        </div>
                    ))}
                </div>
            </div>
       
        
    </div> );
}
 
export default Aboutme;