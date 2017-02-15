import React from 'react'
import { Message, Checkbox, Radio, Icon, Table, List, Header, Button } from 'semantic-ui-react'
import { Link } from 'react-router'

export default class Paket extends React.Component{

    constructor() {
        super()

        this.state = {
            value:''
        }
    }

    handleChange (e, { value }) {
        this.setState({ value })
    }

    render () {
        return (
            <div>
                <div className={'konten'}>
                    <Message icon color='black'>
                        <Icon name='info bell' />
                        <Message.Content>
                          <Message.Header>Menu Prasmanan</Message.Header>
                          Silahkan pilih menu untuk buffe/prasmanan
                        </Message.Content>
                    </Message>
                    <Table unstackable>
                      <Table.Body>
                        <Table.Row>
                          <Table.Cell>
                              <List>
                                  <List.Item>
                                    <List.Content>
                                      <List.Header>1. Buffe Menu Utama</List.Header>
                                    </List.Content>
                                  </List.Item>
                              </List>
                          </Table.Cell>
                          <Table.Cell textAlign='right'>
                              <Checkbox defaultChecked />
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                              <List>
                                <List.Item>
                                  <List.Content>
                                    <List.Header>2. Makanan Gubug (pilihan)</List.Header>
                                        <List>
                                            <List.Item>
                                                <Radio label='Sop Kimlo' name='radioGroup' defaultChecked />
                                            </List.Item>
                                            <List.Item>
                                                <Radio label='Sop Ayam Jagung' name='radioGroup'/>
                                            </List.Item>
                                            <List.Item>
                                                <Radio label='Sop Ayam Sosis' name='radioGroup'/>
                                            </List.Item>
                                            <List.Item>
                                                <Radio label='Sop Daging' name='radioGroup'/>
                                            </List.Item>
                                            <List.Item>
                                                <Radio label='Sop Iga' name='radioGroup'/>
                                            </List.Item>
                                        </List>
                                  </List.Content>
                                </List.Item>
                              </List>
                          </Table.Cell>
                          <Table.Cell textAlign='right'>
                              <Checkbox defaultChecked />
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                              <List>
                                <List.Item>
                                  <List.Content>
                                    <List.Header>3. Daging (pilihan)</List.Header>
                                        <List>
                                            <List.Item>
                                                <Radio label='Daging teriyaki' name='radioGroup2' defaultChecked />
                                            </List.Item>
                                            <List.Item>
                                                <Radio label='Daging lada hitam' name='radioGroup2'/>
                                            </List.Item>
                                            <List.Item>
                                                <Radio label='Daging rolade' name='radioGroup2'/>
                                            </List.Item>
                                            <List.Item>
                                                <Radio label='Daging rica-rica' name='radioGroup2'/>
                                            </List.Item>
                                            <List.Item>
                                                <Radio label='Steak' name='radioGroup2'/>
                                            </List.Item>
                                        </List>
                                  </List.Content>
                                </List.Item>
                              </List>
                          </Table.Cell>
                          <Table.Cell textAlign='right'>
                              <Checkbox defaultChecked />
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                              <List>
                                  <List.Item>
                                    <List.Content>
                                      <List.Header>6. Kakap Asam Manis</List.Header>
                                    </List.Content>
                                  </List.Item>
                              </List>
                          </Table.Cell>
                          <Table.Cell textAlign='right'>
                              <Checkbox defaultChecked />
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                              <List>
                                  <List.Item>
                                    <List.Content>
                                      <List.Header>7. Macaroni Scotel</List.Header>
                                    </List.Content>
                                  </List.Item>
                              </List>
                          </Table.Cell>
                          <Table.Cell textAlign='right'>
                              <Checkbox defaultChecked />
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                              <List>
                                  <List.Item>
                                    <List.Content>
                                      <List.Header>9. Kerupuk Udang</List.Header>
                                    </List.Content>
                                  </List.Item>
                              </List>
                          </Table.Cell>
                          <Table.Cell textAlign='right'>
                              <Checkbox defaultChecked />
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                              <List>
                                  <List.Item>
                                    <List.Content>
                                      <List.Header>10. Aneka Puding</List.Header>
                                    </List.Content>
                                  </List.Item>
                              </List>
                          </Table.Cell>
                          <Table.Cell textAlign='right'>
                              <Checkbox defaultChecked />
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                              <List>
                                  <List.Item>
                                    <List.Content>
                                      <List.Header>11. *Aneka Softdrink*</List.Header>
                                    </List.Content>
                                  </List.Item>
                              </List>
                          </Table.Cell>
                          <Table.Cell textAlign='right'>
                              <Checkbox defaultChecked />
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                              <List>
                                  <List.Item>
                                    <List.Content>
                                      <List.Header>12. Air Mineral</List.Header>
                                    </List.Content>
                                  </List.Item>
                              </List>
                          </Table.Cell>
                          <Table.Cell textAlign='right'>
                              <Checkbox defaultChecked />
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                              <List>
                                  <List.Item>
                                    <List.Content>
                                      <List.Header>13. Buah-buahan</List.Header>
                                    </List.Content>
                                  </List.Item>
                              </List>
                          </Table.Cell>
                          <Table.Cell textAlign='right'>
                              <Checkbox defaultChecked />
                          </Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                    <Button.Group fluid>
                        <Button as={Link} to='/booksearch'>Batal</Button>
                        <Button.Or />
                        <Button positive as={Link} to='/booksearch'>Selesai</Button>
                    </Button.Group>
                </div>
            </div>
        )
    }
}
