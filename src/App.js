import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import KitapListe from "./component/Admin/KitapListe";
import KitapEkle from "./component/Admin/KitapEkle";
import KitapDüzenle from "./component/Admin/KitapDüzenle";
import KullaniciListe from "./component/Admin/KullaniciListe";
import KullaniciEkle from "./component/Admin/KullaniciEkle";
import KullaniciDüzenle from "./component/Admin/KullaniciDüzenle";
import Example from "./component/navbar/Example";
import OrderBook from './component/Admin/OrderBook';
import OrderList from './component/Admin/OrderList';
import HomePage from './component/Admin/HomePage';



function App() {
  return (
      <div className="container">
          <Example/>
          <Router>
              <div className="col-md-100">
                  <Switch>
                      <Route path="/" exact component={HomePage} />
                      <Route path="/users" component={KitapListe} />
                      <Route path="/add-user" component={KitapEkle} />
                      <Route path="/edit-user" component={KitapDüzenle} />
                      <Route path="/kullanici-list" component={KullaniciListe} />
                      <Route path="/kullanici-ekle" component={KullaniciEkle} />
                      <Route path="/kullanici-düzenle" component={KullaniciDüzenle} />
                      <Route path="/order-book" component={OrderBook} />
                      <Route path="/order-list" component={OrderList} />
                  </Switch>
              </div>
          </Router>

      </div>
  );
}

const style = {
    color: 'red',
    margin: '30px'
}

export default App;
