import pages from "../../../assets/json/pages.json";
import "./TopProduct.scss";

const TopProduct = () => {
  const product = pages[0].products;
  const title = pages[0].title;
  console.log(product);
  return (
    <div className="topBox">
      <h1>Les produits les plus intéréssant</h1>
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
