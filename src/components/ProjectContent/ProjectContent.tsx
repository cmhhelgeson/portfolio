import React from "react";

import styles from "./ProjectContent.module.css"
import {ProjectTitle} from "../ProjectTitle"
import {ProjectParagraph} from "../ProjectParagraph"


export type ProjectContentParams = {
    projectNum: string
    overrideProjectString?: string
    numFontSize?: number
    projectFontSize?: number
    projectFontSpacing?: number
}


export const ProjectNumber = ({
    projectNum, 
    overrideProjectString, 
    numFontSize, 
    projectFontSize,
    projectFontSpacing
  }: ProjectContentParams) => {
    return (
      <div className={styles.project_number}>
        <h1 className={styles.number} style={{
          "fontSize": numFontSize ? `${numFontSize}px` : "190px",
        }}>
            {projectNum}
        </h1>
        <h1 className="project_string" style={{
          "fontSize": projectFontSize ? projectFontSize : "20px",
          "letterSpacing": projectFontSpacing ? `${projectFontSpacing}rem` : "0.5rem",
        }}>
            {overrideProjectString ? overrideProjectString : "PROJECT" }
        </h1>   
      </div>
    )
}

export const ProjectContent = ({
    projectNum, 
    overrideProjectString, 
    numFontSize, 
    projectFontSize, 
    projectFontSpacing
  }: ProjectContentParams) => {
    return (
    <div className={styles.project_content}>
      <ProjectNumber 
        projectNum={projectNum} 
        overrideProjectString={overrideProjectString}
        numFontSize={numFontSize}
        projectFontSize={projectFontSize}
        projectFontSpacing={projectFontSpacing}/>
      <ProjectTitle title="Intro"/>
      <ProjectParagraph text="sfhsfhdsufdsf sdfsd" />
  
    </div>
    );
}