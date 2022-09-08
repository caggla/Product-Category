import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';


export default class CategoryList extends Component {
  /*constructor(props) {
    super(props);
    this.state = {
      categories: [{ categoryId: 1, categoryName: "Beverages" },
      { categoryId: 2, categoryName: "Condiments" }]
    }
  }*/ // aşagıdaki şekılde kullanabiliriz yeni versiyonda :D
  state = {
    categories: [{ categoryId: 1, categoryName: "Beverages" },
    { categoryId: 2, categoryName: "Condiments" }]
  }
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <h3>{this.state.counter}</h3>

        <ListGroup>
          {
            this.state.categories.map(category => ( //map hepsi icin donuyor kac veri varsa :)
              <ListGroupItem key={category.categoryId}>{category.categoryName}</ListGroupItem> //key her bir elemanın id si gibi düşün :D --CATEGORY. DEDİK --
            ))
          }
        </ListGroup>
      </div>
    )
  }
}
