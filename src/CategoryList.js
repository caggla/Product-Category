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
    categories: []
    //   currentCategory: "" var idi burada ama artık props yaptıgımız içib bunu silmeliyiz . :D ve bunu state olarak App.js e alacaız. AMAC KATEGORY İSMİNE TIKLANDIGINDA PRODUCTIN DA O KATEGORY E GORE DEGISMESI . aPP PARENT CATEGORY OLD GU ICIN BUNLARI YAPIYORUZ YANİ SADECE TEL YONLU YAPABİLECEĞİMİZ İCİN APP TEN CATEGORY LİSTE VERİ GONDERIYORUZ.
  };

  componentDidMount() { //O komponent yerlesşti sayfaya demek. React Life Cycle.
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then(response => response.json())
      .then(data => this.setState({ categories: data }));;
  }

  render() {
    return (
      <div>
        <ListGroup>
          {
            this.state.categories.map(category => ( //map hepsi icin donuyor kac veri varsa :)
              //   <ListGroupItem onClick={() => this.setState({ currentCategory: category.categoryName })} //--->bu sekıldede yazılır su sekılde de ====
              <ListGroupItem active={category.categoryName === this.props.currentCategory ? true : false} onClick={() => this.props.changeCategory(category)} key={category.id}>{category.categoryName}</ListGroupItem> //key her bir elemanın id si gibi düşün :D --CATEGORY. DEDİK --
            )) //burada ()=> this.setState önemli bu lambda func. olacak.
          }
        </ListGroup>
        {/* <h4>{this.props.currentCategory}</h4> */}
      </div>
    )
  }
}
