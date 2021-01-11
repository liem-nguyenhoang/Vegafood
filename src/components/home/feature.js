import React, { useState, useEffect } from 'react';

import image1 from '../../assets/images/modern-design.jpg';
import image2 from '../../assets/images/clean-design.jpg';
import image3 from '../../assets/images/great-support.jpg';
import image4 from '../../assets/images/easy-customise.jpg';
import image5 from '../../assets/images/unlimited-features.jpg';
import image6 from '../../assets/images/advanced-option.jpg';

import { Row, Col } from 'antd';
import { Card } from 'antd';
import { Link } from "react-router-dom";
const { Meta } = Card;

function AppFeature() {
  const [listTotal, setlistTotal] = useState([])
  const [listMenu, setListMenu] = useState([])

  const getListMenu = (list) => {
    let arrayTotal = []
    for (let i = 0; i < list.length; i += 15) {
      let totalDiscount = 0
      let discount = 0
      let totalUnitPrice = 0
      for (let j = 0; j < 15; j++) {
        totalDiscount += list[i + j].unitPrice * list[i + j].quantity * (1 - list[i + j].discount)
        discount += list[i + j].discount
        totalUnitPrice += list[i + j].unitPrice
      }

      arrayTotal.push({
        totalDiscount: Math.round(totalDiscount),
        discount: Math.round(discount / 15 * 100),
        totalUnitPrice: Math.round(totalUnitPrice)
      })
    }
    setlistTotal(arrayTotal)

  }

  useEffect(() => {
    fetch('https://localhost:44323/api/OrderDetails')
      .then(response => response.json())
      .then(data => {
        // setListMenu(data)
        getListMenu(data)
      })

  }, [])
  console.log(listTotal)
  return (
    <div id="feature" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Ăn gì ?</h2>
          <p>Chọn thực đơn cho cả tuần tươi khỏe</p>
        </div>
        <Row gutter={[16, 16]}>
          {listTotal.map((value) => ( 
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                <Card
                  hoverable
                  cover={<img alt="Modern Design" src={image1} />}
                >
                  <Meta title="Modern Design" />
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <b>{value.totalDiscount}</b>
                    <del  >{value.totalUnitPrice}</del>
                    <b>{value.discount}%</b>
                  </div>
                </Card>
              </Col> 

          ))}
        </Row>


      </div>
    </div>
  );
}

export default AppFeature;