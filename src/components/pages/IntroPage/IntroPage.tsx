import React from "react"
import styles from "./IntroPage.module.css"

import {motion} from "framer-motion"

import { ProjectImage } from "../../ProjectImage"
import { ProjectContent } from "../../ProjectContent"


export const IntroPage = () => {
  return (
  
  <motion.div className={styles.content_container} style={{
    "transform": "translate3d(0, 0, 0)",
    "display": "flex",
    "alignItems": "center"
  }} 
    key="terrible"
    exit={{y: -200, opacity: 0}}
  >
    <motion.div className={styles.content} 
        style={{"transition": "opacity 0.8s ease 0.8s"}}
        transition={{duration: 2}}
        exit={{opacity: 0}}
    > 
      <div className={styles.inner_area}>
        <ProjectImage 
          animationOn={false} 
          imgSrc="https://uploads.codesandbox.io/uploads/user/18c9a4ff-aa49-4ab6-9c26-e1b1b21260f8/U5u--bibi-pace-Hi4fWKU2KSk-unsplash.jpg"
        />
        <ProjectContent 
          projectNum='WELCOME' 
          overrideProjectString='PAGE'
          numFontSize={50}
          projectFontSize={60}/>
      </div>   
    </motion.div>
  </motion.div> 
  );
}