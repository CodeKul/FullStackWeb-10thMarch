import React from "react";
import skillImg from "./css/img/skills1.svg";
function Skills() {
  let skills = [
    {
      skillName: "HTML",
      skillPercent: "60%",
    },
    {
      skillName: "CSS",
      skillPercent: "50%",
    },
    {
      skillName: "Javascript",
      skillPercent: "70%",
    },
    {
      skillName: "React JS",
      skillPercent: "60%",
    },
    {
      skillName: "Bootstrap",
      skillPercent: "50%",
    },
    {
      skillName: "Core Java",
      skillPercent: "70%",
    },
    {
      skillName: "Spring Boot",
      skillPercent: "70%",
    },
    {
      skillName: "MongoDB",
      skillPercent: "40%",
    },
    {
      skillName: "MySQL",
      skillPercent: "40%",
    },
  ];
  return (
    <div id="skills" className="bg-dark text-white pt-5 pb-5">
      <div className="skills-img">
        <div className="row">
          <img src={skillImg} alt="" height="350" width="350" />
          <h1 className="text-center text-bold">My Skills</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {skills.map((item, id) => (
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4">
              <div className="skill-text">
                <h5 className="text-white text-bold">{item.skillName}</h5>
              </div>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{
                    width: `${item.skillPercent}`,
                    backgroundColor: "#B91A6D",
                  }}
                  aria-valuenow={item.skillPercent}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {item.skillPercent}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
