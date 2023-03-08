import axios from "axios";
import React, { Component } from "react";

class Show extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://localhost:8080/showDetails')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}
  render() {   
    return (
        
      <table border={1}>
      <thead>
        <tr>
          <th>Id </th>
          <th>Movie</th>
          <th>year</th>
          <th>Budget</th >
          <th>IMDB</th>
          <th>Collection</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.movie}</td>
            <td>{user.year}</td>
            <td>{user.budget}</td>
            <td>{user.imdb}</td>
            <td>{user.collection}</td>
          </tr>
        ))}
      </tbody>
    </table>
    );
  }}
  
export default Show;