import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoEuro from "../../../assets/Logo_Euro.png";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
import useAdminContext from "../../../hooks/useAdminContext";
import { useRef, useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [selectedYear, setSelectedYear] = useState(2023);

  const location = useLocation();
  const { pathname } = location;

  const selectDate = useRef();
  const chevron = useRef();

  const handleVisibleSelecteYear = () => {
    selectDate.current.classList.toggle("visible");
    chevron.current.classList.toggle("up");
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const { data } = useAdminContext();
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logoEuro} alt="logo" />
        <span>{"Europ'Alu"}</span>
      </div>
      {
        pathname === '/admin/' && (
        <div className="date">
          <div className="selected__date">
            <h2 onClick={handleVisibleSelecteYear}>Année {selectedYear}</h2>

            <FontAwesomeIcon
              ref={chevron}
              className="chevron"
              icon={faChevronDown}
              onClick={handleVisibleSelecteYear}
            />
          </div>
          {/* {selectYearVisible && ( */}
          <div ref={selectDate} className="setect__date">
            <label>
              <input
                type="radio"
                value={2023}
                checked={selectedYear === "2023"}
                onChange={handleYearChange}
              />
              année 2023
            </label>
            <label>
              <input
                type="radio"
                value={2024}
                checked={selectedYear === "2024"}
                onChange={handleYearChange}
              />
              année 2024
            </label>
            <label>
              <input
                type="radio"
                value={2025}
                checked={selectedYear === "2025"}
                onChange={handleYearChange}
              />
              année 2025
            </label>
            {/* 
            <span>2024</span>
            <span>2025</span>
            <span>2026</span> */}
          </div>
          {/* )} */}

          {/* <TextField
            select
            label="Année"
            value={selectedYear}
            onChange={handleYearChange}
            variant="outlined"
            className="year-picker"
          >
            {years.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </TextField> */}
        </div>
        )
      }
      <div className="icons">
        <div className="notification">
          <FontAwesomeIcon icon={faBell} className="bellIcon" />
          <span>1</span>
        </div>
        <div className="user">
          <img src={data.avatar} alt="" className="userIcon" />
          {/* <FontAwesomeIcon icon={faUser} className="userIcon" /> */}
          <span>{data.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
