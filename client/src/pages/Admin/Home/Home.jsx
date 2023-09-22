import ChartBox from '../../../components/Admin/ChartBox/ChartBox'
import TopProduct from '../../../components/Admin/TopProduct/TopProduct'
import './Home.scss'
import { chartBoxUser, chartBoxProduct } from '../../../assets/js/data'

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopProduct/>
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser}/>
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProduct}/>
      </div>
      <div className="box box4"></div>
      <div className="box box7"></div>
    </div>
  )
}

export default Home