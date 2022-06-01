import {useState, useContext} from 'react'
import ProdHeaderStyle from './ProdHeader.module.css'
import {AiOutlineSortAscending} from 'react-icons/ai';
import {AiOutlineSortDescending} from 'react-icons/ai';
import {BiDownArrowAlt} from 'react-icons/bi';
import {BiUpArrowAlt} from 'react-icons/bi';
import { PhotoProvider } from '../../../context/PhotoContext';
import UseProdHeader from './UseProdHeader';

import {BsFilterSquare} from 'react-icons/bs'


const ProdHeader = ({toggleSmallFilter,setToggleSmallFilter}) => {
    const [priceSortToggle, setPriceSortToggle] = useState(false)
    const [alphabetSortToggle, setAlphabetSortToggle] = useState(false)
    const {myData} = useContext(PhotoProvider);
    const [data, setData] = myData; 
    const {sortbyPrice, sortbyAlphabet} = UseProdHeader({data, priceSortToggle, setData, setPriceSortToggle, alphabetSortToggle, setAlphabetSortToggle})

  return (
    <section className={ProdHeaderStyle.ProdHeaderWrapp}>
        <div className={ProdHeaderStyle.ProdHeaderLeft}>
            <h2><b>Photography /</b> <span style={{fontWeight:'300'}}>Premium Photos</span></h2>
        </div>

        <div className={ProdHeaderStyle.ProdHeaderRight}>
            <div className={ProdHeaderStyle.SortWrapp}>
                <div className={ProdHeaderStyle.AlphabLogo} >
                   {alphabetSortToggle ? <AiOutlineSortDescending onClick={sortbyAlphabet} className={ProdHeaderStyle.lines}/> : <AiOutlineSortAscending onClick={sortbyAlphabet} className={ProdHeaderStyle.lines} />}
                </div>

                <div className={ProdHeaderStyle.sortByText}> <p> Sort By:</p></div>
                <div className={ProdHeaderStyle.priceText} >  <p> <b>Price</b> </p> </div>

                <div className={ProdHeaderStyle.sortByPriceArrow}>
                    {priceSortToggle ? <BiUpArrowAlt onClick={sortbyPrice} className={ProdHeaderStyle.priceArrow} /> : <BiDownArrowAlt onClick={sortbyPrice} className={ProdHeaderStyle.priceArrow} />}
                </div>
            </div>
        </div>

        <div className={ProdHeaderStyle.ProdHeaderRightSmall}>
              <BsFilterSquare onClick={()=> setToggleSmallFilter((prev)=>!prev)} className={ProdHeaderStyle.ProdHeaderRightSmallIcon} />
        </div>
    </section>
  )
}

export default ProdHeader