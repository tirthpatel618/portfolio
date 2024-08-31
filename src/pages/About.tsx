import React from "react";
import "../styles/About.css";
import FadeIn from "../components/FadeIn";

interface AboutState {
  expanded: boolean;
  activeKey: string;
}

class About extends React.Component<{}, AboutState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      expanded: true,
      activeKey: "1",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey: string) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    const one = (
      <h1 style={{paddingTop:'15px'}}>Enjoy finding solutions to complex problems and creating meaningful tech.</h1>
    );
    const two = (
      <h2>
        Currently, I have great interest in <span style={{ fontWeight: 'bold', color: 'blue' }}>full-stack</span> development, <span style={{ fontWeight: 'bold', color: 'blue' }}>machine learning</span>, and research.
      </h2>
    );
    const three = (
      <p>
        <span style={{ fontFamily: 'Karla, sans-serif', fontSize: '18px' }}>Recently I've been working with these technologies:</span><br />
        <div className="tech-list">
          <div className="tech-item">Python (Keras, Tensorflow, Flask)</div>
          <div className="tech-item">C/C++</div>
          <div className="tech-item">JavaScript (Node, React, Express)</div>
          <div className="tech-item">TypeScript</div>
          <div className="tech-item">Swift</div>
          <div className="tech-item">AWS (Redshift, Glue, Lambda, EC2, Sagemaker)</div>
          <div className="tech-item">Postgres</div>
          <div className="tech-item">Docker</div>
          <div className="tech-item">Kubernetes</div>
        </div>
      </p>
    );


    return (
      <div id="about" className="about-container">
        <FadeIn delay={`1200ms`}>
          <div className="section-header">
            <span className="section-title">about</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {[two]}
              {[three]}
            </div>
          </div>
        </FadeIn>
      </div>
    );
  }
}

export default About;
