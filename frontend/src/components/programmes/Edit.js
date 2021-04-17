import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

class ProgrammesEdit extends React.Component {
  constructor() {
    super()
    this.state = {
      formData: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios
      .get(`/api/programmes/${this.props.match.params.id}`)
      .then((res) => this.setState({ formData: res.data }))
  }

  handleSubmit(e) {
    e.preventDefault()

    return axios
      .put(
        `/api/programmes/${this.props.match.params.id}/`,
        this.state.formData,
        {
          headers: { Authorization: `Bearer ${Auth.getToken()}` }
        }
      )
      .then(() =>
        this.props.history.push(`/programmes/${this.props.match.params.id}/`)
      )
      .catch((err) => this.setState({ errors: err.response.data })) // no err.response.data.errors in django
  }

  handleChange(e) {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value
    }
    this.setState({ formData })
  }

  render() {
    return (
      <section className='section programmes-edit-background'>
        <div className='container'>
          <div className='box tableBorder'>
            <form onSubmit={this.handleSubmit}>
              <div className='field'>
                <label className='label-edit'>Name</label>
                <input
                  className='input'
                  name='name'
                  placeholder='eg: Winter workout'
                  value={this.state.formData.name || ''}
                  onChange={this.handleChange}
                />
                {this.state.errors.name && (
                  <small className='help is-danger'>
                    {this.state.errors.name}
                  </small>
                )}
              </div>
              <div className='field'>
                <label className='label-edit'>Image</label>
                <input
                  className='input'
                  name='image'
                  type='string'
                  placeholder='Enter URL here'
                  value={this.state.formData.image || ''}
                  onChange={this.handleChange}
                />
              </div>
              <div className='field'>
                <label className='label-edit'>Location</label>
                <input
                  className='input'
                  type='string'
                  name='location'
                  placeholder='New York'
                  value={this.state.formData.location || ''}
                  onChange={this.handleChange}
                />
              </div>
              <button className='button'>Submit</button>
            </form>
            <div className='footer-spacing-edit'></div>
          </div>
        </div>
      </section>
    )
  }
}

export default ProgrammesEdit
