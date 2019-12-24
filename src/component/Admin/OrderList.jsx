import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ListUserComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            jsondata: [],
            message: null
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
                          <th>KitapAdi</th>
                          <th>yazarAdi</th>
                          <th>ISBN</th>
                          <th>Tarih</th>

                      </tr>
                  </thead>
                  <tbody>
                      {
                          this.state.jsondata.map(
                      orderlist =>
                                  <tr key={orderlist.id}>
                  
                                      <td>{orderlist.id}</td>
                                      <td>{orderlist.kullaniciEntity.isim}</td>
                                      <td>{orderlist.kullaniciEntity.soyisim}</td>
                                      <td>{orderlist.kitapEntity.kitapAdi}</td>
                                      <td>{orderlist.kitapEntity.yazarAdi}</td>
                                      <td>{orderlist.kitapEntity.isbn}</td>
                                      <td>{orderlist.alınmaTarihi}</td>

                                      <td>
                                          <button className="btn btn-success" onClick={() => this.deleteOrder(orderlist.id)}>     Sil   </button> 
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