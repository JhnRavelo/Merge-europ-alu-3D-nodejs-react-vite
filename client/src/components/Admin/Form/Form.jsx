import { ErrorMessage, Field, Form, Formik, useFormikContext } from "formik";
import "./Form.scss";
import propTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { validate } from "../../../lib/utils/validationSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import defaultAxios from "../../../api/axios";

const userInitialValue = {
  name: "",
  email: "",
  phone: "",
  password: "",
  type: [],
};

const FormContent = ({ btn, editRow, slug }) => {
  const { errors } = useFormikContext();

  useEffect(() => {
    const btnSubmit = btn.current;
    if (slug == "user" && !editRow) {
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
    } else if (slug == "user" && editRow) {
      if (errors.name || errors.email || errors.type || errors.phone) {
        btnSubmit.classList.add("desabledBtn");
      } else {
        btnSubmit.classList.remove("desabledBtn");
      }
    }
  }, [errors, btn]);
};

const FormAdd = (props) => {
  const btnListRef = useRef();
  const typeRef = useRef();
  const btnSubmitRef = useRef();
  // const axiosPrivate = useAxiosPrivate();
  const [btnName, setbtnName] = useState("Envoyer");
  const [formTitle, setFormTitle] = useState("Ajouter nouveau");
  const [placeholder, setPlaceholder] = useState();
  const valueRef = useRef();

  useEffect(() => {
    handleTitle();
  }, []);

  const handleInitialValue = () => {
    var initial;
    if (props.editRow) {
      const value = props.editRow;
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
      if (props.slug == "user") {
        initial = userInitialValue;
      }
    }
    return initial;
  };

  valueRef.current = handleInitialValue();

  const onSubmit = async (values) => {
    try {
      if (props.editRow) {
        const res = await defaultAxios.put(`${props.url}`, values);
        console.log(res.data);
      } else {
        const res = await defaultAxios.post(`${props.url}`, values);
        if (res.data == `Utilisateur ajouté`) {
          props.setOpen(false);
          props.setEditRow(null);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

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
        <span
          className="close"
          onClick={() => {
            props.setEditRow(null);
            props.setOpen(false);
          }}
        >
          X
        </span>
        <h1>
          {formTitle} {props.slug}
        </h1>
        <Formik validationSchema={validate} initialValues={valueRef.current}>
          {({ values }) => (
            <Form>
              <FormContent
                btn={btnSubmitRef}
                slug={props.slug}
                editRow={props.editRow}
              />
              {props.columns
                .filter(
                  (item) =>
                    item.field !== "id" &&
                    item.field !== "img" &&
                    item.field !== "connected" &&
                    item.field !== "createdAt"
                )
                .map((column, index) => {
                  // handlePlaceholder(column)
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
                    if (column.field == "password" && props.editRow) {
                      column.placeholder = "ne changera pas si vide";
                    } else if (column.field == "password" && !props.editRow) {
                      column.placeholder = "Mot de passe";
                    }

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
                  onSubmit(values);
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
  url: propTypes.string,
};

export default FormAdd;
