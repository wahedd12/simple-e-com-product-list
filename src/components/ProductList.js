import React from 'react'

import ProductItem from './ProductItem';

 

const products = [
  { id: 1, name: 'Table', price: 29.99, available: true },
  { id: 2, name: 'Door', price: 49.99, available: false },
  { id: 3, name: 'Bed', price: 50.99, available: true },
   { id: 3, name: 'Dining table set', price: 26.99, available: true },
   { id: 3, name: 'Shelf', price: 32.99, available: true }
];




const ProductList = () => {
  return (

    <div>
        <div className='content'>{products.map(product => (
        <ProductItem key={product.id} product={product} />
        
      ))}</div>
      


      
    </div>
  )
}

export default ProductList