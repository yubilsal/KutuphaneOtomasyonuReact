import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ListUserComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            kullaniciliste: [],
            message: null
        }
        this.deleteKullanici = this.deleteKullanici.bind(this);
        this.editKullanici = this.editKullanici.bind(this);
        this.addKullanici = this.addKullanici.bind(this);
        this.reloadKullaniciListe = this.reloadKullaniciListe.bind(this);
    }

    componentDidMount() {
        this.reloadKullaniciListe();
    }

    reloadKullaniciListe() {
        ApiService.kullaniciAll()
            .then((res) => {
                console.log(res.data)
                this.setState({kullaniciliste: res.data})
            });
    }

    deleteKullanici(kullaniciID) {
        ApiService.kullaniciSil(kullaniciID)
           .then(res => {
               this.setState({message : 'Kullanıcı Basarıyla Silindi'});
               this.setState({kullaniciliste: this.state.kullaniciliste.filter(kullanici => kullanici.id !== kullaniciID)});
           })

    }

    editKullanici(id) {
        window.localStorage.setItem("kullaniciID", id);
        this.props.history.push('/kullanici-düzenle');
    }

    addKullanici() {
        window.localStorage.removeItem("kullaniciID");
        this.props.history.push('/kullanici-ekle');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Kullanıcılar</h2>
                <button className="btn btn-danger" style={{width:'250px', height:'30px'}} onClick={() => this.addKullanici()}> Kullanici Ekle </button>
                <br />

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">Id</th>
                            <th>Üyelik No</th>
                            <th>İsim</th>
                            <th>Soyisim</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.kullaniciliste.map(
                        kullanici =>
                                    <tr key={kullanici.id}>
                                        <td>{kullanici.id}</td>
                                        <td>{kullanici.isim}</td>
                                        <td>{kullanici.soyisim}</td>

                                        <td>
                                            <button className="btn btn-danger"  style={{width:'60px'}} onClick={() => this.deleteKullanici(kullanici.id)}> Sil </button>
                                            <button className="btn btn-success" style={{width:'60px'}} onClick={() => this.editKullanici(kullanici.id)} style={{marginLeft: '20px'}}> Düzenle</button>
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