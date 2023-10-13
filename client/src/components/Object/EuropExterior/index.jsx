import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { AroundLight, HemiLight, ToplLight } from "../Light";
import { Europ } from "../Models/Europ";
import Camera from "../Camera/Camera";
import { Tone } from "../Postprocessing";
import Icon from "../Icon";

function EuropExterior() {
  return (
    <>
      <Canvas
        // dpr={window.devicePixelRatio}
        camera={{
          fov: 45,
          near: 0.1,
          far: 20,
          position: [0.1207495869371528, 1.7967386171333914, 6.74719555004217],
        }}
      >
        <Tone />
        <axesHelper args={[20, 20, 20]} />
        <OrbitControls
          maxDistance={10}
          minDistance={2}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          rotateSpeed={2}
        />
        <Europ />
        <AroundLight />
        <ToplLight />
        <HemiLight />
        <Icon/>
        <Camera />
      </Canvas>
    </>
  );
}

export default EuropExterior;
