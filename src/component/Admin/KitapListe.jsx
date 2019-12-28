import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ListUserComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            kitapliste: [],
            message: null
        }
        this.deleteKitap = this.deleteKitap.bind(this);
        this.editKitap = this.editKitap.bind(this);
        this.addKitap = this.addKitap.bind(this);
        this.reloadKitapListe = this.reloadKitapListe.bind(this);
    }

    componentDidMount() {
        this.reloadKitapListe();
    }

    reloadKitapListe() {
        ApiService.kitapAll()
            .then((res) => {
                console.log(res.data)
                this.setState({kitapliste: res.data})
            });
    }

    deleteKitap(userId) {
        ApiService.kitapSil(userId)
           .then(res => {
               this.setState({message : 'User deleted successfully.'});
               this.setState({kitapliste: this.state.kitapliste.filter(user => user.id !== userId)});
           })

    }

    editKitap(id) {
        window.localStorage.setItem("userId", id);
        this.props.history.push('/edit-user');
    }

    addKitap() {
        window.localStorage.removeItem("userId");
        this.props.history.push('/add-user');
    }
    kiralaUser(id) {
        window.localStorage.setItem("kitap id", id);
        this.props.history.push('/order-book');
    }

    render() {
        return (
            <div>
                <h2 className="text-center"> Kitaplar </h2>
                <button className="btn btn-danger" style={{width:'250px', height:'30px'}} onClick={() => this.addKitap()}> Kitap Ekle</button>
                <br />
                <br />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">Id</th>
                            <th>Kitap Adı</th>
                            <th>Yazar Adı</th>
                            <th>ISBN</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.kitapliste.map(
                        kitap =>
                                    <tr key={kitap.id}>
                    
                                        <td>{kitap.kitapAdi}</td>
                                        <td>{kitap.yazarAdi}</td>
                                        <td>{kitap.isbn}</td>

                                        <td>
                                            <button className="btn btn-danger"  style={{width:'60px'}} onClick={() => this.deleteKitap(kitap.id)}> Sil </button>
                                            <button className="btn btn-success" style={{width:'60px'}} onClick={() => this.editKitap(kitap.id)} style={{marginLeft: '20px'}}> Düzenle</button>
                                            <button className="btn btn-success" style={{width:'60px'}} onClick={() => this.kiralaUser(kitap.id)} style={{marginLeft: '20px'}}> Kirala</button>
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