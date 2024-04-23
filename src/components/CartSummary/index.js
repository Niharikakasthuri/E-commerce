// Write your code here
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import CartContext from '../../context/CartContext'
import Payment from '../Payment'
const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const items = cartList.length
      const totalPrice = cartList.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0,
      )
      return (
        <div>
          <h1>
            Order Total:<span>Rs {totalPrice}/-</span>
          </h1>
          <p>{items} items in cart</p>
          <Popup modal trigger={<button>Checkout</button>}>
            {close => <Payment close={close} />}
          </Popup>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
