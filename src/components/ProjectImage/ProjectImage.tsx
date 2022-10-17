import React, {useEffect, useRef} from "react"

import styles from "./ProjectImage.module.css"
import {motion} from "framer-motion"

type ProjectImageParams = {
    animationOn: boolean
    imgSrc: string
    scale?: number
}
  
export const ProjectImage = ({animationOn = false, imgSrc = "", scale = 1}: ProjectImageParams) => {
    return (
        <div className={styles.project_image_container}>
            <motion.img src={imgSrc} alt={"Personal Portrait"}/>
        </div>
    )
}