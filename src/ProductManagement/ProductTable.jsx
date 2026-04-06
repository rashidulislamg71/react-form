import React from 'react'

function ProductTable({ products }) {
    return (
        <div>
            <h3>Product Table</h3>

            <table style={{ margin: "0 auto", borderCollapse: "collapse" }}>
                <thead>
                    <tr style={{ border: "1px solid black" }}>
                        <th style={{ border: "1px solid black", padding: "2px 10px" }}>NO.</th>
                        <th style={{ border: "1px solid black", padding: "2px 10px" }}>Product</th>
                        <th style={{ border: "1px solid black", padding: "2px 10px" }}>Price</th>
                        <th style={{ border: "1px solid black", padding: "2px 10px" }}>Quantity</th>
                        <th style={{ border: "1px solid black", padding: "2px 10px" }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, inx) => (
                            <tr key={inx}>
                                <td style={{ border: "1px solid black", padding: "2px 10px" }}>{inx + 1}</td>
                                <td style={{ border: "1px solid black", padding: "2px 10px" }}>{product.name}</td>
                                <td style={{ border: "1px solid black", padding: "2px 10px" }}>{product.price}</td>
                                <td style={{ border: "1px solid black", padding: "2px 10px" }}>{product.quantity}</td>
                                <td style={{ border: "1px solid black", padding: "2px 10px" }}>-</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable;