import React from 'react'
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import {add} from '../store/cartSlice'

const Product = () => {

    const dispatch = useDispatch()


    const [products, setProducts] = useState([])

    const API = 'https://fakestoreapi.com/products'

    // `${API}/${id}` for single product page

    useEffect(() => {
        fetch(API)
            .then(res => res.json())
            .then(result => setProducts(result))
    }, [])



    function addToCart(product){
        //dispatch add action to cart
        dispatch(add(product))
    }
    return (
        <>
            <h1 className="text-center m-5">Product Dashboard</h1>
            <div className="container-fluid">
                <div className="row">
                    {products.map(product => (
                        <div className="col-md-3 bg-light my-2" key={product.id}>
                            <Card className="h-100 d-flex flex-column justify-content-between">
                                <div className="text-center">
                                    <Card.Img variant="top" src={product.image} style={{ width: "100px", height: "130px" }} />
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>
                                            Price: {product.price}
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                                <Card.Footer className="mt-auto text-center">
                                    <Button variant="primary" onClick={() => addToCart(product)}>Add to bag</Button>
                                </Card.Footer>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Product