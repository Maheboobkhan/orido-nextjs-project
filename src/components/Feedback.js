import { useState, useEffect } from "react";
import { fetchFeedbackData } from "../../pages/api/AllApiData";
const Feedback = ({ dark }) => {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    fetchFeedbackData().then((data) => {
      setFeedbackData(data);
    });
  }, []);
  return (
    <div className="orido_tm_section">
      <div className="orido_tm_testimonials">
        <div className="container">
          <div className="orido_tm_main_title">
            <h3>
              <span>
                Valuable feedback
                <br />
                from my client
              </span>
            </h3>
          </div>
          <div className="testimonials_in">
            {feedbackData.map((data, i)=>{
              return (
                <div className="testimonial" key={i}>
                  {/* <img src={`img/testimonials/${dark ? 2 : 1}.jpg`} alt="" /> */}
            <img src={data.image.url} alt="" />
            <div className="info">
              <div className="text">
                <p>
                  {data.review}
                </p>
              </div>
              <div className="details">
                <h3 className="name">
                  <span>{data.name}</span>
                </h3>
                <span className="job">{data.position}</span>
              </div>
            </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feedback;
