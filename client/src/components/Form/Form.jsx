import "./Form.css";
import { Formik, Form } from "formik";
import SignupTemplate from "../Singup/SignupTemplate";
import FormContext from "./FormContext";
import { useContext } from "react";
import ButtonContext from "../Button/ButtonContext";
import { addUser } from "../../lib/service/User";
import { validate } from "../../lib/utils/validationSchema";
import { addTraker } from "../../lib/service/Trakers";
import useAuth from "../../hooks/useAuth";

const FormField = () => {
  const { setAuth } = useAuth();
  const buttonContext = useContext(ButtonContext);
  const iniatialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    checked: [buttonContext[0]],
    checkbox: true,
    loginMail: "",
    loginPassword: "",
  };

  const onSubmit = async (values) => {
    console.log('click');
    try {
      const res = await addUser(values);
      console.log(res.data);
      setAuth(res.data);
      const track = await addTraker(values);
      console.log(track);
    } catch (error) {
      if (!error?.response) {
        console.log(error);
      }
    }
  };
  return (
    <section id="form" className="active">
      <div className="overlay"></div>
      <div className="multi-step-form">
        <Formik
          initialValues={iniatialValues}
          validationSchema={validate}
          onSubmit={onSubmit}
        >
          {({ errors, values, isValid }) => (
            <FormContext.Provider value={[errors, values, isValid]}>
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
