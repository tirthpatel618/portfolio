import React from 'react';
import FadeIn from "../components/FadeIn";
import '../styles/Footer.css';
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const Footer: React.FC = () => {
  return (
    <footer className='foot' id='footer'>
      <div className='footer-container'>
        <div className='footer-text'>
          <div className='footer-title'>
            <FadeIn>
              <p>LET'S BUILD SOMETHING CREATIVE.</p>
              <p style={{ lineHeight: '1.3' }}>Have a question? Want to chat? <br /> Feel free to send me a message.</p>
            </FadeIn>   
          </div>
          <div>
            <div className="links-container" style={{ color: 'white' }}>
              <FadeIn delay={`200ms`}>
                <a href="mailto:t83patel@uwaterloo.ca">
                  <EmailRoundedIcon style={{ fontSize: 20, marginRight: '5px' }} />
                </a>
                <a href="https://github.com/tirthpatel618">
                  <GitHubIcon style={{ fontSize: 19, marginRight: '5px' }} />
                </a>
                <a href="https://www.linkedin.com/in/tirthpatel618">
                  <LinkedInIcon style={{ fontSize: 21 }} />
                </a>
              </FadeIn>   
            </div>  
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
