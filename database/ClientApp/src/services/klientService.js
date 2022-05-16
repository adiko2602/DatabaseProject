import axios from "axios";

const apiUrl = "https://localhost:7138";

class klientService {
    createKlient(
        imie,
        nazwisko,
        kodpocztowy,
        miasto,
        ulica,
        numer
    ) {
        const klient = {
            id: 0,
            imie: imie,
            nazwisko: nazwisko,
            kodpocztowy: kodpocztowy,
            miasto: miasto,
            ulica: ulica,
            numer: numer
        };

        return axios.post(apiUrl + "/Klient", klient);
    }
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

    getKlient() {
        return axios.get(apiUrl + "/Klient");
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

export default new klientService();