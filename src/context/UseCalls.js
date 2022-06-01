import axios from 'axios'

const UseCalls = ({setData,setStartIndex, setEndIndex, setActivePageIndex, setErrorMessage, filterCategory, setTotalPages, filterPrice}) => {

const justCategoryFilter = async() => {
     axios.get(`http://localhost:8123/products`)
        .then(res => {
                let tempArr = [];
                let tempData = res.data;
                filterCategory.forEach(filter=>{
                tempData.forEach(elem => {
                        if(filter === elem.category){
                            tempArr.push(elem);
                        }
                    })
                })
                let length = Math.ceil(tempArr.length/6);
                setData(tempArr)
                setStartIndex(0);
                setEndIndex(5)
                setActivePageIndex(0)
                setTotalPages(length);
                setErrorMessage('')
        })
        .catch(() => {
                setErrorMessage('Error Filtering Data!');
                setStartIndex(0);
                setEndIndex(5)
                setActivePageIndex(0);
        })
    }

const checkFilterPrice = (price) => {
    if(price == '0'){
        return [0,20];
    }else if(price == '1'){
        return [20, 100];
    }else if(price == '2'){
        return [100, 200];
    }else if(price == '3'){
        return [201, 999999999999];
    }else{
        return [0, 9999999999999];
    }
}


    
const priceFilter = async() => {
        let priceRange =  checkFilterPrice(filterPrice);

        axios.get(`http://localhost:8123/products`)
            .then(res => {
                let tempArr = [];
                let tempData = res.data;
                let length = Math.ceil(tempArr.length/6);
                setTotalPages(length);

                tempData.forEach(elem => { 
                    if(elem.price >= priceRange[0] && elem.price < priceRange[1]){
                            tempArr.push(elem);
                        }
                    })  

                    setStartIndex(0);
                    setEndIndex(5)
                    setActivePageIndex(0)
                    setData(tempArr) 
                    setErrorMessage('')                         
                })
            .catch(() => {
                setErrorMessage('Error Fetch Data!')
                setStartIndex(0);
                setEndIndex(5)
                setActivePageIndex(0);
                })
    }



const categoryAndPriceFilter = async()=> {
    axios.get(`http://localhost:8123/products`)
    .then(res => {
        let allData = [];
            let tempArr = [];
            let priceRange = checkFilterPrice(filterPrice);
            let tempData = res.data;
            filterCategory.forEach(filter=>{
            tempData.forEach(elem => {
                    if(filter === elem.category){
                        tempArr.push(elem);
                    }
                })
            })

            tempArr.forEach( tempEl => {
                if(tempEl.price >= priceRange[0] && tempEl.price < priceRange[1]){
                    allData.push(tempEl);
                }
            })  

            let length = Math.ceil(allData.length/6);
            setData(allData)
            setStartIndex(0);
            setEndIndex(5)
            setActivePageIndex(0)
            setTotalPages(length)
            setErrorMessage('')

        })
    .catch(() => {
        setErrorMessage('Error Filtering Data!');
        setStartIndex(0);
        setEndIndex(5)
        setActivePageIndex(0);
    })
}


const cleaningFilter = async() => {
    axios.get(`http://localhost:8123/products`)
    .then(res => {
        let length = Math.ceil(res.data.length/6);
        setTotalPages(length);
        setStartIndex(0);
        setEndIndex(5)
        setActivePageIndex(0);
        setData(res.data)   
        setErrorMessage('')

        })
    .catch(() => {
        setErrorMessage('Error Filtering Data!');
        setData([])
        setStartIndex(0);
        setEndIndex(5)
        setActivePageIndex(0);
        setTotalPages(1);
    })
}
  return {justCategoryFilter, priceFilter, categoryAndPriceFilter, cleaningFilter}
}

export default UseCalls