import { ErrorMessage, Field } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';

const SignupStepPassword = () => {
  return (
    <>
      <div className='username'>
        <FontAwesomeIcon icon={faKey} className='fa fa-user' />
        <Field
          type='password'
          className='user-input'
          name='password'
          autoComplete='off'
          required
          placeholder='Mot de passe'
        />
      </div>
      <ErrorMessage className='error name-error' name='password' component={'p'} />
      <div className='username' style={{marginTop:'15px'}}>
        <FontAwesomeIcon icon={faKey} className='fa fa-user' />
        <Field
          type='password'
          className='user-input'
          name='confirmPassword'
          autoComplete='off'
          required
          inputMode='password'
          placeholder='Confirmez votre mot de passe'
        />
      </div>
      <ErrorMessage className='error name-error' name='confirmPassword' component={'p'} />
    </>
  );
};

export default SignupStepPassword;
