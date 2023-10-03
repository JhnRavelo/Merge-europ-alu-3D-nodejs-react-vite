import { useRef } from "react";
import "./Button.css";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import useButtonContext from "../../../hooks/useButtonContext";

const Button = () => {
  const btnRef = useRef();
  const { setSelectedProduct, showForm, setBody, body } = useButtonContext();
  const axiosPrivate = useAxiosPrivate();

  const handleClick = async () => {
    try {
      const res = await axiosPrivate.get("/auth");
      console.log(res.data);
      if (res.data) {
        setBody({
          name: res.data.name,
          email: res.data.email,
          phone: res.data.phone,
        });
      } else {
        setBody({
          name: "",
          email: "",
          phone: "",
        });
      }
      console.log(body);
    } catch (error) {
      if (error) {
        setBody({
          name: "",
          email: "",
          phone: "",
        });
        console.log(error);
      }
    }

    showForm();
    setSelectedProduct(btnRef.current.parentElement.querySelector("h1").textContent);
  };

  return (
    <>
      <button ref={btnRef} onClick={() => handleClick()} className="show-modal">
        Intéressé ?
      </button>
    </>
  );
};

export default Button;
