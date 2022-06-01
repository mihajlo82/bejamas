import {useState, useEffect, useContext} from 'react'
import PaginationStyle from './Pagination.module.css'
import {BiLeftArrowAlt} from 'react-icons/bi';
import {BiRightArrowAlt} from 'react-icons/bi';
import { PhotoProvider } from '../../../../../context/PhotoContext';


const Pagination = () => {
  const {myData, myStartIndex, myEndIndex, myTotalPages, myActivePageIndex} = useContext(PhotoProvider);
  const [data, setData] = myData;
  const [startIndex, setStartIndex] = myStartIndex;
  const [endIndex, setEndIndex] = myEndIndex;
  const [totalPages, setTotalPages] = myTotalPages;

  const [activePageIndex, setActivePageIndex] = myActivePageIndex;

  useEffect(() => {
    let start = activePageIndex * 6;
    let end = start+5;  
    setStartIndex(start);
    setEndIndex(end);

  }, [activePageIndex])
  

  const pager = () => {
    let filledArray = new Array(totalPages).fill(0);

    return filledArray.map((_, index) => {
        if(index === activePageIndex){
          return (
           <div key={index} style={{display:'flex', alignItems:'center', justifyContent:'center',fontWeight:'bold', margin:'0 6px', fontSize:'1.05rem', borderRadius:'10px', color:'black'}}>
             <p onClick={()=> setActivePageIndex(index) }>{index +1 }</p>
           </div>
           )
       
        }else{
          return (
            <div  key={index} style={{display:'flex', alignItems:'center', justifyContent:'center', margin:'0 6px', borderRadius:'10px', color:'gray', fontWeight:'bold'}}>
              <p onClick={()=> setActivePageIndex(index) }>{index +1 }</p>
            </div>
            );
        }
    })
  }

  return (
    <section className={PaginationStyle.paginateWrapper} >
        <div className={PaginationStyle.paginateInside}>
              { activePageIndex > 0 && totalPages>1 && <div className={PaginationStyle.arrowsPager}><BiLeftArrowAlt onClick={()=>setActivePageIndex((prev)=> prev-1)} className={PaginationStyle.arrowStyle} /></div>}
               <div className={PaginationStyle.numsPager}> { totalPages > 1 && pager()} </div>
              {activePageIndex+1 < totalPages && <div className={PaginationStyle.arrowsPager}> <BiRightArrowAlt className={PaginationStyle.arrowStyle} onClick={()=>setActivePageIndex((prev)=> prev+ 1)}/> </div>}
        </div>
    </section>
  )
}

export default Pagination