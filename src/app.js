import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, applyRouterMiddleware } from 'react-router'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import dstore from './mobx/store'
import Navbar from './navbar/app'
import Detail from './detail/app'
import Paket from './paket/app'
import Buffe from './paket/buffe'
import Confirm from './paket/confirm'
import Booksearch from './paket/booksearch'
import Search from './paket/search'
import Result from './paket/result'
import Footer from './footer/app'

class Seman extends React.Component {
    constructor() {
        super()
        this.state = {
            leftbar: false,
        }

        this.openLeft = this.openLeft.bind(this)
    }

    openLeft() {
        this.setState({ leftbar: !this.state.leftbar })
    }

    render() {
        const { leftbar } = this.state
        return (
            <div>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar as={Menu} animation='push' width='thin' visible={leftbar} icon='labeled' vertical inverted>
                        <Menu.Item name='home'>
                          <Icon name='home' />
                          Home
                        </Menu.Item>
                        <Menu.Item name='gamepad'>
                          <Icon name='gamepad' />
                          Games
                        </Menu.Item>
                        <Menu.Item name='camera'>
                          <Icon name='camera' />
                          Channels
                        </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Navbar />
                        <Router
                            history={hashHistory}
                            >
                            <Route path='/' component={Detail} />
                            <Route path='/paket' component={Paket} />
                            <Route path='/buffe' component={Buffe} />
                            <Route path='/confirm' component={Confirm} />
                            <Route path='/booksearch' component={Booksearch} />
                            <Route path='/search' component={Search} />
                            <Route path='/result' component={Result} />
                        </Router>
                        <Footer />
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}

ReactDOM.render(
    <Seman />,
    document.getElementById('app')
)
