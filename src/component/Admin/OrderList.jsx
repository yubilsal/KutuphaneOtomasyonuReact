import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ListUserComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            jsondata: [],
            message: null,
            datetoday: new Date()
        }

        this.reloadOrderList = this.reloadOrderList.bind(this);
    }

    componentDidMount() {
        this.reloadOrderList();
    }

    reloadOrderList() {
        ApiService.orderList()
            .then((res) => {
              this.setState({jsondata: res.data})

            });
    }

    deleteOrder(orderId) {
      ApiService.deleteOrder(orderId)
         .then(res => {
             this.setState({message : 'Order deleted successfully.'});
             this.setState({jsondata: this.state.jsondata.filter(user => user.id !== orderId)});
             
         })

  }
    isExpired(date) {
        
        var d1 = Date.parse(this.state.datetoday.toISOString().split('T')[0])
        var d2 = Date.parse(date)
        console.log(d1)
        console.log(d2)
        if (d1 > d2) {
        return "#FF726F";
      }
        else {
          return "";
        }
    }

    render() {
       
      return (
         
          <div>
              <h2 className="text-left">Kiralanan Kitaplar Listesi</h2>
              <table className="table table-striped">
                  <thead>
                      <tr>
                          <th className="hidden">Id</th>
                          <th>OrderId</th>
                          <th>İsim</th>
                          <th>Soyisim</th>
                          <th>Kitap Adı</th>
                          <th>Yazar Adı</th>
                          <th>ISBN</th>
                          <th>Bitiş Tarihi</th>

                      </tr>
                  </thead>
                  <tbody >
                      {
                          this.state.jsondata.map(
                      orderlist =>
                                  
                                  <tr  key={orderlist.id}>
                                      
                                      <td bgcolor = {this.isExpired(orderlist.tarih)}>{orderlist.id}</td>
                                      <td bgcolor = {this.isExpired(orderlist.tarih)}>{orderlist.kullaniciEntity.isim}</td>
                                      <td bgcolor = {this.isExpired(orderlist.tarih)}>{orderlist.kullaniciEntity.soyisim}</td>
                                      <td bgcolor = {this.isExpired(orderlist.tarih)}>{orderlist.kitapEntity.kitapAdi}</td>
                                      <td bgcolor = {this.isExpired(orderlist.tarih)}>{orderlist.kitapEntity.yazarAdi}</td>
                                      <td bgcolor = {this.isExpired(orderlist.tarih)}>{orderlist.kitapEntity.isbn}</td>
                                      <td bgcolor = {this.isExpired(orderlist.tarih)}>{orderlist.tarih}</td>

                                      <td>
                                          <button className="btn btn-danger" onClick={() => this.deleteOrder(orderlist.id)}>     Sil   </button> 
                                      </td>
                                      
                                  </tr>
                          )
                      }
                  </tbody>
              </table>

          </div>
      );
  }

  
}

export default ListUserComponent;