import {fetchWebsiteLogo} from "../../pages/api/AllApiData";
import { useEffect, useState } from "react";
const CopyRight = () => {
  const [websiteLogo, setWebsiteLogo] = useState('');

  useEffect(() => {
    fetchWebsiteLogo().then((data) => {
      setWebsiteLogo(data);
    });
  }, []);
  return (
    <div className="orido_tm_section">
      <div className="orido_tm_copyright">
        <div className="container">
          <div className="copyright_inner">
            <div className="logo">
              {/* <img src="img/logo/logo.png" alt="" /> */}
              <img src={websiteLogo} alt="" />
            </div>
            <div className="copy">
              <p>
                © {new Date().getFullYear()} by
                <a href="https://themeforest.net/user/codeefly" target="_blank">
                  Codeefly.
                </a>{" "}
                All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CopyRight;
