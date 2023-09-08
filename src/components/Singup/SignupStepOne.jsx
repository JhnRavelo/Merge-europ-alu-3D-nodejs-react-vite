import { ErrorMessage, Field } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const SignupStepOne = () => {
  return (
    <>
      <div className='username'>
        <FontAwesomeIcon icon={faUser} className='fa fa-user' />
        <Field
          type='text'
          id='name'
          className='user-input'
          name='name'
          autoComplete='off'
          required
          placeholder='Nom complet (ou Entreprise)'
        />
      </div>
      <ErrorMessage className='error name-error' name='name' component={'p'} />
    </>
  );
};

export default SignupStepOne;
