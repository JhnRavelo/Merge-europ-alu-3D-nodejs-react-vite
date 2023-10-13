import { Html } from '@react-three/drei';
import iconJSON from '../../../assets/json/icon.json';
import { useRef } from 'react';

function Icon() {
  var refs = useRef([])
  
  return (
    <>
      {iconJSON.map((icon, index) => {
        return (
          <Html
            key={index}
            position={[icon.position.x, icon.position.y, icon.position.z]}
          >
            <div ref={refs} className='divi'>
              <img src={icon.src} alt={icon.img} className='imgi'/>
            </div>
          </Html>
        );
      })}
    </>
  );
}

export default Icon;
