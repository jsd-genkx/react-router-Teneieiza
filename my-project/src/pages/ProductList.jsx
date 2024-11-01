import React from 'react'
import {useParams } from 'react-router-dom';
import Nav from '../components/Nav';



const ProductList = () => {

    const {id, name, detail} = useParams();

    return (
        <>
        <Nav />
        <div>
            <h1>Product No:{id}</h1>
            <p>Product name is:{name}</p>
            <p>Product detail is:{detail}</p>
        </div>
        </>
    )
}

export default ProductList
