import { Component } from 'react'
import { TextField, Button, Grid, TableContainer, Table, TableBody, TableHead, TableRow, TableCell } from '@mui/material';
import sprzedawcaService from '../services/sprzedawcaService'

import { grey } from '@mui/material/colors';

export default class Sprzedawca extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);


        this.state = {
            imie: "",
            nazwisko: "",
            numerfirmowy: null,
            error: false,
            dodaj: false,
            wybierz: false,
            edytuj: false,
            sprzedawcy: []
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        sprzedawcaService.createSprzedawca(
            this.state.imie,
            this.state.nazwisko,
            this.state.numerfirmowy
        ).then(
            response => {
                window.location.reload()
            }
        )

    }

    componentDidMount() {
        sprzedawcaService.getSprzedawca().then(
            response => {
                this.setState({
                    sprzedawcy: response.data
                })
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
                    sprzedawcaService.getSprzedawca().then(
                        response => {
                            this.setState({
                                sprzedawcy: response.data
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
                                                    <TableCell>Numer firmowy</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {this.state.sprzedawcy.map(sprzedawca => (
                                                    <TableRow key={sprzedawca.id}>
                                                        <TableCell>{sprzedawca.id}</TableCell>
                                                        <TableCell>{sprzedawca.imie}</TableCell>
                                                        <TableCell>{sprzedawca.nazwisko}</TableCell>
                                                        <TableCell>{sprzedawca.numerfirmowy}</TableCell>
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
                                                <TextField fullWidth label="Imię" variant="outlined" onChange={(e) => {
                                                    this.setState({
                                                        imie: e.target.value
                                                    })
                                                }} />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField fullWidth label="Nazwisko" variant="outlined" onChange={(e) => {
                                                    this.setState({
                                                        nazwisko: e.target.value
                                                    })
                                                }} />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField fullWidth label="Numer firmowy" variant="outlined" onChange={(e) => {
                                                    this.setState({
                                                        numerfirmowy: e.target.value
                                                    })
                                                }} />
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
