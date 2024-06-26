import "./AboutMe.css";
import { FaArrowRight } from "react-icons/fa";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import aboutPic from "../Images/me/IMG_0359.png";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const aboutMeRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".aboutLeft, .aboutRight",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".aboutLeft, .aboutRight",
          start: "top 80%",
          end: "bottom 25%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
    gsap.fromTo(
      ".about-btn",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        delay: 0.4,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-btn",
          start: "top 80%",
          end: "bottom 25%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <section className="aboutMe" ref={aboutMeRef}>
      <div className="aboutLeft">
        <h2>ABOUT ME</h2>
        <p>
          I am a dedicated programmer with a strong foundation in Java and
          skills in web development, databases, and mobile app creation
          <span style={{ fontWeight: "bold", color: "black", opacity: "0.75" }}>
            . I have earned certificates in Java, database management, and web
            design
          </span>
          , showcasing my passion for technology and readiness to tackle
          challenges and innovate.
        </p>
        <p className="about-btn">
          View My Resume <FaArrowRight className="FaArrowR" />
        </p>
      </div>
      <div className="aboutRight">
        <img src={aboutPic} alt="PICTURE" className="aboutPic"></img>
      </div>
    </section>
  );
};

export default AboutMe;
