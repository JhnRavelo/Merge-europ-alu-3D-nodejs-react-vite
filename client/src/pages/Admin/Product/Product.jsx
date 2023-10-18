import { useParams } from "react-router-dom"
import useAdminContext from "../../../hooks/useAdminContext"
import { useEffect } from "react"


const Product = () => {
 const {id} = useParams()
 const {singleProduct} = useAdminContext()

 useEffect(()=>{
    console.log(singleProduct)
 },[singleProduct])

 return(
    <div>
        {id}
    </div>
 )
}

export default Product