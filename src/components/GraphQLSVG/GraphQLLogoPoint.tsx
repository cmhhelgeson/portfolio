import React from "react"
import {motion} from "framer-motion"


type ArrLength6<T> = [T, T, T, T, T, T]

type GraphQLLogoPointParams = {
    idx: number,
    r: number,
    xArr: ArrLength6<number>,
    yArr: ArrLength6<number>,
    toggle: boolean
}

export const GraphQLLogoPoint = ({idx, r, xArr, yArr, toggle}: GraphQLLogoPointParams) => {
    return (
      <motion.circle 
        cx={xArr[idx]} 
        cy={yArr[idx]} 
        r={r}
        animate={ !toggle ? {cx: xArr[idx], cy: yArr[idx]}: {
          "cx": [
            xArr[(idx + 0) % xArr.length], 
            xArr[(idx + 1) % xArr.length], 
            xArr[(idx + 2) % xArr.length],
            xArr[(idx + 3) % xArr.length],
            xArr[(idx + 4) % xArr.length],
            xArr[(idx + 5) % xArr.length]
          ],
          "cy": [
            yArr[(idx + 0) % yArr.length], 
            yArr[(idx + 1) % yArr.length], 
            yArr[(idx + 2) % yArr.length],
            yArr[(idx + 3) % yArr.length],
            yArr[(idx + 4) % yArr.length],
            yArr[(idx + 5) % yArr.length]
          ]
        }} 
        transition={!toggle ? {duration: "0.3"}: {
          "duration": 5,
          "repeat": Infinity,
          "times": [0, 0.2, 0.4, 0.6, 0.8, 1]}}
      />
    )
  }