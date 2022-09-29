import React from "react";

type ProjectParagraphParams = {
    text: string,
    color?: string,
    opacity?: string
}

export const ProjectParagraph = ({
    text, 
    color, 
    opacity
}: ProjectParagraphParams) => {
    return (
        <p style={{
            "color": color ? color: "black", 
            "opacity": opacity ? opacity : 1
        }}>
            {text}
        </p>
    )
}