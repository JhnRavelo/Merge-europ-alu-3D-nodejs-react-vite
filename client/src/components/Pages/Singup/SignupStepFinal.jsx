import {
  faChevronDown,
  faEnvelope,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useContext, useEffect, useRef, useState } from "react";
import productContext from "../Products/ProductContext";
import page from "../../../assets/json/pages.json";
import ButtonContext from "../Button/ButtonContext";
import FormContext from "../Form/FormContext";
import { ErrorMessage, Field } from "formik";
import { addUser } from "../../../lib/service/User";
import { addTraker } from "../../../lib/service/Trakers";
import useAuth from "../../../hooks/useAuth";

const SignupStepFinal = () => {
  const productCategoryIndex = useContext(productContext);
  const buttonContext = useContext(ButtonContext);
  const formContext = useContext(FormContext);
  const btnListRef = useRef();
  const btnSubmitRef = useRef();
  const checkboxRef = useRef([]);
  const [productSelected, setproductSelected] = useState(buttonContext[0]);
  const { setAuth } = useAuth();
  const errors = formContext[0];
  checkboxRef.current = [];

  const { name, email, phone, checked } = formContext[1];
  const productTypes = page[productCategoryIndex].products;
  console.log(checked);
  useEffect(() => {
    var btnSubmit = btnSubmitRef.current;
    if (errors.checked || errors.checkbox) {
      btnSubmit.classList.add("desabledBtn");
    } else {
      btnSubmit.classList.remove("desabledBtn");
    }
  }, [errors]);

  const handleListClick = () => {
    const btnList = btnListRef.current;
    btnList.classList.toggle("open");
  };

  const addtoRefsCheck = (el) => {
    if (el && !checkboxRef.current.includes(el)) {
      checkboxRef.current.push(el);
    }
  };
  const handleClickList = () => {
    const arrayChecked = [];
    checkboxRef.current.map((checkbox) => {
      arrayChecked.push(checkbox.childNodes[0].checked);
      if (checkbox.childNodes[0].checked) {
        setproductSelected(checkbox.childNodes[1].textContent);
      }
    });
    const count = arrayChecked.reduce((acc, currentValue) => {
      if (currentValue === true) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);
    if (!arrayChecked.includes(true)) {
      setproductSelected("Aucun produit selectionné");
    } else if (count > 1) {
      setproductSelected(`${count} produits selectionnés`);
    }
    console.log(arrayChecked);
  };

  const onSubmit = async () => {
    console.log("click");
    try {
      const res = await addUser(formContext[1]);

      const role = res.data.role,
      accessToken = res.data.accessToken;
      console.log(role);
      if (res != `L'utilisateur existe déjà`) {
        setAuth({role, accessToken});
      }

      const track = await addTraker(formContext[1]);
      // console.log(track);
      if (role && track.data) {
        buttonContext[1]();
      }
    } catch (error) {
      if (!error?.response) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="pre-info">
        <div className="nom">
          <FontAwesomeIcon icon={faUser} className="fa fa-user" />
          <p id="nom">{name}</p>
        </div>
        <div className="email">
          <FontAwesomeIcon icon={faEnvelope} className="fa fa-user" />
          <p id="email">{email}</p>
        </div>
        <div className="phone">
          <FontAwesomeIcon icon={faPhone} className="fa fa-user" />
          <p id="phone">{phone}</p>
        </div>
      </div>
      <div className="menu-deroulant">
        <label>Produits qui vous Intérèssent :</label>

        <div className="container">
          <div
            className="select-btn"
            ref={btnListRef}
            onClick={handleListClick}
          >
            <span className="btn-text">{productSelected}</span>
            <span className="arrow-dwn">
              <FontAwesomeIcon
                icon={faChevronDown}
                className="fa-solid fa-chevron-down"
              />
            </span>
          </div>

          <ul className="list-items">
            {productTypes.map((product, index) => {
              return (
                <Fragment key={index}>
                  <label className="item" ref={addtoRefsCheck}>
                    <Field
                      className="checkbox"
                      type="checkbox"
                      name="checked"
                      value={product.title}
                      onClick={handleClickList}
                    />
                    <span className="item-text">{product.title}</span>
                  </label>
                </Fragment>
              );
            })}
          </ul>
        </div>
      </div>

      <ErrorMessage
        name="checked"
        component={"p"}
        className="notSelectedProduit"
      />

      <div className="check">
        <label>
          <Field id="acceptCheckbox" type="checkbox" name="checkbox" />
          {"Cette action va vous créer un compte chez Europ'Alu"}
        </label>
      </div>
      <div className="buttons">
        <button
          ref={btnSubmitRef}
          id="submitBtn"
          type="button"
          className="form-button signin-button"
          onClick={onSubmit}
        >
          Envoyer
        </button>
      </div>
      <ErrorMessage
        component={"p"}
        name="checkbox"
        className="errorNotChecked"
      />
    </>
  );
};

export default SignupStepFinal;
