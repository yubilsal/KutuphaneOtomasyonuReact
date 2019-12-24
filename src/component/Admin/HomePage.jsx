import React, { Component } from 'react';
import logo from 'c:/Users/Yusuf Bilge/Desktop/Project/Examples/KutuphaneOtomasyonuReact/src/logo.png'

class HomePage extends Component {


  render() {
    return (
      
      <div>
          <h1 className="text-center" style={style}>Kütüphane Otomasyon Sistemi</h1>
      </div>

    )
  }

}
const style = {
  color: 'red',
  margin: '30px'
}
export default HomePage;