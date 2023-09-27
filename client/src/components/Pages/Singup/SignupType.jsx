import "./SignupType.scss";
import particular from "../../../assets/particular.png";
import entreprise from "../../../assets/entreprise.png";
import { useState } from "react";

const SignupType = () => {
  const [choixUser, setChoixUser] = useState(null);

  const handleChoixUser = (choix) => {
    setChoixUser(choix);
  };

  return (
    <div className="type">
      <input className="input__type"
        type="radio"
        name="type"
        value="Regular"
        id="entreprise"
        checked={choixUser === "entreprise"}
        onChange={() => handleChoixUser("entreprise")}
      />
      <label
        className={choixUser === "entreprise" ? "selected" : ""}
        htmlFor="entreprise"
      >
        <img src={entreprise} alt="logoentre" />
        <span>Entreprise</span>
      </label>

      <input className="input__type"
        type="radio"
        name="type"
        value="Medium"
        id="particuler"
        checked={choixUser === "particulier"}
        onChange={() => handleChoixUser("particulier")}
      />
      <label
        className={choixUser === "particulier" ? "selected" : ""}
        htmlFor="particuler"
      >
        <img src={particular} alt="logopart" />
        <span>Particulier</span>
      </label>
    </div>
  );
};

export default SignupType;
