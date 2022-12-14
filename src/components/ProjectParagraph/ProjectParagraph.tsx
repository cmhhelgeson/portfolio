import React from "react";

import styles from "./ProjectParagraph.module.css"

type ProjectParagraphParams = {
    text: string,
    color?: string,
    opacity?: string
    fontSize?: number,
    bold: boolean
}

export const ProjectParagraph = ({
    text, 
    color, 
    opacity,
    fontSize,
    bold
}: ProjectParagraphParams) => {
    return (
        <p className={styles.project_paragraph}
            style={{
                "color": color ? color: "black", 
                "opacity": opacity ? opacity : 1,
                "margin": "20px",
                "padding": "10px"
            }}
        >
            {text}
        </p>
    )
}