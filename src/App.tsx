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
    text: "I'm a recent Johns Hopkins Graduate with professional experience in Front-End React Development, Backend Development with Java Spring/Groovy/SQL, and cybersecurity research. For three years, I've been working to learn leading technologies and perfect my understanding of foundational algorithms and software engineering practicesAs a developer with experience working under both AGILE and SCRUM frameworks, I can be counted on to adapt to any work environment, contribute collaboratively, and be a pervasive promoter of my team's ideas.",
  }, 
  {
    key: 1, 
    imgSrc: backgroundImageTwo, 
    projectNum: "Experience",
    overrideProjectString: "With", 
    titleText: "",
    text: "Current Experience includes: $cmh Software Engineer Intern: (Institutional Cash Distributors$cmhQuality Assurance Engineer:  (Dispute Dyanmics$cmhMetadata Analyst:  (Samba TV"
  }, 
  {
    key: 2,
    imgSrc: backgroundImageThree,
    projectNum: "01", 
    titleText: "",
    text: "Coming soon"
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

  const isSmall = useMediaQuery('(max-width: 780px)');

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, 1]);
  }

  return (
    <div className="App">
      <header style={{marginBottom: "0px"}}>
      <h1 style={{marginBottom: "0px"}}>Christian Helgeson Portfolio</h1>
      </header>

      <div className="projects">
        <AnimatePresence initial={false} custom={direction}>
          {<IntroPage 
            key={page} 
            imgSrc={pageInfo[page].imgSrc}
            text={pageInfo[page].text}
            projectNum={pageInfo[page].projectNum}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            titleText={pageInfo[page].titleText}
            variants={variants}
        />}
        </AnimatePresence>
      </div>  
      {page < 2 ? <div className="next_arrow" onClick={() => paginate(1)}/> : null}
      {page > 0 ? <div className="prev_arrow" onClick={() => paginate(-1)}/> : null}
      <footer className="svg_footer" style={{"backgroundColor": "#a7e0e3"}}>
        <div className='svg_container'>
          <div>
            <ReactSVGModified marginLeft={-125}/>
          </div>
          <div>
            {isSmall ? <GraphQLSVGModified marginTop={125} marginLeft={-125}/> : <GraphQLSVGModified marginLeft={-150}/>}
          </div>
          <div>
            {isSmall ? <FramerSVGModified marginTop={225} marginLeft={-125}/> : <FramerSVGModified marginLeft={-175} />}
          </div>
          <div>
            {isSmall ? <GroovySVGModified marginTop={325} marginLeft={-135}/> : <GroovySVGModified marginLeft={-200}/>}
          </div>
          <div>
            {isSmall ? <CSVGModified marginTop={325} marginLeft={-140}/> : <CSVGModified marginLeft={-225}/> }
          </div>
        </div>
      </footer>
    </div>
  );
  
}

export default App;

