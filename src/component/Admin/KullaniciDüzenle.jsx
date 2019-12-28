import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import {Alert} from 'reactstrap';

class KullaniciDüzenle extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            isim: '',
            soyisim: ''
        }
        this.saveKullanici = this.saveKullanici.bind(this);
        this.loadKullanici = this.loadKullanici.bind(this);
    }

    componentDidMount() {
        this.loadKullanici();
    }

    loadKullanici() {
        ApiService.kullaniciById(window.localStorage.getItem("kullaniciID"))
            .then((res) => {
                let kullanici = res.data;
                this.setState({
                id: kullanici.id,
                isim: kullanici.isim,
                soyisim: kullanici.soyisim
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveKullanici = (e) => {
        e.preventDefault();
        let kullanici = {id: this.state.id, isim: this.state.isim, soyisim: this.state.soyisim};

        ApiService.kullaniciEdit(kullanici)
            .then(res => {
                this.setState({message : 'Kullanici added successfully.'});
                this.props.history.push('/kullanici-list');
            });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Kullanıcı Düzenle</h2>
                <form>

                <div className="form-group">
                    <label>İsim</label>
                    <input type="text" placeholder="isim" name="isim" className="form-control" value={this.state.isim} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Soyisim:</label>
                    <input type="text" placeholder="soyisim" name="soyisim" className="form-control" value={this.state.soyisim} onChange={this.onChange}/>
                </div>
                    <button className="btn btn-success" onClick={this.saveKullanici}>Kaydet</button>
                </form>
            </div>
        );
    }
}

export default KullaniciDüzenle;