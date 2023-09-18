import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ErrorMessage, Field } from "formik";
import { useContext, useEffect, useRef } from "react";
import FormContext from "../Form/FormContext";

const Login = () => {
  const formContext = useContext(FormContext);
  const btnLoginRef = useRef();
  const { loginMail, loginPassword } = formContext[1];
  const errors = formContext[0];
  useEffect(() => {
    const btnLogin = btnLoginRef.current;
    if (
      !loginMail ||
      !loginPassword ||
      errors.loginMail ||
      errors.loginPassword
    ) {
      btnLogin.classList.add("desabledBtn");
    } else {
      btnLogin.classList.remove("desabledBtn");
    }
  }, [loginMail, loginPassword, errors]);

  const handleClick = () => {
    
  }
  return (
    <>
      <div className="fields">
        <div className="username">
          <FontAwesomeIcon icon={faEnvelope} className="fa fa-envelope" />
          <Field
            type="loginMail"
            name="loginMail"
            className="user-input"
            placeholder="Adresse email"
            inputMode="loginMail"
            autoComplete="off"
          />
        </div>
        <ErrorMessage
          name="loginMail"
          component={"p"}
          className="error login-name-error"
        />
        {/* <p className='error login-name-error'></p> */}

        <div className="username" style={{ marginTop: "15px" }}>
          <FontAwesomeIcon icon={faKey} className="fa" />
          <Field
            type="loginPassword"
            name="loginPassword"
            inputMode="loginPassword"
            className="user-input"
            placeholder="Mot de passe"
            autoComplete="off"
          />
        </div>
        <ErrorMessage
          name="loginPassword"
          component={"p"}
          className="error login-loginMail-error"
        />
        {/* <p className='error login-loginMail-error'></p> */}
      </div>
      <div className="buttons">
        <button
          type="submit"
          ref={btnLoginRef}
          id="login-btn"
          className="form-button signin-button"
          onClick={handleClick}
        >
          Se connecter
        </button>
      </div>
    </>
  );
};

export default Login;
