import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import DangKy from './DangKy'

const ModalDangKy = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
    
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className="dang-nhap-hover" color="secondary" onClick={toggle}>Đăng ký</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
       <div className = 'bg-login'>
        <ModalHeader toggle={toggle}>Đăng ký</ModalHeader>
          <ModalBody>
            <DangKy />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Do Something</Button>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </div> 
      </Modal>
    </div>
  );
}

export default ModalDangKy;