import React, {useState} from 'react';
import './App.css';
import { AnimatePresence} from 'framer-motion';
import {IntroPage} from "./components/pages/IntroPage"

import { IntroPageProps } from './components/pages/IntroPage';

import backgroundImageOne from "./imgs/me.jpg"


const pageInfo: IntroPageProps[] = [
  {
    "key": 0, 
    "imgSrc": "../../"
  }
]




/* const ExperienceProjectContent = ({
  projectNum, 
  overrideProjectString, 
  numFontSize, 
  projectFontSize, 
  projectFontSpacing
}: ProjectContentParams) => {
  return (
    <div className='project_content' style={{
      "width": "100%",
      "height": "100%",
      "flexGrow": 1,
      "padding": "6rem 2 rem",
      "display": "flex",
      "flexDirection": "column",
      "justifyContent": "center"
    }}>
      <ProjectNumber 
        projectNum={projectNum} 
        overrideProjectString={overrideProjectString}
        numFontSize={numFontSize}
        projectFontSize={projectFontSize}
        projectFontSpacing={projectFontSpacing}
    />
      <div className="experience_with">
      <a href="https://graphql.org/">
          <div style={{margin: "50px"}}>
            <GraphQLSVGModified/>
          </div>
        </a>
        <a href="https://groovy-lang.org/">
          <div style={{margin: "50px"}}>
            <GroovySVGModified/>
          </div>
        </a>
        <a href="https://www.framer.com/motion/">
          <div style={{margin: "50px"}}>
            <FramerSVGModified/>
          </div>
        </a>
        <a href="https://reactjs.org/">
          <div style={{margin: "50px"}}>
            <ReactSVGModified />
          </div>
        </a>
        <a href="https://isocpp.org/">
          <div>
            <CSVGModified />
          </div>
        </a>
      </div>
  </div>
  );
} */


/* const ExperiencePage = () => {
  return (
    <div className="content_container" style={{
      "transform": "translate3d(0, 0, 0)",
      "display": "flex",
      "alignItems": "center"
    }}>
      <div className="content" style={{
        "opacity": 1, 
        "height": "100vh",
        "maxHeight": "800px",
        "width": "80vw",
        "paddingLeft": "140px",
        "transition": "opacity 0.8s ease 0.8s",
        "userSelect": "none",
      }}> 
        <div className="inner_area" style={{
          "paddingLeft": "4em",
          "height": "100%",
          "display": "flex",
          "alignItems": "center",
          "justifyContent": "center"
        }}>
          <ProjectImage 
            animationOn={false} 
            imgSrc="https://uploads.codesandbox.io/uploads/user/18c9a4ff-aa49-4ab6-9c26-e1b1b21260f8/U5u--bibi-pace-Hi4fWKU2KSk-unsplash.jpg"
          />
          <ExperienceProjectContent 
            projectNum='EXPERIENCE' 
            overrideProjectString='WTIH'
            numFontSize={50}
            projectFontSize={60}/>
        </div>   
      </div>
  </div> 
  );
} */


const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000: -1000,
      opacity: 0,
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
      x: direction < 0 ? 1000 : -1000,
    }
  }
}


function App() {

  const [page, setPage] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);

  return (
    <div className="App">
      <header>

      </header>
      <div className="projects">
        <AnimatePresence>
          <IntroPage />
        </AnimatePresence>
        <button onClick={() => setPage(1)} />
        <AnimatePresence />
      </div>    
    </div>
  );
}

export default App;

