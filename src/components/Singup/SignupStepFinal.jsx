import {
  faChevronDown,
  faEnvelope,
  faPhone,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment, useContext, useRef, useState } from 'react';
import ProductContext from '../Products/ProductContext';
import page from '../../assets/json/pages.json';
import ButtonContext from '../Button/ButtonContext';
import FormContext from '../Form/FormContext';

const SignupStepFinal = () => {
  const productCategoryIndex = useContext(ProductContext);
  const productContext = useContext(ButtonContext);
  const formContext = useContext(FormContext);
  const btnListRef = useRef();
  const [checked, setCheked] = useState(true);

  const { name, email, phone } = formContext[1];
  const productSelected = productContext[0];
  const productTypes = page[productCategoryIndex].products;
  console.log(productTypes);
  // console.log(productSelected);

  const handleListClick = () => {
    const btnList = btnListRef.current;
    btnList.classList.toggle('open');
  };

  const handleChangeChecked = () => {
    if (checked) {
      setCheked(false);
    } else {
      setCheked(true);
    }
  };

  return (
    <>
      <div className='pre-info'>
        <div className='nom'>
          <FontAwesomeIcon icon={faUser} className='fa fa-user' />
          <p id='nom'>{name}</p>
        </div>
        <div className='email'>
          <FontAwesomeIcon icon={faEnvelope} className='fa fa-user' />
          <p id='email'>{email}</p>
        </div>
        <div className='phone'>
          <FontAwesomeIcon icon={faPhone} className='fa fa-user' />
          <p id='phone'>{phone}</p>
        </div>
      </div>
      <div className='menu-deroulant'>
        <label>Produits qui vous Intérèssent :</label>

        <div className='container'>
          <div
            className='select-btn'
            ref={btnListRef}
            onClick={handleListClick}
          >
            <span className='btn-text'></span>
            <span className='arrow-dwn'>
              <FontAwesomeIcon
                icon={faChevronDown}
                className='fa-solid fa-chevron-down'
              />
            </span>
          </div>

          <ul className='list-items'>
            {productTypes.map((product, index) => {
              return (
                <Fragment key={index}>
                  <li className='item'>
                    <span className='checkbox'>
                      <i className='fa-solid fa-check check-icon'></i>
                    </span>
                    <span className='item-text'>{product.title}</span>
                  </li>
                </Fragment>
              );
            })}
            {/* <li className='item'>
              <span className='checkbox'>
                <i className='fa-solid fa-check check-icon'></i>
              </span>
              <span className='item-text'>Fenêtres Coulissante</span>
            </li>
            <li className='item'>
              <span className='checkbox'>
                <i className='fa-solid fa-check check-icon'></i>
              </span>
              <span className='item-text'>Fenêtres Oscillo-Battante</span>
            </li>
            <li className='item'>
              <span className='checkbox'>
                <i className='fa-solid fa-check check-icon'></i>
              </span>
              <span className='item-text'>Fenêtres à Souffltet</span>
            </li> */}
          </ul>
        </div>
      </div>

      <p className='notSelectedProduit'>Sélectionnez au moins un produit</p>

      <div className='check'>
        <label>
          <input
            id='acceptCheckbox'
            type='checkbox'
            checked={checked}
            onChange={handleChangeChecked}
          />
          {"Cette action va vous créer un compte chez Europ'Alu"}
        </label>
      </div>
      <div className='buttons'>
        <button
          id='submitBtn'
          type='submit'
          className='form-button signin-button'
        >
          Envoyer
        </button>
      </div>
      <p className='errorNotChecked'>Veillez accepter la création de compte</p>
    </>
  );
};

export default SignupStepFinal;
