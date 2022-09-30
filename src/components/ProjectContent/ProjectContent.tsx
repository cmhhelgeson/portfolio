import React from "react";

import styles from "./ProjectContent.module.css"
import {ProjectTitle} from "../ProjectTitle"
import {ProjectParagraph} from "../ProjectParagraph"



export type LinkInfo = {
    isLink?: true,
    linkSource: string,
}

export type ProjectContentParams = {
    projectNum: string
    text: string
    overrideProjectString?: string
    numFontSize?: number
    projectFontSize?: number
    projectFontSpacing?: number,
    linkInfo?: LinkInfo
}

export type ProjectNumberParams = Omit<ProjectContentParams, "text">


export const ProjectNumber = ({
    projectNum, 
    overrideProjectString, 
    numFontSize, 
    projectFontSize,
    projectFontSpacing,
  }: ProjectNumberParams) => {
    return (
      <div className={styles.project_number}>
        <h1 className={styles.number} style={{
          "fontSize": numFontSize ? `${numFontSize}px` : "190px",
        }}>
            {projectNum}
        </h1>
        <h1 className="project_string" style={{
          "fontSize": projectFontSize ? `${projectFontSize}px` : "20px",
          "letterSpacing": projectFontSpacing ? `${projectFontSpacing}rem` : "0.5rem",
        }}>
            {overrideProjectString ? overrideProjectString : "PROJECT" }
        </h1>   
      </div>
    )
}



export const ProjectContent = ({
    projectNum, 
    text,
    overrideProjectString, 
    numFontSize, 
    projectFontSize, 
    projectFontSpacing,
    linkInfo,
  }: ProjectContentParams) => {
    return (
    <div className={styles.project_content}>
    
      <ProjectNumber 
        projectNum={projectNum} 
        overrideProjectString={overrideProjectString}
        numFontSize={numFontSize}
        projectFontSize={projectFontSize}
        projectFontSpacing={projectFontSpacing}/>
      <ProjectTitle title="Introduction" color="white" opacity="0.4"/>
      <ProjectParagraph text={text}/>
      {linkInfo ? <h3>Link</h3> : null}
  
    </div>
    );
}