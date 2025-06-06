import React from "react";
// font awearsome 
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import bgImage from '@/../../public/bg-1.jpg'

// backgrounds img

const Aboutme = () => {
    return ( <>
        {/* ---- Main about section --- - */}
        <div className={`section w-screen h-screen  bg-center bg-fixed bg-cover `}
         style={{ backgroundImage: "url('/bg-1.jpg')" }}
         >

        </div>
        <div className="wrapper">
          {/* == some personal discriptions */}
          <div className="title">About Me and My jorney
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit accusantium, dolor eum ipsum repudiandae repellat sapiente, molestias, dolores explicabo laborum corrupti commodi totam molestiae magni ipsam saepe aut tempore nemo similique? Fuga in minus amet adipisci ipsa incidunt, quam iure aliquid corrupti asperiores, non quibusdam earum debitis dignissimos modi omnis repudiandae praesentium ad sequi veritatis, odio. Nam, unde! Iste consequatur asperiores doloremque aperiam cupiditate optio eum ducimus voluptatibus, animi illo quam dicta inventore dolore ab autem a, obcaecati, reprehenderit. Natus quasi officiis nulla officia rem placeat aut impedit nemo eum voluptatibus, dolores molestias velit, cupiditate magni illo laudantium beatae facere sequi obcaecati, reprehenderit eveniet nam, ea aperiam hic. Est odit, qui. Aliquid saepe molestiae, inventore. Necessitatibus temporibus, dignissimos, nisi repellendus possimus sed incidunt nam quos enim veritatis corporis ut sint, facere vitae, illum accusamus nesciunt dolore. Doloremque nihil sit, alias molestias sint quos voluptatum voluptatibus sunt quisquam, facere quod pariatur.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta repellendus illo iste eius molestiae natus, esse incidunt. Minus architecto dicta, provident libero. Ipsum culpa, atque ab. Aut incidunt amet optio quo nemo atque eligendi aperiam quisquam aliquid, distinctio mollitia minima, eius repellendus asperiores vero reprehenderit dolore, consequuntur adipisci tenetur! Enim sed, tempora obcaecati perspiciatis illo ducimus maiores aut quae eos, aspernatur sunt unde, quam a praesentium tenetur est quas eveniet dolorum quibusdam hic placeat! Distinctio nostrum assumenda suscipit cupiditate rem amet repudiandae labore neque quis quia dicta, aliquid eum nemo sint, maxime sunt. Cumque suscipit nulla quis velit iure. Consequuntur, ipsa! Veniam error enim itaque ab unde, accusamus asperiores, ratione, debitis similique suscipit aut, qui consectetur quos repudiandae illo impedit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, sunt ipsum modi. Consectetur nobis vero minus, architecto facere velit explicabo molestiae delectus omnis ad expedita similique inventore placeat incidunt. Sint quasi autem quam illo omnis soluta minus, in quibusdam placeat. Saepe ea magni ducimus, modi, eos quis, at possimus earum ad magnam natus, nihil vero error. Ab ipsum omnis odit ipsam, maxime aspernatur molestiae sit tempore corporis non rerum earum neque voluptatibus provident dolor quod molestias officia. Aspernatur quis magni iste cum quas fugit modi aut ratione repudiandae quaerat eaque blanditiis veritatis quibusdam, reprehenderit eveniet, earum, atque sequi, sunt fugiat?</p>
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