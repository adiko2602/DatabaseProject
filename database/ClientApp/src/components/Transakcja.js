import { Component } from 'react'
import pojazdService from '../services/pojazdService'
import sprzedawcaService from '../services/sprzedawcaService'
import klientService from '../services/klientService'
import { TableBody, TableCell, TableRow, TableHead, Table, TableContainer, Grid, Button, FormLabel, RadioGroup, FormControlLabel, Radio, TextField } from '@mui/material'
import transakcjaService from '../services/transakcjaService'
import { grey } from '@mui/material/colors';


export default class Transakcja extends Component {
  constructor(props) {
    super(props)

    this.state = {
      szukaj: '',
      pojazdy: [],
      klienci: [],
      sprzedawcy: [],
      pojazdWybrany: null,
      klientWybrany: null,
      sprzedawcaWybrany: null,
      kwota: null,
      platnosc: "Gotówka",
      transakcje: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    pojazdService.getPojazd().then(
      response => {
        this.setState({
          pojazdy: response.data
        })
      }
    )

    transakcjaService.getTransakcja().then(
      response => {
        this.setState({
          transakcje: response.data
        })
      }
    )

    klientService.getKlient().then(
      response => {
        this.setState({
          klienci: response.data
        })
      }
    )

    sprzedawcaService.getSprzedawca().then(
      resposne => {
        this.setState({
          sprzedawcy: resposne.data
        })
      }
    )
  }

  handleSubmit(e) {
    e.preventDefault()
    transakcjaService.createTransakcja(
      this.state.pojazdWybrany,
      this.state.klientWybrany,
      this.state.sprzedawcaWybrany,
      this.state.platnosc,
      this.state.kwota).then(
        resposne => {
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
          transakcjaService.getTransakcja().then(
              response => {
                  this.setState({
                      transakcje: response.data
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
            <FormLabel>Pojazd</FormLabel>
            <RadioGroup>
              {this.state.pojazdy.filter((val) => {
                if(!val.sprzedany)
                  return val
              }).map(pojazd => (
                  <FormControlLabel style={{margin: "10px 0"}} key={pojazd.id} value={pojazd.id} control={<Radio onChange={(e) => {
                    if(!pojazd.sprzedany){
                    this.setState({
                      pojazdWybrany: e.target.value
                    })} else {
                      alert("Pojazd sprzedany!")
                      this.setState({
                        pojazdWybrany: null
                      })
                    }
                  }
                  }
                  />} label={<div>id: {pojazd.id}<br /><b>{pojazd.marka} {pojazd.model}</b><br />VIN: {pojazd.vin}<br />Cena: {pojazd.cena}</div>} />
              )
              )}
            </RadioGroup>
            <FormLabel>Klient</FormLabel>
            <RadioGroup>
              {this.state.klienci.map((klient) => (
                <FormControlLabel style={{margin: "10px 0"}} key={klient.id} value={klient.id} control={<Radio onChange={(e) => {
                  this.setState({
                    klientWybrany: e.target.value
                  })
                }
                }

                />} label={<div>id: {klient.id}<br /><b>{klient.imie} {klient.nazwisko}</b></div>} />
              ))}
            </RadioGroup>
            <FormLabel>Sprzedawca</FormLabel>
            <RadioGroup>
              {this.state.sprzedawcy.map((sprzedawca) => (
                <FormControlLabel  style={{margin: "10px 0"}}  key={sprzedawca.id} value={sprzedawca.id} control={<Radio onChange={(e) => {
                  this.setState({
                    sprzedawcaWybrany: e.target.value
                  })
                }
                }

                />} label={<div>id: {sprzedawca.id}<br /><b>{sprzedawca.imie} {sprzedawca.nazwisko}</b><br />Numer firmowy: {sprzedawca.numerfirmowy}</div>} />
              ))}
            </RadioGroup>
            <FormLabel>Forma płatności</FormLabel>
            <RadioGroup defaultValue="Gotówka">
              <FormControlLabel  style={{margin: "10px 0"}}  value="Gotówka" control={<Radio onChange={(e) => {
                this.setState({
                  platnosc: e.target.value
                })
              }}/>} label="Gotówka" />
              <FormControlLabel  style={{margin: "10px 0"}}  value="Przelew" control={<Radio onChange={(e) => {
                this.setState({
                  platnosc: e.target.value
                })
              }}/>} label="Przelew" />
            </RadioGroup>
            <TextField fullWidth label="Kwota" variant="outlined" onChange={(e) => {
              this.setState({
                kwota: e.target.value
              })
            }} />
            <Button color="secondary" variant="outlined" type="submit">Dodaj</Button>
          </form>
          </div>
          </Grid>
          </Grid>
        </div>
      )}

      {this.state.wybierz && (
                    <div style={{ margin: "20px" }}>
                          <div style={{ width: "100%", textAlign: "center" }}>
                            <div style={{ width: "300px", margin: "10px", display: "inline-block" }}>
                                <TextField fullWidth label="Szukaj" variant="outlined" onChange={event => {
                                    this.setState({
                                        szukaj: event.target.value
                                    })
                                }
                                } />
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
                                                    <TableCell>Pojazd</TableCell>
                                                    <TableCell>Klient</TableCell>
                                                    <TableCell>Sprzedawca</TableCell>
                                                    <TableCell>Data</TableCell>
                                                    <TableCell>Kwota</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                { this.state.transakcje.filter((val) => {
                                                  if(this.state.szukaj == "") {
                                                    return val
                                                  } else if (val.klient.imie.toLowerCase().includes(this.state.szukaj.toLowerCase())) {
                                                    return val
                                                  } else if (val.klient.nazwisko.toLowerCase().includes(this.state.szukaj.toLowerCase())) {
                                                    return val
                                                  } else if (val.pojazd.marka.toLowerCase().includes(this.state.szukaj.toLowerCase())) {
                                                    return val
                                                  } else if (val.pojazd.model.toLowerCase().includes(this.state.szukaj.toLowerCase())) {
                                                    return val
                                                  } else if (val.sprzedawca.imie.toLowerCase().includes(this.state.szukaj.toLowerCase())) {
                                                    return val
                                                  } else if (val.sprzedawca.nazwisko.toLowerCase().includes(this.state.szukaj.toLowerCase())) {
                                                    return val
                                                  }
                                                }).map(transakcja => (
                                                    <TableRow key={transakcja.id}>
                                                        <TableCell>{transakcja.id}</TableCell>
                                                        <TableCell>{transakcja.pojazd.marka} {transakcja.pojazd.model}</TableCell>
                                                        <TableCell>{transakcja.klient.imie} {transakcja.klient.nazwisko}</TableCell>
                                                        <TableCell>{transakcja.sprzedawca.imie} {transakcja.sprzedawca.nazwisko}</TableCell>
                                                        <TableCell>{transakcja.data}</TableCell>
                                                        <TableCell>{transakcja.platnosc.kwota}</TableCell>
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
      </div>
    )
  }
}
