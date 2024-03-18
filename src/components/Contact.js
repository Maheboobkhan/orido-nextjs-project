import { useEffect, useState } from "react";
import { fetchSocialHandlesData, fetchEmailData } from "../../pages/api/AllApiData";
const Contact = () => {
  const [socialHandles, setSocialHandles] = useState([]);
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetchSocialHandlesData().then((data) => {
      setSocialHandles(data);
    });

    fetchEmailData().then((data) => {
      setEmail(data);
    });
  }, [])
  return (
    <div className="orido_tm_section" id="contact">
      <div className="orido_tm_contact">
        <div className="container">
          <div className="infobox">
            <div className="video_button">
              <a
                className="popup-youtube"
                href="https://www.youtube.com/watch?v=7e90gBu4pas"
              >
                {/* <img
                  className="anim_circle"
                  src="img/contact/video.png"
                  alt=""
                /> */}
                <img
                  className="anim_circle"
                  src="https://cdn.pixabay.com/photo/2016/08/20/22/09/logos-1608653_1280.jpg"
                  alt=""
                />
                <img className="svg" src="img/svg/play.svg" alt="" />
              </a>
            </div>
            <div className="text">
              <h3>{`Let's`} work together</h3>
              <p>
                You can express yourself however you want and whenever you want,
                for free. You can customize a template or make your own.
              </p>
            </div>
            <div className="orido_tm_boxed_button">
              <a href="#">
                Say Hello <img className="svg" src="img/svg/send.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="connect">
            <div className="left">
              <ul>
                <li>
                  <span className="name">Call:</span>
                  <p>
                    <a className="line_effect" href="#">
                      +1 (234) 567 890
                    </a>
                  </p>
                </li>
                <li>
                  <span className="name">Email:</span>
                  <p>
                    <a className="line_effect" href="#">
                      {email}
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div className="right">
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
          </div>
        </div>
        <span className="element">
          <img className="svg" src="img/svg/elements.svg" alt="" />
        </span>
        <span className="element2">
          <img className="svg" src="img/svg/element-2.svg" alt="" />
        </span>
      </div>
    </div>
  );
};
export default Contact;
