import React from 'react';

import { Form, Input, Button, Checkbox } from 'antd';
const { TextArea } = Input;

function AppAdvisory() {
  return (
    <div id="contact" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Tư vấn</h2>
          <p>Vegafood sử dụng Công Cụ Tính Chỉ Số BMR (Basal Metabolic Rate) để tính toán tỷ lệ trao đổi chất cơ bản trong cơ thể bạn, lượng năng lượng mà bạn tiêu tốn dựa trên tần suất vận động trong một ngày.
            <br />Bạn chỉ cần nhập thông tin theo yêu cầu bên dưới và lựa chọn mục tiêu mong muốn, hệ thống tư vấn của Vegafood sẽ gợi ý cho bạn <b>Gói Ăn</b> phù hợp.</p>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="fullname"
            rules={[
              {
                required: true,
                message: 'Please enter your full name!'
              }]
            }
          >
            <Input placeholder="Full Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input placeholder="Email Address" />
          </Form.Item>
          <Form.Item
            name="telephone"
          >
            <Input placeholder="Telephone" />
          </Form.Item>
          <Form.Item
            name="subject"
          >
            <Input placeholder="Subject" />
          </Form.Item>
          <Form.Item
            name="message"
          >
            <TextArea placeholder="Message" />
          </Form.Item>
          <Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              noStyle
              rules={[
                { validator: (_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement') },
              ]}
            >
              <Checkbox>I agree with terms and conditions.</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Tư vấn sản phẩm
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default AppAdvisory;