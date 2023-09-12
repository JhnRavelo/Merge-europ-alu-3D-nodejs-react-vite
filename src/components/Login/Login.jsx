import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Login = () => {
  return (
    <>
      <div className='fields'>
        <div className='username'>
          <FontAwesomeIcon icon={faEnvelope} className='fa fa-envelope' />
          <input
            id='login-name'
            type='email'
            className='user-input'
            placeholder='Adresse email'
            inputMode='email'
          />
        </div>
        <p className='error login-name-error'></p>

        <div className='username'>
          <FontAwesomeIcon icon={faKey} className='fa' />
          <input
            id='login-mail'
            type='password'
            inputMode='password'
            className='user-input'
            placeholder='Mot de passe'
          />
        </div>
        <p className='error login-email-error'></p>
      </div>
      <div className='buttons'>
        <button
          id='login-btn'
          type='submit'
          className='form-button signin-button'
        >
          Se connecter
        </button>
      </div>
    </>
  );
};

export default Login;
