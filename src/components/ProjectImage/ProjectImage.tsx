import React, {useEffect, useRef} from "react"

import styles from "./ProjectImage.module.css"

type ProjectImageParams = {
    animationOn: boolean
    imgSrc: string
    scale?: number
}
  
export const ProjectImage = ({animationOn = false, imgSrc = "", scale = 1}: ProjectImageParams) => {
    return (
        <div className={styles.project_image_container}>
            <img src={imgSrc} alt={"Personal Portrait"}/>
        </div>
    )
}