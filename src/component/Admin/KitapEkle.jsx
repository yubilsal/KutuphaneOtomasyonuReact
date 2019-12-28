import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import { Button,Label,FormGroup,Input } from 'reactstrap';


class AddUserComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            kitapAdi: '',
            yazarAdi: '',
            isbn: ''
        }
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {kitapAdi: this.state.kitapAdi, yazarAdi: this.state.yazarAdi, isbn: this.state.isbn};
        ApiService.kitapEkle(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/users');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    alankontrol(){
      const {kitapAdi, yazarAdi , isbn} = this.state;
      return kitapAdi.length > 0 && yazarAdi.length > 0&& isbn.length > 0;
    }

    render() {
        const isEnabled = this.alankontrol();
        return(
            <div>
                <h2 className="text-center">Kitap Ekle</h2>
                <form>
                <div className="form-group">
                    <label>Kitap Adı</label>
                    <input type="text" placeholder="Kitap adını giriniz" name="kitapAdi" className="form-control" value={this.state.kitapAdi} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Yazar Adı</label>
                    <input type="text" placeholder="Yazar adını giriniz" name="yazarAdi" className="form-control" value={this.state.yazarAdi} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>ISBN</label>
                    <input type="text" placeholder="ISBN giriniz" name="isbn" className="form-control" value={this.state.isbn} onChange={this.onChange}/>
                </div>
                <Button color="success" disabled = {!isEnabled} className="btn btn-success" onClick={this.saveUser}>Save</Button>
            </form>
    </div>
        );
    }
}

export default AddUserComponent;


