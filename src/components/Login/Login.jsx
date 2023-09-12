import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ErrorMessage, Field } from 'formik';
import { useContext, useEffect, useRef } from 'react';
import FormContext from '../Form/FormContext';

const Login = () => {
  const formContext = useContext(FormContext);
  const btnLoginRef = useRef();
  const { email, password } = formContext[1];
  const errors = formContext[0];
  useEffect(() => {
    const btnLogin = btnLoginRef.current;
    if (!email || !password || errors.email || errors.password) {
      btnLogin.classList.add('desabledBtn');
    } else {
      btnLogin.classList.remove('desabledBtn');
    }
  }, [email, password, errors]);
  return (
    <>
      <div className='fields'>
        <div className='username'>
          <FontAwesomeIcon icon={faEnvelope} className='fa fa-envelope' />
          <Field
            type='email'
            name='email'
            className='user-input'
            placeholder='Adresse email'
            inputMode='email'
            autoComplete='off'
          />
        </div>
        <ErrorMessage
          name='email'
          component={'p'}
          className='error login-name-error'
        />
        {/* <p className='error login-name-error'></p> */}

        <div className='username' style={{ marginTop: '15px' }}>
          <FontAwesomeIcon icon={faKey} className='fa' />
          <Field
            type='password'
            name='password'
            inputMode='password'
            className='user-input'
            placeholder='Mot de passe'
            autoComplete='off'
          />
        </div>
        <ErrorMessage
          name='password'
          component={'p'}
          className='error login-email-error'
        />
        {/* <p className='error login-email-error'></p> */}
      </div>
      <div className='buttons'>
        <button
          ref={btnLoginRef}
          id='login-btn'
          className='form-button signin-button'
          type='button'
        >
          Se connecter
        </button>
      </div>
    </>
  );
};

export default Login;
