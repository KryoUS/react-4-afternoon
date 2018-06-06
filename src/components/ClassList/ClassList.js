import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students?class=${ this.props.match.params.class }`).then(res => {
      this.setState({
        students: res.data
      })
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    const students = this.state.students.map((student, i) => (
      <Link to={`/student/${student.id}`} key={ i }>
        <h3 >{student.first_name} {student.last_name}</h3>
      </Link>
    ))

    return (
      <div className="box">
        <Link to="/" component={Home}>Back</Link>
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
          { students }
      </div>
    )
  }
}