import React from "react";
import "./Hero.css"; // Import the CSS file

function Hero() {
  return (
    <div className="hero-container">
      <h1 className="hero-text">
        <b>At IPANAC, we specialize in making your relocation experience stress-free,<br></br> 
        smooth, and efficient.</b>
      </h1>
      <p className = "para">Whether you're moving across the globe or locally within the GCC, we are here to provide personalized services tailored to your unique needs. From packing to settling in, we handle all aspects of your move with professionalism, care, and expertise.
        </p>

    <div className="why-choose-card">
        <div className="card-inner">
            <h1 className="card-title">Why Choose IPANAC?</h1>
            <h2 className="card-subtitle"><b className="bold">Global Reach and Local Expertise:</b> We help you relocate anywhere in the world and within the GCC region, leveraging our global network of partners and in-depth local knowledge.</h2>

            <h2 className = "card-subtitle2"><b className = "bold2">End-End Solutions: </b>From pre-move planning, logistics, packing, and transportation to settling into your new home, we take care of everything so you can focus on your new beginning.

            </h2>

            <h2 className = "card-subtitle3"><b className = "bold3">Reliable and Safe: </b> With years of experience, we ensure that your belongings are handled with the utmost care. Our commitment to safety means peace of mind every step of the way.
            </h2>

            <h2 className = "card-subtitle4"><b className = "bold4">Personalized Service:</b> No two moves are the same. Our team will work with you to understand your requirements and provide solutions that match your needs, timeline, and budget.

            </h2>

            
        </div>
    </div>


    {/* <div className = "services">
        <div className = "inner-layout">
            <h1 className = "title-card2">Our Services</h1>

            <h2 className = "card-subtitle5"><b className = "bold5">International Relocation: </b>We simplify the complexities of moving to a new country, handling everything from visas to customs clearance.
            </h2>


            <h2 className = "card-subtitle5"><b className = "bold5">Local Relocation: </b>Moving within the GCC region? Our local services ensure that every detail is taken care of, from packing to delivery at your new doorstep.

            </h2>

            <h2 className = "card-subtitle5"><b className = "bold5">Packing and Unpacking: </b>We offer professional packing services to protect your valuables during transit and unpacking services to help you settle in quickly.


            </h2>

            <h2 className = "card-subtitle5"><b className = "bold5">Storage Solutions: </b>Need temporary storage? Our secure storage facilities ensure your items are safe and accessible whenever you need them.
            
            </h2>

            <h2 className="card-subtitle4">
                
            <b className="bold4">Corporate Relocation:</b> We cater to businesses relocating employees, offering tailored solutions to ensure a smooth transition for both the individual and the company.
            </h2>

        </div>
    </div> */}
</div>

    
  );
}

export default Hero;