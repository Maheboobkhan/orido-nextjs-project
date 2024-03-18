import { Fragment, useState, useEffect } from "react";
import BlogPopup from "./popup/BlogPopup";
import { fetchBlogData } from "../../pages/api/AllApiData";

// const blogData = [
//   {
//     title: "Diversification of digital marketing stategies",
//     date: "02 June, 2022",
//     author: "John Smith",
//     img: "img/news/1.jpg",
//     description: [
//       "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
//       "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
//       "That’s why more companies are not only reevaluating their website’s design but also partnering with Orido, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
//     ],
//   },
//   {
//     title: "Diversification of digital marketing stategies",
//     date: "02 June, 2022",
//     author: "John Smith",
//     img: "img/news/2.jpg",
//     description: [
//       "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
//       "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
//       "That’s why more companies are not only reevaluating their website’s design but also partnering with Orido, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
//     ],
//   },
//   {
//     title: "Diversification of digital marketing stategies",
//     date: "02 June, 2022",
//     author: "John Smith",
//     img: "img/news/3.jpg",
//     description: [
//       "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
//       "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
//       "That’s why more companies are not only reevaluating their website’s design but also partnering with Orido, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
//     ],
//   },
//   {
//     title: "Diversification of digital marketing stategies",
//     date: "02 June, 2022",
//     author: "John Smith",
//     img: "img/news/4.jpg",
//     description: [
//       "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
//       "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
//       "That’s why more companies are not only reevaluating their website’s design but also partnering with Orido, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
//     ],
//   },
// ];

const Blog = () => {
  const [activeData, setActiveData] = useState({});
  const [open, setOpen] = useState(false);
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetchBlogData().then((data) => {
      setBlogData(data);
    });
  }, []);

  const onClick = (blog) => {
    setOpen(true);
    setActiveData(blog);
  };
  return (
    <Fragment>
      <BlogPopup open={open} close={() => setOpen(false)} data={activeData} />
      <div className="orido_tm_section" id="blog">
        <div className="orido_tm_news">
          <div className="container">
            <div className="orido_tm_main_title">
              <h3>
                <span>
                  From my
                  <br />
                  blog post
                </span>
              </h3>
            </div>
            <div className="news_list">
              <ul>
                {blogData.map((blog, i) => (
                  <li key={i}>
                    <div className="list_inner">
                      <div className="left">
                        <div className="metabox">
                          <ul>
                            <li>
                              <span>
                                <a
                                  className="c-pointer"
                                  onClick={() => onClick(blog)}
                                >
                                  {blog.jobTitle}
                                </a>
                              </span>
                            </li>
                            <li>
                              <span>{blog.startDate}</span>
                            </li>
                          </ul>
                        </div>
                        <div className="title">
                          <h3>
                            <a
                              className="c-pointer"
                              onClick={() => onClick(blog)}
                            >
                              {blog.summary}
                            </a>
                          </h3>
                        </div>
                        <div className="orido_tm_simple_button">
                          <a
                            className="line_effect c-pointer"
                            onClick={() => onClick(blog)}
                          >
                            Read More
                            <img
                              className="svg"
                              src="img/svg/top-arrow.svg"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="right">
                        <img src="img/thumbs/24-20.jpg" alt="" />
                        {/* <div
                          className="main"
                          data-img-url={blog.img}
                          style={{ backgroundImage: `url(${blog.img})` }}
                        /> */}
                        <div
                          className="main"
                          data-img-url='https://cdn.pixabay.com/photo/2015/06/01/09/04/blog-793047_1280.jpg'
                          style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2015/06/01/09/04/blog-793047_1280.jpg')" }}
                        />
                        <a
                          className="orido_tm_full_link c-pointer"
                          onClick={() => onClick(blog)}
                        />
                      </div>
                      <span className="shape">
                        <img
                          className="svg"
                          src="img/svg/Intersect.svg"
                          alt=""
                        />
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Blog;
