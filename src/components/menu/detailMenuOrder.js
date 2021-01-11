import React, { useEffect, useState } from 'react'
import './detailMenuOrder.css';
import {
    Link,
    useParams
} from "react-router-dom";

export default function DetailMenuOrder() {
    let { id } = useParams()

    const [listIdProduct, setlistIdProduct] = useState([])
    const [listProduct, setlistProduct] = useState([])

    useEffect(() => {
        fetch('https://localhost:44323/api/OrderDetails/' + id)
            .then(response => response.json())
            .then(data => {
                setlistIdProduct(data)
            })
    }, [])

    useEffect(() => {
        listIdProduct.map((value) => {
            fetch('https://localhost:44323/api/Products/' + value.productId)
                .then(response => response.json())
                .then(data => {
                    setlistProduct(old => [...old, data])
                })
        })

    }, [listIdProduct])
    return (
        <div className="dsad">
            <a><Link to="/">AppHome</Link></a>
            <div>id: {id}</div>

            {listProduct.map((value, index) => {
                return (
                    <h1>{value.productName}</h1>
                )
            })}
        </div >
    )
}
