import {MdOutlineClear} from 'react-icons/md'
import CartStyle from './Cart.module.css'


const CartFilled = ({cartData, setShowCart, setCartData}) => {
  return (
    <div className={CartStyle.cartWrapp}>
        <div className={CartStyle.cartHeaderWrapp}>
            <span>
                <MdOutlineClear className={CartStyle.closeCartSign}  onClick={()=> setShowCart(false)} />
            </span>
        </div>
        { cartData.length>0 && cartData.map((item, ind) => {
            return (
                <div key={item.id} className={CartStyle.cartItemWrapp}>
                    <div className={CartStyle.cartItemInnerData}>
                        <div className={CartStyle.cartItemLeft}>
                            <h3>{item.name}</h3>
                            <p>${item.price}</p>
                        </div>
                        
                        <div className={CartStyle.cartItemRight}>
                            <img src={item.image.src} alt={item.image.alt} className={CartStyle.cartImage} />
                        </div>

                    </div>

                    <div className={CartStyle.lineDivCart}>
                        <hr />
                    </div>
                </div> 
            )
            })}

        <div className={CartStyle.cartClearWrapp}>
            <button className={CartStyle.cartClearBtn} 
            onClick={()=> {
                setCartData([])
                setShowCart(false);
                }} >
                CLEAR</button>
        </div>
</div>
  )
}

export default CartFilled