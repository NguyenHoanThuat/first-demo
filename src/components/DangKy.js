import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';   

import './Example.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadSideMask } from '@fortawesome/free-solid-svg-icons'


const DangKy = (props) => {
  return (
        <div className="div-dang-nhap ">
            <h1>Buy Now</h1>
            <h3>Đăng ký để sử dung Buy Now</h3>
            <Form className="form-dang-nhap ">
                <FormGroup>
                    <Label for="exampleEmail">Số điện thoại/ Email</Label>
                    <Input type="text" name="email" id="exampleEmail" placeholder="Số điện thoại hoặc email" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail1">Tên Đăng nhập</Label>
                    <Input type="text" name="email" id="exampleEmail1" placeholder="Tên đăng nhập" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Mật khẩu</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="Mật khẩu" />
                </FormGroup> 
                <FormGroup>
                    <Label for="examplePassword">Nhập lại mật khẩu</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="Nhập lại mật khẩu" />
                </FormGroup>    
                <Button className="btn-dang-nhap" color="secondary">Đăng ký</Button>{' '}
            </Form>
            <div className="div-hoac">
                <div className="rong">--------------</div>
                <h2>Hoặc đăng nhập</h2>
                <div className="rong">--------------</div>
            </div>
            <div className="dang-nhap-fb-gg">
                <Button className="btn-fb" color="primary"><FontAwesomeIcon icon={faHeadSideMask} /> Facebook</Button>{' '}
                <Button className="btn-ins" color="info"><FontAwesomeIcon icon={faHeadSideMask} /> Instagram</Button>{' '}
                <Button className="btn-gg" color="success"><FontAwesomeIcon icon={faHeadSideMask} /> Google</Button>{' '}
            </div>
            <div className="div-da-co-tai-khoan">
                <p>Bạn đã có tài khoản? <a href="#"> Đăng nhập </a>.</p>
            </div>
        </div>
  );
}

export default DangKy;