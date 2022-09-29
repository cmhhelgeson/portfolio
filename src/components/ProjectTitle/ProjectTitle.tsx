import React from "react"

import styles from "./ProjectTitle.module.css"

type ProjectTitleParams = {
    title: string,
    color?: string,
    opacity?: string
}
  
export const ProjectTitle = ({title, color, opacity}: ProjectTitleParams) => {
    return (
        <h2 className={styles.project_title}
            style={{
                "color": color ? color : "black",
                "opacity": opacity ? opacity : 1
            
        }}>
            {title}
      </h2>
    );
}