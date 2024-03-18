import {fetchWebsiteLogo} from "../../pages/api/AllApiData";
import { useEffect, useState } from "react";
const Header = ({ dark }) => {
  const [websiteLogo, setWebsiteLogo] = useState('');

  useEffect(() => {
    fetchWebsiteLogo().then((data) => {
      setWebsiteLogo(data);
    });
  }, []);
  
  return (
    <div className="orido_tm_header">
      <div className="header_in">
        <div className="logo">
          <a href="#">
            {/* <img src={`img/logo/${dark ? "light" : "logo"}.png`} alt="" /> */}
            <img src={dark ? websiteLogo : websiteLogo } alt="" />
          </a>
        </div>
        <div className="menu">
          <ul className="anchor_nav">
            <li className="current">
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#service">Service</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <span className="ccc" />
        </div>
        <div className="button">
          <a
            href="https://themeforest.net/user/codeefly/portfolio"
            target="_blank"
          >
            Purchase Now
          </a>
        </div>
      </div>
    </div>
  );
};
export default Header;
