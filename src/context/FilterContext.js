import React, { useContext, useEffect, useReducer } from 'react'
import { createContext } from 'react'
import { useContextProvider } from './ProductContext';
import  reducer from '../reducer/FilterReducer';

const FilterContext= createContext();
const initialState={
  filter_products: [],
  all_products: [],
  grid_view: false,
  sorting_value: "lowest",
  filters:{
    text:"",
    category: "all",
    company: "all",
    color: "all",
    maxPrice:0,
    minPrice:0,
    price:0,
  }
}
export const FilterContextProvider = ({children}) => {
   const[state,dispatch]= useReducer(reducer,initialState);
const {products}= useContextProvider();
const setGridView=()=>{
    return dispatch({type:"SET_GRID_VIEW" })
}
const setListView=()=>{
  return dispatch({type:"SET_LIST_VIEW" })
}
const sorting=(e)=>{
   const value= e.target.value;
  return dispatch({type:"GET_SORT_VALUE",payload:value});
}
const updateFilterValue = (event) => {
  let name = event.target.name;
  let value = event.target.value;

  return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
};
const clearFilters=()=>{
 return  dispatch({ type: "CLEAR_FILTERS" });
}
useEffect(()=>{
    dispatch({type:"LOAD_FILTER_PRODUCTS", payload:products})
},[products])
useEffect(()=>{
  dispatch({ type: "FILTER_PRODUCTS" });
  dispatch({type:"SORTING_PRODUCTS"})
},[products,state.sorting_value,state.filters])
  return (
    <FilterContext.Provider value={{...state,setGridView,setListView,sorting,updateFilterValue,clearFilters }}>
        {children}
    </FilterContext.Provider>
  )
}

export const  useFilterContext=()=>{
    return useContext(FilterContext);
}