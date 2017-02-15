import React from 'react'
import { Card, Image, Container, List, Button, Header } from 'semantic-ui-react'
import { Link } from 'react-router'
import ImageGallery from 'react-image-gallery';
import sample from './datasample'
import detailImages from './detailimage'

export default class Detail extends React.Component{
    handleImageLoad(event) {
        console.log('Image loaded ', event.target)
    }

    render () {
        return (
            <div>
                <div className={'konten'}>
                    <ImageGallery
                        items={detailImages}
                        showPlayButton={false}
                        showBullets={true}
                        showNav={false}
                        onImageLoad={this.handleImageLoad}/>
                    <Header as='h3'>
                        Hisana Katering
                    </Header>
                    <p>
                        Katering yang diminati banyak warga
                    </p>
                    <List divided verticalAlign='top'>
                        {sample.map((tile, index) => (
                        <List.Item key={index}>
                            <Image src={tile.img} size='small' verticalAlign='top' />
                            <List.Content floated='right'>
                                <div>
                                    <Header as='h5'>{tile.title}</Header>
                                    <div>Jumlah {tile.pax}</div>
                                    <div>Harga {tile.price}</div>
                                </div>
                                <Button primary className="mart10" as={Link} to='/paket'>Pilih Paket</Button>
                            </List.Content>
                        </List.Item>
                        ))}
                      </List>
                      <Button positive fluid>Buat Paket Kamu sendiri</Button>
                </div>
            </div>
        )
    }
}
