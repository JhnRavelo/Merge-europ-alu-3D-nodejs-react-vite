import { ErrorMessage, Field, Form, Formik, useFormikContext } from "formik";
import "./Form.scss";
import propTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { validate, validationPage } from "../../../lib/utils/validationSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import defaultAxios from "../../../api/axios";
import FileField from "./FileField";

const userInitialValue = {
  name: "",
  email: "",
  phone: "",
  password: "",
  type: [],
};

const pageInitialValue = {
  page: "",
  home: null,
  icon: null,
  position: "",
  minYAngle: "",
  maxYAngle: "",
  maxXAngle: "",
  minXAngle: "",
  // createdAt: "",
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
      if (errors.name || errors.updateEmail || errors.type || errors.phone) {
        btnSubmit.classList.add("desabledBtn");
      } else {
        btnSubmit.classList.remove("desabledBtn");
      }
    } else {
      if (Object.keys(errors).length !== 0) {
        btnSubmit.classList.add("desabledBtn");
      } else {
        btnSubmit.classList.remove("desabledBtn");
      }
    }
  }, [errors, editRow, slug, btn]);
};

const FormAdd = (props) => {
  const validateRef = useRef();
  const btnListRef = useRef();
  const typeRef = useRef();
  const btnSubmitRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  // const axiosPrivate = useAxiosPrivate();
  const [btnName, setbtnName] = useState("Envoyer");
  const [formTitle, setFormTitle] = useState("Ajouter nouveau");
  const valueRef = useRef();

  useEffect(() => {
    handleTitle();
  }, []);

  const handleInitialValue = () => {
    var initial;
    if (props.editRow) {
      console.log("edit");
      const value = props.editRow;
      if (props.slug == "user") {
        initial = {
          name: value.name,
          updateEmail: value.email,
          phone: value.phone,
          password: "",
          type: [value.type],
        };
      } else if (props.slug == "page") {
        initial = {
          page: value.page,
          home: null,
          icon: null,
          position: value.position,
          minYAngle: value.minYAngle,
          maxYAngle: value.maxYAngle,
          maxXAngle: value.maxXAngle,
          minXAngle: value.minXAngle,
        };
      }
    } else {
      if (props.slug == "user") {
        initial = userInitialValue;
      }
      // else {
      //   initial = {}
      // }
      else if (props.slug == "page") {
        initial = pageInitialValue;
      }
    }
    return initial;
  };

  valueRef.current = handleInitialValue();

  const onSubmit = async (values) => {
    try {
      if (props.editRow) {
        if (props.slug == "user") {
          values.id = props.editRow.id;
          const res = await defaultAxios.put(`${props.url}`, values);
          console.log(res.data);
          if (res.data == "Utilisateur modifié") {
            props.setOpen(false);
            props.setEditRow(null);
          }
        } else if (props.slug == "page") {
          const formData = new FormData();
          formData.append("id", props.editRow.id);
          formData.append("home", values.home);
          formData.append("icon", values.icon);
          formData.append("page", values.page);
          formData.append("position", values.position);
          formData.append("minYAngle", values.minYAngle);
          formData.append("maxYAngle", values.maxYAngle);
          formData.append("maxXAngle", values.maxXAngle);
          formData.append("minXAngle", values.minXAngle);
          const res = await defaultAxios.put(`${props.url}`, formData);
          if (res.data == `Page modifié`) {
            props.setOpen(false);
            props.setEditRow(null);
          }
        }
      } else {
        if (props.slug == "user") {
          const res = await defaultAxios.post(`${props.url}`, values);
          console.log(res.data);
          if (res.data == `Utilisateur ajouté`) {
            props.setOpen(false);
            props.setEditRow(null);
          }
        } else if (props.slug == "page") {
          const formData = new FormData();
          formData.append("home", values.home);
          formData.append("icon", values.icon);
          formData.append("page", values.page);
          formData.append("position", values.position);
          formData.append("minYAngle", values.minYAngle);
          formData.append("maxYAngle", values.maxYAngle);
          formData.append("maxXAngle", values.maxXAngle);
          formData.append("minXAngle", values.minXAngle);
          const res = await defaultAxios.post(`${props.url}`, formData);
          if (res.data == `Page ajouté`) {
            props.setOpen(false);
            props.setEditRow(null);
          }
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

  const handleValidate = () => {
    if (props.slug == "user") {
      return validate;
    } else if (props.slug == "page") {
      return validationPage;
    }
  };

  const handlePassword = () => {
    if (props.editRow) {
      return {
        placeholder: "ne changera pas si vide",
        name: "updatePassword",
      };
    } else {
      return {
        placeholder: "Mot de passe",
        name: "password",
      };
    }
  };
  const handleEmail = () => {
    var mail;
    if (props.editRow) {
      mail = "updateEmail";
    } else {
      mail = "email";
    }
    return mail;
  };

  validateRef.current = handleValidate();
  emailRef.current = handleEmail();
  passwordRef.current = handlePassword();

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
        <Formik
          validationSchema={validateRef.current}
          initialValues={valueRef.current}
        >
          {({ values, setFieldValue }) => (
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
                  } else if (column.field == "email") {
                    return (
                      <div className="item" key={index}>
                        <label>{column.headerName}</label>
                        <Field
                          type={column.type}
                          name={emailRef.current}
                          inputMode={column.inputMode}
                          placeholder={column.placeholder}
                        />
                        <ErrorMessage
                          name={emailRef.current}
                          component={"p"}
                          className="error"
                        />
                      </div>
                    );
                  } else if (column.field == "password") {
                    return (
                      <div className="item" key={index}>
                        <label>{column.headerName}</label>
                        <Field
                          type={column.type}
                          name={passwordRef.current.name}
                          inputMode={column.inputMode}
                          placeholder={passwordRef.current.placeholder}
                        />
                        <ErrorMessage
                          name={passwordRef.current.name}
                          component={"p"}
                          className="error"
                        />
                      </div>
                    );
                  } else if (column.field == "home" || column.field == "icon") {
                    return (
                      <div className="item" key={index}>
                        <label>{column.headerName}</label>
                        <FileField
                          name={column.field}
                          setFieldValue={setFieldValue}
                          accept={"image/png, .svg, .jpeg, .jpg"}
                        />
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
                  onSubmit(values);
                }}
                type="button"
                className="desabledBtn"
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
