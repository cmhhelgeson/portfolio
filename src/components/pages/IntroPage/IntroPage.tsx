import React from "react"
import styles from "./IntroPage.module.css"

import {motion} from "framer-motion"

import { ProjectImage } from "../../ProjectImage"
import { ProjectContent } from "../../ProjectContent"

import backgroundImage from "../../../imgs/me.jpg"

const IntroText = "I'm a recent Johns Hopkins Graduate with professional experience in Front-End React Development, Backend Development with Java Spring/Groovy/SQL, and cybersecurity research. For three years, I've been working to learn leading technologies and perfect my understanding of foundational algorithms and software engineering practicesAs a developer with experience working under both AGILE and SCRUM frameworks, I can be counted on to adapt to any work environment, contribute collaboratively, and be a pervasive promoter of my team's ideas."


export type IntroPageProps = {
  key: number,
  text: string,
  projectNum: string,
  imgSrc: string,
  overrideProjectString?: string,
}

export const IntroPage = ({key, text, projectNum, imgSrc, overrideProjectString}: IntroPageProps) => {

  return (
  
  <motion.div className={styles.content_container} 
    key={key}
    exit={{y: [0, -650], opacity: [1, 0]}}
  >
    <motion.div className={styles.content} 
        style={{"transition": "opacity 0.8s ease 0.8s"}}
        transition={{duration: 2}}
        exit={{opacity: 0}}
    > 
      <div className={styles.inner_area}>
        <ProjectImage 
          animationOn={false} 
          imgSrc={backgroundImage}
        />
        <ProjectContent 
          projectNum={projectNum} 
          overrideProjectString={overrideProjectString}
          numFontSize={50}
          projectFontSize={60}
          text={text}/>
      </div>   
    </motion.div>
  </motion.div> 
  );
}