import SidebarFilterStyle from './SidebarFilter.module.css'

const PriceFilter = ({priceFilter, prices}) => {
    const [val0, val1, val2, val3] = prices;
  return (
        <div className={SidebarFilterStyle.priceRange}>
            <div className={SidebarFilterStyle.categoryTitle}>
                <h3>Price range</h3>
            </div>

            <div className={SidebarFilterStyle.categoryItemWrapp}>
                <input type='checkbox' className={SidebarFilterStyle.categoryItemInput} value='0'  ref={val0} onChange={priceFilter} id='0' />
                <label htmlFor='0'>Lower than $20</label>
            </div>

            <div className={SidebarFilterStyle.categoryItemWrapp}>
                <input type='checkbox' className={SidebarFilterStyle.categoryItemInput} value='1'  ref={val1}  onChange={priceFilter} id='1' />
                <label htmlFor='1'>$20 - $100</label>
            </div>

            <div className={SidebarFilterStyle.categoryItemWrapp}>
                <input type='checkbox' className={SidebarFilterStyle.categoryItemInput} value='2'  ref={val2} onChange={priceFilter} id='2' />
                <label htmlFor='2'>$100 - $200</label>
            </div>

            <div className={SidebarFilterStyle.categoryItemWrapp}>
                <input type='checkbox' className={SidebarFilterStyle.categoryItemInput} value='3' ref={val3} onChange={priceFilter} id='3' />
                <label htmlFor='3'>More than $200</label> 
            </div>
        </div>
  )
}

export default PriceFilter