import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import DangNhap from './DangNhap'

const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className='dang-nhap-hover' color="secondary" onClick={toggle}>Đăng nhập</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
       <div className = 'bg-login'>
        <ModalHeader toggle={toggle}>Đăng nhập</ModalHeader>
          <ModalBody>
            <DangNhap />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </div> 
      </Modal>
    </div>
  );
}

export default ModalExample;