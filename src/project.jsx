import "./App.css";
import "./project.css";
import { useRef, useState, useEffect } from "react";
import CloudVideo from "../cloudinary/cloudvideo.jsx";
import { VIDEOS } from "../cloudinary/videodata.js";

export default function Project() {
  const sliderRef = useRef(null);
  const [active, setActive] = useState(0);

  const scrollToSlide = (index) => {
    const width = sliderRef.current.offsetWidth;
    sliderRef.current.scrollTo({
      left: index * width,
      behavior: "smooth",
    });
    setActive(index);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (!sliderRef.current) return;

      if (e.key === "ArrowRight") {
        sliderRef.current.scrollBy({
          left: sliderRef.current.offsetWidth,
          behavior: "smooth",
        });
      }

      if (e.key === "ArrowLeft") {
        sliderRef.current.scrollBy({
          left: -sliderRef.current.offsetWidth,
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section className="project" id="project">
      <h3>
        My <span>Projects</span>
      </h3>

      <div
        id="allvideodiv"
        ref={sliderRef}
        onScroll={(e) => {
          const index = Math.round(
            e.target.scrollLeft / sliderRef.current.offsetWidth,
          );
          setActive(index);
        }}
      >
        {VIDEOS.map((video) => {
          return (
            <div key={video.id}>
              <div className="detail">
                <div>
                  <h2 onClick={() => window.open(video.site, "_blank")}>
                    <i className={video.icon} id="project-icon"></i>
                    <span>{video.title}</span>
                    <i className="ri-arrow-right-up-line"></i>
                  </h2>

                  <i
                    className="fa-solid fa-code-branch"
                    id="branch-icon"
                    onClick={() => window.open(video.github, "_blank")}
                  ></i>
                </div>

                <p>{video.description}</p>
              </div>
              <div className="videoContainer">
                <CloudVideo publicId={video.id} />
              </div>
            </div>
          );
        })}
      </div>

      <div id="slidebtn">
        {VIDEOS.map((_, index) => (
          <button
            key={index}
            className={active === index ? "active" : ""}
            onClick={() => scrollToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
