import {useState} from 'react'
import ProductsStyle from './Products.module.css'
import ProdHeader from './prodHeader/ProdHeader'
import MainProducts from './mainProducts/MainProducts'

const Products = () => {
  const [toggleSmallFilter, setToggleSmallFilter] = useState(false);
  return (
    <section className={ProductsStyle.productsWrapp}>
        <ProdHeader toggleSmallFilter={toggleSmallFilter} setToggleSmallFilter={setToggleSmallFilter} />
        <MainProducts toggleSmallFilter={toggleSmallFilter} setToggleSmallFilter={setToggleSmallFilter} />
    </section>
  )
}

export default Products