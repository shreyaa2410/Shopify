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
useEffect(()=>{
    dispatch({type:"LOAD_FILTER_PRODUCTS", payload:products})
},[products])
useEffect(()=>{
  dispatch({type:"SORTING_PRODUCTS", payload:products})
},[products,state.sorting_value])
  return (
    <FilterContext.Provider value={{...state,setGridView,setListView,sorting }}>
        {children}
    </FilterContext.Provider>
  )
}

export const  useFilterContext=()=>{
    return useContext(FilterContext);
}