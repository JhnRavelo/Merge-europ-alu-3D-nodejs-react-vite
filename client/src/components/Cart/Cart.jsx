import './Cart.css'
import fenetre from "../../../public/images/FENÊTRES/PNG/FENÊTRE COULISSANTE.png"
import fenetre1 from "../../../public/images/FENÊTRES/PNG/FENÊTRE BATTANTE.png"
import fenetre2 from "../../../public/images/FENÊTRES/PNG/FENÊTRE OSCILLO-BATTANTE.png"
// import fenetre3 from "../../../public/images/FENÊTRES/PNG/SOUFFLET.png"

const Cart = () => {



  return (
    <>
        <div className="pannier">
          <div className="titre__pannier">
            <h1>les produits qui vous ont intéressé:</h1>
          </div>
  
            <div className="cart-item">
              <div className="title__cart__item">
                <h1>Fenêtres Coulissante</h1>
              </div>
              <div className="img__cart__item">
                <img src={fenetre} alt="image du produit" />
              </div>
            </div>

            <div className="cart-item">
              <div className="title__cart__item">
                <h1>Fenêtres Battante</h1>
              </div>
              <div className="img__cart__item">
                <img src={fenetre1} alt="image du produit" />
              </div>
            </div>

            <div className="cart-item">
              <div className="title__cart__item">
                <h1>Fenêtres Oscillo-Battente</h1>
              </div>
              <div className="img__cart__item">
                <img src={fenetre2} alt="image du produit" />
              </div>
            </div>

        </div>
    </>
  )
}

export default Cart