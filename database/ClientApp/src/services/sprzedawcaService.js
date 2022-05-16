import axios from "axios";

const apiUrl = "https://localhost:7138";

class sprzedawcaService {
    getSprzedawca() {
        return axios.get(apiUrl + "/Sprzedawca")
    }

    createSprzedawca(imie, nazwisko, numerfiromwy) {
        const sprzedawca = {
            id: 0,
            imie: imie,
            nazwisko: nazwisko,
            numerfirmowy: numerfiromwy
        }

        return axios.post(apiUrl + "/Sprzedawca", sprzedawca)

    }
}

export default new sprzedawcaService();
