import React from "react";
import coffee from "./css/img/coffee.jpg";
import homered from "./css/img/homered.svg";
import vi from "./css/img/20201015_140633.mp4";
import "./css/Myprojects.css";
function MyProjects() {
  let projectInfo = [
    {
      id: "one",
      projectName: "Books Application",
      projectDescription: "Book Application using json-server",
      projectImg: coffee,
      techStack: ["HTML", "CSS", "Javascript"],
      skillSet: "poi",
    },
    {
      id: "two",
      projectName: "Portfolio Application",
      projectDescription: "Book Application using json-server",
      projectImg: coffee,
      techStack: ["HTML", "CSS", "Javascript", "React js", "Express"],
    },
    {
      id: "three",
      projectName: "TODO Application",
      projectDescription: "Book Application using json-server",
      projectImg: coffee,
      techStack: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "React js",
        "Express",
      ],
    },
  ];

  return (
    <div id="myprojects" className="bg-dark p-5">
      <h1 className="text-bold text-center text-white mb-4">My Projects</h1>
      <div className="row">
        {projectInfo.map((item, id) => (
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4" key={id}>
            <div className="card" style={{ width: "100%" }}>
              <div className="card-header text-center fw-bold">
                {item.projectName}
                <div className="card-img-top">
                  <img
                    src={item.projectImg}
                    className="img-fluid"
                    height="300"
                    width="100%"
                    alt=""
                  />
                </div>
              </div>
              <div className="card-body">
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${item.id}`}
                        aria-expanded="true"
                        aria-controls={`${item.id}`}
                      >
                        Project Information
                      </button>
                    </h2>
                    <div
                      id={`${item.id}`}
                      class="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <p>{item.projectDescription}</p>
                        <ul>
                          {item.techStack.map((element, id) => (
                            <li key={id}>{element}</li>
                          ))}
                        </ul>
                        {item.skillSet ? <p>{item.skillSet}</p> : ""}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-around">
                <a className="btn btn-success" href="https://github.com/">
                  Source Code
                </a>
                <a className="btn btn-success" href={vi}>
                  Watch video
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProjects;
