import { useState, useEffect, createContext } from 'react'
import UseCalls from './UseCalls';

export const PhotoProvider = createContext(null);
const PhotoContext = ({children}) => {

    const [data, setData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')
    const [cartLength, setCartLength] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(5);
    const [activePageIndex, setActivePageIndex] = useState(0);
    const [filterCategory, setFilterCategory] = useState([]);
    const [filterPrice, setFilterPrice] = useState('');

    //cart data
    const [cartData, setCartData] = useState([])
    const [showCart, setShowCart] = useState(false)
    const {cleaningFilter, justCategoryFilter, priceFilter, categoryAndPriceFilter} = UseCalls({setData,setStartIndex, setEndIndex, setActivePageIndex, setErrorMessage, filterCategory, setTotalPages, filterPrice})

    //initial fetch data
    useEffect(()=>{
        cleaningFilter()
    }, [])


    useEffect(()=>{

          //if is applied category filter without price filter
         if(filterCategory.length > 0 && filterPrice ===''){
            justCategoryFilter()
         }else if(filterCategory.length === 0 && filterPrice !== ''){
             //if is applied price filter alone
              priceFilter()
         }else if(filterCategory.length > 0 && filterPrice !==''){
            //if is applied price filter and category filter
            categoryAndPriceFilter()
         }    
         else{
             //no filters applied
             cleaningFilter()
         }
         
    }, [filterCategory, filterPrice])

 
  return (
    <PhotoProvider.Provider 
        value={{
          myData:[data, setData],
          myShowCart: [showCart, setShowCart],
          myErrMsg: [errorMessage, setErrorMessage],
          myCartLength: [cartLength, setCartLength],
          myStartIndex: [startIndex, setStartIndex],
          myEndIndex: [endIndex, setEndIndex],
          myTotalPages: [totalPages, setTotalPages],
          myFilterCategory: [filterCategory, setFilterCategory],
          myActivePageIndex:[activePageIndex, setActivePageIndex],
          myFilterPrice: [filterPrice, setFilterPrice],
          myCartData: [cartData, setCartData],
          myShowCart: [showCart, setShowCart]
        }}
    >
        {children}
    </PhotoProvider.Provider>
  )
}

export default PhotoContext