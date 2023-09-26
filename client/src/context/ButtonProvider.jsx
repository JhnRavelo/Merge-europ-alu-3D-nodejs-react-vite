import { createContext, useState } from "react";
import propTypes from "prop-types";

const ButtonContext = createContext();

const ButtonProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [body, setBody] = useState({ name: "", email: "", phone: "" });

  const showForm = () => {
    if (show === false) {
      setShow(true);
      const corps = document.querySelector(".corps");
      const userIcon = document.querySelector(".login__logout");
      if (corps) {
        corps.classList.add("none");
      }
      if (userIcon) {
        userIcon.style.pointerEvents = "none";
      }
    } else {
      setShow(false);
      const corps = document.querySelector(".corps");
      const userIcon = document.querySelector(".login__logout");
      if (corps) {
        corps.classList.remove("none");
      }
      if (userIcon) {
        userIcon.style.pointerEvents = "all";
      }
    }
  };

  return (
    <ButtonContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
        body,
        setBody,
        showForm,
        show,
      }}
    >
      {children}
    </ButtonContext.Provider>
  );
};

ButtonProvider.propTypes = {
  children: propTypes.any,
};

export { ButtonProvider };

export default ButtonContext;
