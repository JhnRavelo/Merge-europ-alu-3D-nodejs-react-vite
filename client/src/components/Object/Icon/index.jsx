import { Html } from '@react-three/drei';
import iconJSON from '../../../assets/json/icon.json';

function Icon() {

  return (
    <>
      {iconJSON.map((icon, index) => {
        return (
          <Html
            key={index}
            position={[icon.position.x, icon.position.y, icon.position.z]}
          >
            <div className='divi'>
              <img src={icon.src} alt={icon.img} className='imgi'/>
            </div>
          </Html>
        );
      })}
    </>
  );
}

export default Icon;
