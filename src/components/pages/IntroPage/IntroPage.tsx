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
  titleText?: string,
  overrideProjectString?: string,
  variants: any
  custom: number, 
  initial: string,
  animate: any,
  exit: any
}

export const IntroPage = ({
  key, 
  text, 
  projectNum, 
  imgSrc, 
  overrideProjectString, 
  variants,
  initial, 
  custom,
  animate,
  exit
}: IntroPageProps) => {

  return (
  
  <motion.div className={styles.content_container} 
    key={key}
    variants={variants}
    initial={initial}
    animate={animate}
    custom={custom}
    exit={exit}
    transition={{
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 }
    }}
  >
    <motion.div className={styles.content} > 
      <div className={styles.inner_area}>
        <ProjectImage 
          animationOn={false} 
          imgSrc={imgSrc}
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

/*style={{"transition": "opacity 0.8s ease 0.8s"}}
        transition={{duration: 2}}
        exit={{opacity: 0}} */