import {useContext, useEffect, useState} from 'react'
import FeatureStyle from './Feature.module.css'
import Cart from './cart/Cart'
import { PhotoProvider } from '../../context/PhotoContext'
import HeaderFeature from './microFeatured/HeaderFeature';
import ImageFeat from './microFeatured/ImageFeat';
import DetailsFeat from './microFeatured/DetailsFeat';
import UseFeatue from './microFeatured/UseFeatue';

const Feature = () => {
    const {myCartData, myShowCart } = useContext(PhotoProvider);

    const [cartData, setCartData] = myCartData;
    const [showCart, setShowCart] = myShowCart;
    const [titleFeat, setTitleFeat] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [imageAlt, setImageAlt] = useState('');
    const [description,setDescription] = useState('');
    const [picNums, setPicNums] = useState([4, 7, 14])
    const [picsUrl, setPicsUrl] = useState([])
    const [showFeatured, setShowFeatured] = useState(true)
    const [size, setSize] = useState({});
    const [digSize, setDigSize] = useState('');
    const [allData, setAllData] = useState([]);
    const {initFeature, addToCartFeature} = UseFeatue({allData, cartData,picNums,setPicsUrl, setAllData, setTitleFeat, setImageUrl, setImageAlt, setDescription, setDigSize, setSize, setShowFeatured, setShowCart, setCartData})    
    
    useEffect(()=>{
        initFeature()
    }, [])

if(showFeatured){
  return (
    <section className={FeatureStyle.featureWrapp}>    
       { showCart && <Cart /> }
       <HeaderFeature titleFeat={titleFeat} addToCartFeature={addToCartFeature} />
       <ImageFeat imageUrl={imageUrl} imageAlt={imageAlt} />
       <div className={FeatureStyle.addBtnBelowWrapp}> <button className={FeatureStyle.addBtnBelow} onClick={addToCartFeature}>ADD TO CART</button> </div>
       <DetailsFeat titleFeat={titleFeat} description={description} picsUrl={picsUrl} size={size} digSize={digSize} />
       <hr className={FeatureStyle.featuredImgBottomLine} />
    </section>
  )
}else{
    return '';
 }
}



export default Feature