import "./Form.css";
import { Formik, Form } from "formik";
import SignupTemplate from "../Singup/SignupTemplate";
import FormContext from "./FormContext";
import { useContext, useEffect, useRef, useState } from "react";
import ButtonContext from "../Button/ButtonContext";
import { validate } from "../../../lib/utils/validationSchema";
import useButtonContext from "../../../hooks/useButtonContext";

const FormField = () => {
  const { show, selectedProduct, body } = useButtonContext();
  const formRef = useRef();
  // let iniatialValues = useRef();
  const { name, email, phone } = body;
  // const [initialValues, setInitialValues] = useState({
  //   name,
  //   email,
  //   password: "",
  //   confirmPassword: "",
  //   phone,
  //   checked: [selectedProduct],
  //   checkbox: true,
  //   loginMail: "",
  //   loginPassword: "",
  // });

  const getInitialValues = () => {
    return {
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
  };
  // const buttonContext = useContext(ButtonContext);
  // const {name, email, phone} = buttonContext[2]
  // console.log(body)
  console.log(selectedProduct);
  // console.log(show)
  useEffect(() => {
    const form = formRef.current;
    console.log(show);

    if (show) {
      form.classList.add("active");
    } else {
      form.classList.remove("active");
    }
  
  }, [show]);

  // const iniatialValues = {
  //   name,
  //   email,
  //   password: "",
  //   confirmPassword: "",
  //   phone,
  //   checked: [selectedProduct],
  //   checkbox: true,
  //   loginMail: "",
  //   loginPassword: "",
  // };
  return (
    <section id="form" ref={formRef}>
      <div className="overlay"></div>
      <div className="multi-step-form">
        <Formik initialValues={getInitialValues()} validationSchema={validate}>
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
