import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeIn";

interface TabPanelProps {
  children?: React.ReactNode;
}

function TabPanel(props: TabPanelProps) {
  const { children, ...other } = props;

  return (
    <div role="tabpanel" {...other}>
      <Box p={3}>
        <Typography>{children}</Typography>
      </Box>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
  },
  experienceItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  experienceText: {
    flexGrow: 1,
  },
  companyImage: {
    marginLeft: "20px",
    width: "100px",
    height: "100px",
    objectFit: "cover",
  },
}));

const Work: React.FC = () => {
  const classes = useStyles();

  const experienceItems: { [key: string]: { jobTitle: string; duration: string; desc: string[]; techStack: string; image: string; } } = {
    "MOH": {
      jobTitle: "Software Developer Intern @ Ontario Ministry of Health",
      duration: "MAY 2024 - AUG 2024",
      desc: [
        "Working with the data tools team to load data to serve business partners"
      ],
      techStack: "Python, AWS Redshift, Glue, Lambda, EC2, SQL, Docker, Kubernetes",
      image: "assets/moh.png", 
    },
    "UWFE": {
      jobTitle: "Firmware Engineer @ UW Formula Electric",
      duration: "JAN 2024 - CURRENT",
      desc: [
        "Working with the firmware team to test electric components of the car"
      ],
      techStack: "C, STM32, CAN",
      image: "assets/waterlooformulaelectric_logo.jpeg", 
    },
    "Nuvei": {
      jobTitle: "Softwate Engineer Intern @ Nuvei",
      duration: "MAY 2023 - AUG 2023",
      desc: [
        "Working with the risk assessment team to create models to automate client risk assessment"
      ],
      techStack: "Python, MongoDB, Keras, Tensorflow",
      image: "assets/nuvei_logo.jpeg", 
    }
  };

  return (
    <div className={classes.root}>
      {Object.keys(experienceItems).map((key, i) => (
        <div key={i} className={classes.experienceItem}>
          <div className={classes.experienceText}>
            <span className="joblist-job-title">{experienceItems[key]["jobTitle"]}</span>
            <div className="joblist-duration">{experienceItems[key]["duration"]}</div>
            <ul className="job-description">
              {experienceItems[key]["desc"].map((descItem, i) => (
                <FadeInSection key={i} delay={`${i + 1}00ms`}>
                  <li>{descItem}</li>
                </FadeInSection>
              ))}
            </ul>
            <div className="card-tech">
              {experienceItems[key]["techStack"].split(", ").map((item: string, index: number) => (
                <span key={index}>
                  {index > 0 ? " " : ""}
                  <mark>{item}</mark>
                </span>
              ))}
            </div>
          </div>
          <img src={experienceItems[key]["image"]} alt={`${key} logo`} className={classes.companyImage} />
        </div>
      ))}
    </div>
  );
};

export default Work;
