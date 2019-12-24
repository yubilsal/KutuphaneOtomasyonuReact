import React, { Component } from 'react'
import ApiService from "../../service/ApiService";


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