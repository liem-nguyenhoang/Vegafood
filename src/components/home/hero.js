import React from 'react';
import { Button, Anchor } from 'antd';

import { Carousel } from 'antd';

const { Link } = Anchor;

const items = [
  {
    key: '1',
    title: 'Kế hoạch bữa ăn hàng tuần cho',
    content: 'Một lối sống lành mạnh',
  },
  {
    key: '2',
    title: 'Trải nghiệm bữa ăn sạch',
    content: 'Tươi ngon giàu dinh dưỡng',
  },
  {
    key: '3',
    title: 'Nhà cung cấp bữa ăn sạch',
    content: 'Lớn nhất Thành phố Thủ Đức',
  },
]

function AppHero() {
  return (
    <div id="hero" className="heroBlock">
      <Carousel autoplay>
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="btnHolder">
                  <Button type="primary" size="large">Tìm hiểu</Button>
                  <Button size="large"><i class="fas fa-store"></i> Đặt ngay</Button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppHero;