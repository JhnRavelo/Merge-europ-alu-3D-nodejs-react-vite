import './Form.css';
import { Formik, Form } from 'formik';
import SignupTemplate from '../Singup/SignupTemplate';
import * as Yup from 'yup';
import FormContext from './FormContext';

const iniatialValues = {
    name: '',
    email: '',
  },
  validationSchema = Yup.object({
    name: Yup.string().required('Vous devez mettre votre nom'),
    email: Yup.string().required('Required').email('email invalid!'),
  });

const FormField = () => {
  return (
    <section id='form' className='active'>
      <div className='overlay'></div>
      <div className='multi-step-form'>
        <Formik
          initialValues={iniatialValues}
          validationSchema={validationSchema}
        >
          {({ errors,values }) => (
            <FormContext.Provider value={[errors, values]}>
              <Form>
                <SignupTemplate />
              </Form>
            </FormContext.Provider>
          )}
        </Formik>
      </div>
    </section>
  );
}

// FormField.displayName = "FormField"

export default FormField;
