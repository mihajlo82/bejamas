import {useContext} from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import HeaderStyle from './Header.module.css'
import { PhotoProvider } from '../../context/PhotoContext'

const Header = () => {
  const { myCartData, myShowCart } = useContext(PhotoProvider);
  const [cartData, setCartData] = myCartData;
  const [showCart, setShowCart] = myShowCart;

  return (
    <header className={HeaderStyle.headerWrapp}>
        <div className={HeaderStyle.leftSide}>
            <h1>BEJAMAS_</h1>
        </div>
        <div className={HeaderStyle.rightSide}>
            <div className={HeaderStyle.cartWrapp}>
                <AiOutlineShoppingCart className={HeaderStyle.cart}  onClick={()=>setShowCart((prev)=> !prev)} />
                {cartData.length > 0 && <span className={HeaderStyle.cartNum}>{cartData.length} </span>}
            </div>
        </div>
    </header>
  )
}

export default Header