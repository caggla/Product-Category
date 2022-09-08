import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';


export default class CategoryList extends Component {
  render() {
    return (
      <div>
        <h3>Category List</h3>

        <ListGroup>
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Cras justo odio</ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}
