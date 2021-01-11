import React from 'react';

import { Row, Col } from 'antd';

const items = [
  {
    key: '1',
    icon: <i className="fas fa-bread-slice"></i>,
    title: 'Kỹ năng lấu nướng',
    content: 'Bạn không cần 1 chiếc thìa bạc để thưởng thức đồ ăn ngon. Hãy đến với chúng tôi, kể cả bạn ăn như người Ấn Độ vẫn ngon.',
  },
  {
    key: '2',
    icon: <i className="fas fa-utensils"></i>,
    title: 'Bài trí',
    content: 'Cách trang trí món ăn đẹp giúp mang đến sự trải nghiệm cho thực khách khi dùng bữa. Bữa ăn đẹp cho người đẹp.',
  },
  {
    key: '3',
    icon: <i className="fas fa-fish"></i>,
    title: 'Thực phẩm',
    content: 'Với nguồn sản phẩm được chọn lựa từ những nông trại tốt nhất, từ những người trồng chuyên nghiệp, chúng tôi đảm bảo nguồn thực phẩm luôn tươi, ngon và sạch nhất',
  },
]

function AppAbout() {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Chúng tôi là ai ?</h2>
          <p> </p>
        </div>
        <div className="contentHolder">
          <p>Hãy nhìn chúng tôi để hiểu công việc và sứ mệnh của chúng tôi một cách nghiêm túc người VIỆT NAM ơi.</p>
        </div>
        <Row gutter={[16, 16]}>
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppAbout;