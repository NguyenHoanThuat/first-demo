import React, { useState } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import './Example.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireAlt } from '@fortawesome/free-solid-svg-icons'

import { Button } from 'reactstrap';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class Example extends React.Component {

  render() {

    return (
      <div>
         <div>
          <Breadcrumb>
            <BreadcrumbItem><a href="#">Ưu đãi vip</a></BreadcrumbItem>
            <BreadcrumbItem><a className="a-header" href="#"> <FontAwesomeIcon icon={faFireAlt} /> Khuyến mãi hot</a></BreadcrumbItem>
            <BreadcrumbItem><a href="#">Trợ lý Buy now</a></BreadcrumbItem>
            <BreadcrumbItem><a href="#">Bán hàng cùng Buy now</a></BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
    )};
};

export default Example;

