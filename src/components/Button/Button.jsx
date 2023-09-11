import { useRef, useState } from 'react';
import './Button.css';
import FormField from '../Form/Form';
import ButtonContext from './ButtonContext';

const Button = () => {
  const btnRef = useRef();
  const [product, setProduct] = useState();
  const [show, setShow] = useState(false);

  const showForm = () => {
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const handleClick = () => {
    showForm();
    const corps = document.querySelector('.corps');
    corps.classList.add('none');
    setProduct(btnRef.current.parentElement.querySelector('h1').textContent);
  };
  return (
    <>
      {show && (
        <ButtonContext.Provider value={[product, handleClick]}>
          <FormField />
        </ButtonContext.Provider>
      )}
      <button ref={btnRef} onClick={() => handleClick()} className='show-modal'>
        Intéressé ?
      </button>
    </>
  );
};

export default Button;
