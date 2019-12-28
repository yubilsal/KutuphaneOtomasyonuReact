import React, { Component } from 'react';
import Logo from './logo.png';

class HomePage1 extends Component {


  render() {
    return (
      
      <div>
          <h1 className="text-center" style={style}>          Kütüphane Otomasyon Sistemi</h1>
          <img className="col-11" style={style} src={Logo}  width="500" height="500" alt= "website logo" />
          
      </div>

    )
  }

}
const style = {
  display: "flex",
  color: 'red',
  margin: '30px',
  justifyContent: "center",
  alignItems: "center"
}
export default HomePage1;