import React, { Component } from 'react'
import Navi from './Navi.js';
import CategoryList from './CategoryList.js';
import ProductList from './ProductList.js';
import './App.css';
import { Container, Row, Col } from 'reactstrap';

export default class App extends Component {

  state = { currentCategory: "", products: [], cart: [] } //ve asagıda bunu cagıracagız. boylece CategoryList.js deki this.state.currentCategory i this.props.currentCategory olarak degıstırecegız . :D

  //ve categorydeki setState kısmını buraya almam gerekiyır.-->

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName })
    console.log(category)
    this.getProducts(category.id); //yukarı satırda ategory degısınce product degıssın ıcındı . bu satırda oyle secılene göre tabo degısecegı ve fıltrelenecegı ıcın :D
  }

  getProducts = (categoryId) => {//category sectıgımızde değişen productlara gore gelen tablodakı verılerde degısecegı ıcın bunu yazdık asagıyı ve fıltreleme olcak . :D
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));;
  }

  componentDidMount() { //O komponent yerlesşti sayfaya demek. React Life Cycle.
    this.getProducts();
  }

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.id === product.id); //sepette newCart ogesi var mı? c= each item
    if (addedItem) {
      addedItem.quantity += 1;
      this.setState((prevState) => ({
        cart: prevState.cart
      }))
    }
    else {
      newCart.push({ product: product, quantity: 1 }) //aynı urunden varsa sepette bir daha eklemıcez, yoksa eklıcez.
      this.setState({ cart: newCart })
    }
  }

  render() {
    // let titleProduct = "Product List" //Bunun yerine aşağı satır: 
    let productInfo = { title: "Product List" }  //Bunun yerine aşağı satır: 
    // let titleCategory = "Category List"  //Bunun yerine aşağı satır: 
    //Nedeni de obje old gu ıcın title a ek olarak başka prop larda ekleyebiliriz :)
    let categoryInfo = { title: "Category List" }
    //aşağıda change category kısmını böyle yaparız. ve CategoryList componentinde bunu props olarak cagırcaz :D
    //navi de de cart verdik ki optionda ürünün miktarı gosterılsın . yani parent to child :D navi.js de de prop olarak alcaz . :D
    return (
      <div>
        <Container>
          <Navi cart={this.state.cart} />
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>
            <Col xs="9">
              <ProductList addToCart={this.addToCart} products={this.state.products} currentCategory={this.state.currentCategory} info={productInfo} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
//burada onceden defult olarak function App idi. fakat ben componentler arası veri tasıyacagım ıcın App i class yaptım. ve categorydeki setState kısmını buraya almam gerekiyır.
//ARTIK currentCategory={this.state.currentCategory} Yİ PRODUCT LİSTE DE TASITABİLİRİZ BÖYLECE CATEGORY SECILDIGINDE PRODUCT DEGISECEK :d