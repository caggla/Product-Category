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
    { categoryId: 2, categoryName: "Condiments" }],
    currentCategory: ""
  }
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName })
  }
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <h3>{this.state.counter}</h3>

        <ListGroup>
          {
            this.state.categories.map(category => ( //map hepsi icin donuyor kac veri varsa :)
              //   <ListGroupItem onClick={() => this.setState({ currentCategory: category.categoryName })} //--->bu sekıldede yazılır su sekılde de ====
              <ListGroupItem onClick={() => this.changeCategory(category)} key={category.categoryId}>{category.categoryName}</ListGroupItem> //key her bir elemanın id si gibi düşün :D --CATEGORY. DEDİK --
            )) //burada ()=> this.setState önemli bu lambda func. olacak.
          }
        </ListGroup>
        <h4>{this.state.currentCategory}</h4>
      </div>
    )
  }
}
