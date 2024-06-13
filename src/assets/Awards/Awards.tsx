import "./Awards.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Awards.css";

import javacert from "../Images/Certificates/it-specialist-java.png";
import htmlcert from "../Images/Certificates/it-specialist-html-and-css.png";
import databasecert from "../Images/Certificates/it-specialist-databases.png";

const Awards = () => {
  return (
    <section className="awards">
      <div className="awards-right">
        <h2>Awards and</h2>
        <h2>Certifications</h2>
        <div className="awards-img">
          <img src={javacert} alt="java" />
          <img src={htmlcert} alt="htmlcss" />
          <img src={databasecert} alt="database" />
        </div>
      </div>
      <div className="awards-left">
        <div className="certs-img">
          <Carousel
            showThumbs={false}
            infiniteLoop
            autoPlay
            interval={5000}
            transitionTime={1000}
          >
            <div>
              <img src={javacert} alt="java" />
            </div>
            <div>
              <img src={htmlcert} alt="htmlcss" />
            </div>
            <div>
              <img src={databasecert} alt="database" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Awards;
