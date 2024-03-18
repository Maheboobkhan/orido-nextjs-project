// import { Fragment, useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { projectSliderProps } from "../sliderProps";
// import { dataImage } from "../utilits";
// import DetailsPopUp from "./popup/DetailsPopup";
// import { fetchProjectsData } from "../../pages/api/AllApiData"
// const Projects = () => {
//   const [detailsPopup, setDetailsPopup] = useState(false);
//   const [projectData, setProjectData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchProjectsData();
//         setProjectData(data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching project data:", error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <Fragment>
//       {detailsPopup && <DetailsPopUp close={() => setDetailsPopup(false)} open={detailsPopup} />}
//       <div className="orido_tm_section" id="portfolio">
//         <div className="orido_tm_portfolio">
//           <div className="container">
//             <div className="orido_tm_main_title">
//               <h3>
//                 <span>
//                   Look at my
//                   <br />
//                   recent projects
//                 </span>
//               </h3>
//             </div>
//             <div className="portfolio_list">
//               {loading ? (
//                 <div>Loading...</div>
//               ) : (
//                 <Swiper

//                   slidesPerView={1}
//                   spaceBetween={50}
//                   loop={true}
//                   navigation={{
//                     nextEl: '.next_button',
//                     prevEl: '.prev_button',
//                   }}
//                   autoplay={{
//                     delay: 2500,
//                     disableOnInteraction: false,
//                   }}
//                   breakpoints={{
//                     0: { slidesPerView: 1 },
//                     768: { slidesPerView: 2, spaceBetween: 50 },
//                     1040: { slidesPerView: 3, spaceBetween: 50 },
//                   }}
//                   // {...projectSliderProps}
//                   className="owl-carousel gallery_zoom"
//                 >
//                   {projectData.map((project, i) => {
//                     return (
//                       <SwiperSlide key={i}>
//                         <div className="list_inner">
//                           <div className="image">
//                             <img src={project.image.url} alt="" />
//                             <div
//                               className="main"
//                               data-img-url={project.image.url}
//                             />
//                           </div>
//                           <div className="details">
//                             <span className="category">Youtube</span>
//                             <h3 className="title">
//                               <span>{project.title}</span>
//                             </h3>
//                           </div>
//                           <a
//                             className="orido_tm_full_link popup-youtube"
//                             href="https://www.youtube.com/watch?v=7e90gBu4pas"
//                           />
//                         </div>
//                       </SwiperSlide>
//                     )
//                   })}
//                 </Swiper>
//               )}
// <a className="prev_button" href="#">
//   <img className="svg" src="img/svg/prev.svg" alt="" />
// </a>
// <a className="next_button" href="#">
//   <img className="svg" src="img/svg/next.svg" alt="" />
// </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   );
// };
// export default Projects;







import { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { projectSliderProps } from "../sliderProps";
import { dataImage } from "../utilits";
import DetailsPopUp from "./popup/DetailsPopup";
import { fetchProjectsData } from "../../pages/api/AllApiData"

const Projects = () => {
  const [detailsPopup, setDetailsPopup] = useState(false);
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProjectsData();
        setProjectData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching project data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Fragment>
      {detailsPopup && <DetailsPopUp close={() => setDetailsPopup(false)} open={detailsPopup} />}
      <div className="orido_tm_section" id="portfolio">
        <div className="orido_tm_portfolio">
          <div className="container">
            <div className="orido_tm_main_title">
              <h3>
                <span>
                  Look at my
                  <br />
                  recent projects
                </span>
              </h3>
            </div>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <Swiper
                slidesPerView={1}
                spaceBetween={50}
                loop={true}
                navigation={{
                  nextEl: '.next_button',
                  prevEl: '.prev_button',
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  768: { slidesPerView: 2, spaceBetween: 50 },
                  1040: { slidesPerView: 3, spaceBetween: 50 },
                }}
                className="owl-carousel gallery_zoom"
              >
                {projectData.map((project, i) => (
                  <SwiperSlide key={i}>
                    <div className="list_inner">
                      <div className="image">
                        <img src={project.image.url} alt={project.title} />
                      </div>
                      <div className="details">
                        <span className="category">Youtube</span>
                        <h3 className="title">
                          <span>{project.title}</span>
                        </h3>
                      </div>
                      <a
                        className="orido_tm_full_link popup-youtube"
                        href="https://www.youtube.com/watch?v=7e90gBu4pas"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
            <a className="prev_button" href="#">
              <img className="svg" src="img/svg/prev.svg" alt="" />
            </a>
            <a className="next_button" href="#">
              <img className="svg" src="img/svg/next.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;







// import { Fragment, useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { fetchProjectsData } from "../../pages/api/AllApiData";
// import DetailsPopUp from "./popup/DetailsPopup";
// import SwiperCore, { Navigation } from 'swiper';

// // Import Swiper styles
// import 'swiper/swiper-bundle.min.css';

// SwiperCore.use([Navigation]);

// const Projects = () => {
//   const [detailsPopup, setDetailsPopup] = useState(false);
//   const [projectData, setProjectData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [swiper, setSwiper] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchProjectsData();
//         setProjectData(data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching project data:", error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const goNext = () => {
//     if (swiper) {
//       swiper.slideNext();
//     }
//   };

//   const goPrev = () => {
//     if (swiper) {
//       swiper.slidePrev();
//     }
//   };

//   return (
//     <Fragment>
//       {detailsPopup && <DetailsPopUp close={() => setDetailsPopup(false)} open={detailsPopup} />}
//       <div className="orido_tm_section" id="portfolio">
//         <div className="orido_tm_portfolio">
//           <div className="container">
//             <div className="orido_tm_main_title">
//               <h3>
//                 <span>
//                   Look at my
//                   <br />
//                   recent projects
//                 </span>
//               </h3>
//             </div>
//             {loading ? (
//               <div>Loading...</div>
//             ) : (
//               <div>
//                 <Swiper
//                   slidesPerView={1}
//                   spaceBetween={50}
//                   loop={true}
//                   navigation={{
//                     nextEl: '.next_button',
//                     prevEl: '.prev_button',
//                   }}
//                   autoplay={{
//                     delay: 2500,
//                     disableOnInteraction: false,
//                   }}
//                   breakpoints={{
//                     0: { slidesPerView: 1 },
//                     768: { slidesPerView: 2, spaceBetween: 50 },
//                     1040: { slidesPerView: 3, spaceBetween: 50 },
//                   }}
//                   className="owl-carousel gallery_zoom"
//                   onSwiper={setSwiper}
//                 >
//                   {projectData.map((project, i) => (
//                     <SwiperSlide key={i}>
//                       <div className="list_inner">
//                         <div className="image">
//                           <img src={project.image.url} alt={project.title} />
//                         </div>
//                         <div className="details">
//                           <span className="category">Youtube</span>
//                           <h3 className="title">
//                             <span>{project.title}</span>
//                           </h3>
//                         </div>
//                         <a
//                           className="orido_tm_full_link popup-youtube"
//                           href="https://www.youtube.com/watch?v=7e90gBu4pas"
//                         />
//                       </div>
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//                 <a className="prev_button" href="#" onClick={goPrev}>
//                   <img className="svg" src="img/svg/prev.svg" alt="" />
//                 </a>
//                 <a className="next_button" href="#" onClick={goNext}>
//                   <img className="svg" src="img/svg/next.svg" alt="" />
//                 </a>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default Projects;
