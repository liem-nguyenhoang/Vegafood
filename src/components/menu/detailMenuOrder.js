import React from 'react'
import {
    Link,
    useParams
} from "react-router-dom";

export default function DetailMenuOrder() {

    let { id } = useParams()

    return (
        <div>
            <a><Link to="/">AppHome</Link></a>
            <div>id: {id}</div>
        </div>
    )
}
