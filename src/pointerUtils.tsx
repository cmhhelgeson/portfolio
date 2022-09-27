import {ComponentType, useEffect, useState} from "react"

/*const [pointerCache, setPointerCache] = useState<PointerEvent[]>([])
  const [isZooming, setIsZooming] = useState<boolean>(false);
  const [prevDiff, setPrevDiff] = useState<number>(-1);


  const removePointerEvent = (event: PointerEvent) => {
    const index = pointerCache.findIndex((cached) => 
      cached.pointerId === event.pointerId
    )
    setPointerCache([
      ...pointerCache.slice(0, index), 
      ...pointerCache.slice(index + 1)
    ])
  }

  const handlePointerDown = (event: PointerEvent) => {
    setPointerCache([...pointerCache, event])
    console.log("Pointer down");
  }

  const handlePointerUp = (event: PointerEvent) => {
    console.log(event.type, event);
    removeEvent(event);
    if (pointerCache.length < 2) {
      setPrevDiff(-1);
      //TODO: Move this call somewhere better
      setIsZooming(false);
    }
  }

  const handlePointerMove = (event: PointerEvent) => {
    //Find the id of the currently moved pointer
    const index = pointerCache.findIndex((cached) => 
      cached.pointerId === event.pointerId
    )
    //Update the index within the pointerCacheArray
    setPointerCache([...pointerCache.slice(0, index), event, ...pointerCache.slice(index + 1)]);
    //If two fingers are on the trackapd
    if (pointerCache.length === 2) {
      //Calculate the difference between the two pointer's x position
      const curDiff = Math.abs(pointerCache[0].clientX - pointerCache[1].clientX);
      //If there were previously two pointers on the trackpad
      if (prevDiff > 0) {
        //And if the distance between those pointers has increased over time
        if (curDiff > prevDiff) {
          console.log("is zooming")
          setIsZooming(true);
        }
        //Or if the distance has decreased over time
        if (curDiff < prevDiff) {
          setIsZooming(true);
        }
      }
      setPrevDiff(curDiff)
    } */

type InjectedProps = {
    handlePointerDown: (event: PointerEvent) => void
    handlePointerUp: (event: PointerEvent) => void
}

export const withPointerHandler = (
    WrappedComponent: ComponentType<InjectedProps>
) => {
    return function WithPointerHandlerComponent() {
        const [pointersDown, setPointersDown] = useState<boolean>(false);

        const handlePointerDown = () => {
            console.log("Handled Pointer Down");
            setPointersDown(true)
        }
        
        const handlePointerUp = () => {
            console.log("Handled Pointer Up")
            setPointersDown(false)
        }

        useEffect(() => {
          console.log("Wrapped Pointer Component")
        }, [])

        return (
            <WrappedComponent 
              handlePointerDown={handlePointerDown}
              handlePointerUp={handlePointerUp}
            />
        )   
    }
}