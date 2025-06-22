import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft, faGift, faUsers, faAward } from "@fortawesome/free-solid-svg-icons";

const Aboutme = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-screen bg-[url(/bg-big.jpg)] bg-center bg-fixed bg-cover bg-no-repeat">
        {/* Gradient overlay if needed */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10">
          <div className="w-full h-full mx-auto bg-transparent flex flex-col justify-center items-center">
             {/* Herro content */}
             <div className="h-1/3 w-full bg-blue-500">
                Herro Content Here
              </div>
             {/* -- Demo vidoes wrapper */}

             <div className="w-full h-2/3 bg-red-500 relative ">
              <div className=" flex flex-col items-center py-5 px-1 border-2 border-black "></div>
             </div>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="relative z-20 px-6 py-10 md:px-20 md:py-24 max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold border-l-4 border-violet-600 pl-4 mb-4">
          What I Do
        </h1>
        <p className="text-justify leading-relaxed">
          I specialize in backend development with a focus on building scalable and efficient web applications and APIs. With expertise in various backend technologies, I help create robust solutions for businesses. I build APIs that are secure, fast, and easy to use, ensuring smooth interactions between systems. Below is a quick overview of the main technical skills and technologies I use.
        </p>
      </div>
      
      {/* Updated Counter Section */}
            <div className="w-full px-4 py-16 bg-[url(/bg-2.jpeg)] bg-center bg-cover bg-fixed bg-no-repeat relative">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                        {[
                            {icon: faClockRotateLeft, value: "87", label: "Working Hours"},
                            {icon: faGift, value: "20", label: "Project Completed"},
                            {icon: faUsers, value: "12", label: "Happy Clients"},
                            {icon: faAward, value: "6+", label: "Years of Experience"},
                        ].map((item, idx) => (
                            <div 
                                key={idx}
                                className="w-44 flex flex-col items-center justify-center 
                                border border-dashed border-[rgba(255,255,255,0.6)] rounded-lg 
                                text-white bg-black/30 backdrop-blur-sm
                                p-4 transition-all duration-300 hover:scale-105 hover:bg-black/40 "
                                
                            >
                                <FontAwesomeIcon 
                                    icon={item.icon} 
                                    className="text-[#e6e6e6] text-lg md:text-3xl lg:text-4xl mb-2 md:mb-3"
                                    style={{width:'60px', height:"60px"}} 
                                />
                                <div className="text-xl md:text-2xl lg:text-3xl font-bold">{item.value}</div>
                                <div className="text-xs md:text-sm text-center">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aboutme;