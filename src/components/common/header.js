import React, { useState } from 'react';

import { Anchor, Drawer, Button } from 'antd';

const { Link } = Anchor;

function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-carrot"></i>
          <a href="http://google.com">Vegafood</a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <Link href="#hero" title="Trang chủ" />
            <Link href="#about" title="Chúng tôi là ai ?" />
            <Link href="#feature" title="Ăn gì ?" />
            <Link href="#works" title="Nấu nướng" />
            <Link href="#faq" title="Câu hỏi thường gặp" />
            <Link href="#contact" title="Tư vấn" />
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link href="#hero" title="Trang chủ" />
              <Link href="#about" title="Chúng tôi là ai ?" />
              <Link href="#feature" title="Ăn gì ?" />
              <Link href="#works" title="Nấu nướng" />
              <Link href="#faq" title="Câu hỏi thường gặp" />
              <Link href="#contact" title="Tư vấn" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;