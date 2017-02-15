import React from 'react'
import { Message, Table, Label, Header, Icon, Button, Form, Dimmer, Loader } from 'semantic-ui-react'
import { Link } from 'react-router'

export default class Confirm extends React.Component{
    constructor() {
        super()
        this.state = {
            active: false,
            submited: false
        }

        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    handleOpen() {
        this.setState({ active: true })
        setTimeout(function() {
            this.setState({submited: true});
        }.bind(this), 3000);
    }
    handleClose() {
        this.setState({ active: false })
    }

    render () {
        const { active, submited } = this.state
        var loadBooked = ''

        if(submited === true) {
            loadBooked =
            <Header as='h2' icon inverted>
                <Icon name='heart' />
                Selamat!
                <Header.Subheader>
                    <p>
                        Pesanan kamu telah terjadwal, customer service kami akan segera menghubungi kamu.. Semoga lancar ya
                    </p>
                </Header.Subheader>
            </Header>
        }
        else {
            loadBooked =
            <div>
                <Loader size='massive'></Loader>
                <Header as='h4' className={'load_jdw'}>Sedang mengatur jadwal pesanan kamu...</Header>
            </div>
        }

        return (
            <div>
                <div className={'konten'}>
                    <Message icon color='black'>
                        <Icon name='info bell' />
                        <Message.Content>
                          <Message.Header>Konfirmasi</Message.Header>
                          Konfirmasi pesanan katering
                        </Message.Content>
                    </Message>
                    <Table unstackable>
                        <Table.Body>
                            <Table.Row>
                              <Table.Cell>
                                  <Header as='h5'>Berikut detail pesanan katering Anda :</Header>
                             </Table.Cell>
                            </Table.Row>
                            <Table.Row positive>
                              <Table.HeaderCell>
                                  <div>
                                      <p>
                                          <Header as='h5'>Hisana katering</Header>
                                          <div>Paket 1 - Rp 20.000.000</div>
                                          <div>200 pax</div>
                                      </p>
                                      <p>
                                          <Header as='h5'>Lokasi & Waktu</Header>
                                          <div>Jl. Raya Bogor km 34 no. 17</div>
                                          <div>19 Maret 2017 - 11.00 s/d 14.00</div>
                                      </p>
                                  </div>
                              </Table.HeaderCell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell>
                                  <Form>
                                      <Form.Field>
                                        <label>Nama</label>
                                        <input placeholder='Masukkan nama Anda' />
                                        <Label basic color='red' pointing>Masukkan nama Anda</Label>
                                      </Form.Field>
                                      <Form.Field>
                                        <label>Telepon</label>
                                        <input placeholder='Masukkan nomor handphone' />
                                        <Label basic color='red' pointing>Format nomor hp tidak sesuai</Label>
                                      </Form.Field>
                                  </Form>
                              </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                    <Button.Group fluid>
                        <Button as={Link} to='/'>Batal</Button>
                        <Button.Or />
                        <Button
                            positive
                            onClick={this.handleOpen}
                        >Kirim Permintaan</Button>
                    </Button.Group>
                </div>
                <Dimmer
                  active={active}
                  onClickOutside={this.handleClose}
                  page
                >
                  {loadBooked}
                </Dimmer>
            </div>
        )
    }
}
