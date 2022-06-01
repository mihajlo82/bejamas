const UseFilters = ({prices, setFilterPrice, filterCategory, setFilterCategory}) => {
  
    const priceFilter = (e) => {
        let choosedVal = e.target.value;
        let isAlreadyChecked = e.target.checked;
        let checkCounter = 0;
        prices.forEach((item,i)=>{
            if(i==choosedVal && isAlreadyChecked){
                item.current.checked = true;
            }else{
            item.current.checked = false;
            checkCounter++;
            }
        })

        if(checkCounter === prices.length){
        setFilterPrice('');
        }else {
        setFilterPrice(choosedVal);
        }
    }
  
const filtersAdd = (e) => {
        let valuex = e.target.value;
        let checkIsValueActive = filterCategory.includes(valuex);
    
        if(!checkIsValueActive){
            setFilterCategory([...filterCategory, valuex])
        }else{
            let editArr = [];
            filterCategory.map(item => {
                if(item !== valuex){
                    editArr.push(item);
                }
            })
            setFilterCategory(editArr);
        }
    }
    return {priceFilter, filtersAdd}
}

export default UseFilters