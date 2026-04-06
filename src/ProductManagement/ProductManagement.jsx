import React, { useState } from 'react'
import ProductForm from './ProductForm'
import ProductTable from './ProductTable'

function ProductManagement() {
    const [products, setProducts] = useState([]);

    const handleAddProduct = newProduct =>{
        setProducts(prev => [...prev, newProduct])
    }

    console.log(products)
  return (
    <div>
        <ProductForm handleAddProduct={handleAddProduct} />
        <ProductTable products={products} />
    </div>
  )
}

export default ProductManagement