import "./home.css";
import "./App.css";
import TypingEffect from "./typing.jsx";
import CloudVideo from "../cloudinary/cloudvideo.jsx";
import { useState } from "react";

function Home({ video, setVideo }) {
  const images = ["/myphoto1.jpeg", "/myphoto2.jpeg"];

  const [flipped, setFlipped] = useState(false);
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const imageClick = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    setFlipped((prev) => !prev); // toggle 0 ↔ 180

    // change image at mid flip
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 500);

    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h2>Hello, It's Me</h2>
        <h1>Debabrata Dey</h1>
        <h3>
          I'm a{" "}
          <span className="text">
            <TypingEffect />
          </span>
        </h3>
        <p>I'm currently pursuing B.Tech in Computer Science.</p>
        <div className="home-sci">
          <a href="https://github.com/debabrata230106" style={{ "--i": 7 }}>
            <i className="fa-brands fa-square-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/debabrata-dey-166aa93a9"
            style={{ "--i": 8 }}
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://wa.me/919735123202?text=Hello%20there!"
            style={{ "--i": 9 }}
          >
            <i className="fa-brands fa-square-whatsapp"></i>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ddey230106@gmail.com"
            style={{ "--i": 9 }}
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
        <a className="btn-box" onClick={() => setVideo(true)}>
          <i className="ri-play-fill"></i>
          &nbsp;
          <span>Watch My Intro</span>
        </a>
      </div>

      <div className="img-cont">
        <p>Click to Flip</p>
        <img
          src={images[index]}
          alt="Myphoto"
          className="image"
          onClick={imageClick}
          style={{
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        />
      </div>

      <div className="intro-video" style={{ display: video ? "flex" : "none" }}>
        <CloudVideo
          publicId={"WhatsApp_Video_2025-05-10_at_23.34.11_2de79a0f_safrt0"}
          controls={true}
          muted={false}
        />
        <i
          className="ri-close-line"
          id="close"
          onClick={() => setVideo(false)}
        ></i>
      </div>
    </section>
  );
}

export default Home;
