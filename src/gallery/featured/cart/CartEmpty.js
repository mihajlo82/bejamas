import {MdOutlineClear} from 'react-icons/md'
import CartStyle from './Cart.module.css'

const CartEmpty = ({setShowCart}) => {
  return (
    <div className={CartStyle.cartWrapp}>
        <div className={CartStyle.cartHeaderWrapp}>
            <span>
                <MdOutlineClear className={CartStyle.closeCartSign}  onClick={()=> setShowCart(false)} />
            </span>
        </div>
        <div className={CartStyle.emptyCartWrapp}>
            <p>The Cart is empty!</p>
        </div>
    </div>
  )
}

export default CartEmpty