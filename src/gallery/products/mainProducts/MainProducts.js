import MainProductsStyle from './MainProducts.module.css'
import SidebarFilter from './sidebarFilter/SidebarFilter'
import ProductList from './productList/ProductList'

const MainProducts = ({toggleSmallFilter}) => {
  return (
    <main className={MainProductsStyle.mainProdWrapp}>
        <SidebarFilter toggleSmallFilter={toggleSmallFilter} />
        <ProductList />
    </main>
  )
}

export default MainProducts