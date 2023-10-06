import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoEuro from "../../../assets/Logo_Euro.png";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
import useAdminContext from "../../../hooks/useAdminContext";
import { useRef } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { Field, Form, Formik } from "formik";

const Header = () => {

  const location = useLocation();
  const { pathname } = location;
  const { years, setYear, data, year } = useAdminContext();
  const selectDate = useRef();
  const chevron = useRef();
  const notication = useRef();

  const handleVisibleSelecteYear = () => {
    selectDate.current.classList.toggle("visible");
    chevron.current.classList.toggle("up");
  };

  const handleShowNotication = () => {
    notication.current.classList.toggle("showed");
  };
  
  const handleClickYear = (value) => {
    setYear(value.year);
    selectDate.current.classList.toggle("visible");
    chevron.current.classList.toggle("up");
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logoEuro} alt="logo" />
        <span>{"Europ'Alu"}</span>
      </div>
      {pathname === "/admin/" && (
        <div className="date">
          <div className="selected__date">
            <h2 onClick={handleVisibleSelecteYear}>Année {year}</h2>

            <FontAwesomeIcon
              ref={chevron}
              className="chevron"
              icon={faChevronDown}
              onClick={handleVisibleSelecteYear}
            />
          </div>
          <div ref={selectDate} className="setect__date">
            <Formik initialValues={{ year: year }}>
              {({ values }) => (
                <Form>
                  {years.lenght != 0 &&
                    years.map((item, index) => (
                      <label
                        key={index}
                        onClick={() => handleClickYear(values)}
                      >
                        <Field name="year" type="radio" value={item.year} />
                        année {item.year}
                      </label>
                    ))}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
      <div className="icons">
        <div ref={notication} className="log">
          <Link to="/admin/log">
            <div className="journal" onClick={handleShowNotication}>
              <div>
                <h2>{"Nouveaux comptes crées"}</h2>
                <span>10</span>
              </div>
              <h2 className="date">23/34/3553</h2>
            </div>
          </Link>
          <Link to="/admin/log">
            <div className="journal" onClick={handleShowNotication}>
              <div>
                <h2>{"Derniers produits intéressés"}</h2>
                <span>300</span>
              </div>
              <h2 className="date">23/34/3553</h2>
            </div>
          </Link>
        </div>
        <div className="notification" onClick={handleShowNotication}>
          <FontAwesomeIcon icon={faBell} className="bellIcon" />
          <span>1</span>
        </div>
        <div className="user">
          <img src={data.avatar} alt="" className="userIcon" />
          <span>{data.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
