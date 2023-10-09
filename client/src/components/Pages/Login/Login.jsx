import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ErrorMessage, Field } from "formik";
import { useContext, useEffect, useRef, useState } from "react";
import FormContext from "../Form/FormContext";
import defaultAxios from "../../../api/axios";
import useAuth from "../../../hooks/useAuth";
import useButtonContext from "../../../hooks/useButtonContext";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const prime = import.meta.env.VITE_PRIME.split(" ");

const Login = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const { setAuth } = useAuth();
  const formContext = useContext(FormContext);
  const { showForm } = useButtonContext();
  const btnLoginRef = useRef();
  const { loginMail, loginPassword } = formContext[1];
  const errors = formContext[0];
  const navigate = useNavigate();
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

  const handleLogin = async () => {
    const body = { loginMail: loginMail, loginPassword: loginPassword };
    try {
      const res = await defaultAxios.post("/auth/login", body),
        role = res.data.role,
        accessToken = res.data.accessToken;
      console.log(res.data);

      if (role) {
        setAuth({ role, accessToken });
        if (role == prime[0]) {
          navigate("/admin/");
        } else if (role == prime[2] && location.pathname == "/") {
          navigate("/page/5");
        }
        showForm();
      }
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }
  };
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

        <div className="username" style={{ marginTop: "15px" }}>
          <FontAwesomeIcon icon={faKey} className="fa" />
          <Field
            type={visible ? "text" : "password"}
            name="loginPassword"
            inputMode="password"
            className="user-input"
            placeholder="Mot de passe"
            autoComplete="off"
          />
          {visible ? (
            <AiOutlineEye
              className="absolute right-6 top-10 cursor-pointer"
              size={25}
              onClick={() => setVisible(false)}
            />
          ) : (
            <AiOutlineEyeInvisible
              className="absolute right-6 top-10 cursor-pointer"
              size={25}
              onClick={() => setVisible(true)}
            />
          )}
        </div>
        <ErrorMessage
          name="loginPassword"
          component={"p"}
          className="error login-loginMail-error"
        />
      </div>
      <div className="buttons">
        <button
          type="button"
          ref={btnLoginRef}
          id="login-btn"
          className="form-button signin-button"
          onClick={handleLogin}
        >
          Se connecter
        </button>
      </div>
    </>
  );
};

export default Login;
