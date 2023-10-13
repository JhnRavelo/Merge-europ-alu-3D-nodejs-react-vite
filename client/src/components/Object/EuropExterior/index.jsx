import { Canvas } from "@react-three/fiber";
import { AroundLight, HemiLight, ToplLight } from "../Light";
import { Europ } from "../Models/Europ";
import Camera from "../Camera/Camera";
import { Tone } from "../Postprocessing";
import Icon from "../Icon";
import Controls from "../Controls/Controls";
import { useRef } from "react";

function EuropExterior() {
  const controlsRef = useRef();

  return (
    <>
      <Canvas
        // dpr={window.devicePixelRatio}
        ref={controlsRef}
        camera={{
          fov: 45,
          near: 0.1,
          far: 20,
          position: [0.1207495869371528, 1.7967386171333914, 6.74719555004217],
        }}
      >
        <Tone />
        {/* <axesHelper args={[20, 20, 20]} /> */}
        <Europ />
        <AroundLight />
        <ToplLight />
        <HemiLight />
        <Icon />
        <Camera />
        <Controls />
      </Canvas>
    </>
  );
}

export default EuropExterior;
