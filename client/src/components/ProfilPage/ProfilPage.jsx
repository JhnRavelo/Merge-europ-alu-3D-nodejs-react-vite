import './ProfilPage.css'
import UserProfileCard from '../UserProfileCard/UserProfileCard'
import Cart from '../Cart/Cart'

const ProfilPage = () => {
  return (
    <>
      <div className="profile__page">
        <div className="profile__box">
          <UserProfileCard/>
        </div>
        <div className="card__box">
          <Cart/>
        </div>
      </div>
    </>
  )
}

export default ProfilPage