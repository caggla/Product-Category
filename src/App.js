import Navi from './Navi.js';
import CategoryList from './CategoryList.js';
import ProductList from './ProductList.js';
import './App.css';
import { Container, Row, Col } from 'reactstrap';

function App() {
  // let titleProduct = "Product List" //Bunun yerine aşağı satır: 
  let productInfo = { title: "Product List" }  //Bunun yerine aşağı satır: 
  // let titleCategory = "Category List"  //Bunun yerine aşağı satır: 
  //Nedeni de obje old gu ıcın title a ek olarak başka prop larda ekleyebiliriz :)
  let categoryInfo = { title: "Category List" }
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList info={categoryInfo} />
          </Col>
          <Col xs="9">
            <ProductList info={productInfo} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
