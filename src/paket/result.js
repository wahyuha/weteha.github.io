import React from 'react'
import { Icon, Menu, List, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router'

export default class Result extends React.Component{
    constructor() {
        super()
    }

    render () {

        return (
            <div>
                <div className={'konts'}>
                    <Menu widths={3} className={'searchbar'}>
                        <Menu.Item>
                            <Icon name='marker' size='big' />
                            Jakarta
                        </Menu.Item>
                        <Menu.Item>
                          <Icon name='calendar' size='big' />
                          21/04/2017
                        </Menu.Item>
                        <Menu.Item >
                          <Icon name='setting' size='big' />
                        </Menu.Item>
                    </Menu>
                </div>
                <div className={'konlrp srbox'}>
                    <List divided verticalAlign='middle'>
                        <List.Item>
                          <List.Content floated='right'>
                            <Button positive as={Link} to='/confirm'>Cobain</Button>
                          </List.Content>
                          <List.Content>
                              <List.Header as='a'>Gedung Wanita</List.Header>
                              <List.Description>
                                  <p>Jl. Raya Bogor KM 34 no. 17</p>
                                  <p>11:00 s/d 14.00</p>
                              </List.Description>
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Content floated='right'>
                            <Button positive as={Link} to='/confirm'>Cobain</Button>
                          </List.Content>
                          <List.Content>
                              <List.Header as='a'>Gedung Wanita</List.Header>
                                  <List.Description>
                                      <p>Jl. Raya Bogor KM 34 no. 17</p>
                                      <p>11:00 s/d 14.00</p>
                                  </List.Description>
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Content floated='right'>
                            <Button positive as={Link} to='/confirm'>Cobain</Button>
                          </List.Content>
                          <List.Content>
                              <List.Header as='a'>Gedung Wanita</List.Header>
                                  <List.Description>
                                      <p>Jl. Raya Bogor KM 34 no. 17</p>
                                      <p>11:00 s/d 14.00</p>
                                  </List.Description>
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Content floated='right'>
                            <Button positive as={Link} to='/confirm'>Cobain</Button>
                          </List.Content>
                          <List.Content>
                              <List.Header as='a'>Gedung Wanita</List.Header>
                                  <List.Description>
                                      <p>Jl. Raya Bogor KM 34 no. 17</p>
                                      <p>11:00 s/d 14.00</p>
                                  </List.Description>
                          </List.Content>
                        </List.Item>
                    </List>
                </div>
            </div>
        )
    }
}
