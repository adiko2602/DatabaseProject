import axios from "axios";

const apiUrl = "https://localhost:7138";

class pojazdService {
    // createKlient(
    //     imie,
    //     nazwisko,
    //     kodpocztowy,
    //     miasto,
    //     ulica,
    //     numer
    // ) {
    //     const klient = {
    //         id: 0,
    //         imie: imie,
    //         nazwisko: nazwisko,
    //         kodpocztowy: kodpocztowy,
    //         miasto: miasto,
    //         ulica: ulica,
    //         numer: numer
    //     };

    //     return axios.post(apiUrl + "/Klient", klient);
    // }
    // }

    // async getCurrentPosts() {
    //     const user = authService.getCurrentUser();
    //     const userId = user.id;

    //     return await axios.get(apiUrl + "/Post/User/" + userId, {
    //         headers: {
    //             Authorization: 'Bearer ' + authService.getToken()
    //         }
    //     });
        
    // }
    createPojazd(pojazd) {
        return axios.post(apiUrl + "/Pojazd", pojazd)
    }

    getPojazd() {
        return axios.get(apiUrl + "/Pojazd");
    }

    getPojazdId(id) {
        return axios.get(apiUrl + "/Pojazd/" + id)
    }

    search(pojazd) {
        return axios.post(apiUrl + "/Pojazd/Szukaj", pojazd)
    }

    deletePojazdId(id) {
        return axios.delete(apiUrl + "/Pojazd/" + id)
    }

    // async delete(id) {
    //     return await axios.delete(apiUrl + "/Post/" + id, {
    //         headers: {
    //             Authorization: 'Bearer ' + authService.getToken()
    //         }
    //     }).then(
    //         response => {
    //             return response.data;
    //         }
    //     )
    // }
}

export default new pojazdService();