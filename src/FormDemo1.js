import React, { Component } from "react";

export default class FormDemo1 extends Component {
    state = { userName: "" , city:""};
    
    onChangeHandler = (event) => {
      //  this.setState({userName:event.target.value}) ----->aşağıdaki kod birden fazla input durumunu kontrol etmek ıcın baglantılar ayrılsın dıye kullanılır. :D
        let name = event.name;
        let value = event.target.value
        this.setState({[name]:value}) //buradaki name i de aşağıda inputlara gecicez .:D
    }
    
    onSubmitHandler = (event) => {
        event.preventDefault(); //burası sayfa yenilenirken verilerin gitmemesini sağlar.
        alert(this.state.userName)
}
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <h3>User Name</h3>
          <input name="userName" onChange={this.onChangeHandler} type="text"></input>
                <h3>User Name is :{this.state.userName}</h3>
                

                <h3>City</h3>
          <input onChange={this.onChangeHandler} type="text"></input>
                <h3>City is :{this.state.city}</h3>
                

          <input name="city" type="submit" value="Save"></input>
        </form>
      </div>
    );
  }
}
