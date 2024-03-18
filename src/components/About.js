import { useState, useEffect } from "react";
import { fetchHerosData } from "../../pages/api/AllApiData";
const About = () => {
  const [aboutData, setaboutData] = useState([]);

  useEffect(() => {
    fetchHerosData().then((data) => {
      console.log(data);
      setaboutData(data);
    });
  }, [])
  return (
    <div className="orido_tm_section" id="about">
      <div className="orido_tm_about">
        <div className="about_in">
          <div className="left">
            <div className="box">
              <h3 className="year">{aboutData.exp_year}</h3>
              <span className="experience">Years of Experience</span>
              <h3 className="name">{aboutData.name}</h3>
            </div>
          </div>
          <div className="right">
            <span className="element">
              <img className="svg" src="img/svg/element.svg" alt="" />
            </span>
            <div className="orido_tm_main_title">
              <h3>
                <span>About Me</span>
              </h3>
            </div>
            <div className="text">
              <p>
                {aboutData.description}
              </p>
            </div>
            <div className="short">
              <div className="orido_tm_boxed_button">
                <a href="img/cv/1.jpg" download>
                  Download CV
                  <img className="svg" src="img/svg/paper.svg" alt="" />
                </a>
              </div>
              {/* <img src="img/signature.png" alt="" /> */}
              <img src="https://cdn.pixabay.com/photo/2015/09/28/16/51/signature-962364_1280.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
