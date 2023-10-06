import { useState } from "react";
import pages from "../../../assets/json/pages.json";
import "./TopProduct.scss";
import { useEffect } from "react";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import useAdminContext from "../../../hooks/useAdminContext";

const TopProduct = () => {
  const product = pages[0].products;
  const title = pages[0].title;
  const {top} = useAdminContext()

  console.log(top);
  
  // const [data, setData] = useState([])
  // const privateAxios = useAxiosPrivate()

//   useEffect(()=>{
//     fetchData()
//   },[])

// const fetchData = async() => {
  
//   try {
//     const res = await privateAxios.post("/traker/top",{year:2023})

//     console.log(res.data);
//     setData(res.data)
//   } catch (error) {
//     console.log(error);
//   }
// }
  
  return (
    <div className="topBox">
      <h1>Top Produits</h1>
      <div className="list">
        {product.map((prod, index) => {
          return (
            <div className="listItem" key={index}>
              <div className="user">
                <img src={prod.png} alt="" />
                <div className="userTexts">
                  <span className="productCategorie">{title}</span>
                  <span className="email">{prod.title}</span>
                </div>
              </div>
              <span className="amount">300fois</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopProduct;
