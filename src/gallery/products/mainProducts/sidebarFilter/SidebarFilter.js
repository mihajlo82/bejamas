import {useContext, useRef} from 'react'
import SidebarFilterStyle from './SidebarFilter.module.css'
import { PhotoProvider } from '../../../../context/PhotoContext';
import UseFilters from './UseFilters';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import {AiOutlineSortAscending} from 'react-icons/ai';
import {AiOutlineSortDescending} from 'react-icons/ai';
import {BiDownArrowAlt} from 'react-icons/bi';
import {BiUpArrowAlt} from 'react-icons/bi';

const SidebarFilter = ({toggleSmallFilter}) => {
     const {myData,  myFilterCategory,myFilterPrice} = useContext(PhotoProvider);
     const [data, setData] = myData;
     const [filterPrice, setFilterPrice] = myFilterPrice;
     const [filterCategory, setFilterCategory] = myFilterCategory;
     const val0 = useRef(null)
     const val1 = useRef(null)
     const val2 = useRef(null)
     const val3 = useRef(null)

    let prices = [val0, val1, val2, val3];
    const {priceFilter, filtersAdd} = UseFilters({prices, setFilterPrice, setFilterCategory, filterCategory})


  return (
        <aside className={toggleSmallFilter ? SidebarFilterStyle.sideNone : SidebarFilterStyle.leftMainProdWrapp}>
            <CategoryFilter filtersAdd={filtersAdd} />
            <div className={SidebarFilterStyle.dividerCat}> <hr /> </div>
            <PriceFilter priceFilter={priceFilter} prices={prices} />
        </aside>
  )
}

export default SidebarFilter