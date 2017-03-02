import React from 'react'
import { Header, Image, List, Icon, Button, Divider } from 'semantic-ui-react'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class Booksearch extends React.Component{
    constructor() {
        super()

    }

    render () {

        return (
            <div>
                <ReactCSSTransitionGroup
                    transitionName="slide"
                    transitionAppear={true}
                    transitionAppearTimeout={300}
                    >
                    <div className={'konten'}>
                        <Header as='h4'>Pilih Lokasi Acara:</Header>
                        <List divided verticalAlign='middle' className={'marbo'}>
                            <List.Item>
                              <Icon name='marker' size='big' className={'padtb5'} />
                                <List.Content>
                                  <List.Item>Jakarta Selatan</List.Item>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                              <Icon name='calendar' size='big' className={'padtb5'} />
                                <List.Content>
                                  <List.Item>21/04/2017</List.Item>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                              <Icon name='shopping basket' size='big' className={'padtb5'} />
                                <List.Content>
                                  <List.Item as={Link} to='/buffe'>Pilih menu prasmanan</List.Item>
                                </List.Content>
                            </List.Item>
                        </List>
                        <Divider className={'marto'} />
                        <Button positive fluid as={Link} to='/confirm'>Pesan Sekarang</Button>
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}
