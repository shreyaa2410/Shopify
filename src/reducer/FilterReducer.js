
const FilterReducer = (state,action) => {
  switch(action.type){
    case 'LOAD_FILTER_PRODUCTS':
        return {
            ...state,
            filter_products:[...action.payload],
            all_products:[...action.payload]
        }
        case 'SET_GRID_VIEW':
            return{
                ...state,
                grid_view: true,
            }
        
        case 'SET_LIST_VIEW':
            return {
                ...state,
                grid_view:false,
            }
        case 'GET_SORT_VALUE':
            return{
               ...state,
               sorting_value: action.payload
            }
            case 'SORTING_PRODUCTS':
                let {sorting_value}= state;
                let sortData;
                let sortProduct= [...action.payload];
                function sortingProducts(a,b){
                   if(sorting_value==='lowest')
                    return a.price-b.price;
                if(sorting_value === 'highest')
                    return b.price- a.price;
                if(sorting_value==='a-z')
                    return a.name.localeCompare(b.name);
                if(sorting_value==='z-a')
                    return b.name.localeCompare(a.name);
                }   
                sortData= sortProduct.sort(sortingProducts);
                return {
                    ...state,
                    filter_products:sortData,
                }
        default:
            return state;
  }
}

export default FilterReducer