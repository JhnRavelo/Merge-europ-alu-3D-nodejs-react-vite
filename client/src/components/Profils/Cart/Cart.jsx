import "./Cart.css";
import propTypes from "prop-types";
import { useEffect, useState } from "react";

const Cart = ({ data }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    if (data) {
      setProduct(data[0].products);
    }
  }, [data]);

  return (
    <>
      <div className="pannier">
        <div className="titre__pannier">
          <h1>les produits qui vous ont intéressé:</h1>
        </div>
        {product.map((prod, index) => (
          <div className="cart-item" key={index}>
            <div className="title__cart__item">
              <h1>{prod.title}</h1>
            </div>
            <div className="img__cart__item">
              <img src={prod.png} alt="image du produit" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

Cart.propTypes = {
  data: propTypes.any,
};

export default Cart;
