import './cart.css'
import Total from '../components/Total'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'

function Cart() {

  const cart = useSelector((state) => state.cart)
  return (
    <div>
      
      <div className='back'><a href='/'>Back to my home</a></div>
      
      <div className="cart">
        <div className="cart_left">
          <div>
            <h3>Shopping Cart</h3>
            {cart?.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
              />
            ))}
          </div>
        </div>

        <div className="cart_right">
          <Total />
        </div>

      </div>
    </div>
  )
}

export default Cart