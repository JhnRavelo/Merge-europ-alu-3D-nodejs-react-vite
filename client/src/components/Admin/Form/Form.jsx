import { ErrorMessage, Field, Form, Formik } from "formik";
import "./Form.scss";
import propTypes from "prop-types";
import { useRef } from "react";
import { validate } from "../../../lib/utils/validationSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// import '../../../components/Pages/Form/Form.css'

const iniatialValues = {
    name:"",
    email:"",
    phone:"",
    password:"",
    type:[]
}

const FormAdd = (props) => {
  const btnListRef = useRef();
  const typeRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    props.setOpen(false);
  };

  const handleListClick = () => {
    const btnList = btnListRef.current;
    const typeList = typeRef.current;
    btnList.classList.toggle("open");
    typeList.classList.toggle("open");
  };

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Ajouter nouveau {props.slug}</h1>
        <Formik onSubmit={handleSubmit} validationSchema={validate} initialValues={iniatialValues}>
          {({values})=><Form>
            {props.columns
              .filter(
                (item) =>
                  item.field !== "id" &&
                  item.field !== "img" &&
                  item.field !== "connected" &&
                  item.field !== "createdAt"
              )
              .map((column, index) => {
                if (column.headerName == "Type") {
                  return (
                    <div className="item" key={index}>
                      <div className="menu-deroulant">
                        <label>Type</label>

                        <div className="container">
                          <div
                            className="select-btn"
                            ref={btnListRef}
                            onClick={handleListClick}
                          >
                            <span className="btn-text">{values.type}</span>
                            <span className="arrow-dwn">
                              <FontAwesomeIcon
                                icon={faChevronDown}
                                className="fa-solid fa-chevron-down"
                              />
                            </span>
                          </div>
                          <ul className="list-type" ref={typeRef}>
                            <label className="type">
                              <Field
                                className="checkbox"
                                type="checkbox"
                                name="type"
                                value="Entreprise"
                              />
                              <span className="item-text">Entreprise</span>
                            </label>
                            <label className="type">
                              <Field
                                className="checkbox"
                                type="checkbox"
                                name="type"
                                value="Particulier"
                              />
                              <span className="item-text">Particulier</span>
                            </label>
                            <ErrorMessage
                              name="type"
                              component={"p"}
                              className="error"
                            />
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className="item" key={index}>
                      <label>{column.headerName}</label>
                      <Field
                        type={column.type}
                        name={column.field}
                        inputMode={column.inputMode}
                        placeholder={column.placeholder}
                      />
                      <ErrorMessage
                        name={column.field}
                        component={"p"}
                        className="error"
                      />
                    </div>
                  );
                }
              })}
            <button>Send</button>
          </Form>}
        </Formik>
      </div>
    </div>
  );
};

FormAdd.propTypes = {
  setOpen: propTypes.any,
  columns: propTypes.any,
  slug: propTypes.string,
};

export default FormAdd;
