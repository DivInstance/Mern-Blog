import React, { useEffect, useState } from "react";
import "./../styles/blog.css";
//import arrow from "./../imgvid/arrow.svg";
import { FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { useParams } from "react-router-dom";
import { stories } from "./blogdata";
import PopularPosts from "./PopularPosts";
import { LuClock8 } from "react-icons/lu";
import Popupnewsletter from "./popupnewsletter";
import SuscribeNewsletter from "./SuscribeNewsletter";

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import mixpanel from "mixpanel-browser";
mixpanel.init("28474855d9c985f1264efe3c2165c4d5", {
  debug: true,
  track_pageview: true,
  persistence: "localStorage",
});

export default function Blog() {
  // eslint-disable-next-line
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { id } = useParams();
  const [like, setLike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const likedStatus = localStorage.getItem(`isLiked-${id}`);
    setIsLiked(likedStatus === "true");

    const handleScroll = () => {
      const scrollThreshold = 1000;

      if (window.scrollY >= scrollThreshold) {
        setIsPopupOpen(true);
        window.removeEventListener("scroll", handleScroll);

        mixpanel.track("web_user_count_mixpanel", {
          event_category: "Blog read by users",
          event_label: `Blog ID: ${id}`,
        });

        window.gtag("event", "web_user_count", {
          event_category: "Blog read by users",
          event_label: `Blog ID: ${id}`,
        });
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [id]);

  useEffect(() => {
    const fetchLike = async () => {
      const url = `https://froker-portal.in/api/v1/blog/getLikes/${id}`;
      const data = await fetch(url, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const response = await data.json();
      setLike(response.likes);
    };
    fetchLike();
  }, [id]);

  const updateLike = async () => {
    if (!isLiked) {
      const url = `https://froker-portal.in/api/v1/blog/sendLike/${id}`;
      setLike(like + 1);
      setIsLiked(true);
      localStorage.setItem(`isLiked-${id}`, true);

      try {
        await fetch(url, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        });
      } 
      catch (error) {
        // console.error("Error:", error);
        setIsLiked(false);
        localStorage.setItem(`isLiked-${id}`, false);
        setLike(like - 1);
      }
    } else {
      const url = `https://froker-portal.in/api/v1/blog/substractLike/${id}`;
      setLike(like - 1);
      setIsLiked(false);
      localStorage.setItem(`isLiked-${id}`, false);

      try {
        await fetch(url, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        });
      } 
      catch (error) {
        // console.error("Error reduce like:", error);
        setIsLiked(true);
        localStorage.setItem(`isLiked-${id}`, true);
        setLike(like + 1);
      }
    }
  };

  const [currentBlog, setCurrentBlog] = useState(null);

  const currentPageUrl = `https://froker-portal.in/blog/${id}`;

  useEffect(() => {
    const result = stories.find((item) => item.id === parseInt(id));
    if (result) {
      setCurrentBlog(result);
    }
  }, [id]);

  // Google Analytics
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollThreshold = document.body.scrollHeight / 2;

  //     if (window.scrollY >= scrollThreshold) {
  //       Fire custom event to track user count increase
  //       ReactGA.event('event', 'web_user_count',{
  //         category: 'Blog',
  //         action: 'User Reached Middle',
  //         label: `Blog ID: ${id}`,
  //       });
  //       window.removeEventListener("scroll", handleScroll);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [id]);

  return (
    currentBlog && (
      <div className="completewholebody" style={{ marginTop: "" }}>
        <div className="childblog">
          <div className="toop">
            <div>Blog </div>
            <div style={{ paddingLeft: "0.2rem", paddingRight: "0.2rem" }}>
              //<img src={arrow} alt="arrow" />
            </div>
            <div>{currentBlog?.title}</div>
          </div>
        </div>
        <div className="childArticle">
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "2rem",
            }}
            src={currentBlog.image}
            alt="blog images"
          />
          <div className="overlayview" />
          <div className="bannerheading">{currentBlog?.title}</div>
        </div>
        <div className="bydatepublish">
          <div className="publisherdetails">
            <div className="by-joanna-wellick">{currentBlog?.publisher}</div>
            <div className="timetoread">
              <LuClock8 className="clock" />
              <div className="_2-minute-read">
                <span>
                  <span className="_2-minute-read-span">2 </span>
                  <span className="_2-minute-read-span2">minute read</span>
                </span>
              </div>
            </div>
          </div>
          <div className="likesection">
            <div
              className="popularlikes"
              onClick={updateLike}
              style={{ cursor: "pointer" }}
            >
              {isLiked ? (
                <img
                  src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706522062/Frokerassets/Page-1_igjnhi.jpg"
                  className="likeimg"
                  alt="liked icon"
                />
              ) : (
                <img
                  src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1707285106/Frokerassets/Artboard_ne0yo2.jpg"
                  className="likeimg"
                  alt="unliked icon"
                />
              )}
            </div>
            <div className="likecounts">{like} Likes</div>
          </div>
        </div>
        <div className="childText">
          <div className="para1">
            <br />
            <b>{currentBlog?.title}</b>
            <br />
          </div>

          <div className="para1">
            <br />
            <div dangerouslySetInnerHTML={{ __html: currentBlog?.intro }}></div>
            <br />
          </div>  
          <div className="para1">
            <br />
            <div dangerouslySetInnerHTML={{ __html: currentBlog?.paraone }}></div>
            <br />
          </div>

          <div className="quote">
            <div class="quoteline">{currentBlog?.quote}</div>
          </div>

          <div class="quoteby">{currentBlog?.quoteby}</div>

          <div className="para1">
            <br />
            <div dangerouslySetInnerHTML={{ __html: currentBlog?.paratwo }}></div>
            <br />
          </div>

          <div className="para2">
            <br />
            <div dangerouslySetInnerHTML={{ __html: currentBlog?.parathree}}></div>
            <br />
          </div>
          <div className="secondImgartt">
            <img src={currentBlog.secondimage} alt="blog images" class="secondImgart" />
          </div>
          <div className="para3" dangerouslySetInnerHTML={{ __html: currentBlog?.parafour}}></div>
          <div className="para4" dangerouslySetInnerHTML={{ __html: currentBlog?.parafive}}></div>
          <div className="para4" dangerouslySetInnerHTML={{ __html: currentBlog?.conclusion}}></div>
        </div>
        <div className="body2">
          <PopularPosts />
        </div>
        <div className="socialicon-container">
          <div class="share">Share</div>
          <div>
            <TwitterShareButton url={currentPageUrl}>
              <div className="socialicon">
                <FaTwitter style={{ color: "#328DF7" }} className="iccon" />
              </div>
            </TwitterShareButton>
          </div>
          <div>
            <FacebookShareButton url={currentPageUrl}>
              <div className="socialicon">
                <BsFacebook style={{ color: "#325DF7" }} className="iccon" />
              </div>
            </FacebookShareButton>
          </div>
          <div>
            <WhatsappShareButton url={currentPageUrl}>
              <div className="socialicon">
                <IoLogoWhatsapp
                  style={{ color: "#25D366" }}
                  className="iccon"
                />
              </div>
            </WhatsappShareButton>
          </div>
        </div>
        <div>
          <SuscribeNewsletter />
        </div>
        {isPopupOpen && <Popupnewsletter />}
      </div>
    )
  );
}
