import {useState, useContext} from 'react'
import ProductlistStyle from './ProductList.module.css';
import {PhotoProvider} from '../../../../context/PhotoContext'

const SingleProduct = ({item}) => {
    const {myData, myStartIndex, myCartData, myShowCart } = useContext(PhotoProvider);

    const [cartData, setCartData] = myCartData;
    const [showCart, setShowCart] = myShowCart;
    const [isHovered, setIsHovered] = useState(false)

    const hoverOverImage = () =>  setIsHovered(true);
    const leaveOverImage = () => setIsHovered(false);

    const addToCartFeature = (item) => {
        setShowCart(true)
      if(!cartData.includes(item)){
            setCartData([...cartData, item])
        }else{
            alert('Item has been already added!')
        }
    }

  return (
    <div className={ProductlistStyle.productSingle}>
        <div className={ProductlistStyle.imageProductSingle} onMouseEnter={hoverOverImage} onMouseLeave={leaveOverImage}>
            <img src={item.image.src}  className={ProductlistStyle.imageProduct} alt={item.image.alt} />

            {item.bestseller && <div className={ProductlistStyle.bestsellWrapp}><p>Best Seller</p></div>}
            <div className={ProductlistStyle.imgCartButton} style={{ display: isHovered ? 'block' : 'none' }} onClick={()=>addToCartFeature(item)} >
                <p>ADD TO CART</p>
            </div>
        </div>

        <div className={ProductlistStyle.detailsProductSingle}>
            <p>{item.category}</p>
            <h4 className={ProductlistStyle.detailsProductSingleTitle}>{item.name}</h4>
            <p>${item.price}</p>
        </div>
    </div>
  )
}

export default SingleProduct