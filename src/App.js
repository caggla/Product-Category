import Navi from './Navi.js';
import CategoryList from './CategoryList.js';
import ProductList from './ProductList.js';
import './App.css';
import { Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList title="Category List" />
          </Col>
          <Col xs="9">
            <ProductList title="Category List" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
