import "./App.css"
import "./skill.css"
import StyleTypingEffect from "./styleTyping.jsx"
import JsTypingEffect from "./jsTyping.jsx"
import GitTypingEffect from "./gitTying.jsx"
import DataTypingEffect from "./dataTyping.jsx"

export default function Skill() {
    return (
        <section className="skill" id="skill">
            <h2><span>Tools</span> and <span>Technologies</span></h2>
            <h3 className="text1">I use these tools and technologies for development.</h3>
            <div>
                <div className="skill-text">
                    <h3 style={{"--k": 5}}><i className="fa-solid fa-fire"></i>Styling Tools&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><StyleTypingEffect /></span></h3>
                    <h3 style={{"--k": 6}}><i className="fa-solid fa-fire"></i>Database&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><DataTypingEffect /></span></h3>
                    <h3 style={{"--k": 7}}><i className="fa-solid fa-fire"></i>Frontend & Backend&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><JsTypingEffect /></span></h3>
                    <h3 style={{"--k": 8}}><i className="fa-solid fa-fire"></i>Version Control&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><GitTypingEffect /></span></h3>
                </div>
                <div className="skill-icons">
                    <div><i style={{"--d": 27}} className="fa-brands fa-html5"></i></div>
                    <div><i style={{"--d": 29}} className="fa-brands fa-css3-alt"></i></div>
                    <div><i style={{"--d": 31}} className="fa-brands fa-square-js"></i></div>
                    <div><i style={{"--d": 25}} className="fa-brands fa-react"></i></div>
                    <div><i style={{"--d": 23}} className="fa-brands fa-bootstrap"></i></div>
                    <div><img style={{"--d": 21}} src="/tailwind.png" alt="tailwind" /></div>
                    <div><i style={{"--d": 15}} className="fa-brands fa-square-github"></i></div>
                    <div><i style={{"--d": 17}} className="fa-brands fa-square-git"></i></div>
                    <div><i style={{"--d": 19}} className="fa-brands fa-node-js"></i></div>
                </div>
            </div>
            {/* <a href="#project" className="btn-box">
                More About Me
            </a> */}
        </section>
    )
}