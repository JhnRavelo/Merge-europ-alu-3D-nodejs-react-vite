import './Form.css';
import { Formik, Form } from 'formik';
import SignupTemplate from '../Singup/SignupTemplate';
import FormContext from './FormContext';
import { useContext, useState } from 'react';
import ButtonContext from '../Button/ButtonContext';
import { addUser } from '../../lib/service/User';
import validate from '../../lib/utils/validationSchema';

  const onSubmit = async(values)=>{
    const res= await addUser(values)
    console.log(res);
  }

const FormField = () => {
  const buttonContext = useContext(ButtonContext)
  const iniatialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    checked: [buttonContext[0]],
    checkbox: true,
  }

  const [validationSchema, setValidationSchema] = useState(validate)

  const updateSchema = (newShema) => {
    setValidationSchema(newShema)
  }

  return (
    <section id='form' className='active'>
      <div className='overlay'></div>
      <div className='multi-step-form'>
        <Formik
          initialValues={iniatialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          
        >
          {({ errors, values, isValid }) => (
            <FormContext.Provider value={[errors, values, isValid]}>
              <Form>
                <SignupTemplate updateSchema={updateSchema}/>
              </Form>
            </FormContext.Provider>
          )}
        </Formik>
      </div>
    </section>
  );
};

// FormField.displayName = "FormField"

export default FormField;
