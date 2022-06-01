import Header from './header/Header';
import GalleryStyle from './Gallery.module.css'
import Feature from './featured/Feature';
import Products from './products/Products';

const Gallery = () => {
  return (
    <main className={GalleryStyle.mainWrapp}>
        <Header />
        <Feature />
        <Products />
    </main>
  )
}

export default Gallery