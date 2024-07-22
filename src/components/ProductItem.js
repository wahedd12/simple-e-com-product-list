import React from 'react';

function ProductItem({ product }) {
  return (
    
    <React.Fragment>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      {product.available ? (
        <p>Status: In Stock</p>
      ) : (
        <p>Status: Out of Stock</p>
      )}

  
    </React.Fragment>
  );
}

export default ProductItem;
