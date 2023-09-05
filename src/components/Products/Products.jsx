import "./Product.css"
import Button from "../Button/Button"
import HeaderProduct from "../HeaderProduct/HeaderProduct"

import pages from '../../assets/json/pages.json'
import propTypes from 'prop-types'
import ProductContext from "./ProductContext"
import { useContext } from "react"


const Products = ({index}) => {
    const indexContext = useContext(ProductContext)
    const product = pages[indexContext].products[index]
  return (
    <>
        <HeaderProduct/>
        <section>
            <div className="container">
                <div className="row">
                    <div className="fenetre__coulissante">
                        <div className="presentation">
                            <div className="img__pres">
                                <img className="float_right" src={product.png} alt="" />
                            </div>
                            <div className="desc">
                                <div className="button_intrested_start">
                                    <h1 className="title">{product.title}</h1>
                                    <p className="short__desc">Lorem, ipsum. Quam, sit obcaecati corrupti accusamusui suscipit morum quis. Incidunt aliquid maiores soluta mollitia eveniet?</p>

                                    <Button />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

Products.propTypes = {
    index : propTypes.number
  }
export default Products