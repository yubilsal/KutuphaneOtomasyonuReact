import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import {Alert} from 'reactstrap';

class EditUserComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            kitapAdi: '',
            yazarAdi: '',
            isbn: '',
        }
        this.saveUser = this.saveUser.bind(this);
        this.loadUser = this.loadUser.bind(this);
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser() {
        ApiService.kitapById(window.localStorage.getItem("userId"))
            .then((res) => {
                let user = res.data;
                this.setState({
                id: user.id,
                kitapAdi: user.kitapAdi,
                yazarAdi: user.yazarAdi,
                isbn: user.isbn
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveUser = (e) => {
        e.preventDefault();
        let user = {id: this.state.id, kitapAdi: this.state.kitapAdi, yazarAdi: this.state.yazarAdi, isbn: this.state.isbn};
        if (this.state.isbn === ""){
          console.log("isbn bos geldi")
          return(
            <div>
                <Alert color="primary">
              This is a primary alert — check it out!
                </Alert>
            </div>
          )
        }
        else{
        ApiService.kitapEdit(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/users');
            });
          }
        }

    render() {
        return (
            <div>
                <h2 className="text-center">Kitap Düzenle</h2>
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

                    <button className="btn btn-success" onClick={this.saveUser}>Save</button>
                </form>
            </div>
        );
    }
}

export default EditUserComponent;