import React, { useState } from 'react';

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Button } from 'reactstrap';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMapMarkedAlt, faMobileAlt, faSearch, faBell, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'

import ModalExample from './ModalExample';
import ModalDangKy from './ModalDangKy';

import './Example.scss';

const New = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <div className="flex">
      <a> <img src="logo-1.jpg"/> </a>

      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
        <FontAwesomeIcon icon={faMapMarkedAlt} /> Đà Nẵng
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Hà Nội</DropdownItem>
          <DropdownItem>T.P Hồ Chí Minh</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>

      <Button color="secondary"> <FontAwesomeIcon icon={faMobileAlt} /> App</Button>{' '}

      <input className="input" type="text" placeholder="Địa điểm, Món ăn, Thức uống..."/>

      <Button color="secondary"> <FontAwesomeIcon icon={faSearch} /></Button>{' '}

      <FontAwesomeIcon style={{fontSize: 40}} className="icon-bell" icon={faBell} />

      <FontAwesomeIcon style={{fontSize: 40}} className="icon-shopping" icon={faShoppingCart} />

      <div className="dang-nhap-dang-ky">

        <Button className="hover-dang-nhap" color="secondary"> <FontAwesomeIcon icon={faUser} /> Đăng nhập tài khoản </Button>{' '}

        <div className="dang-nhap-dang-ky-content">
          
          <ModalExample className="dang-nhap-hover" />

          <ModalDangKy  />
          
        </div>

      </div>
      
    </div>
  );
}

export default New;