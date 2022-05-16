import axios from "axios";

const apiUrl = "https://localhost:7138";

class transakcjaService {
    createTransakcja(pojazdid, klientid, sprzedawcaid, platnosc, kwota) {
        const data = Date.now();
        

        const transakcja = {
            klientid: klientid,
            pojazdid: pojazdid,
            sprzedawcaid: sprzedawcaid,
            platnosc: {
                kwota: kwota,
                forma: platnosc
            }
        }
        console.log(transakcja)

        return axios.post(apiUrl + "/Transakcja", transakcja)
    }

    getTransakcja() {
        return axios.get(apiUrl + "/Transakcja")
    }
}

export default new transakcjaService();


// {
//     "klientid": 0,
//     "pojazdid": 0,
//     "sprzedawcaid": 0,
//     "platnosc": {
//       "id": 0,
//       "kwota": 0,
//       "forma": "string"
//     },
//     "data": "2022-05-14T00:06:00.628Z"
//   }