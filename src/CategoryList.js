import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';


export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    state: { }
  }
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>

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
