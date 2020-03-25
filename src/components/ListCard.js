
import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

class ListCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mang: [
                {title: '24H Land Coffee', map: '60 - 62 Thanh Tịnh, Quận Liên Chiểu, Đà Nẵng', urlImg: 'https://img77.uenicdn.com/image/upload/v1572568606/business/f9fb5457-c403-4c8b-b637-d9a54fcd5f9b/china-coffee-cupjpg.jpg', key: 'all'},
                {title: '24H Land Coffee', map: '60 - 62 Thanh Tịnh, Quận Liên Chiểu, Đà Nẵng', urlImg: 'https://img77.uenicdn.com/image/upload/v1572568606/business/f9fb5457-c403-4c8b-b637-d9a54fcd5f9b/china-coffee-cupjpg.jpg', key: 'all'},
                {title: '24H Land Coffee', map: '60 - 62 Thanh Tịnh, Quận Liên Chiểu, Đà Nẵng', urlImg: 'https://img77.uenicdn.com/image/upload/v1572568606/business/f9fb5457-c403-4c8b-b637-d9a54fcd5f9b/china-coffee-cupjpg.jpg', key: 'all'},
                {title: '24H Land Coffee', map: '60 - 62 Thanh Tịnh, Quận Liên Chiểu, Đà Nẵng', urlImg: 'https://img77.uenicdn.com/image/upload/v1572568606/business/f9fb5457-c403-4c8b-b637-d9a54fcd5f9b/china-coffee-cupjpg.jpg', key: 'all'},
                {title: '24H Land Coffee', map: '60 - 62 Thanh Tịnh, Quận Liên Chiểu, Đà Nẵng', urlImg: 'https://img77.uenicdn.com/image/upload/v1572568606/business/f9fb5457-c403-4c8b-b637-d9a54fcd5f9b/china-coffee-cupjpg.jpg', key: 'all'},
                {title: '24H Land Coffee', map: '60 - 62 Thanh Tịnh, Quận Liên Chiểu, Đà Nẵng', urlImg: 'https://img77.uenicdn.com/image/upload/v1572568606/business/f9fb5457-c403-4c8b-b637-d9a54fcd5f9b/china-coffee-cupjpg.jpg', key: 'all'},
                {title: '24H Land Coffee', map: '60 - 62 Thanh Tịnh, Quận Liên Chiểu, Đà Nẵng', urlImg: 'https://img77.uenicdn.com/image/upload/v1572568606/business/f9fb5457-c403-4c8b-b637-d9a54fcd5f9b/china-coffee-cupjpg.jpg', key: 'all'},
                {title: '24H Land Coffee', map: '60 - 62 Thanh Tịnh, Quận Liên Chiểu, Đà Nẵng', urlImg: 'https://img77.uenicdn.com/image/upload/v1572568606/business/f9fb5457-c403-4c8b-b637-d9a54fcd5f9b/china-coffee-cupjpg.jpg', key: 'all'},
                {title: '24H Land Coffee', map: '60 - 62 Thanh Tịnh, Quận Liên Chiểu, Đà Nẵng', urlImg: 'https://img77.uenicdn.com/image/upload/v1572568606/business/f9fb5457-c403-4c8b-b637-d9a54fcd5f9b/china-coffee-cupjpg.jpg', key: 'all'},
                {title: '24H Land Coffee', map: '60 - 62 Thanh Tịnh, Quận Liên Chiểu, Đà Nẵng', urlImg: 'https://img77.uenicdn.com/image/upload/v1572568606/business/f9fb5457-c403-4c8b-b637-d9a54fcd5f9b/china-coffee-cupjpg.jpg', key: 'all'},
                {title: '24H Land Coffee', map: '60 - 62 Thanh Tịnh, Quận Liên Chiểu, Đà Nẵng', urlImg: 'https://img77.uenicdn.com/image/upload/v1572568606/business/f9fb5457-c403-4c8b-b637-d9a54fcd5f9b/china-coffee-cupjpg.jpg', key: 'all'},
                {title: '24H Land Coffee', map: '60 - 62 Thanh Tịnh, Quận Liên Chiểu, Đà Nẵng', urlImg: 'https://img77.uenicdn.com/image/upload/v1572568606/business/f9fb5457-c403-4c8b-b637-d9a54fcd5f9b/china-coffee-cupjpg.jpg', key: 'all'}
            ]
        }
    }

    render() {
        return (
            <div className="body-center-right row">
              {
                  this.state.mang.map((note, index) => {
                    return(
                        <div className= "col-3">
                            <a href="#">
                                <Card className="card-list">
                                    <CardImg top width="100%" src={note.urlImg} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>{note.title}</CardTitle>
                                        <CardSubtitle>{note.map}</CardSubtitle>
                                        <Button>Love food</Button>
                                    </CardBody>
                                </Card>
                            </a>
                        </div>
                    )
                  })
              }
            </div>
          );
    }
}

export default ListCard;