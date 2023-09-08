import { useEffect, useRef, useState } from 'react';
// import SignupStepOne from './SignupStepOne';
// import SignupStepTwo from './SignupStepTwo';
import SignupStep from './SignupStep';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const SignupTemplate = () => {
  const [index, setIndex] = useState(0);
  const prevBtnRef = useRef();
  const nextBtnRef = useRef();

  useEffect(() => {
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;
    if (index == 0) {
      prevBtn.style.opacity = 0;
      prevBtn.style.pointerEvents = 'none';
    } else if (index == 3) {
      nextBtn.style.opacity = 0;
      nextBtn.style.pointerEvents = 'none';
    } else {
      prevBtn.style.opacity = 1;
      prevBtn.style.pointerEvents = 'all';
      nextBtn.style.opacity = 1;
      nextBtn.style.pointerEvents = 'all';
    }
  }, [index]);

  const handleClickConnect = () => {
    console.log(index);
  };

  const handleClickNext = () => {
    var error = document.querySelector('.error');
    var input = document.querySelector('.username');
    var champ = document.querySelector('.user-input');
    if (error || !champ.value) {
      input.classList.add('input--invalid');
      input.classList.remove('hide');

      input.addEventListener('animationend', (e) => {
        if (e.animationName === 'shake') {
          input.classList.remove('input--invalid');
        }
      });
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className='card' data-step>
      <div className='modal-box register-form'>
        <div className='login-div'>
          <div className='logo__form'></div>
          <div className='close-btn'>
            <FontAwesomeIcon icon={faTimes} className='fa-xmark' />
          </div>
          <div className='title__form'>{"S'enregister"}</div>
          <div className='fields'>
            <SignupStep index={index} />
          </div>
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
          {index == 0 && (
            <p>
              Vous avez déjà un compte ?{' '}
              <a className='login' onClick={handleClickConnect}>
                Se connecter
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignupTemplate;
