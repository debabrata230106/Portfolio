import "./App.css";
import "./about.css";

export default function About() {
  return (
    <section className="about" id="about">
      <h2>
        About <span>Me</span>
      </h2>
      <div className="about-content">
        <div style={{ "--j": 1 }}>
          <h2>
            <span>Education</span>
            <i class="fa-solid fa-book-open"></i>
          </h2>
          <p>
            I completed my primary education from West Bengal. I got 85% marks
            in class 10<sup>th</sup>. Current studing B.Tech(CSE) and got 9.04
            avarage CGPA.
          </p>
        </div>
        <div style={{ "--j": 2 }}>
          <h2>
            <span>Interest</span>
            <i class="fa-solid fa-brain"></i>
          </h2>
          <p>
            I like Programming and Problem solving. Passionate about web
            developoment and designing. Mathmatics is my favourite subject.
          </p>
        </div>
        <div style={{ "--j": 3 }}>
          <h2>
            <span>Mission</span>
            <i class="fa-solid fa-medal"></i>
          </h2>
          <p>
            Being a proffesional <span>Full Stack Developer</span> and a
            successful engineer. I keen to explpore new technologies and
            techstacks to become a elite developer one day.
          </p>
        </div>
      </div>
      {/* <a href="#skill" className="btn-box">
        More About Me
      </a> */}
    </section>
  );
}
