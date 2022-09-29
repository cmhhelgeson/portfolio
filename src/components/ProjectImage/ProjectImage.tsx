import React from "react"

import styles from "./ProjectImage.module.css"

type ProjectImageParams = {
    animationOn: boolean
    imgSrc: string
}
  
export const ProjectImage = ({animationOn = false, imgSrc = ""}: ProjectImageParams) => {
    return (
        <div className={styles.project_image_container}>
            <div className={styles.project_image} 
                style={{"backgroundImage": `url(${imgSrc})`}}
            />
        </div>
    );
}