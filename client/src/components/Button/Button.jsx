import { useRef, useState } from "react";
import "./Button.css";
import FormField from "../Form/Form";
import ButtonContext from "./ButtonContext";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const body = {
  name: "",
  email: "",
  phone: "",
};

const Button = () => {
  const btnRef = useRef();
  const [product, setProduct] = useState();
  const [show, setShow] = useState(false);
  const axiosPrivate = useAxiosPrivate();

  const showForm = () => {
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const handleClick = async () => {
    try {
      const res = await axiosPrivate.get("/auth");
      console.log(res.data);
      if (res.data) {
        body.name = res.data.name;
        body.email = res.data.email;
        body.phone = res.data.phone;
      } else {
        body.name = "";
        body.email = "";
        body.phone = "";
      }
      console.log(body);
    } catch (error) {
      if (error) {
        body.name = "";
        body.email = "";
        body.phone = "";
        console.log(error);
      }
    }

    showForm();
    const corps = document.querySelector(".corps");
    corps.classList.add("none");
    setProduct(btnRef.current.parentElement.querySelector("h1").textContent);
  };
  return (
    <>
      {show && (
        <ButtonContext.Provider value={[product, showForm, body]}>
          <FormField />
        </ButtonContext.Provider>
      )}
      <button ref={btnRef} onClick={() => handleClick()} className="show-modal">
        Intéressé ?
      </button>
    </>
  );
};

export default Button;
