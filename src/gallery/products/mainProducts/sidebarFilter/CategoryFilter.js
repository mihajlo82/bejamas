import SidebarFilterStyle from './SidebarFilter.module.css'

const CategoryFilter = ({filtersAdd}) => {
  return (
    <div className={SidebarFilterStyle.categoryWrapp}>
            
    {/* category filter types */}           
        <div className={SidebarFilterStyle.categoryTitle}>
            <h3>Category</h3>
        </div>
        
        <div className={SidebarFilterStyle.categoryItemWrapp}>
            <input type='checkbox' className={SidebarFilterStyle.categoryItemInput} value='europe' onChange={filtersAdd} id='europe'/>
            <label htmlFor='europe'>European</label>
        </div>

        <div className={SidebarFilterStyle.categoryItemWrapp}>
            <input type='checkbox' className={SidebarFilterStyle.categoryItemInput} value='asia' onChange={filtersAdd} id='asia' />
            <label htmlFor='asia'>Asian</label>
        </div>

        <div className={SidebarFilterStyle.categoryItemWrapp}>
            <input type='checkbox' className={SidebarFilterStyle.categoryItemInput} value='africa' onChange={filtersAdd} id='africa' />
            <label htmlFor='africa'>African</label>
        </div>

        <div className={SidebarFilterStyle.categoryItemWrapp}>
            <input type='checkbox' className={SidebarFilterStyle.categoryItemInput} value='australia' onChange={filtersAdd} id='australia' />
            <label htmlFor='australia'>Australian</label>
        </div>

        <div className={SidebarFilterStyle.categoryItemWrapp}>
            <input type='checkbox' className={SidebarFilterStyle.categoryItemInput} value='america' onChange={filtersAdd} id='america' />
            <label htmlFor='america'>American</label>
        </div>
</div>
  )
}

export default CategoryFilter