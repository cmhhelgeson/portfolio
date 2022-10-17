import React, {useState} from 'react';
import './App.css';
import { AnimatePresence} from 'framer-motion';
import {IntroPage} from "./components/pages/IntroPage"

import { IntroPageProps } from './components/pages/IntroPage';

import backgroundImageOne from "./imgs/me.jpg"
import backgroundImageTwo from "./imgs/code.webp"
import backgroundImageThree from "./imgs/leaves.webp"
import { ReactSVGModified } from './components/ReactSVG/ReactSVG';
import { GraphQLSVGModified } from './components/GraphQLSVG';
import { FramerSVGModified } from './components/FramerSVG';
import { GroovySVGModified } from './components/GroovySVG';
import { CSVGModified } from './components/CSVG';
import { useMediaQuery } from './utils/useMediaQuery';
import { ReduxSVG, ReduxSVGModified } from './components/ReduxSVG';


const PageOne = () => {
  return (
    <div>
      <i>Welcome to my portfolio!</i>
      <p>I'm a recent Johns Hopkins Graduate with professional experience in Front-End React Development, Backend Development with Java Spring/Groovy/SQL, and cybersecurity research. </p>
      <p>For three years, I've been working to learn leading technologies and perfect my understanding of foundational algorithms and software engineering practices. </p>
      <p>As a developer with experience working under both AGILE and SCRUM frameworks, I can be counted on to adapt to any work environment, contribute collaboratively, and be a pervasive promoter of my team's ideas.</p>
    </div>

  )
}


const PageTwo = () => {
  return (
    <div>
    <p>
      <b>Institutional Cash Distributors (ICD)</b>
      <i>- Golden, Colorado </i>
      <br></br>
      Software Engineer Intern
      <br></br>
      <br></br>
      Increased code coverage for Front-end React components from 40% to over 60%
      <br></br>
      <br></br>
      Implemented features to frontend and backend systems using the Groovy+Grails stack
    </p>
    <p>
      <b>Dispute Dynamics</b>
      <i> Laguna Niguel, California </i>
      <br></br>
      QA Assistant
      <br></br>
      <br></br>
      Tested survey creation system and distrubtion system across multiple Mac and iPad Applications
      <br></br>
      <br></br>
      Modified aging VBA application to work on modern hardware
    </p>
    <p>
      <b>Samba TV</b>
      <i> Reno, Nevada (Remote) </i>
      <br></br>
      Metadata Analyst. 
      <br></br>
      Improved overall performance of the metadata team through efficient analysis of commercial media from across the world
    </p>
    </div>
  )
}

const PageThree = () => {
  return (
    <div>
      <p>A Work-In-Progress Simple Software Renderer built with React and the canvas</p>
      <b>Currently Implemented: </b>
      <br></br>
      <br></br>
      Basic Data Structures (3D Vectors, UV Vectors, Matrices)
      <br></br>
      Camera Projection, Face Culling, Simple Lighting
      <br></br>
      Asynchronous Obj Loading and Parsing
      <br></br>
      <br></br>
      <b>TODO: </b>
      <br></br>
      <br></br>
      Z-Buffer
      Performance
      Texture Mapping
      Goraud Shading
      Normal Mapping
      <br></br>
      <br></br>
      <a href="https://github.com/cmhhelgeson/3D-in-Browser">LINK TO PROJECT</a>
    </div>
  );
}


const pageInfo: Omit<IntroPageProps, 
  "variants" | 
  "custom" | 
  "initial" | 
  "exit" | 
  "transition" | 
  "animate">[] = [
  {
    key : 0, 
    imgSrc: backgroundImageOne, 
    projectNum: "Welcome",
    overrideProjectString: "Page",
    titleText: "Introduction",
    text: "",
    htmlElements: PageOne(),
  }, 
  {
    key: 1, 
    imgSrc: backgroundImageTwo, 
    projectNum: "Job",
    overrideProjectString: "Experience", 
    titleText: "at: ",
    htmlElements: PageTwo(),
    text: ""
  }, 
  {
    key: 2,
    imgSrc: backgroundImageThree,
    projectNum: "01", 
    titleText: "Software Rendering",
    text: "",
    htmlElements: PageThree()
  },
  {
    key: 3,
    imgSrc:  "",
    projectNum: "02",
    titleText: "Leetcode Examples",
    text: "Yo"
  }
]







const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000: -1000,
      opacity: 1,
    };
  }, 
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : 0,
      opacity: 0,
    }
  }
}


function App() {

  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  const isSmallWidth = useMediaQuery('(max-width: 780px)');
  const isSmallHeight = useMediaQuery('(max-height: 800px)')


  const paginate = (newDirection: number) => {
    setPage([page + newDirection, 1]);
  }

  return (
    <div className="App">
      <header style={{marginBottom: "0px"}}>
      </header>

      <div className="projects">
        <AnimatePresence initial={false} custom={direction}>
          {<IntroPage 
            key={page} 
            overrideProjectString={pageInfo[page].overrideProjectString}
            imgSrc={pageInfo[page].imgSrc}
            text={pageInfo[page].text}
            projectNum={pageInfo[page].projectNum}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            titleText={pageInfo[page].titleText}
            variants={variants}
            htmlElements={pageInfo[page].htmlElements}
        />}
        </AnimatePresence>
      </div>  
      {page < pageInfo.length - 1 ? <div className="next_arrow" onClick={() => paginate(1)}/> : null}
      {page > 0 ? <div className="prev_arrow" onClick={() => paginate(-1)}/> : null}
      <footer className="svg_footer" style={{"backgroundColor": "#a7e0e3"}}>
        <div className='svg_container'>
          <div>
            <ReactSVGModified marginLeft={-125} marginTop={isSmallHeight ? -2 : 0}/>
          </div>
          <div>
            {isSmallWidth ? 
              <GraphQLSVGModified marginTop={125} marginLeft={-125}/> : 
              <GraphQLSVGModified marginLeft={-150} marginTop={isSmallHeight ? -2 : 0}/>}
          </div>
          <div>
            {isSmallWidth ? <FramerSVGModified marginTop={225} marginLeft={-125}/> : <FramerSVGModified marginLeft={-175} marginTop={isSmallHeight ? -2 : 0}/>}
          </div>
          <div>
            {isSmallWidth ? <GroovySVGModified marginTop={325} marginLeft={-135}/> : <GroovySVGModified marginLeft={-200} marginTop={isSmallHeight ? -2 : 0}/>}
          </div>
          <div>
            {isSmallWidth ? <CSVGModified marginTop={325} marginLeft={-140}/> : <CSVGModified marginLeft={-225} marginTop={isSmallHeight ? -106 : -97}/> }
          </div>
        </div>
      </footer>
    </div>
  );
  
}

export default App;

