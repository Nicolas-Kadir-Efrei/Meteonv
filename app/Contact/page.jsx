"use client";

import ColorSchemesExample from "../components/Navbar";

const pfp = '/assets/img/png.jpg';

export default function Contact() {
  const handleClickLinkedin = (event) => {
    event.preventDefault();
    window.open('https://www.linkedin.com/in/nicolas-kadir-ciftci/', '_blank');
  };

  const handleClickGithub = (event) => {
    event.preventDefault();
    window.open('https://github.com/Nicolas-Kadir-Efrei', '_blank');
  };

  return (
    <div>
      <div>
        <ColorSchemesExample/>
      </div>
      <div className="titre-contact">
        <img src={pfp} className="pfpbg"/>
    <div className="couleur2">
        <h1>Linkedin: <button className="ARHARHARH" onClick={handleClickLinkedin}><h2>Appuie</h2></button></h1>
        <h1>Github: <button className="ARHARHARH" onClick={handleClickGithub}><h2>Appuie</h2></button></h1>
    </div>
      </div>
    </div>
  );
}