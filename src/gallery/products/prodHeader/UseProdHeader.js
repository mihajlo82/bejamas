const UseProdHeader = ({data, priceSortToggle, setData, setPriceSortToggle, alphabetSortToggle, setAlphabetSortToggle}) => {
    const sortbyPrice = () => {
        if(priceSortToggle){
            let temp = [...data]
            temp.sort((a,b) => a.price - b.price);
            setData(temp);
        }else{
            let temp = [...data]
            temp.sort((a,b) => b.price - a.price);
            setData(temp);
        }
       setPriceSortToggle((prev)=> !prev)
    }


    const sortbyAlphabet = () => {
        if(alphabetSortToggle){
            let temp = [...data]
            temp.sort((a,b) =>a.name.localeCompare(b.name));
            setData(temp);
        }else{
            let temp = [...data]
            temp.sort((a,b) =>b.name.localeCompare(a.name));
            setData(temp);
        }
        setAlphabetSortToggle((prev)=> !prev)
       
    }
  return {sortbyPrice, sortbyAlphabet}
}

export default UseProdHeader