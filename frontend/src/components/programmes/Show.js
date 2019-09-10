import React from 'react'
import axios from 'axios'


import {Link} from 'react-router-dom'
import Auth from '../../lib/Auth'

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]


class ProgrammesShow extends React.Component {
  constructor(){
    super()

    this.state = {
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleDeleteItems = this.handleDeleteItems.bind(this)
  }

  getProgammes(){
    axios.get(`/api/programmes/${this.props.match.params.id}/`)
      .then(res => {
        res.data.items.sort((a, b) => days.indexOf(a.day) - days.indexOf(b.day))
        this.setState({ programme: res.data })
      })

  }

  componentDidMount(){
    this.getProgammes()

  }


  canModify(){
    return Auth.isAuthenticated() && Auth.getPayload().sub === this.state.programme.user.id
  }


  handleDelete(){
    axios.delete(`/api/programmes/${this.props.match.params.id}/`,{
      headers: {Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(()=> this.props.history.push('/programmes'))
  }

  handleDeleteItems(e){
    axios.delete(`/api/items/${e.target.id}/`,{
      headers: {Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(()=> this.getProgammes())

  }

  render(){
    if(!this.state.programme) return null
    console.log(this.state.programme.user.email, 'user')
    return (
      <section className="section">
        <div className="container">

          {!this.state.programme && <h2 className="title is-2">Loading...</h2>}


          <div className="column is-half-tablet">

            <div key={this.state.programme.id}>

              <h1 className="title is-2">Name:{this.state.programme.name}</h1>
              {this.canModify() && <div className="buttons">
                <Link
                  className="button"
                  to={`/programmes/${this.state.programme.id}/edit`}
                >Edit</Link>

                <button className="button is-danger"
                  onClick={this.handleDelete}>Delete</button>
              </div>}

              <div><Link to={`/programmes/${this.state.programme.id}/items/new`} className="button">Add Item</Link></div>


              {this.state.programme.items.map(keys =>

                <div key={keys.id}>
                  <h2 className="title is-1">Day:{keys.day}</h2>
                  <h2 className="title is-1">Exercise:{keys.exercise.name}</h2>
                  <h2 className="title is-1">Description:{keys.exercise.description}</h2>
                  <img className="ShowImage" src={keys.exercise.image} alt={keys.exercise.name}/>
                  <h2 className="title is-1">Personal Best:{keys.personalbest}</h2>
                  <h2 className="title is-1">Sets:{keys.sets}</h2>
                  <h2 className="title is-1">Reps:{keys.reps}</h2>

                  <hr/>
                  <div><Link to={`/programmes/${this.state.programme.id}/items/${keys.id}/edit`} className="button">Edit</Link></div>
                  <button id={keys.id} className="button is-danger"
                    onClick={this.handleDeleteItems}>Delete</button>

                  <span><div className="buttons"><Link
                    className="button"
                    to={`/programmes/${this.state.programme.id}/items/${keys.id}/edit`}
                  >Edit Item</Link></div>

                  <button className="button is-danger"
                    onClick={this.handleDeleteItems}>Delete Item</button></span>
                  <hr/>


                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default ProgrammesShow
