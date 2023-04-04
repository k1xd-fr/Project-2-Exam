import Footer from '../Layout/Footer'
import HeadOrder from '../Layout/Header/HeadOrder/HeadOrder'
import OrderBusket from './OrderBusket'
import { OrderSausecCard } from './OrderBusket/OrderSauces/OrderSausecCard'

const Order = () => {
  return (
    <div>
        <HeadOrder/>
        <OrderBusket/>
        <Footer/>
    </div>
  )
}

export default Order