import { ErrorMessage, Field } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import propTypes from 'prop-types';
import userForm from '../../assets/json/userForm.json';

const icon = [faUser, faEnvelope, '', faPhone];

const SignupStepTemplate = ({ index }) => {
  console.log(userForm[index].name);

  return (
    <>
    <div className='fields'>
      <div className='username'>
        <FontAwesomeIcon icon={icon[index]} className='fa fa-user' />
        <Field
          type={userForm[index].type}
          className='user-input'
          name={userForm[index].name}
          autoComplete='off'
          required
          inputMode={userForm[index].inputMode}
          placeholder={userForm[index].placeholder}
        />
      </div>
      <ErrorMessage
        className='error name-error'
        name={userForm[index].name}
        component={'p'}
      />
      </div>
    </>
  );
};

SignupStepTemplate.propTypes = {
  index: propTypes.number,
};

export default SignupStepTemplate;
