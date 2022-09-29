import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {GraphQLSVG, GraphQLSVGModified } from './components/GraphQLSVG/GraphQLSVG';
import { GroovySVGModified } from './components/GroovySVG/GroovySVG';
import { FramerSVGModified, FramerSVG} from './components/FramerSVG';
import { ReactSVGModified } from './components/ReactSVG/ReactSVG';
import { CSVGModified } from './components/CSVG'; 


type ProjectImageParams = {
  animationOn: boolean
  imgSrc: string
}

const ProjectImage = ({animationOn = false, imgSrc = ""}: ProjectImageParams) => {
  return (
  <div className="project_image" style={{
    "width": "100%", 
    "height": "90%",
    "flexGrow": 1,
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center"
  }}>
    <div style={{
      "width": "300px",
      "height": "80%",
      "borderRadius": "5px",
      "border": "none",
      "backgroundImage": `url(${imgSrc})`,
      "zIndex": 9
    }} />
    
  </div>
  );
}

type ProjectContentParams =  {
  projectNum: string
  overrideProjectString?: string
  numFontSize?: number,
  projectFontSize?: number
  projectFontSpacing?: number
}

const ProjectNumber = ({
  projectNum, 
  overrideProjectString, 
  numFontSize, 
  projectFontSize,
  projectFontSpacing
}: ProjectContentParams) => {
  return (
    <div className="project_number" style={{
      "position": "relative",
      "height": "90px",
      "width": "292px",
      "display": "flex"

    }}>
      <h1 className="number" style={{
        "position": "absolute",
        "fontSize": numFontSize ? `${numFontSize}px` : "190px",
        "margin": "0px",
        "left": "0px",
        "top": "0px",
        "opacity": 0.2,
        "justifyContent": "center",
      }}>{projectNum}</h1>
      <h1 className="project_string" style={{
        "position": "absolute",
        "left": "0px",
        "fontSize": projectFontSize ? projectFontSize : "20px",
        "letterSpacing": projectFontSpacing ? `${projectFontSpacing}rem` : "0.5rem",
        "opacity": "0.4",
      }}>{overrideProjectString ? overrideProjectString : "PROJECT" }</h1>
      
    </div>
  )

}

const ProjectTitle = (text: string) => {
  return (
    <h2></h2>
  )

}

const ProjectContent = ({
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
  }}>
    <ProjectNumber 
      projectNum={projectNum} 
      overrideProjectString={overrideProjectString}
      numFontSize={numFontSize}
      projectFontSize={projectFontSize}
      projectFontSpacing={projectFontSpacing}/>
    <ProjectTitle text="Intro Text" />

  </div>
  );
}

const ExperienceProjectContent = ({
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
}

const IntroPage = () => {
  return (
  
  <div className="content_container" style={{
    "transform": "translate3d(0, 0, 0)",
    "display": "flex",
    "alignItems": "center"
  }}>
    {/* Change maxHeight here to change top and Bottom Height of content element */}
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
        <ProjectContent 
          projectNum='WELCOME' 
          overrideProjectString='PAGE'
          numFontSize={50}
          projectFontSize={60}/>
      </div>   
    </div>
  </div> 
  );
}

const ExperiencePage = () => {
  return (
    <div className="content_container" style={{
      "transform": "translate3d(0, 0, 0)",
      "display": "flex",
      "alignItems": "center"
    }}>
      {/* Change maxHeight here to change top and Bottom Height of content element */}
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
}


function App() {

  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);

  return (
    <div className="App">
      <div className="projects" style={{
        "width": "auto",
        "height": "100vh",
        "overflow": "hidden",
        "position": "relative",
        "display": "flex",
        "alignItems": "center"
      }}>
        <IntroPage />

      </div>    
    </div>
  );
}

export default App;

/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
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
        <a href="https://isocpp.org/"/>
          <div>
            <CSVGModified />
          </div>
        </header> */
