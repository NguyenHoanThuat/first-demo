import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';   

import './Example.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadSideMask } from '@fortawesome/free-solid-svg-icons'


const DangNhap = (props) => {
  return (
        <div className="div-dang-nhap ">
            <h1>Buy Now</h1>
            <h3>Đăng nhập để sử dung Buy Now</h3>
            <Form className="form-dang-nhap ">
                <FormGroup>
                    <Label for="exampleEmail">Tên đăng nhập</Label>
                    <Input type="text" name="email" id="exampleEmail" placeholder="Tên đăng nhập, số điện thoại hoặc email" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Mật khẩu</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="Mật khẩu" />
                </FormGroup>   
                <Button className="btn-dang-nhap" color="secondary">Đăng nhập</Button>{' '}
            </Form>
            <div className="div-hoac">
                <div className="rong">-------------------</div>
                <h2>Hoặc</h2>
                <div className="rong">-------------------</div>
            </div>
            <div className="dang-nhap-fb-gg">
                <Button className="btn-fb" color="primary"><FontAwesomeIcon icon={faHeadSideMask} /> Facebook</Button>{' '}
                <Button className="btn-ins" color="info"><FontAwesomeIcon icon={faHeadSideMask} /> Instagram</Button>{' '}
                <Button className="btn-gg" color="success"><FontAwesomeIcon icon={faHeadSideMask} /> Google</Button>{' '}
            </div>
            <div className="div-quen-mat-khau">
                <a href="#">Quên mật khẩu?</a>
                <p>Bạn không có tài khoản?<a href="#"> Đăng ký </a>.</p>
            </div>
        </div>
  );
}

export default DangNhap;