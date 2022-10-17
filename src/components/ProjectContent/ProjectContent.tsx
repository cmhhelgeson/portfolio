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
    titleText: string,
    overrideProjectString?: string
    numFontSize?: number
    projectFontSize?: number
    projectFontSpacing?: number,
    linkInfo?: LinkInfo,
    bold?: boolean
    htmlElements?: JSX.Element
}

export type ProjectNumberParams = Omit<ProjectContentParams, "text" | "titleText">


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
    titleText,
    overrideProjectString, 
    numFontSize, 
    projectFontSize, 
    projectFontSpacing,
    linkInfo,
    bold,
    htmlElements
  }: ProjectContentParams) => {

    //const separatedText = text.split("$cmh");

    return (
    <div className={styles.project_content}>
    
      <ProjectNumber 
        projectNum={projectNum} 
        overrideProjectString={overrideProjectString}
        numFontSize={numFontSize}
        projectFontSize={projectFontSize}
        projectFontSpacing={projectFontSpacing}/>
      <ProjectTitle title={titleText} color="white" opacity="0.4"/>
      {text}
      {htmlElements}
      {linkInfo ? <h3>Link</h3> : null}
  
    </div>
    );
}
