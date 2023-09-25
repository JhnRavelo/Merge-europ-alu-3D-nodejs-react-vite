import { ErrorMessage, Field, Form, Formik, useFormikContext } from "formik";
import "./Form.scss";
import propTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { validate } from "../../../lib/utils/validationSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import defaultAxios from "../../../api/axios";

const userInitialValue = {
  name: "fgd",
  email: "",
  phone: "",
  password: "",
  type: [],
};

const FormContent = ({ btn }) => {
  const { errors } = useFormikContext();
  // const btnSubmitRef = useRef()
  useEffect(() => {
    const btnSubmit = btn.current;
    if (
      errors.name ||
      errors.email ||
      errors.password ||
      errors.type ||
      errors.phone
    ) {
      btnSubmit.classList.add("desabledBtn");
    } else {
      btnSubmit.classList.remove("desabledBtn");
    }
  }, [errors, btn]);
};

const FormAdd = (props) => {
  const btnListRef = useRef();
  const typeRef = useRef();
  const btnSubmitRef = useRef();
  const axiosPrivate = useAxiosPrivate();
  const [btnName, setbtnName] = useState("Envoyer");
  const [formTitle, setFormTitle] = useState("Ajouter nouveau");
  
  const handleInitialValue = () => {
    var initial 
    if (props.editRow) {
      console.log(props.editRow);
      const value = props.editRow;
      props.setEditRow(null);
      if (props.slug == "user") {
        initial = {
          name: value.name,
          email: value.email,
          phone: value.phone,
          password: "",
          type: [value.type],
        };
      }
    } else {
      props.setEditRow(null);
      if (props.slug == "user") {
       initial =userInitialValue;
      }
    }
    return initial
    
  };
  
  const initialValues = handleInitialValue()
  
  console.log(initialValues);
  const onSubmit = async (values) => {
    try {
      const res = await defaultAxios.post("/auth/addUser", values);
      if (res.data == `Utilisateur ajouté`) {
        props.setOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleTitle();
  }, []);

  const handleListClick = () => {
    const btnList = btnListRef.current;
    const typeList = typeRef.current;
    btnList.classList.toggle("open");
    typeList.classList.toggle("open");
  };

  const handleTitle = () => {
    if (props.editRow) {
      setFormTitle("Modifier");
      setbtnName("Modifier");
    } else {
      setFormTitle("Ajouter nouveau");
      setbtnName("Envoyer");
    }
  };

 

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>
          {formTitle} {props.slug}
        </h1>
        <Formik validationSchema={validate} initialValues={initialValues}>
          {({ values, errors }) => (
            <Form>
              <FormContent btn={btnSubmitRef} />
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
              <button
                ref={btnSubmitRef}
                onClick={() => {
                  onSubmit(values, errors);
                }}
                type="button"
              >
                {btnName}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

FormAdd.propTypes = {
  setOpen: propTypes.any,
  columns: propTypes.any,
  slug: propTypes.string,
  editRow: propTypes.any,
  setEditRow: propTypes.any,
};

export default FormAdd;
