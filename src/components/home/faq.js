import React from 'react';

import { Collapse, Button } from 'antd';

const { Panel } = Collapse;

function AppFaq() {
  return (
    <div id="faq" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Hỏi gì đáp nấy</h2>
          <p>Em ăn cơm chưa?</p>
        </div>
        <Collapse defaultActiveKey={['1']}>
          <Panel header="Thực đơn được xây dựng như thế nào ?" key="1">
            <p>Chúng tôi xây dưng thực đơn dựa vào chỉ số sức khỏe của bạn kết hơp cùng tháp dinh dưỡng theo tiêu chuẩn quốc tế</p>
          </Panel>
          <Panel header="Khu vực phục vụ của nhà hàng là ở đâu ?" key="2">
            <p>Hiện tại nhà hàng chỉ phục vụ ở Thành phố Thủ Đức, tọa lạc tại 1 Võ Văn Ngân, phường Linh Chiểu, thành phố Thủ Đức, thành phố Hồ Chí Minh, đây là cơ sở chính thức và duy nhất của nhà hàng</p>
          </Panel>
        </Collapse>
        <div className="quickSupport">
          <h3>Hỗ trợ nhanh</h3>
          <p>Nếu có vấn đề gì hay liên hệ với chúng tôi qua email</p>
          <Button type="primary" size="large"><i className="fas fa-envelope"></i> Email your question</Button>
        </div>
      </div>
    </div>
  );
}

export default AppFaq;