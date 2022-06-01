import {useContext, useState} from 'react'
import ProductlistStyle from './ProductList.module.css'
import Pagination from './pagination/Pagination'
import { PhotoProvider } from '../../../../context/PhotoContext'
import SingleProduct from './SingleProduct'

const ProductList = () => {
    const {myData, myStartIndex} = useContext(PhotoProvider);
    const [data, setData] = myData;
    const [startIndex, setStartIndex] = myStartIndex;
    let counter = 0;

  return (
    <div className={ProductlistStyle.rightMainProdWrapp}>
            <div className={ProductlistStyle.rightMainProdWrappInner}>
            {/* index <= endIndex */}
                {data.length > 0 && data.map( (item, index) =>{
                    if(index >= startIndex &&  counter < 6 && !item.featured){
                        counter++
                        return <SingleProduct item={item} key={item.id} />
                    }
                })}

                {data.length === 0 && <div style={{width:'100%', display:'flex', justifyContent:'center', fontWeight:'bold'}}><p>No data available!</p> </div>}
            </div>
            <Pagination  />
        </div>
  )
}

export default ProductList