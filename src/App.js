import React, { Component } from 'react'
import Navi from './Navi.js';
import CategoryList from './CategoryList.js';
import ProductList from './ProductList.js';
import './App.css';
import { Container, Row, Col } from 'reactstrap';

export default class App extends Component {

  state = { currentCategory: "" } //ve asagıda bunu cagıracagız. boylece CategoryList.js deki this.state.currentCategory i this.props.currentCategory olarak degıstırecegız . :D

  //ve categorydeki setState kısmını buraya almam gerekiyır.-->

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName })
  }

  render() {
    // let titleProduct = "Product List" //Bunun yerine aşağı satır: 
    let productInfo = { title: "Product List" }  //Bunun yerine aşağı satır: 
    // let titleCategory = "Category List"  //Bunun yerine aşağı satır: 
    //Nedeni de obje old gu ıcın title a ek olarak başka prop larda ekleyebiliriz :)
    let categoryInfo = { title: "Category List" }
    //aşağıda change category kısmını böyle yaparız. ve CategoryList componentinde bunu props olarak cagırcaz :D
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>
            <Col xs="9">
              <ProductList currentCategory={this.state.currentCategory} info={productInfo} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
//burada onceden defult olarak function App idi. fakat ben componentler arası veri tasıyacagım ıcın App i class yaptım. ve categorydeki setState kısmını buraya almam gerekiyır.
//ARTIK currentCategory={this.state.currentCategory} Yİ PRODUCT LİSTE DE TASITABİLİRİZ BÖYLECE CATEGORY SECILDIGINDE PRODUCT DEGISECEK :d