import './Form.css';
import { Formik, Form } from 'formik';
// import SignupStepOne from '../Singup/SignupStepOne';
import SignupTemplate from '../Singup/SignupTemplate';
import * as Yup from 'yup';

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
          <Form>
            <SignupTemplate />
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default FormField;
