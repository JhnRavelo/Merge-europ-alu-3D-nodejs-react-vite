import "./ProfilPage.css";
import { useEffect, useState } from "react";
import UserProfileCard from "../../components/Profils/UserProfileCard/UserProfileCard";
import Cart from "../../components/Profils/Cart/Cart";
import useButtonContext from "../../hooks/useButtonContext";

const ProfilPage = () => {
  const [data, setData] = useState([])
  const {dataPage} = useButtonContext()

  useEffect(() => {
    if(dataPage.lenght !== 0){
      setData(dataPage)
    }
    
  }, [dataPage]);

  return (
    <>
      <div className="profile__page">
        <div className="profile__box">
          <UserProfileCard data={data}/>
        </div>
        <div className="card__box">
          <Cart data={data}/>
        </div>
      </div>
    </>
  );
};

export default ProfilPage;
