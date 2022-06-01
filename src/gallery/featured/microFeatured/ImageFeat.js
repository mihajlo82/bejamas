import FeatureStyle from '../Feature.module.css'

const ImageFeat = ({imageUrl, imageAlt}) => {
  return (
    <div className={FeatureStyle.imageFeature}>
        <img src={imageUrl} className={FeatureStyle.imgFeat} alt={imageAlt} />
        <span className={FeatureStyle.markImgFeature}>Photo of the day</span>
    </div>
  )
}

export default ImageFeat