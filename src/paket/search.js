import React from 'react'
import { Header, Image, List, Icon, Button, Divider } from 'semantic-ui-react'
import { Link } from 'react-router'

export default class Search extends React.Component{
    constructor() {
        super()

    }

    render () {

        return (
            <div className={'konten'}>
                <Header as='h4'>Pilih Lokasi Terdekat:</Header>
                <List divided verticalAlign='middle' className={'marbo'}>
                    <List.Item>
                      <Icon name='marker' size='big' className={'padtb5'} />
                        <List.Content>
                          <List.Item>Jakarta Selatan</List.Item>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                      <Icon name='home' size='big' className={'padtb5'} />
                        <List.Content>
                          <List.Item>Pancoran, Warung Buncit</List.Item>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                      <Icon name='calendar' size='big' className={'padtb5'} />
                        <List.Content>
                          <List.Item>21/04/2017</List.Item>
                        </List.Content>
                    </List.Item>
                </List>
                <Divider className={'marto'} />
                <Button positive fluid as={Link} to='/result'>Cari Lokasi</Button>
            </div>
        )
    }
}
