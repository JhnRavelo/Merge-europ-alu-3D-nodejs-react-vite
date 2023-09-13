import { useContext, useEffect, useRef, useState } from 'react';
import SignupStep from './SignupStep';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import FormContext from '../Form/FormContext';
import ButtonContext from '../Button/ButtonContext';
import errorShake from '../../lib/utils/errorShake';
import propTypes from 'prop-types';

const SignupTemplate = () => {
  const [index, setIndex] = useState(0);
  const prevBtnRef = useRef();
  const nextBtnRef = useRef();
  const formContext = useContext(FormContext);
  var product = useContext(ButtonContext);
  const [title, setTitle] = useState(`S'enregistrer`);
  const errors = [
    formContext[0].name,
    formContext[0].email,
    '',
    formContext[0].phone,
  ];

  useEffect(() => {
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;
    if (index == 0) {
      setTitle("S'Enregistrer");
      nextBtn.style.display = 'flex';
      nextBtn.style.opacity = 1;
      nextBtn.style.pointerEvents = 'all';
      prevBtn.style.display = 'flex';
      prevBtn.style.opacity = 0;
      prevBtn.style.pointerEvents = 'none';
    } else if (index == 4) {
      nextBtn.style.opacity = 0;
      nextBtn.style.pointerEvents = 'none';
    } else if (index == 5) {
      setTitle('Se Connecter');
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
    } else {
      prevBtn.style.opacity = 1;
      prevBtn.style.pointerEvents = 'all';
      nextBtn.style.opacity = 1;
      nextBtn.style.pointerEvents = 'all';
    }
  }, [index]);

  const handleClickConnect = () => {
    if (index == 0) {
      setIndex(5);
    } else if (index == 5) {
      setIndex(0);
    }
  };

  const handleClickNext = async () => {
    if (index == 2) {
      var { password, confirmPassword } = formContext[0];
      var inputs = [...document.querySelectorAll('.username')];
      var champs = [...document.querySelectorAll('.user-input')];

      if (!champs[0].value) {
        errorShake(inputs[0]);
      }
      if (!champs[1].value) {
        errorShake(inputs[1]);
      }
      if (password) {
        errorShake(inputs[0]);
      }
      if (confirmPassword) {
        errorShake(inputs[1]);
      }
      if (!password && !confirmPassword && champs[0].value && champs[1].value) {
        setIndex((prevIndex) => prevIndex + 1);
      }
    } else {
      var input = document.querySelector('.username');
      var champ = document.querySelector('.user-input');
      var error = errors[index];
      if (error || !champ.value) {
        errorShake(input);
      } else {
        setIndex((prevIndex) => prevIndex + 1);
      }
    }
  };

  const DisplayFootForm = () => {
    if (index == 0) {
      return (
        <p>
          Vous avez déjà un compte ?{' '}
          <a className='login' onClick={handleClickConnect}>
            Se connecter
          </a>
        </p>
      );
    } else if (index == 5) {
      return (
        <p>
          Pas encore de compte ?{' '}
          <a className='register' onClick={handleClickConnect}>
            {" S'enregistrer"}
          </a>
        </p>
      );
    }
  };

  const formClosed = () => {
    const corps = document.querySelector('.corps');
    corps.classList.remove('none');
    product[1]();
  };

  return (
    <div className='card' data-step>
      <div className='modal-box register-form'>
        <div className='login-div'>
          <div className='logo__form'></div>
          <div className='close-btn' onClick={formClosed}>
            <FontAwesomeIcon icon={faTimes} className='fa-xmark' />
          </div>
          <div className='title__form'>{title}</div>

          <SignupStep index={index} />
          <div className='next-prev-form'>
            <button
              ref={prevBtnRef}
              type='button'
              onClick={() => setIndex((prevIndex) => prevIndex - 1)}
            >
              Précédant
            </button>

            <button ref={nextBtnRef} type='button' onClick={handleClickNext}>
              Suivant
            </button>
          </div>
          <DisplayFootForm />
        </div>
      </div>
    </div>
  );
};

SignupTemplate.propTypes = {
  updateSchema: propTypes.func,
};

export default SignupTemplate;
