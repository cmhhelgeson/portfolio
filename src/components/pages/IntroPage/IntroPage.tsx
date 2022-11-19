import React from "react"
import styles from "./IntroPage.module.css"

import {motion} from "framer-motion"

import { ProjectImage } from "../../ProjectImage"
import { ProjectContent} from "../../ProjectContent"
import { JsxElement } from "typescript"
import { ReactElement } from "react"


export type IntroPageProps = {
  key: number,
  page?: number
  text: string
  projectNum: string,
  imgSrc: string,
  titleText: string,
  overrideProjectString?: string,
  variants: any
  custom: number, 
  initial: string,
  animate: any,
  exit: any
  htmlElements?: JSX.Element,
}

export const IntroPage = ({
  key, 
  page,
  text, 
  titleText,
  projectNum, 
  imgSrc, 
  overrideProjectString, 
  variants,
  initial, 
  custom,
  animate,
  exit,
  htmlElements
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
      x: { type: "spring", stiffness: 300, damping: 30, duration: 0.2 },
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
          text={text}
          titleText={titleText}
          contentTopPadding={page === 0 ? "200px" : "0px"}
          bold={key === 1 ? true : false}
          htmlElements={htmlElements}/>
      </div>   
    </motion.div>
  </motion.div> 
  );
}

/*style={{"transition": "opacity 0.8s ease 0.8s"}}
        transition={{duration: 2}}
        exit={{opacity: 0}} */