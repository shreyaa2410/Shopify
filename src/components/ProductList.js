import React from 'react'
import { useFilterContext } from '../context/FilterContext'
import GridView from './GridView';

const ProductList = () => {
  const{filter_products, grid_view}=useFilterContext();
 if(grid_view)
  {
    return <GridView products={filter_products} />;
  }
}

export default ProductList