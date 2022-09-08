import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';


export default class CategoryList extends Component {
  /* constructor(props) {
     super(props);
     state: { }
   } */ //ZORUNLU DEĞİL YENİ VERSİYONLARDA :)
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>

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
