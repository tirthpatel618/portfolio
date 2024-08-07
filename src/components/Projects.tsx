import { Component } from "react";
import "../styles/Projects.css";
import FadeIn from "./FadeIn";
import ExternalLinks from "./ExternalLinks";

interface ProjectsState {
  expanded: boolean;
  activeKey: string;
}

class Projects extends Component<{}, ProjectsState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey: string) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const projects: any = {
      "ForexTrader": {
        desc:
          "A dynamic trading platoform utilizing a DNN to predict forex trends and make trades.",
        techStack: "Python, Tensorflow, Keras, OANDA API",
        link: "https://github.com/tirthpatel618/FOREXtrading",
        open: "",
        image: "/assets/forex.jpeg" // Add image path here
      },
      "TV Reference Cyclic Paradox Finder": {
        desc:
          "A web-app that finds cyclic paradoxes in TV shows by analyzing the script and character interactions.",
        techStack: "Python, React, typescript, ",
        link: "https://github.com/tirthpatel618/Cyclic-TV-Paradox-Finder", 
        open: "",
        image: "/assets/paradox.png" // Add image path here
      },
      "Basketball Form Corrector": {
        desc:
          "A python script that uses a DNN to analyze basketball shooting form and provide feedback to the user.",
        techStack: "Python, Tensorflow, Keras",
        link:
          "https://github.com/tirthpatel618/Form_corrector",
        image: "/assets/freethrow.png" 
      },
      "Login Code Generatoe Web Extension": {
        desc:
          "A Safari web extension that generates login codes for websites that require 2FA.",
        techStack: "Swift, Javascript",
        link: "https://github.com/tirthpatel618/Login-Automator-Extension",
        open: "",
        image: "/assets/codegen.png" 
        }
        };

    return (
      <div id="projects" >
      <div className="section-header">
        <FadeIn>
        <span className="section-title">projects</span>
        </FadeIn>
      </div>
      <div>
        <div className="project-container" style={{ width: "850px", paddingTop:'10px' }}>
        <FadeIn>
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeIn delay={`${i + 1}00ms`} key={i}>
                <li className="projects-card">
                <img src={projects[key]["image"]} alt={key} style={{ maxWidth: "400px", height: "240px" }}/> {/* Add image here */}
                  <div className="card-header">
                    <div className="folder-icon">
                    <div className="card-title">{key}</div>
                    </div>
                    <ExternalLinks 
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">
                    {projects[key]["techStack"].split(", ").map((item: string, index: number) => (
                      <span key={index}>
                        {index > 0 ? " " : ""}
                        <mark>{item}</mark>
                      </span>
                    ))}
                  </div>
                </li>
              </FadeIn>
            ))}
          </ul>
          </FadeIn>
        </div>
      </div>
      </div>
    );
  }
}

export default Projects;
