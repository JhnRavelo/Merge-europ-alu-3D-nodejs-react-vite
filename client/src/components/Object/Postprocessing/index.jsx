import { ACESFilmicToneMapping } from 'three';
import { useThree } from '@react-three/fiber';

function Tone() {
  const { gl } = useThree();
  gl.toneMapping = ACESFilmicToneMapping;
  gl.toneMappingExposure = 0.9;
}

export { Tone };
