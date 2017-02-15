import React from 'react'
import { Message, Icon, Table, List, Header, Button } from 'semantic-ui-react'
import { Link } from 'react-router'

export default class Paket extends React.Component{

    render () {
        return (
            <div>
                <div className={'konten'}>
                    <Message icon color='black'>
                        <Icon name='info bell' />
                        <Message.Content>
                          <Message.Header>Menu Anda</Message.Header>
                          Detail informasi paket
                        </Message.Content>
                    </Message>
                    <Table unstackable>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell colSpan='2' textAlign='center'>Rincian Paket</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                        <Table.Row>
                          <Table.Cell>
                              <List>
                                  <List.Item>
                                    <List.Icon name='food' />
                                    <List.Content>
                                      <List.Header>1. Buffe Menu Utama</List.Header>
                                    </List.Content>
                                  </List.Item>
                              </List>
                          </Table.Cell>
                          <Table.Cell textAlign='right'>
                              <Header as='h5'>200 porsi</Header>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                              <List>
                                <List.Item>
                                  <List.Icon name='food' />
                                  <List.Content>
                                    <List.Header>2. Makanan Gubug </List.Header>
                                        <List ordered>
                                            <List.Item>Siomay</List.Item>
                                            <List.Item>Bakso</List.Item>
                                            <List.Item>Ice Cream</List.Item>
                                            <List.Item>Sate Ayam</List.Item>
                                        </List>
                                  </List.Content>
                                </List.Item>
                              </List>
                          </Table.Cell>
                          <Table.Cell textAlign='right'>
                              <List>
                                  <List.Item>
                                      <List.Header className={"notshow"}>.</List.Header>
                                  </List.Item>
                                  <List.Item>
                                      <List.Header>50 porsi</List.Header>
                                  </List.Item>
                                  <List.Item>
                                      <List.Header>50 porsi</List.Header>
                                  </List.Item>
                                  <List.Item>
                                      <List.Header>1 galon</List.Header>
                                  </List.Item>
                                  <List.Item>
                                      <List.Header>50 porsi</List.Header>
                                  </List.Item>
                              </List>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell colSpan='2'>
                                <List>
                                  <List.Item>
                                    <List.Icon name='industry' />
                                    <List.Content>
                                      <List.Header>3. Dekorasi Katering </List.Header>
                                          <List ordered>
                                              <List.Item>Es carving 2 huruf + tray </List.Item>
                                              <List.Item>Janur + umbul-umbul jalan</List.Item>
                                              <List.Item>Pergola Jalan</List.Item>
                                              <List.Item>Standing Flower 4 buah</List.Item>
                                              <List.Item>Bunga di meja penerima tamu</List.Item>
                                          </List>
                                    </List.Content>
                                  </List.Item>
                                </List>
                            </Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                    <Button.Group fluid>
                        <Button primary as={Link} to='/search'>Coba Dulu</Button>
                        <Button.Or />
                        <Button positive as={Link} to='/booksearch'>Pesan Sekarang</Button>
                    </Button.Group>
                </div>
            </div>
        )
    }
}
