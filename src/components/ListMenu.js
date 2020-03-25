import React from 'react';
import { Button } from 'reactstrap';

class ListMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mang: [
                {title: 'Tất cả'},
                {title: 'Đồ ăn'},
                {title: 'Đồ uống'},
                {title: 'Đồ ăn chay'},
                {title: 'Đồ ăn nhanh'},
                {title: 'Đồ ăn vặt'},
                {title: 'Rau, củ, quả'},
                {title: 'Bánh'},
                {title: 'Tự làm'},
                {title: 'Tráng miệng'},
                {title: 'Pizza, Burger'},
                {title: 'Lẩu'},
                {title: 'Sushi'},
                {title: 'Mì phở'},
                {title: 'Cơm hộp'},
                {title: 'Bánh kem'},
            ]
        }
    }

    render() {
        return (
            <div className="body-center-left">
                <h1>Menu</h1>
                {
                    this.state.mang.map( (note, index) => {
                        return <Button className="btn-menu-list" key={index} color="secondary">{note.title}</Button>
                    })
                }
            </div>
        );
    }
}

export default ListMenu;