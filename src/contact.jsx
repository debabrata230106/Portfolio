import "./App.css";
import "./contact.css";
import { useState } from "react";

export default function Contact() {
  const [icon, seIcon] = useState([
    "fa-solid fa-copy",
    "fa-solid fa-copy",
    "fa-solid fa-copy",
  ]);
  const copyText = [
    919735123512,
    "ddey230106@gmail.com",
    "https://github.com/debabrata230106",
  ];

  const handleClick = (idx) => {
    const newIcon = [...icon];
    newIcon[idx] = "fa-solid fa-check-double";
    seIcon(newIcon);
    navigator.clipboard.writeText(copyText[idx]);
    setTimeout(() => {
      const resetIcon = [...newIcon];
      resetIcon[idx] = "fa-solid fa-copy";
      seIcon(resetIcon);
    }, 1000);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/myresume.pdf"; // file must be in public folder
    link.download = "Debabrata_Dey_Resume.pdf"; // filename for download
    link.click();
  };

  return (
    <section id="contact">
      <div id="btndiv"><button className="cv" onClick={handleDownload}><span>Download CV</span></button></div>
      <div className="footer" id="contact">
        <p>
          If you have some work for me, feel free to contact.
          <span> I am waiting for your call.</span>
        </p>
        <div className="copy-info">
          <div>
            <i className="fa-solid fa-phone"></i>
            <p>(91+) 9735123512</p>
            <i className={icon[0]} onClick={() => handleClick(0)}></i>
          </div>
          <div>
            <i className="fa-solid fa-at"></i>
            <p>ddey230106@gmail.com</p>
            <i className={icon[1]} onClick={() => handleClick(1)}></i>
          </div>
          <div>
            <i className="fa-solid fa-link"></i>
            <p>github.com/debabrata230106</p>
            <i className={icon[2]} onClick={() => handleClick(2)}></i>
          </div>
        </div>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Debabrata Dey | Built and designed by me.</p>
    </section>
  );
}
