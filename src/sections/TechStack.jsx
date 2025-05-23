import React from "react";
import TitleHeader from "../components/TitleHeader";
import { techStackIcons, techStackImgs } from "../constants";
import TechIcon from "../components/Models/TechLogos/TechIcon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TechStackIcons_3D = () => (
  <>
    {techStackIcons.map((icon) => (
      <div
        key={icon.name}
        className="card-border tech-card overflow-hidden group xl:rounded-4xl rounded-lg"
      >
        <div className="tech-card-animated-bg" />
        <div className="tech-card-content">
          <div className="tech-icon-wrapper">
            <TechIcon model={icon} />
          </div>

          <div className="padding-x w-full select-none">
            <p>{icon.name}</p>
          </div>
        </div>
      </div>
    ))}
  </>
);

const TechStackIcons_2D = () => (
  <>
    {techStackImgs.map((icon) => (
      <div
        key={icon.name}
        className="card-border tech-card overflow-hidden group xl:rounded-4xl rounded-lg"
      >
        <div className="tech-card-animated-bg" />
        <div className="tech-card-content">
          <div className="tech-icon-wrapper select-none">
            <img src={icon.imgPath} alt={icon.name} />
          </div>

          <div className="padding-x w-full select-none">
            <p>{icon.name}</p>
          </div>
        </div>
      </div>
    ))}
  </>
);

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { opacity: 0 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Preferred Tech Stack"
          sub="🤝 The Skills I Bring to the Table"
        />
        <div className="tech-grid">
          <TechStackIcons_3D />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
