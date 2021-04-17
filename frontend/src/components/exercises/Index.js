import React from 'react'
import axios from 'axios'
import Select from 'react-select'

import { Link } from 'react-router-dom'

class ExercisesIndex extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedCategory: null
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(selectedOption) {
    this.setState({ selectedCategory: selectedOption.value })
  }

  componentDidMount() {
    axios
      .get('/api/exercises')
      .then((res) => this.setState({ exercises: res.data }))

    axios.get('/api/categories/').then((res) =>
      this.setState({
        categories: res.data.map((option) => {
          return { label: option.name, value: option.id }
        })
      })
    )
  }

  filterExercises() {
    if (!this.state.selectedCategory) return this.state.exercises
    return this.state.exercises.filter((exercise) =>
      exercise.categories.includes(this.state.selectedCategory)
    )
  }

  render() {
    console.log(this.state, 'NEW')
    const { selectedOption } = this.state
    return (
      <section className="section">
        <div className="container">
          <p> What Muscle group would you like to learn about?</p>
          <div className="exercisefilter">
            <Select
              value={selectedOption}
              onChange={this.handleChange}
              options={this.state.categories}
            />
          </div>
          <div className="columns is-multiline">
            {!this.state.exercises && (
              <h2 className="title is-2">Loading...</h2>
            )}

            {this.state.exercises &&
              this.filterExercises().map((exercise) => (
                <div
                  className="column is-one-quarter-desktop"
                  key={exercise.id}
                >
                  <Link to={`/exercises/${exercise.id}`}>
                    <div className="card exercise-card blackOutline">
                      <div className="card-header">
                        <h2 className="card-header-title">{exercise.name}</h2>
                      </div>
                      <div
                        className="card-image"
                        style={{ backgroundImage: `url(${exercise.image})` }}
                      />
                    </div>
                  </Link>
                </div>
              ))}
          </div>
          <div className="footer-spacing-exercises"></div>
        </div>
      </section>
    )
  }
}

export default ExercisesIndex
