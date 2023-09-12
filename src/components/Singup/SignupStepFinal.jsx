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
import { Field } from 'formik';

const SignupStepFinal = () => {
  const productCategoryIndex = useContext(ProductContext);
  const productContext = useContext(ButtonContext);
  const formContext = useContext(FormContext);
  const btnListRef = useRef();
  const [checkedBox, setChekedBox] = useState(true);
  const [productSelected, setproductSelected] = useState(productContext[0]);
  const [productChecked, setproductCheked] = useState(false);
  const checkboxRef = useRef([]);

  checkboxRef.current = [];

  const { name, email, phone, checked } = formContext[1];
  const productTypes = page[productCategoryIndex].products;
  // console.log(productTypes);
  // console.log(productSelected);

  const handleListClick = () => {
    const btnList = btnListRef.current;
    btnList.classList.toggle('open');
  };

  const handleChangeChecked = () => {
    if (checked) {
      setChekedBox(false);
    } else {
      setChekedBox(true);
    }
  };
  const addtoRefsCheck = (el) => {
    if (el && !checkboxRef.current.includes(el)) {
      checkboxRef.current.push(el);
    }
    // checkboxRef.current.map((checkbox) => {

    //   // console.log(checkbox.childNodes[0].checked);
    // });
  };
  const handleClickList = () => {
    const arrayChecked = [];
    checkboxRef.current.map((checkbox) => {
      arrayChecked.push(checkbox.childNodes[0].checked);
      if (checkbox.childNodes[0].checked) {
        setproductSelected(checkbox.childNodes[1].textContent);
      }
      // console.log(checkbox.childNodes[0].checked);
    });
    const count = arrayChecked.reduce((acc, currentValue) => {
      if (currentValue === true) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);
    if (!arrayChecked.includes(true)) {
      setproductSelected('Aucun produit selectionné');
    } else if (count > 1) {
      setproductSelected(`${count} produits selectionnés`);
    }
    console.log(arrayChecked);
    // if(checked.length == 0){
    //   setproductSelected('Aucun produit selectionné')
    // }
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
            <span className='btn-text'>{productSelected}</span>
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
                  <label className='item' ref={addtoRefsCheck}>
                    <Field
                      className='checkbox'
                      type='checkbox'
                      name='checked'
                      value={product.title}
                      onClick={handleClickList}
                    />
                    <span className='item-text'>{product.title}</span>
                  </label>

                  {/* <li className='item'>
                    <span className='checkbox'>
                      <i className='fa-solid fa-check check-icon'></i>
                    </span>
                    <span className='item-text'>{product.title}</span>
                  </li> */}
                </Fragment>
              );
            })}
          </ul>
        </div>
      </div>

      <p className='notSelectedProduit'>Sélectionnez au moins un produit</p>

      <div className='check'>
        <label>
          <input
            id='acceptCheckbox'
            type='checkbox'
            checked={checkedBox}
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
