import FeatureStyle from '../Feature.module.css'

const DetailsFeat = ({titleFeat, description, picsUrl, size, digSize}) => {
  return (
    <article className={FeatureStyle.descriptionWrapp}>
        {/* left part */}
        <div className={FeatureStyle.leftDesc}>                 
            <div className={FeatureStyle.subTitleFeat}>
                <h3>About {titleFeat}</h3>
            </div>

            <div className={FeatureStyle.textDescWrapper}>
                <p className={FeatureStyle.descText}>{description}</p>
            </div>
        </div>

        {/* right part */}
        <div className={FeatureStyle.rightDesc} >
            <div className={FeatureStyle.subTitleFeatRight}>
                <h3>People also buy</h3>
            </div>

            <div className={FeatureStyle.buyedItemsWrapp}>
                {picsUrl.length > 0 && picsUrl.map(item => <div key={item.image.src} className={FeatureStyle.imgFeatBuy}> <img src={item.image.src} alt={item.image.alt} style={{width:'100%', height:'100%'}} /> </div>)}
            </div>

            <div className={FeatureStyle.detailsWrapp}>
                <div className={FeatureStyle.detailsTitleWrapp}>
                    <h2>Details</h2>
                    <p className={FeatureStyle.sizeDet}>Size: {size.width} X {size.height} pixel</p>
                    <p className={FeatureStyle.sizeDet}>Size: {digSize} mb</p>
                </div>
            </div>
        </div>
     </article>
  )
}

export default DetailsFeat