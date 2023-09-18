import { useRef, useState } from 'react';
import './Button.css';
import FormField from '../Form/Form';
import ButtonContext from './ButtonContext';
import { getUser } from '../../lib/service/User';
import axios from 'axios'
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

const Button = () => {
  const btnRef = useRef();
  const [product, setProduct] = useState();
  const [show, setShow] = useState(false);
  const axiosPrivate = useAxiosPrivate()

  const showForm = () => {
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const handleClick = async() => {
    try {
      console.log(axiosPrivate);
      const res = await axiosPrivate.get('/auth')
    console.log(res);
    } catch (error) {
      if(error){
        console.log(error);
      }
    }
    
    try {
      const response = await axios.post('http://localhost:5000/auth/cookie', {},{
        withCredentials: true, // Permet d'inclure les cookies dans la requête
      });
  
      console.log('Réponse du serveur :', response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération du cookie :', error);
    }

    showForm();
    const corps = document.querySelector('.corps');
    corps.classList.add('none');
    setProduct(btnRef.current.parentElement.querySelector('h1').textContent);
  };
  return (
    <>
      {show && (
        <ButtonContext.Provider value={[product, showForm]}>
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
