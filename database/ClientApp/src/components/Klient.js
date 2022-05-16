import { Component } from 'react'
import { TextField, Button, Grid, TableContainer, Table, TableBody, TableHead, TableRow, TableCell } from '@mui/material';
import klientService from '../services/klientService'

import { grey } from '@mui/material/colors';

export default class Klient extends Component {
    constructor(props) {
        super(props);

        this.onChangeImie = this.onChangeImie.bind(this);
        this.onChangeNazwisko = this.onChangeNazwisko.bind(this);
        this.onChangeKodpocztowy = this.onChangeKodpocztowy.bind(this);
        this.onChangeMiasto = this.onChangeMiasto.bind(this);
        this.onChangeUlica = this.onChangeUlica.bind(this);
        this.onChangeNumer = this.onChangeNumer.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);


        this.state = {
            imie: "",
            nazwisko: "",
            kodpocztowy: "",
            miasto: "",
            ulica: "",
            numer: "",
            error: false,
            dodaj: false,
            wybierz: false,
            edytuj: false,
            klienci: [],
            szukaj: ''
        }
    }

    componentDidMount() {
        klientService.getKlient().then(
            response => {
                this.setState({
                    klienci: response.data
                })
            }
        )
    }

    onChangeImie(e) {
        e.preventDefault();
        this.setState({
            imie: e.target.value
        })
    }

    onChangeNazwisko(e) {
        e.preventDefault();
        this.setState({
            nazwisko: e.target.value
        })
    }

    onChangeKodpocztowy(e) {
        e.preventDefault();
        this.setState({
            kodpocztowy: e.target.value
        })
    }

    onChangeMiasto(e) {
        e.preventDefault();
        this.setState({
            miasto: e.target.value
        })
    }

    onChangeUlica(e) {
        e.preventDefault();
        this.setState({
            ulica: e.target.value
        })
    }

    onChangeNumer(e) {
        e.preventDefault();
        this.setState({
            numer: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("Submit")
        this.setState({
            error: false
        })

        if (
            this.state.imie == "" ||
            this.state.nazwisko == "" ||
            this.state.kodpocztowy == "" ||
            this.state.miasto == "" ||
            this.state.ulica == "" ||
            this.state.numer == "") {
            this.setState({
                error: true
            })
            return;
        }

        klientService.createKlient(
            this.state.imie,
            this.state.nazwisko,
            this.state.kodpocztowy,
            this.state.miasto,
            this.state.ulica,
            this.state.numer).then(
                response => {
                    this.setState( {
                        imie: "",
                        nazwisko: "",
                        kodpocztowy: "",
                        miasto: "",
                        ulica: "",
                        numer: ""
                    })
                    window.location.reload()
                }
            )
    }

    render() {
        return (
            <div>
                <div style={{margin: "20px"}}>
                <Button color="secondary" variant="outlined" onClick={() => {
                    this.setState({
                        dodaj: false,
                        wybierz: true,
                        edytuj: false
                    })
                    klientService.getKlient().then(
                        response => {
                            this.setState({
                                klienci: response.data
                            })
                        }
                    )
                }}>
                    Pokaż
                </Button>
                <Button color="secondary" variant="outlined" onClick={() => {
                    this.setState({
                        dodaj: true,
                        wybierz: false,
                        edytuj: false
                    })
                }}>
                    Dodaj
                </Button>
                </div>


                {this.state.wybierz && (
                    <div style={{ margin: "20px" }}>
                        
                    <div style={{width: "100%", textAlign: "center"}}>
                        <div style={{ width: "300px", margin: "10px", display: "inline-block" }}>

                            <TextField fullWidth label="Szukaj" variant="outlined" onChange={event => {
                                this.setState( {
                                    szukaj: event.target.value
                                })
                            }
                        }/>

                        </div>
                    </div>

                        <Grid
                            container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            style={{ minHeight: '100vh' }}
                        >

                            <Grid item xs={3}>
                                <div style={{ width: "800px" }}>
                                    <TableContainer>
                                        <Table>
                                            <TableHead>
                                                <TableRow style={{backgroundColor: grey[500]}}>
                                                    <TableCell>id</TableCell>
                                                    <TableCell>Imię</TableCell>
                                                    <TableCell>Nazwisko</TableCell>
                                                    <TableCell>Kod pocztowy</TableCell>
                                                    <TableCell>Miasto</TableCell>
                                                    <TableCell>Ulica</TableCell>
                                                    <TableCell>Numer domu</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {this.state.klienci.filter((val) => {
                                                    if(this.state.szukaj == "") {
                                                        return val
                                                    } else if (val.imie.toLowerCase().includes(this.state.szukaj.toLowerCase())) {
                                                        return val
                                                    } else if (val.nazwisko.toLowerCase().includes(this.state.szukaj.toLowerCase())) {
                                                        return val
                                                    } else if (val.miasto.toLowerCase().includes(this.state.szukaj.toLowerCase())) {
                                                        return val
                                                    }

                                                }).map(klient => (
                                                    <TableRow key={klient.id}>
                                                        <TableCell>{klient.id}</TableCell>
                                                        <TableCell>{klient.imie}</TableCell>
                                                        <TableCell>{klient.nazwisko}</TableCell>
                                                        <TableCell>{klient.kodpocztowy}</TableCell>
                                                        <TableCell>{klient.miasto}</TableCell>
                                                        <TableCell>{klient.ulica}</TableCell>
                                                        <TableCell>{klient.numer}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                )}

                {this.state.dodaj && (
                    <div style={{ margin: "20px" }}>

                        <Grid
                            container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            style={{ minHeight: '100vh' }}
                        >

                            <Grid item xs={3}>
                                <div style={{ width: "800px" }}>
                                    <form onSubmit={this.handleSubmit}>
                                        <Grid
                                            container
                                            spacing={2}
                                            direction="row"
                                            alignItems="center"
                                        >

                                            <Grid item xs={12}>
                                                <TextField fullWidth label="Imię" variant="outlined" onChange={this.onChangeImie} />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField fullWidth label="Nazwisko" variant="outlined" onChange={this.onChangeNazwisko} />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField fullWidth label="Kod pocztowy" variant="outlined" onChange={this.onChangeKodpocztowy} />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField fullWidth label="Miasto" variant="outlined" onChange={this.onChangeMiasto} />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField fullWidth label="Ulica" variant="outlined" onChange={this.onChangeUlica} />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField fullWidth label="Numer domu" variant="outlined" onChange={this.onChangeNumer} />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button color="secondary" variant="outlined" type="submit">Dodaj</Button>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                )}
            </div>
        )
    }
}
