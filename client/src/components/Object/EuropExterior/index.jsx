import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { AroundLight, HemiLight, ToplLight } from '../Light';
import { Europ } from '../Models/Europ';

function EuropExterior() {
  return (
    <>
      <Canvas
        // dpr={window.devicePixelRatio}
        camera={{
          fov: 45,
          near: 0.1,
          far: 20,
          position: [5, 3, 10],
        }}
      >
        {/* <Tone /> */}
        <axesHelper args={[20,20,20]}/>
        <OrbitControls
          maxDistance={7}
          minDistance={0.2}
          // enablePan={false}
          maxPolarAngle={Math.PI / 2}
          rotateSpeed={2}
        />
        <Europ />
        <AroundLight />
        <ToplLight />
        <HemiLight />
      </Canvas>
    </>
  );
}

export default EuropExterior;
