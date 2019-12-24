import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import Example from "../navbar/NavBar";
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
                <Button color="success" disabled = {!isEnabled} className="btn btn-success" onClick={this.saveUser}>Save</Button>
            </form>
    </div>
        );
    }
}

export default AddUserComponent;


