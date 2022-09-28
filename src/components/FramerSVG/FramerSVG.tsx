import React, {useState} from "react";
import {motion} from "framer-motion"

import styles from "./FramerSVG.module.css"

export const FramerSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="60"
      x="0"
      y="0"
      enableBackground="new 0 0 120 60"
      version="1.1"
      viewBox="0 0 120 60"
      xmlSpace="preserve"
    >
      <path d="M24.2 26.1h10v-9.8H14.4v.1l9.8 9.7z" className={styles.st0}></path>
      <path d="M24.2 26.1h-10v9.8H34v-.1l-9.8-9.7z" className={styles.st1}></path>
      <path d="M14.3 35.8h9.9v9.9l-9.9-9.9z" className={styles.st2}></path>
      <path
        d="M47.8 35.8v-5.4h5.9v-2.5h-5.9v-3.6h6.4v-2.6h-9.3v14h2.9zM61.6 25.6c-.2-.1-.6-.2-1.1-.2-1 0-1.8.5-2.3 1.2v-1h-2.8v10.2h2.8v-6.3c.2-.9 1-1.4 1.9-1.4.5 0 1 .1 1.4.3v-2.8zM71 35.8v-6.5c0-2.4-1.6-3.9-4.3-3.9-2.3 0-4 1.4-4.3 3.3h2.7c.2-.6.7-1 1.5-1 1.1 0 1.7.7 1.7 1.6v.7c-.4-.3-1.4-.6-2.3-.6-2.2 0-3.9 1.3-3.9 3.3 0 2.1 1.7 3.3 3.8 3.3 1.1 0 2.1-.4 2.5-.7v.5H71zM68.3 33c-.3.5-1 .9-1.8.9-.9 0-1.8-.4-1.8-1.3s.9-1.3 1.8-1.3c.8 0 1.6.3 1.8.9v.8zM81 26.7c-.6-.8-1.5-1.3-2.7-1.3-1.1 0-2.1.4-2.6 1.1v-.8h-2.8v10.2h2.8v-6.6c.2-.9.9-1.3 1.6-1.3 1 0 1.4.7 1.4 1.8v6.1h2.8v-6.6c.2-.9.8-1.3 1.6-1.3 1 0 1.5.7 1.5 1.8v6.1h2.8v-6.7c0-2.3-1.3-3.8-3.4-3.8-1.3 0-2.3.6-3 1.3zM95.5 32.5c-.2.9-.9 1.3-1.9 1.3-1.3 0-2.1-.9-2.2-2.4h6.8v-.9c0-3-1.6-5.1-4.6-5.1-2.8 0-4.9 2.3-4.9 5.3 0 3.1 2 5.3 4.9 5.3 2.6 0 4.1-1.4 4.5-3.6h-2.6zm-1.9-4.8c1.2 0 1.8.8 1.8 1.9h-3.9c.3-1.2 1-1.9 2.1-1.9zM105.7 25.6c-.2-.1-.6-.2-1.1-.2-1 0-1.8.5-2.3 1.2v-1h-2.8v10.2h2.8v-6.3c.2-.9 1-1.4 1.9-1.4.5 0 1 .1 1.4.3v-2.8z"
        className={styles.st3}
      ></path>
    </svg>
  );
}

const letterAnimate = {
  x: [0, -9]
}


export const FramerSVGModified = () => {

  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="60"
      x="0"
      y="0"
      enableBackground="new 0 0 120 60"
      version="1.1"
      viewBox="0 0 120 60"
      xmlSpace="preserve"
      initial={{scale: 2.3}}
      onMouseEnter={() => setToggle(true)}
      onMouseLeave={() => setToggle(false)}
      animate={'visible'}
    >
      <motion.path 
        transform="translate(-10, 0)" 
        d="M24.3 26.1h10v-9.8H24.5v.1l8.8 9.7z" 
        className={styles.st0} 
        animate={!toggle ? {} : {rotateY: [0, 30, 60, 90], x: [-10, -8.5, -7, -6.8]}}
        initial={{x: "-10px"}}
        transition={{ease:"easeIn", duration: 0.1}}
      />
      <motion.path 
        style={{transformOrigin: "top", rotateY: 0, transformStyle: "preserve-3d"}}
        d="M24.2 26.1h10v-9.8H23.4v.1v9.8" 
        initial={{transformOrigin: "top", rotateY: 0}}
        className={styles.st0} 
        animate={!toggle ? {} : { 
          x: [0, -10, -10], 
          y: [0, 0, 15],
          rotateZ: [0, -180, -180], 
          rotateX: [0, 0, -90], 
          transformOrigin: "top"}}
        transition={{
          duration: 0.3, 
          delay: 0, 
          ease: "easeIn"}}
        />
      <path 
        d="M24.2 26.1h-10v9.8H34v-.1l-9.8-9.7z" 
        className={styles.st1} 
      />
      <motion.path 
        d="M14.3 35.8h9.9v9.9l-9.9-9.9z" 
        className={styles.st2} 
        animate={!toggle ? {}: {
          rotateX: [0, 90],
          y: [0, -5]
        }}
        transition={{
          type: "spring",
          duration: 0.3, 
          delay: 0.3}}
      />
      <motion.path 
        className={styles.st3} 
        d="M47.8,35.8v-5.4h5.9v-2.5h-5.9v-3.6h6.4v-2.6h-9.3v14H47.8z"
        animate={!toggle ? {} : letterAnimate}
      />
      <motion.path 
        className={styles.st3} 
        d="M61.6,25.6c-0.2-0.1-0.6-0.2-1.1-0.2c-1,0-1.8,0.5-2.3,1.2v-1h-2.8v10.2h2.8v-6.3c0.2-0.9,1-1.4,1.9-1.4
		    c0.5,0,1,0.1,1.4,0.3V25.6z" 
        animate={!toggle ? {} : letterAnimate}
      />
      <motion.path 
        className={styles.st3} 
        d="M71,35.8v-6.5c0-2.4-1.6-3.9-4.3-3.9c-2.3,0-4,1.4-4.3,3.3h2.7c0.2-0.6,0.7-1,1.5-1c1.1,0,1.7,0.7,1.7,1.6V30
		    c-0.4-0.3-1.4-0.6-2.3-0.6c-2.2,0-3.9,1.3-3.9,3.3c0,2.1,1.7,3.3,3.8,3.3c1.1,0,2.1-0.4,2.5-0.7v0.5H71z M68.3,33
		    c-0.3,0.5-1,0.9-1.8,0.9c-0.9,0-1.8-0.4-1.8-1.3c0-0.9,0.9-1.3,1.8-1.3c0.8,0,1.6,0.3,1.8,0.9V33z" 
        animate={!toggle ? {}: letterAnimate}
      />

      <motion.path 
        className={styles.st3} 
        d="M81,26.7c-0.6-0.8-1.5-1.3-2.7-1.3c-1.1,0-2.1,0.4-2.6,1.1v-0.8h-2.8v10.2h2.8v-6.6c0.2-0.9,0.9-1.3,1.6-1.3
		    c1,0,1.4,0.7,1.4,1.8v6.1h2.8v-6.6c0.2-0.9,0.8-1.3,1.6-1.3c1,0,1.5,0.7,1.5,1.8v6.1h2.8v-6.7c0-2.3-1.3-3.8-3.4-3.8
		    C82.7,25.4,81.7,26,81,26.7z" 
        animate={!toggle ? {} : letterAnimate}
      />
      <motion.path 
        className={styles.st3} 
        d="M95.5,32.5c-0.2,0.9-0.9,1.3-1.9,1.3c-1.3,0-2.1-0.9-2.2-2.4h6.8v-0.9c0-3-1.6-5.1-4.6-5.1
		    c-2.8,0-4.9,2.3-4.9,5.3c0,3.1,2,5.3,4.9,5.3c2.6,0,4.1-1.4,4.5-3.6H95.5z M93.6,27.7c1.2,0,1.8,0.8,1.8,1.9h-3.9
		    C91.8,28.4,92.5,27.7,93.6,27.7z" 
        animate={!toggle ? {} : letterAnimate}
      />
      <motion.path 
        className={styles.st3} 
        d="M105.7,25.6c-0.2-0.1-0.6-0.2-1.1-0.2c-1,0-1.8,0.5-2.3,1.2v-1h-2.8v10.2h2.8v-6.3c0.2-0.9,1-1.4,1.9-1.4
		    c0.5,0,1,0.1,1.4,0.3V25.6z" 
        animate={!toggle ? {} : letterAnimate}
      />
    </motion.svg>
  );

}


