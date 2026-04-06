import React, { useState } from 'react'

function ProductForm({ handleAddProduct }) {
  const [error, setError] = useState("")
  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value.trim()
    const price = e.target.price.value.trim()
    const quantity = e.target.quantity.value.trim()

    if (name.length === 0) {
      setError("Please provide a product name!");
      return;
    }
    else if (price <= 0) {
      setError("Please provide a product price!");
      return;
    }
    else if (quantity <= 0) {
      setError("Please provide a product quantity!");
      return;
    }
    else {
      setError("")
    }


    const newProduct = {
      name, price, quantity
    }

    handleAddProduct(newProduct)

  }
  return (
    <div>
      <h3>Add a Product</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder='name' /> <br />

        <input type="text" name='price' placeholder='Product price' /> <br />

        <input type="text" name='quantity' placeholder='Product quantity' /> <br />

        <input type="submit" value={"Submit"} /> <br />
      </form>
      <small style={{ color: "red" }}>{error}</small>
    </div>
  )
}

export default ProductForm