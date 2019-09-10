import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import Auth from '../../lib/Auth'
// import image from '../../assets/logo.png'

class Navbar extends React.Component {

  constructor() {
    super()

    this.state = {
      navbarOpen: false
    }
    this.logout = this.logout.bind(this)
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  logout() {
    Auth.removeToken()
    Auth.removeUser()
    this.props.history.push('/')
  }

  toggleNavbar() {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ navbarOpen: false })
    }
  }

  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link to ="/" className="navbar-item">🏋🏾‍</Link>

            <a
              role="button"
              className={`navbar-burger ${this.state.navbarOpen ? 'is-active' : ''}`}
              onClick={this.toggleNavbar}
            >

              <span aria-hidden = "true"></span>
              <span aria-hidden = "true"></span>
              <span aria-hidden = "true"></span>
            </a>






          </div>


          <div className={`navbar-menu ${this.state.navbarOpen ? 'is-active' : ''}`}>
            <div className="navbar-start">
              {Auth.isAuthenticated() && <Link to="/programmes" className="navbar-item">Programmes</Link>}

              {Auth.isAuthenticated() && <Link to="/programmes/new" className="navbar-item">Add Programme</Link>}
              <Link to="/exercises" className="navbar-item">Exercises</Link>
              <Link to="/about" className="navbar-item">About</Link>
            </div>

            <div className="navbar-end">
              {!Auth.isAuthenticated() && <Link to="/location" className="navbar-item">🏴󠁧󠁢󠁥󠁮󠁧󠁿 United Kingdom</Link>}
              {!Auth.isAuthenticated() && <Link to="/help" className="navbar-item">Help</Link>}
              {!Auth.isAuthenticated() && <Link to="/register" className="navbar-item">Register</Link>}
              {!Auth.isAuthenticated() && <Link to="/login" className="navbar-item">Login</Link>}
              {Auth.isAuthenticated() && <a onClick={this.logout} className="navbar-item">Logout</a>}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)
