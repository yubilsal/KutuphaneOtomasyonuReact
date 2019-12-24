import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import Example from "../navbar/Example";
import { Button,Label,FormGroup,Input } from 'reactstrap';


class AddUserComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
          isim: '',
          soyisim: ''
        }

        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let kullanici = {isim: this.state.isim, soyisim: this.state.soyisim};
        ApiService.kullaniciEkle(kullanici)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/kullanici-list');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    alankontrol(){
      const {isim, soyisim } = this.state;
      return isim.length > 0 && soyisim.length > 0;
    }

    render() {
        const isEnabled = this.alankontrol();

        return(
            <div>
                <h2 className="text-center">Kullanıcı Ekle</h2>
                <form>
                <div className="form-group">
                    <label>İsim</label>
                    <input type="text" placeholder="İsim" name="isim" className="form-control" value={this.state.isim} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Soyisim:</label>
                    <input type="text" placeholder="Soyisim" name="soyisim" className="form-control" value={this.state.soyisim} onChange={this.onChange}/>
                </div>

                <Button color="success" disabled = {!isEnabled} className="btn btn-success" onClick={this.saveUser}>Save</Button>
            </form>
    </div>
        );
    }
}

export default AddUserComponent;


