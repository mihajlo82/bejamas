import axios from "axios";
const UseFeatue = ({allData, cartData, picNums,setPicsUrl, setAllData, setTitleFeat, setImageUrl, setImageAlt, setDescription, setDigSize, setSize, setShowFeatured, setShowCart, setCartData }) => {

    const initFeature = ()=>{
        axios.get(`http://localhost:8123/products`)
        .then(res => {
            let el = res.data;
            if(el){

                let tempImages = [];
                el.map((it, ind) => {
                    if(picNums.indexOf(ind) >= 0){
                        tempImages.push(it);
                    }
                })

                setPicsUrl(tempImages)
                let featEl = el.find(el => el.featured === true);
                setAllData(featEl)
                setTitleFeat(featEl.name);
                setImageUrl(featEl.image.src);
                setImageAlt(featEl.image.alt)
                setDescription(featEl.details)
                setDigSize(featEl.digsize)
                setSize(featEl.size)
                setShowFeatured(true)
            }
           })
        .catch(() => setShowFeatured(false))
}

const addToCartFeature = () => {
    setShowCart(true)
  if(!cartData.includes(allData)){
        setCartData([...cartData, allData])
    }else{
        alert("Item has been alerady added!")
    }
}
  return {initFeature, addToCartFeature}
}

export default UseFeatue