import { ErrorMessage, Field } from 'formik';

const SignupStepTwo = () => {
  return (
    <>
      <div className='username'>
        <i className='fa fa-user'></i>
        <Field
          type='text'
          id='email'
          className='user-input'
          name='email'
          autoComplete='off'
          required
          inputMode='email'
          placeholder='Adresse Email'
        />
      </div>
      <ErrorMessage className='error name-error' name='email' component={'p'} />
    </>
  );
};

export default SignupStepTwo;
