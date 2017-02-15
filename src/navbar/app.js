import React from 'react'

export default class Navbar extends React.Component{
  render () {
    return (

      <div className="PrimaryNav u-shadow">
        <div className="container">
          <div className="row">
            <div className="col-xs-3 PrimaryNav-button_nav_container text-center"><button className="btn PrimaryNav-button_nav PrimaryNav-button"><i className="ion-navicon" /></button></div>
            <div className="col-xs-6 PrimaryNav-logo_container text-center">
              <h1 className="PrimaryNav-logo"><a href="#/">Kuali</a></h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
