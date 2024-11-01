import React, { useState } from 'react'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'

const Product = [
    {
        id: 1,
        name: 'Pepsi',
        detail: 'cola-drink'
    },
    {
        id: 2,
        name: 'Burgur',
        detail: 'Pork-burger'
    },
    {
        id: 3,
        name: 'Pizza',
        detail: 'Hawaiian-pizza'
    },
]


const Products = () => {
return (
    <>
    <Nav />
    <div>
        <h1>ProductList</h1>
        <ul>
            {Product.map((product)=>
            <li key={product.id}>
                <Link to={`/products/${product.id}`}> Product:{product.id}</Link>
            </li>
            )}
        </ul>
    </div>
    </>
  )
}

export default Products
