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
    const [ghiChu, setghiChu] = useState('')
    const [showChiTietThucDon, setshowChiTietThucDon] = useState(true)
    const [showThanhToan, setshowThanhToan] = useState(false)
    const [showXuatHoaDon, setshowXuatHoaDon] = useState(false)
    const [tenUser, setTenUser] = useState('')
    const [phoneUser, setPhoneUser] = useState('')
    const [loaiThanhToan, setloaiThanhToan] = useState('')

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
            {showChiTietThucDon == true && <div>
                <table>
                    <tr>
                        <th></th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Savings</th>
                    </tr>

                    {listProduct.map((value, index) => {
                        return (
                            <th>{value.productName}</th>
                        )
                    })}
                </table>
                <div>Ghi chú</div>
                <textarea
                    value={ghiChu} onChange={(event) => {
                        setghiChu(event.target.value)
                    }}
                />
                <div>
                    <button onClick={() => {
                        setshowChiTietThucDon(false)
                        setshowThanhToan(true)
                    }}>Xác nhận</button></div>
            </div>}
            {showThanhToan == true && <div>
                <div>Thông tin người dùng</div>
                <div>Tên</div>  <textarea
                    value={tenUser} onChange={(event) => {
                        setTenUser(event.target.value)
                    }}
                />
                <div>Phone</div>  <textarea
                    value={phoneUser} onChange={(event) => {
                        setPhoneUser(event.target.value)
                    }}
                />
                <div>Thông tin thanh toán</div>
                <div>Loại thanh toán</div>
                <textarea
                    value={loaiThanhToan} onChange={(event) => {
                        setloaiThanhToan(event.target.value)
                    }}
                />
                <div>
                    <button onClick={() => {
                        setshowThanhToan(false)
                        setshowChiTietThucDon(true)
                    }}>Quay lại</button>
                    <button onClick={() => {
                        setshowThanhToan(false)
                        setshowXuatHoaDon(true)
                    }}>Hoàn tất</button></div>
            </div>}
            {showXuatHoaDon == true && <div>
                <div>Xuất hóa đơn</div>
                <div><b>Thông tin cá nhân</b></div>
                <div>Tên: {tenUser}</div>
                <div>Phone: {phoneUser}</div>
                <div><b>Thông tin thanh toán</b></div>
                <div>Loại thanh toán: {loaiThanhToan}</div>
                <div><b>Chi tiết thực đơn</b></div>
                <table>
                    <tr>
                        <th></th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Savings</th>
                    </tr>

                    {listProduct.map((value, index) => {
                        return (
                            <th>{value.productName}</th>
                        )
                    })}
                </table>
                <div>
                    <button onClick={() => {
                        setshowXuatHoaDon(false)
                        setshowThanhToan(true)
                    }}>Quay lại</button>
                    <button onClick={async () => {
                        await fetch('https://localhost:44323/api/Orders', {
                            method: "POST",
                            headers: new Headers({
                                "Content-Type": "application/json",
                            }),
                            body: JSON.stringify({
                                "customerId": "LNH08",
                                "shipVia": 1,
                                "orderDetails": JSON.stringify(listIdProduct)
                            })
                        })



                    }}>Xuất hóa đơn</button>
                </div>
            </div>}
        </div >
    )
}
