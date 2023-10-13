import { OrbitControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import {  useRef } from "react"
import { imgAnimation } from "../../../lib/utils/imgAnimation"
import { useState } from "react"


const Controls = () => {
  const controlsRef = useRef()
const [polarNow , setPolarNow] = useState()
const [azimuthNow , setAzimuthNow] = useState()


  useFrame(()=>{
    const azimuth = controlsRef.current.getAzimuthalAngle()
    const polar = controlsRef.current.getPolarAngle()
    imgAnimation(-0.7, 0.1, 1.02, 6, polar, azimuth)
    imgAnimation(-0.65, 0.5, 0.9, 0, polar, azimuth)
    imgAnimation(-0.17, 0.7, 1.3, 1, polar, azimuth)
    imgAnimation(-0.4, 0.55, 0.95, 2, polar, azimuth)
    imgAnimation(-0.27, 0.79, 0.78, 3, polar, azimuth)
    imgAnimation(-0.38, 0.47, 1.12, 4, polar, azimuth)
    imgAnimation(-0.07, 0.47, 0.7, 5, polar, azimuth)
    imgAnimation(-0.29, 0.43, 1.15, 7, polar, azimuth)
    if(azimuth != azimuthNow || polar != polarNow){
        console.log("azimuth", azimuth);
        console.log("polar", polar);
        setAzimuthNow(azimuth)
        setPolarNow(polar)
        
    }
   })
   return(
    <OrbitControls
        ref={controlsRef}
          maxDistance={10}
          minDistance={2}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          rotateSpeed={2}
        />
   )
}

export default Controls