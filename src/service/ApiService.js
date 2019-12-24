import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080';

class ApiService {

    kitapAll() {
        return axios.get(USER_API_BASE_URL + "/kitap");
    }

    kitapById(kitapId) {
        return axios.get(USER_API_BASE_URL + '/kitap/' + kitapId);
    }

    kitapSil(kitapId) {
        return axios.delete(USER_API_BASE_URL + '/kitap/' + kitapId);
    }

    kitapEkle(kitap) {
        return axios.post(USER_API_BASE_URL+ '/kitap/', kitap);
    }

    kitapEdit(kitap) {
        return axios.post(USER_API_BASE_URL + '/kitap/' , kitap);
    }

    kullaniciAll() {
      return axios.get(USER_API_BASE_URL + "/kullanici");
    }

    kullaniciById(kullaniciId) {
      return axios.get(USER_API_BASE_URL + '/kullanici/' + kullaniciId);
    }

    kullaniciSil(kullaniciId) {
      return axios.delete(USER_API_BASE_URL + '/kullanici/' + kullaniciId);
    }

    kullaniciEkle(kullanici) {
      return axios.post(USER_API_BASE_URL+ '/kullanici/', kullanici);
    }

    kullaniciEdit(kullanici) {
      return axios.post(USER_API_BASE_URL + '/kullanici/' , kullanici);
    }     

    orderBook(kitapId, KullaniciID, test) {
        return axios({
          method: 'post',
          url   :  USER_API_BASE_URL + '/kitap/' + kitapId + '/kullanici/' + KullaniciID,
          headers : {},
          data : {alınmaTarihi : test}
        });
        //return axios.post(USER_API_BASE_URL + '/kitap/' + kitapId + '/kullanici/' + KullaniciID, test);
    }
    orderList() {
      return axios.get(USER_API_BASE_URL + "/orders");
    }
    deleteOrder(orderId) {
      return axios.delete(USER_API_BASE_URL + '/orders/' + orderId);
    }
}

export default new ApiService();