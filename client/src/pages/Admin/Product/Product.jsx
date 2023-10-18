import { useParams } from "react-router-dom"
import useAdminContext from "../../../hooks/useAdminContext"
import { useEffect } from "react"
import Single from "../../../components/Admin/SingleProduct/Single"
import { singleProductData } from "../../../assets/js/data"

const Product = () => {
 const {id} = useParams()
 const {singleProduct} = useAdminContext()

 useEffect(()=>{
    console.log(singleProduct)
 },[singleProduct])

 return(
    <div className="product">
        <Single title={singleProduct.title} id={id} img={singleProduct.png} description={singleProduct.description} gallery={singleProduct.gallery.split(",")} {...singleProductData}/>
    </div>
 )
}

export default Product