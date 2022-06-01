import {useContext} from 'react'
import { PhotoProvider } from '../../../context/PhotoContext'
import CartFilled from './CartFilled'
import CartEmpty from './CartEmpty'

const Cart = () => {
    const { myCartData, myShowCart } = useContext(PhotoProvider);
    const [cartData, setCartData] = myCartData;
    const [showCart, setShowCart] = myShowCart;

    if(cartData.length > 0){
        return <CartFilled cartData={cartData} setShowCart={setShowCart} setCartData={setCartData} />
    }else{
        return <CartEmpty setShowCart={setShowCart} />
    }
}

export default Cart