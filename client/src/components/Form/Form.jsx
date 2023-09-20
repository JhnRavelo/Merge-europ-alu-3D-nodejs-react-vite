import "./Form.css";
import { Formik, Form } from "formik";
import SignupTemplate from "../Singup/SignupTemplate";
import FormContext from "./FormContext";
import { useContext } from "react";
import ButtonContext from "../Button/ButtonContext";
import { validate } from "../../lib/utils/validationSchema";


const FormField = () => {

  const buttonContext = useContext(ButtonContext);
  const {name, email, phone} = buttonContext[2]
  const iniatialValues = {
    name,
    email,
    password: "",
    confirmPassword: "",
    phone,
    checked: [buttonContext[0]],
    checkbox: true,
    loginMail: "",
    loginPassword: "",
  };

  return (
    <section id="form" className="active">
      <div className="overlay"></div>
      <div className="multi-step-form">
        <Formik
          initialValues={iniatialValues}
          validationSchema={validate}
        >
          {({ errors, values}) => (
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
