import React, { Component } from 'react'
import Navi from './Navi.js';
import CategoryList from './CategoryList.js';
import ProductList from './ProductList.js';
import NotFound from './NotFound.js';
import CartList from './CartList.js';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import alertify from 'alertifyjs';
import { Route, Routes } from 'react-router-dom';

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
      /*  this.setState((prevState) => ({
          cart: prevState.cart
        }))*/
    }
    else {
      newCart.push({ product: product, quantity: 1 }) //aynı urunden varsa sepette bir daha eklemıcez, yoksa eklıcez.
    }
    this.setState({ cart: newCart })
    alertify.success(product.productName + "added to cart!", 2)
  }

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id)
    this.setState({ cart: newCart })
    alertify.error(product.productName + "removed from cart!", 2)
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
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>
            <Col xs="9">
              <Routes>
                <Route
                  exact
                  path="/"
                  element={< ProductList products={
                    this.state.products
                  }
                    currentCategory={
                      this.state.currentCategory
                    }
                    addToCart={
                      this.addToCart
                    }
                    info={
                      productInfo
                    } />} />
                <Route
                  exact path="/cart"
                  element={
                    < CartList
                      cart={this.state.cart}
                      removeFromCart={ this.removeFromCart} />}
                >
                </Route>
                <Route path="*" element={<NotFound />}></Route>
              </Routes>

            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
//****Route kısmında anasayfa sanki notfound mus gibi :D */
//burada onceden defult olarak function App idi. fakat ben componentler arası veri tasıyacagım ıcın App i class yaptım. ve categorydeki setState kısmını buraya almam gerekiyır.
//ARTIK currentCategory={this.state.currentCategory} Yİ PRODUCT LİSTE DE TASITABİLİRİZ BÖYLECE CATEGORY SECILDIGINDE PRODUCT DEGISECEK :d