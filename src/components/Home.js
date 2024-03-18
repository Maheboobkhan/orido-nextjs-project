import { useEffect, useState } from "react";
import { fetchHerosData, fetchSocialHandlesData, fetchAvatarData } from "../../pages/api/AllApiData";

const Home = ({ dark }) => {
  const [herosData, setHerosData] = useState([]);
  const [socialHandles, setSocialHandles] = useState([]);
  const [avatarData, setAvatarData] = useState([]);

  useEffect(() => {
    fetchHerosData().then((data) => {
      console.log(data);
      setHerosData(data);
    });

    fetchSocialHandlesData().then((data) => {
      console.log(data);
      setSocialHandles(data);
    });

    fetchAvatarData().then((data) => {
      console.log(data);
      setAvatarData(data);
    });
  }, [])
  return (
    <div className="orido_tm_hero orido_tm_section" id="home">
      <div className="container">
        <div className="content">
          <div className="details">
            <div className="short">
              <h3>
                {herosData.name} <img className="svg" src="img/svg/hi.svg" alt="" />
              </h3>
              <span className="job">{herosData.title}</span>
            </div>
            <div className="text">
              <p>
                {herosData.subTitle}
              </p>
            </div>
            <div className="buttons">
              <div className="orido_tm_boxed_button">
                <a className="anchor" href="#contact">
                  Say Hello{" "}
                  <img className="svg" src="img/svg/send.svg" alt="" />
                </a>
              </div>
              <div className="orido_tm_simple_button">
                <a className="line_effect anchor" href="#portfolio">
                  My Works{" "}
                  <img className="svg" src="img/svg/top-arrow.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="orido_tm_follow">
          <span>Follow me:</span>
          <ul>
            {socialHandles.map((handle, i) => {
              return (
                <li key={i}>
                  <a href="#">
                    <img className="svg" src={handle.image.url} alt={handle.platform} />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className="orido_tm_down">
        <a className="anchor" href="#about">
          <img
            className="svg"
            src={`img/svg/${dark ? "down_button_light" : "down_button"}.svg`}
            alt=""
          />
        </a>
      </div>
      <div className="avatar">
        <div className="img">
          {/* <img src={`img/hero/${dark ? 2 : 1}.jpg`} alt="" /> */}
          <img src={dark ? avatarData.url : avatarData.url} alt="" />
          <div className="video_button">
            <a
              className="popup-youtube"
              href="https://www.youtube.com/watch?v=7e90gBu4pas"
            >
              {/* <img className="anim_circle" src="img/hero/welcome.png" alt="" /> */}
              <img className="anim_circle" src="https://cdn.pixabay.com/photo/2015/05/28/09/08/hyacinth-787758_1280.jpg" alt="" />
              <img className="svg" src="img/svg/play.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
