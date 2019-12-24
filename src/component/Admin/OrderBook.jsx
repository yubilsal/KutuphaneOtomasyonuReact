import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import Example from "../navbar/Example";
import { Button,Label,FormGroup,Input } from 'reactstrap';

class OrderBook extends Component{

  constructor(props){
    super(props);
    this.state ={
        id: '',
        kitapAdi: '',
        yazarAdi: '',
        isbn: '',
        kiralayan: '',
        date: ''
    }
    this.orderBook = this.orderBook.bind(this);
    this.kitapyükle = this.kitapyükle.bind(this);
}

componentDidMount() {
  this.kitapyükle();
}

kitapyükle() {
  ApiService.kitapById(window.localStorage.getItem("kitap id"))
      .then((res) => {
          let kitap = res.data;
          console.log(res.data)
          this.setState({
          id: kitap.id,
          kitapAdi: kitap.kitapAdi,
          yazarAdi: kitap.yazarAdi,
          isbn: kitap.isbn
          })
      });
}

onChange = (e) =>
this.setState({ [e.target.name]: e.target.value });

orderBook = (e) => {
  e.preventDefault();
  console.log(this.state.date)
  ApiService.orderBook(this.state.id, this.state.kiralayan, this.state.date)
      .then(res => {
          this.setState({message : 'User added successfully.'});
          this.props.history.push('/order-list');
      });
  }
  render() {
    return (
        <div>
            <h2 className="text-center">Kitap Kirala</h2>
            <form>

            <div className="form-group">
                <label>kitapAdi</label>
                <input type="text" placeholder="kitapAdi" name="kitapAdi" className="form-control" value={this.state.kitapAdi} onChange={this.onChange}/>
            </div>

            <div className="form-group">
                <label>yazarAdi:</label>
                <input type="text" placeholder="yazarAdi" name="yazarAdi" className="form-control" value={this.state.yazarAdi} onChange={this.onChange}/>
            </div>

            <div className="form-group">
                <label>isbn:</label>
                <input type="text" placeholder="isbn" name="isbn" className="form-control" value={this.state.isbn} onChange={this.onChange}/>
            </div>
            <div className="form-group">
                <label>Üyelik No:</label>
                <input type="text" placeholder="Kiralanacak kişinin üyelik numarasını giriniz" name="kiralayan" className="form-control" value={this.state.kiralayan} onChange={this.onChange}/>
            </div>
            <div className="form-group">
                <label>Kiralama Bitiş Tarihi:</label>
                <input type="date" placeholder="Kiralama Bitiş Tarihini giriniz" name="date" className="form-control" value={this.state.date} onChange={this.onChange}/>
            </div>

                <button className="btn btn-success" onClick={this.orderBook}>Save</button>
            </form>
        </div>
    );
}

}

export default OrderBook;