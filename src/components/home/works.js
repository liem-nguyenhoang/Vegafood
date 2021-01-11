import React from 'react';

import { Button, Modal } from 'antd';

class AppWorks extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div id="works" className="block worksBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>Chúng Tôi Đã Nấu Như Thế Nào ?</h2>
            <p>Nấu ăn không phải là một khoảng khắc, nó là cả một quá trình</p>
          </div>
          <div className="contentHolder">
            <Button size="large" onClick={this.showModal}><i className="fas fa-play"></i></Button>
          </div>
          <Modal
            title="Chúng tôi đã chế biến món ăn như thế nào ?"
            visible={this.state.visible}
            onCancel={this.handleCancel}
            footer={null}
          >
            <iframe width="100%" height="350" src="https://www.youtube.com/embed/MPmMtZkKTHE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Modal>
        </div>
      </div>
    );
  }
}

export default AppWorks;