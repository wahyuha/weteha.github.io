import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
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
    render() {
        return (
            <div>
                <Navbar />
                    <Router history={hashHistory}>
                        <Route path='/' component={Detail} />
                        <Route path='/paket' component={Paket} />
                        <Route path='/buffe' component={Buffe} />
                        <Route path='/confirm' component={Confirm} />
                        <Route path='/booksearch' component={Booksearch} />
                        <Route path='/search' component={Search} />
                        <Route path='/result' component={Result} />
                    </Router>
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(
    <Seman />,
    document.getElementById('app')
)
