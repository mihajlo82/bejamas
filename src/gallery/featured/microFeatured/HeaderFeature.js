import FeatureStyle from '../Feature.module.css'

const HeaderFeature = ({titleFeat, addToCartFeature}) => {
  return (
    <div className={FeatureStyle.featureHeader}>
        <div className={FeatureStyle.featureHeaderLeft}> 
            <h2>{titleFeat}</h2>
        </div>

        <div className={FeatureStyle.featureHeaderRight}> 
            <button className={FeatureStyle.buttonAdd} onClick={addToCartFeature}>ADD TO CART</button>
        </div>
   </div>
  )
}

export default HeaderFeature