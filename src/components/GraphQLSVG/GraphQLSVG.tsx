import React, {useState} from "react";
import {motion} from "framer-motion"
import { GraphQLLogoPoint } from "./GraphQLLogoPoint";


const hexPathTop = 
    "0-2.915-1.303-2.915-2.915s1.306-2.915 2.915-2.915 2.915 1.303 2.915 2.915a2.91 2.91 0 0 1-2.915 2.915"

const hexPathBottom = "0-2.915-1.303-2.915-2.915s1.306-2.915 2.915-2.915 2.915 1.303 2.915 2.915a2.92 2.92 0 0 1-2.915 2.915m0-26.882c-1.612"

const hexPathTopRight = "1.395-.802" + "3.174-.326" + "3.985 1.07.802" + "1.395.326 3.174-1.07 3.985a2.92 2.92 0 0 1-3.985-1.069m-9.117 21.62c-1.612"



type ArrLength6<T> = [T, T, T, T, T, T];


export const GraphQLSVG = () => {
    return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="60"
          fill="#e10098"
          viewBox="0 0 112.498 56.249"
        >
          <path d="M44.424 21.18q-.8 0-1.46.213-.64.196-1.122.66-.463.445-.748 1.158-.267.712-.303 1.7-.056 1.603 0 3.206.036.997.303 1.7.285.712.748 1.176.48.445 1.122.66.66.196 1.46.196.786 0 1.46-.213.674-.232 1.158-.674.5-.463.786-1.176.285-.712.285-1.674v-.908H45.01q-.392 0-.392-.4v-.25q0-.4.392-.4h3.81q.4 0 .4.4v1.567q0 1.07-.32 1.96-.32.873-.944 1.516-.605.64-1.516.997-.9.338-2.03.338-1.158 0-2.03-.338-.873-.356-1.478-.98-.588-.623-.908-1.478-.303-.873-.338-1.924-.036-.8-.036-1.692 0-.9.036-1.692.036-1.05.356-1.906.32-.873.908-1.496.605-.623 1.478-.962.873-.356 2.012-.356 1.23 0 2.102.374.873.374 1.425.9.552.517.82 1.087.267.57.285.944.018.16-.09.267-.107.09-.285.09h-.392q-.16 0-.232-.07-.07-.09-.142-.285-.142-.4-.4-.8-.25-.4-.674-.712-.427-.32-1.015-.517-.588-.196-1.39-.196zm8.408 3.543q.64-1.23 2.422-1.23h.66q.392 0 .392.392v.25q0 .392-.392.392h-.766q-1.07 0-1.692.623-.623.623-.623 1.692v5.52q0 .178-.125.285-.107.107-.285.107h-.285q-.392 0-.392-.392v-8.46q0-.178.107-.285.107-.125.285-.125h.285q.178 0 .285.125.125.107.125.285v.82zm11 8.036q-.392 0-.392-.392v-.837q-.16.25-.427.5-.25.25-.623.445-.374.196-.9.32-.517.142-1.21.142-.64 0-1.23-.196-.57-.213-1.015-.57-.427-.356-.694-.837-.25-.48-.25-1.05 0-.605.25-1.087.267-.48.73-.837.463-.374 1.104-.605.66-.25 1.443-.356l2.814-.392v-.623q0-.962-.588-1.496-.57-.534-1.834-.534-.997 0-1.55.392-.534.374-.674.82-.07.213-.178.303-.09.07-.25.07h-.25q-.16 0-.285-.107-.107-.125-.107-.285 0-.25.178-.623.178-.374.57-.73.4-.356 1.033-.605.623-.267 1.516-.267 1.05 0 1.728.285.694.285 1.087.748.392.445.534.997.16.552.16 1.087v5.93q0 .392-.392.392h-.303zm-3.366-.855q.605 0 1.14-.196.552-.213.962-.623.4-.4.64-1.033.232-.623.232-1.46v-.605l-2.297.32q-2.956.4-2.956 1.888 0 .445.196.766.213.32.534.534.32.213.73.32.4.09.82.09zm10.956 1.033q-1.122 0-1.834-.4t-1.158-.997v4.22q0 .392-.392.392h-.303q-.392 0-.392-.392V23.885q0-.392.392-.392h.303q.392 0 .392.392v.837q.445-.605 1.158-.997.712-.4 1.834-.4 1.033 0 1.745.374.73.356 1.176.962.445.588.64 1.354.213.748.25 1.532.018.267.018.588 0 .32-.018.588-.036.786-.25 1.55-.196.748-.64 1.354-.445.588-1.176.962-.712.356-1.745.356zm-2.992-5.45q-.018.267-.018.694 0 .427.018.694.018.534.178 1.087.178.534.534.962.356.427.9.712.534.267 1.282.267.786 0 1.3-.267.534-.267.855-.712.338-.463.48-1.05.16-.605.196-1.247.018-.5 0-.997-.036-.64-.196-1.23-.142-.588-.48-1.033-.32-.463-.855-.73-.517-.285-1.3-.285-.766 0-1.3.285t-.9.748q-.338.445-.517.997-.16.552-.178 1.104zm10.333-2.764q.48-.623 1.158-1.015.674-.392 1.834-.392.908 0 1.585.303.674.303 1.122.837.463.534.694 1.265.232.73.232 1.585v5.058q0 .392-.392.392h-.3q-.392 0-.392-.392v-4.97q0-1.425-.694-2.226-.694-.82-2.03-.82-1.282 0-2.048.8t-.766 2.247v4.97q0 .392-.392.392h-.303q-.392 0-.392-.392V20.5q0-.392.392-.392h.303q.392 0 .392.392v4.22zm13.89-4.612q1.033 0 1.888.303t1.46.926q.623.605.962 1.532.356.908.392 2.155.036.8.036 1.496 0 .694-.036 1.496-.09 2.547-1.3 3.74l1.14 1.603.036.07q.018.036.018.125 0 .142-.107.25-.107.107-.25.107H96.5q-.196 0-.338-.16-.142-.142-.232-.25l-.786-1.087q-1.07.517-2.494.517-2.226 0-3.437-1.193-1.193-1.193-1.265-3.722-.036-.8-.036-1.496 0-.694.036-1.496.036-1.247.374-2.155.356-.926.962-1.532.623-.623 1.46-.926.855-.303 1.906-.303zm0 1.07q-.748 0-1.39.232-.64.213-1.122.694-.48.48-.766 1.23-.267.748-.303 1.78-.018.4-.036.748v1.334q.018.338.036.73.036 1.05.303 1.8.285.73.748 1.21.48.48 1.122.712.64.213 1.404.213.766 0 1.404-.213.64-.232 1.104-.712.48-.48.748-1.21.285-.748.32-1.8.018-.392.018-.73v-.674-.66q0-.338-.018-.748-.036-1.033-.32-1.78-.267-.748-.748-1.23-.48-.48-1.122-.694-.64-.232-1.39-.232zm8.693 10.506h6.144q.4 0 .4.4v.267q0 .392-.4.392h-6.874q-.392 0-.392-.392V20.68q0-.392.392-.392h.338q.392 0 .392.392v11.006zM7.247 36.7l-1.2-.694 13.378-23.17 1.2.694z"></path>
          <path d="M5.774 34.156H32.53v1.387H5.774z"></path>
          <path d="M19.687 42.662L6.303 34.935l.694-1.2L20.38 41.46zm11.626-20.14L17.93 14.796l.694-1.2 13.383 7.727z"></path>
          <path d="M7 22.518l-.694-1.2L19.7 13.6l.694 1.2z"></path>
          <path d="M31.066 36.7L17.687 13.53l1.2-.694 13.378 23.17zM6.835 20.398H8.22v15.454H6.835zm23.256 0h1.387v15.454H30.09z"></path>
          <path d="M19.45 42.075l-.606-1.05 11.64-6.72.606 1.05z"></path>
          <path d="M33.316 36.303a2.92 2.92 0 01-3.985 1.069 2.92 2.92 0 01-1.069-3.985 2.92 2.92 0 013.985-1.069c1.404.8 1.88 2.6 1.07 3.985m-23.273-13.44a2.92 2.92 0 01-3.985 1.069 2.92 2.92 0 01-1.069-3.985 2.92 2.92 0 013.985-1.069c1.395.8 1.87 2.6 1.07 3.985m-5.046 13.44a2.922 2.922 0 011.07-3.985 2.922 2.922 0 013.985 1.07 2.918 2.918 0 11-5.055 2.915m23.273-13.44a2.922 2.922 0 011.07-3.985 2.922 2.922 0 013.985 1.07 2.922 2.922 0 01-1.07 3.985 2.92 2.92 0 01-3.985-1.069m-9.117 21.62c-1.612 0-2.915-1.303-2.915-2.915a2.914 2.914 0 115.83 0 2.92 2.92 0 01-2.915 2.915m0-26.882c-1.612 0-2.915-1.303-2.915-2.915a2.914 2.914 0 115.83 0 2.91 2.91 0 01-2.915 2.915"></path>
        </svg>
      );
}

type GraphQLSVGProps = {
  marginLeft?: number,
  marginTop?: number,
  
}

export const GraphQLSVGModified = ({marginLeft, marginTop}: GraphQLSVGProps) => {

  const [toggle, setToggle] = useState<boolean>(false);
  
  const xArr: ArrLength6<number> = 
    [19.3, 30.7, 30.7, 19.3, 7.4, 7.4];
  const yArr: ArrLength6<number> =
    [15, 21, 35, 41.5, 35, 21]


  return (
    <div style={{
      "width": "300px", 
      "height": "150px", 
      "display": "block", 
      "textAlign": "center",
       "margin": "auto",
       "position": "absolute",
       "marginTop": marginTop ? `${marginTop}px` : "10px",
       "marginLeft": marginLeft ? `${marginLeft}px` : "0px"}} 
       onMouseOut={() => setToggle(false)}
       onMouseOver={() => setToggle(true)}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="60"
        fill="#e10098"
        viewBox="0 0 112.498 56.249"
        onMouseEnter={() => setToggle(true)}
        onMouseLeave={() => setToggle(false)}
        initial={{scale: 1.5}}
      >
        <path d="M44.424 21.18q-.8 0-1.46.213-.64.196-1.122.66-.463.445-.748 1.158-.267.712-.303 1.7-.056 1.603 0 3.206.036.997.303 1.7.285.712.748 1.176.48.445 1.122.66.66.196 1.46.196.786 0 1.46-.213.674-.232 1.158-.674.5-.463.786-1.176.285-.712.285-1.674v-.908H45.01q-.392 0-.392-.4v-.25q0-.4.392-.4h3.81q.4 0 .4.4v1.567q0 1.07-.32 1.96-.32.873-.944 1.516-.605.64-1.516.997-.9.338-2.03.338-1.158 0-2.03-.338-.873-.356-1.478-.98-.588-.623-.908-1.478-.303-.873-.338-1.924-.036-.8-.036-1.692 0-.9.036-1.692.036-1.05.356-1.906.32-.873.908-1.496.605-.623 1.478-.962.873-.356 2.012-.356 1.23 0 2.102.374.873.374 1.425.9.552.517.82 1.087.267.57.285.944.018.16-.09.267-.107.09-.285.09h-.392q-.16 0-.232-.07-.07-.09-.142-.285-.142-.4-.4-.8-.25-.4-.674-.712-.427-.32-1.015-.517-.588-.196-1.39-.196zm8.408 3.543q.64-1.23 2.422-1.23h.66q.392 0 .392.392v.25q0 .392-.392.392h-.766q-1.07 0-1.692.623-.623.623-.623 1.692v5.52q0 .178-.125.285-.107.107-.285.107h-.285q-.392 0-.392-.392v-8.46q0-.178.107-.285.107-.125.285-.125h.285q.178 0 .285.125.125.107.125.285v.82zm11 8.036q-.392 0-.392-.392v-.837q-.16.25-.427.5-.25.25-.623.445-.374.196-.9.32-.517.142-1.21.142-.64 0-1.23-.196-.57-.213-1.015-.57-.427-.356-.694-.837-.25-.48-.25-1.05 0-.605.25-1.087.267-.48.73-.837.463-.374 1.104-.605.66-.25 1.443-.356l2.814-.392v-.623q0-.962-.588-1.496-.57-.534-1.834-.534-.997 0-1.55.392-.534.374-.674.82-.07.213-.178.303-.09.07-.25.07h-.25q-.16 0-.285-.107-.107-.125-.107-.285 0-.25.178-.623.178-.374.57-.73.4-.356 1.033-.605.623-.267 1.516-.267 1.05 0 1.728.285.694.285 1.087.748.392.445.534.997.16.552.16 1.087v5.93q0 .392-.392.392h-.303zm-3.366-.855q.605 0 1.14-.196.552-.213.962-.623.4-.4.64-1.033.232-.623.232-1.46v-.605l-2.297.32q-2.956.4-2.956 1.888 0 .445.196.766.213.32.534.534.32.213.73.32.4.09.82.09zm10.956 1.033q-1.122 0-1.834-.4t-1.158-.997v4.22q0 .392-.392.392h-.303q-.392 0-.392-.392V23.885q0-.392.392-.392h.303q.392 0 .392.392v.837q.445-.605 1.158-.997.712-.4 1.834-.4 1.033 0 1.745.374.73.356 1.176.962.445.588.64 1.354.213.748.25 1.532.018.267.018.588 0 .32-.018.588-.036.786-.25 1.55-.196.748-.64 1.354-.445.588-1.176.962-.712.356-1.745.356zm-2.992-5.45q-.018.267-.018.694 0 .427.018.694.018.534.178 1.087.178.534.534.962.356.427.9.712.534.267 1.282.267.786 0 1.3-.267.534-.267.855-.712.338-.463.48-1.05.16-.605.196-1.247.018-.5 0-.997-.036-.64-.196-1.23-.142-.588-.48-1.033-.32-.463-.855-.73-.517-.285-1.3-.285-.766 0-1.3.285t-.9.748q-.338.445-.517.997-.16.552-.178 1.104zm10.333-2.764q.48-.623 1.158-1.015.674-.392 1.834-.392.908 0 1.585.303.674.303 1.122.837.463.534.694 1.265.232.73.232 1.585v5.058q0 .392-.392.392h-.3q-.392 0-.392-.392v-4.97q0-1.425-.694-2.226-.694-.82-2.03-.82-1.282 0-2.048.8t-.766 2.247v4.97q0 .392-.392.392h-.303q-.392 0-.392-.392V20.5q0-.392.392-.392h.303q.392 0 .392.392v4.22zm13.89-4.612q1.033 0 1.888.303t1.46.926q.623.605.962 1.532.356.908.392 2.155.036.8.036 1.496 0 .694-.036 1.496-.09 2.547-1.3 3.74l1.14 1.603.036.07q.018.036.018.125 0 .142-.107.25-.107.107-.25.107H96.5q-.196 0-.338-.16-.142-.142-.232-.25l-.786-1.087q-1.07.517-2.494.517-2.226 0-3.437-1.193-1.193-1.193-1.265-3.722-.036-.8-.036-1.496 0-.694.036-1.496.036-1.247.374-2.155.356-.926.962-1.532.623-.623 1.46-.926.855-.303 1.906-.303zm0 1.07q-.748 0-1.39.232-.64.213-1.122.694-.48.48-.766 1.23-.267.748-.303 1.78-.018.4-.036.748v1.334q.018.338.036.73.036 1.05.303 1.8.285.73.748 1.21.48.48 1.122.712.64.213 1.404.213.766 0 1.404-.213.64-.232 1.104-.712.48-.48.748-1.21.285-.748.32-1.8.018-.392.018-.73v-.674-.66q0-.338-.018-.748-.036-1.033-.32-1.78-.267-.748-.748-1.23-.48-.48-1.122-.694-.64-.232-1.39-.232zm8.693 10.506h6.144q.4 0 .4.4v.267q0 .392-.4.392h-6.874q-.392 0-.392-.392V20.68q0-.392.392-.392h.338q.392 0 .392.392v11.006zM7.247 36.7l-1.2-.694 13.378-23.17 1.2.694z"></path>
        <path d="M5.774 34.156H32.53v1.387H5.774z"></path>
        <path d="M19.687 42.662L6.303 34.935l.694-1.2L20.38 41.46zm11.626-20.14L17.93 14.796l.694-1.2 13.383 7.727z"></path>
        <path d="M7 22.518l-.694-1.2L19.7 13.6l.694 1.2z"></path>
        <path d="M31.066 36.7L17.687 13.53l1.2-.694 13.378 23.17zM6.835 20.398H8.22v15.454H6.835zm23.256 0h1.387v15.454H30.09z"></path>
        <path d="M19.45 42.075l-.606-1.05 11.64-6.72.606 1.05z"></path>
        {xArr.map((ele, idx) => (
            <GraphQLLogoPoint toggle={toggle} idx={idx} r={3.2} xArr={xArr} yArr={yArr} />
        ))}
          
        </motion.svg>
        </div>
      );

}



