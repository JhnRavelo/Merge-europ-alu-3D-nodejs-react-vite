import "./Form.css";
import { Formik, Form } from "formik";
import SignupTemplate from "../Singup/SignupTemplate";
import FormContext from "./FormContext";
import { useEffect, useRef } from "react";
import { validate } from "../../../lib/utils/validationSchema";
import useButtonContext from "../../../hooks/useButtonContext";

const FormField = () => {
  const { show, selectedProduct, body } = useButtonContext();
  const formRef = useRef();

  const { name, email, phone } = body;

  useEffect(() => {
    const form = formRef.current;
    console.log(show);

    if (show) {
      form.classList.add("active");
    } else {
      form.classList.remove("active");
    }
  
  }, [show]);

  const iniatialValues = {
    name,
    email,
    password: "",
    confirmPassword: "",
    phone,
    checked: [selectedProduct],
    checkbox: true,
    loginMail: "",
    loginPassword: "",
  };
  return (
    <section id="form" ref={formRef}>
      <div className="overlay"></div>
      <div className="multi-step-form">
        <Formik initialValues={iniatialValues} validationSchema={validate}>
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

export default FormField;
