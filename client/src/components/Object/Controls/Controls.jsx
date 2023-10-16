import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { imgAnimation } from "../../../lib/utils/imgAnimation";
import useButtonContext from "../../../hooks/useButtonContext";

const Controls = () => {
  const controlsRef = useRef();
  const { data } = useButtonContext();

  useFrame(() => {
    const azimuth = controlsRef.current.getAzimuthalAngle();
    const polar = controlsRef.current.getPolarAngle();
    const distance = controlsRef.current.getDistance();
    if (data?.length > 0) {
      data.map((item, index) => {
        imgAnimation(
          item.minXAngle,
          item.maxXAngle,
          item.maxYAngle,
          index,
          polar,
          azimuth,
          7,
          5.5,
          distance
        );
      });
    }
  });
  return (
    <OrbitControls
      ref={controlsRef}
      maxDistance={10}
      minDistance={2}
      enablePan={false}
      maxPolarAngle={Math.PI / 2}
      rotateSpeed={2}
    />
  );
};

export default Controls;
