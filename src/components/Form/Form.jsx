import './Form.css';
import { Formik, Form } from 'formik';
import SignupTemplate from '../Singup/SignupTemplate';
import * as Yup from 'yup';
import FormContext from './FormContext';

// var phoneRegEx =
//   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

var phoneRegEx =
  /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;

const iniatialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    checked:[]
  },
  validationSchema = Yup.object({
    name: Yup.string()
      .required('Vous devez mettre votre nom')
      .matches(/^[A-Za-z]+$/, 'Votre doit seulement contenir des lettres'),
    email: Yup.string()
      .required('Vous devez mettre votre adresse email')
      .email(`l'adresse email est invalide`),
    password: Yup.string()
      .min(8, 'Le mot de passe doit avoir au moins 8 caractères')
      .matches(
        /[A-Z]/,
        'Le mot de passe doit contenir au moins une lettre majuscule'
      )
      .matches(/[0-9]/, 'Le mot de passe doit contenir au moins un chiffre')
      .required('Le mot de passe est requis'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Le mot de passe doit être le même')
      .required('Le mot de passe doit être confirmer'),
    phone: Yup.string()
      .matches(phoneRegEx, 'Numéro de téléphone invalide')
      .required('Le numéro de téléphone est requis'),
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
          {({ errors, values }) => (
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
};

// FormField.displayName = "FormField"

export default FormField;
