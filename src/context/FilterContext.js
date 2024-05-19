import React, { useContext, useEffect, useReducer } from 'react'
import { createContext } from 'react'
import { useContextProvider } from './ProductContext';
import  reducer from '../reducer/FilterReducer';

const FilterContext= createContext();
const initialState={
    filter_products: [],
  all_products: [],
  grid_view: true,
}
export const FilterContextProvider = ({children}) => {
   const[state,dispatch]= useReducer(reducer,initialState);
const {products}= useContextProvider();
const setGridView=()=>{
    return dispatch({type:"SET_GRID_VIEW" })
}
useEffect(()=>{
    dispatch({type:"LOAD_FILTER_PRODUCTS", payload:products})
},[products])
  return (
    <FilterContext.Provider value={{...state,setGridView }}>
        {children}
    </FilterContext.Provider>
  )
}

export const  useFilterContext=()=>{
    return useContext(FilterContext);
}