import React, { Component } from 'react'
import "./Component.css"
export default class App extends Component {
  state = {
    Name: "",
    Department: "",
    Rating: "",
    emp: []
  }
  changeevent = (event) => {
    this.setState({ [event.target.name]: event.target.value })
    console.log(this.state)
  }

  submit = (event) => {
    event.preventDefault();
    //  console.log("kdjsdj")
    const empObj = {
      Name: this.state.Name,
      Department: this.state.Department,
      Rating: this.state.Rating

    }
    const arr = this.state.emp
    arr.push(empObj)
    this.setState({ emp: arr })
  }

  render() {
    return (
      <div className='main'>
        <div style={{ textAlign: "center" }}>
          <h1>Employee Feedback Form</h1>
          <label>Name :  </label>
          <input type="text" name="Name" value={this.state.Name} onChange={this.changeevent} className="input"/><br /><br />
          <label>Department :  </label>
          <input type="text" name='Department' value={this.state.Department} onChange={this.changeevent}  className="input"/><br /><br />
          <label>Rating :  </label>
          <input type="number" name='Rating' value={this.state.Rating} onChange={this.changeevent}  className="input"/><br /> <br />

          <button onClick={this.submit} className="submit">Submit</button>
        </div>
        <div>
          {this.state.emp.map((value, index) => {
            return (
              <span key={index} className='flex-cont'><span className='flex-div'><b>Name:</b>{value.Name} <b>Department:</b>  {value.Department}  <b>Rating:</b> {value.Rating}</span></span>
            )

          })}
        </div>
      </div>
    )
  }
}

