import { Component } from 'react'
import { FormGroup, Radio, RadioGroup, FormLabel, FormControlLabel, Checkbox, Box, IconButton, Collapse, TextField, Button, Grid, TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { grey } from '@mui/material/colors';


import pojazdService from '../services/pojazdService'

export default class Pojazd extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            wiecejPojazd: {},
            szukaj: '',
            szukajAbs: false,
            szukajKlimatyzacja: false,
            szukajSkora: false,
            szukajSprzedane: false,
            open: false,
            dodaj: false,
            wybierz: false,
            edytuj: false,
            wiecej: false,
            szukaj: false,
            firstStep: false,
            secondStep: false,
            finalStep: false,
            pojazdy: [],
            pojazdSzukaj: {},
            pojazd: {
                marka: "",
                model: "",
                pochodzenie: "",
                vin: "",
                cena: 0,
                stan: {
                    uszklakier: false,
                    uszkkaroseria: false,
                    uszkzawieszenie: false,
                    uszksilnik: false,
                    uszkwnetrze: false,
                    zarejestrownay: false
                },
                wyposazenie: {
                    abs: false,
                    esp: false,
                    klimatyzacja: false,
                    elekszyby: false,
                    skora: false,
                    grzanefotele: false,
                    wspomaganiekier: false,
                    czujnikipark: false,
                    inne: false
                },
                rodzaj: {
                    kombi: true,
                    sedan: false,
                    hatchback: false,
                    van: false
                },
                paliwo: {
                    benzyna: true,
                    elektryk: false,
                    diesel: false
                },
                sprzedany: false
            }
        }
    }
    

    componentDidMount() {
        pojazdService.getPojazd().then(
            response => {
                this.setState({
                    pojazdy: response.data
                })
            }
        )
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log("Submit")
        console.log(this.state.pojazd)

        pojazdService.createPojazd(this.state.pojazd).then(
            response => {
               window.location.reload()
            }
        )
    }

    render() {
        return (
            <div>
                <div style={{ margin: "20px" }}>
                    <Button color="secondary" variant="outlined" onClick={() => {
                        this.setState({
                            dodaj: false,
                            wybierz: true,
                            edytuj: false,
                            szukaj: false,
                            wiecej: false
                        })
                        pojazdService.getPojazd().then(
                            response => {
                                this.setState({
                                    pojazdy: response.data
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
                            edytuj: false,
                            szukaj: false,
                            wiecej: false
                        })
                    }}>
                        Dodaj
                    </Button>
                </div>

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


                        <div style={{ width: "100%", textAlign: "center" }}>
                            <div style={{ width: "600px", margin: "10px", display: "inline-block" }}>
                                <FormControlLabel control={<Checkbox  checked={this.state.szukajAbs} onChange={(e) => {
                                    this.setState({
                                        szukajAbs: !this.state.szukajAbs
                                    })
                                }} />}
                                    label="ABS" />
                                <FormControlLabel control={<Checkbox checked={this.state.szukajKlimatyzacja} onChange={(e) => {
                                    this.setState({
                                        szukajKlimatyzacja: !this.state.szukajKlimatyzacja
                                    })
                                }} />}
                                    label="Klimatyzajca" />
                                <FormControlLabel control={<Checkbox checked={this.state.szukajSkora} onChange={(e) => {
                                    this.setState({
                                        szukajSkora: !this.state.szukajSkora
                                    })
                                }} />}
                                    label="Skóra" />
                                <FormControlLabel control={<Checkbox checked={this.state.szukajSprzedane} onChange={(e) => {
                                    this.setState({
                                        szukajSprzedane: !this.state.szukajSprzedane
                                    })
                                }} />}
                                    label="Sprzedane" />
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
                                    <Table>
                                        <TableHead>
                                            <TableRow style={{ backgroundColor: grey[500] }}>
                                                <TableCell>id</TableCell>
                                                <TableCell>Marka</TableCell>
                                                <TableCell>Model</TableCell>
                                                <TableCell>VIN</TableCell>
                                                <TableCell>Pochodzenie</TableCell>
                                                <TableCell>Cena</TableCell>
                                                <TableCell>Sprzedany</TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {this.state.pojazdy.filter((val) => {
                                                    if(this.state.szukaj == "") {
                                                        return val
                                                    } else if (val.marka.toLowerCase().includes(this.state.szukaj.toLowerCase())) {
                                                        return val
                                                    } else if (val.model.toLowerCase().includes(this.state.szukaj.toLowerCase())) {
                                                        return val
                                                    } else if (val.vin.toLowerCase().includes(this.state.szukaj.toLowerCase())) {
                                                        return val
                                                    } else if (val.pochodzenie.toLowerCase().includes(this.state.szukaj.toLowerCase())) {
                                                        return val
                                                    } 
                                                }).filter((va) => {
                                                    if(this.state.szukajAbs) {
                                                        if(va.wyposazenie.abs)
                                                            return va
                                                    } else {
                                                        return va
                                                    } 
                                                }).filter((va) => {
                                                    if (this.state.szukajKlimatyzacja) {
                                                        if(va.wyposazenie.klimatyzacja)
                                                            return va
                                                    } else {
                                                        return va
                                                    } 
                                                }).filter((va) => {
                                                    if (this.state.szukajSkora) {
                                                        if(va.wyposazenie.skora) 
                                                            return va
                                                    } else {
                                                        return va
                                                    }
                                                }).filter((va) => {
                                                    if (this.state.szukajSprzedane) {
                                                        if(va.sprzedany) 
                                                            return va
                                                    } else {
                                                        return va
                                                    }
                                                }).map((pojazd) => (

                                                <TableRow key={pojazd.id}>

                                                    <TableCell>{pojazd.id}</TableCell>
                                                    <TableCell>{pojazd.marka}</TableCell>
                                                    <TableCell>{pojazd.model}</TableCell>
                                                    <TableCell>{pojazd.vin}</TableCell>
                                                    <TableCell>{pojazd.pochodzenie}</TableCell>
                                                    <TableCell>{pojazd.cena}</TableCell>
                                                    <TableCell>{pojazd.sprzedany ? "+" : "-"}</TableCell>
                                                    <TableCell><Button color="secondary" variant="outlined" onClick={() => {
                                                        pojazdService.getPojazdId(pojazd.id).then(
                                                            response => {
                                                                this.setState({
                                                                    wiecejPojazd: response.data[0],
                                                                    wiecej: true,
                                                                    dodaj: false,
                                                                    wybierz: false,
                                                                    edytuj: false,
                                                                    szukaj: false
                                                                })
                                                            }
                                                        )
                                                    }}>Więcej</Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
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
                                                <TextField fullWidth label="Marka" variant="outlined" onChange={(e) => {
                                                    this.setState(prevState => ({
                                                        pojazd: {                   
                                                            ...prevState.pojazd,   
                                                            marka: e.target.value   
                                                        }
                                                    }))
                                                }} />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField fullWidth label="Model" variant="outlined" onChange={(e) => {
                                                    this.setState(prevState => ({
                                                        pojazd: {                   
                                                            ...prevState.pojazd, 
                                                            model: e.target.value
                                                        }
                                                    }))
                                                }} />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField fullWidth label="Pochodzenie" variant="outlined" onChange={(e) => {
                                                    this.setState(prevState => ({
                                                        pojazd: {                   
                                                            ...prevState.pojazd, 
                                                            pochodzenie: e.target.value
                                                        }
                                                    }))
                                                }} />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField fullWidth label="VIN" variant="outlined" onChange={(e) => {
                                                    this.setState(prevState => ({
                                                        pojazd: {                   
                                                            ...prevState.pojazd, 
                                                            vin: e.target.value
                                                        }
                                                    }))
                                                }} />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField fullWidth label="Cena" variant="outlined" onChange={(e) => {
                                                    this.setState(prevState => ({
                                                        pojazd: {                   
                                                            ...prevState.pojazd, 
                                                            cena: e.target.value
                                                        }
                                                    }))
                                                }} />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <FormGroup>
                                                    <FormLabel>Uszkodzenia</FormLabel>
                                                    <FormControlLabel control={<Checkbox onChange={(e) => {
                                                    this.setState(prevState => ({
                                                        pojazd: {                   
                                                            ...prevState.pojazd, 
                                                                stan: {
                                                                    ...prevState.pojazd.stan,
                                                                    uszklakier: !this.state.pojazd.stan.uszklakier
                                                                }
                                                            }
                                                        }))
                                                    }} />} label="Uszkodzony lakier" />
                                                    <FormControlLabel control={<Checkbox onChange={(e) => {
                                                    this.setState(prevState => ({
                                                        pojazd: {                   
                                                            ...prevState.pojazd, 
                                                                stan: {
                                                                    ...prevState.pojazd.stan,
                                                                    uszkkaroseria: !this.state.pojazd.stan.uszkkaroseria
                                                                }
                                                            }
                                                        }))
                                                    }} />} label="Uszkodzona karoseria" />
                                                    <FormControlLabel control={<Checkbox onChange={(e) => {
                                                    this.setState(prevState => ({
                                                        pojazd: {                   
                                                            ...prevState.pojazd, 
                                                                stan: {
                                                                    ...prevState.pojazd.stan,
                                                                    uszksilnik: !this.state.pojazd.stan.uszksilnik
                                                                }
                                                            }
                                                        }))
                                                    }} />} label="Uszkodzony silnik" />
                                                    <FormControlLabel control={<Checkbox onChange={(e) => {
                                                    this.setState(prevState => ({
                                                        pojazd: {                   
                                                            ...prevState.pojazd, 
                                                                stan: {
                                                                    ...prevState.pojazd.stan,
                                                                    uszkzawieszenie: !this.state.pojazd.stan.uszkzawieszenie
                                                                }
                                                            }
                                                        }))
                                                    }} />} label="Uszkodzony zawieszenie" />
                                                    <FormControlLabel control={<Checkbox onChange={(e) => {
                                                    this.setState(prevState => ({
                                                        pojazd: {                   
                                                            ...prevState.pojazd, 
                                                                stan: {
                                                                    ...prevState.pojazd.stan,
                                                                    uszkwnetrze: !this.state.pojazd.stan.uszkwnetrze
                                                                }
                                                            }
                                                        }))
                                                    }} />} label="Uszkodzony wnętrze" />
                                                    <FormControlLabel control={<Checkbox onChange={(e) => {
                                                    this.setState(prevState => ({
                                                        pojazd: {                   
                                                            ...prevState.pojazd, 
                                                                stan: {
                                                                    ...prevState.pojazd.stan,
                                                                    zarejestrowany: !this.state.pojazd.stan.zarejestrownay
                                                                }
                                                            }
                                                        }))
                                                    }} />} label="Zarejestrowany" />
                                                </FormGroup>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <FormLabel>Rodzaj paliwa</FormLabel>
                                                <RadioGroup defaultValue="benzyna">
                                                    <FormControlLabel value="benzyna" control={<Radio onChange={(e) => {
                                                    this.setState(prevState => ({
                                                        pojazd: {                   
                                                            ...prevState.pojazd, 
                                                                paliwo: {
                                                                    benzyna: true,
                                                                    diesel: false,
                                                                    elektryczny: false
                                                                }
                                                            }
                                                        }))
                                                    }} />} label="Benzyna" />
                                                    <FormControlLabel value="diesel" control={<Radio onChange={(e) => {
                                                    this.setState(prevState => ({
                                                        pojazd: {                   
                                                            ...prevState.pojazd, 
                                                                paliwo: {
                                                                    benzyna: false,
                                                                    diesel: true,
                                                                    elektryczny: false
                                                                }
                                                            }
                                                        }))
                                                    }} />} label="Diesel" />
                                                </RadioGroup>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <FormLabel>Rodzaj nadwozia</FormLabel>
                                                <RadioGroup defaultValue="kombi">
                                                    <FormControlLabel value="kombi" control={<Radio onChange={(e) => {
                                                    this.setState(prevState => ({
                                                        pojazd: {                   
                                                            ...prevState.pojazd, 
                                                                rodzaj: {
                                                                    kombi: true,
                                                                    sedan: false,
                                                                    hatchback: false,
                                                                    suv: false
                                                                }
                                                            }
                                                        }))
                                                    }} />} label="Kombi" />
                                                    <FormControlLabel value="sedan" control={<Radio onChange={(e) => {
                                                    this.setState(prevState => ({
                                                        pojazd: {                   
                                                            ...prevState.pojazd, 
                                                                rodzaj: {
                                                                    kombi: false,
                                                                    sedan: true,
                                                                    hatchback: false,
                                                                    suv: false
                                                                }
                                                            }
                                                        }))
                                                    }} />} label="Sedan" />
                                                    <FormControlLabel value="hatchback" control={<Radio onChange={(e) => {
                                                    this.setState(prevState => ({
                                                        pojazd: {                   
                                                            ...prevState.pojazd, 
                                                                rodzaj: {
                                                                    kombi: false,
                                                                    sedan: false,
                                                                    hatchback: true,
                                                                    suv: false
                                                                }
                                                            }
                                                        }))
                                                    }} />} label="Hatchback" />
                                                    <FormControlLabel value="van" control={<Radio onChange={(e) => {
                                                    this.setState(prevState => ({
                                                        pojazd: {                   
                                                            ...prevState.pojazd, 
                                                                rodzaj: {
                                                                    kombi: false,
                                                                    sedan: false,
                                                                    hatchback: false,
                                                                    suv: true
                                                                }
                                                            }
                                                        }))
                                                    }} />} label="VAN" />
                                                </RadioGroup>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <FormGroup>
                                                    <FormLabel>Wyposażenie</FormLabel>
                                                    <FormControlLabel control={<Checkbox onChange={(e) => {
                                                    this.setState(prevState => ({
                                                        pojazd: {                   
                                                            ...prevState.pojazd, 
                                                                wyposazenie: {
                                                                    ...prevState.pojazd.wyposazenie,
                                                                    abs: !this.state.pojazd.wyposazenie.abs
                                                                }
                                                            }
                                                        }))
                                                    }} />} label="ABS" />
                                                    <FormControlLabel control={<Checkbox onChange={(e) => {
                                                    this.setState(prevState => ({
                                                        pojazd: {                   
                                                            ...prevState.pojazd, 
                                                                wyposazenie: {
                                                                    ...prevState.pojazd.wyposazenie,
                                                                    esp: !this.state.pojazd.wyposazenie.esp
                                                                }
                                                            }
                                                        }))
                                                    }} />} label="ESP" />
                                                    <FormControlLabel control={<Checkbox onChange={(e) => {
                                                        this.setState(prevState => ({
                                                            pojazd: {                   
                                                                ...prevState.pojazd, 
                                                                wyposazenie: {
                                                                    ...prevState.pojazd.wyposazenie,
                                                                    klimatyzacja: !this.state.pojazd.wyposazenie.klimatyzajca
                                                                }
                                                            }
                                                        }))
                                                    }} />} label="Klimatyzacja" />
                                                    <FormControlLabel control={<Checkbox onChange={(e) => {
                                                        this.setState(prevState => ({
                                                            pojazd: {                   
                                                                ...prevState.pojazd, 
                                                                wyposazenie: {
                                                                    ...prevState.pojazd.wyposazenie,
                                                                    elekszyby: !this.state.pojazd.wyposazenie.elekszyby
                                                                }
                                                            }
                                                        }))
                                                    }} />} label="Elektryczne szyby" />
                                                    <FormControlLabel control={<Checkbox onChange={(e) => {
                                                        this.setState(prevState => ({
                                                            pojazd: {                   
                                                                ...prevState.pojazd, 
                                                                wyposazenie: {
                                                                    ...prevState.pojazd.wyposazenie,
                                                                    skora: !this.state.pojazd.wyposazenie.skora
                                                                }
                                                            }
                                                        }))
                                                    }} />} label="Skóra" />
                                                    <FormControlLabel control={<Checkbox onChange={(e) => {
                                                        this.setState(prevState => ({
                                                            pojazd: {                   
                                                                ...prevState.pojazd, 
                                                                wyposazenie: {
                                                                    ...prevState.pojazd.wyposazenie,
                                                                    grzanefotele: !this.state.pojazd.wyposazenie.grzanefotele
                                                                }
                                                            }
                                                        }))
                                                    }} />} label="Podgrzewane fotele" />
                                                    <FormControlLabel control={<Checkbox onChange={(e) => {
                                                        this.setState(prevState => ({
                                                            pojazd: {                   
                                                                ...prevState.pojazd, 
                                                                wyposazenie: {
                                                                    ...prevState.pojazd.wyposazenie,
                                                                    wspomaganiekier: !this.state.pojazd.wyposazenie.wspomaganiekier
                                                                }
                                                            }
                                                        }))
                                                    }} />} label="Wspomaganie kierownicy" />
                                                    <FormControlLabel control={<Checkbox onChange={(e) => {
                                                        this.setState(prevState => ({
                                                            pojazd: {                   
                                                                ...prevState.pojazd, 
                                                                wyposazenie: {
                                                                    ...prevState.pojazd.wyposazenie,
                                                                    czujnikipark: !this.state.pojazd.wyposazenie.czujnikipark
                                                                }
                                                            }
                                                        }))
                                                    }} />} label="Czujniki parkowania" />
                                                    <FormControlLabel control={<Checkbox onChange={(e) => {
                                                        this.setState(prevState => ({
                                                            pojazd: {                   
                                                                ...prevState.pojazd, 
                                                                wyposazenie: {
                                                                    ...prevState.pojazd.wyposazenie,
                                                                    inne: !this.state.pojazd.wyposazenie.inne
                                                                }
                                                            }
                                                        }))
                                                    }} />} label="Inne" />
                                                </FormGroup>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button color="secondary" variant="outlined" type="submit">
                                                    Dalej
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                )}


                {this.state.wiecej && (
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

                                    <Table>
                                        <TableHead>
                                            <TableRow style={{ backgroundColor: grey[500] }}>
                                                <TableCell>id</TableCell>
                                                <TableCell>Marka</TableCell>
                                                <TableCell>Model</TableCell>
                                                <TableCell>VIN</TableCell>
                                                <TableCell>Pochodzenie</TableCell>
                                                <TableCell>Cena</TableCell>
                                                <TableCell>Rodzaj paliwa</TableCell>
                                                <TableCell>Typ nadwozia</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow style={{ backgroundColor: grey[300] }}>

                                                <TableCell>{this.state.wiecejPojazd.id}</TableCell>
                                                <TableCell>{this.state.wiecejPojazd.marka}</TableCell>
                                                <TableCell>{this.state.wiecejPojazd.model}</TableCell>
                                                <TableCell>{this.state.wiecejPojazd.vin}</TableCell>
                                                <TableCell>{this.state.wiecejPojazd.pochodzenie}</TableCell>
                                                <TableCell>{this.state.wiecejPojazd.cena}</TableCell>

                                                {this.state.wiecejPojazd.paliwo.benzyna && (<TableCell>benzyna</TableCell>)}
                                                {this.state.wiecejPojazd.paliwo.diesel && (<TableCell>diesel</TableCell>)}

                                                {this.state.wiecejPojazd.rodzaj.sedan && (<TableCell>sedan</TableCell>)}
                                                {this.state.wiecejPojazd.rodzaj.kombi && (<TableCell>kombi</TableCell>)}
                                                {this.state.wiecejPojazd.rodzaj.hatchback && (<TableCell>hatchback</TableCell>)}
                                                {this.state.wiecejPojazd.rodzaj.van && (<TableCell>van</TableCell>)}

                                            </TableRow>
                                            <TableRow>
                                                <TableCell colSpan={8}>
                                                    <Typography variant="body1">
                                                        Uszkodzenia
                                                    </Typography>
                                                    <Table>
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell>Lakier</TableCell>
                                                                <TableCell>Karoseria</TableCell>
                                                                <TableCell>Zawieszenie</TableCell>
                                                                <TableCell>Silnik</TableCell>
                                                                <TableCell>Wnętrze</TableCell>
                                                                <TableCell>Zarejestrowany</TableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            <TableRow>
                                                                <TableCell>{this.state.wiecejPojazd.stan.uszklakier ? "+" : "-"}</TableCell>
                                                                <TableCell>{this.state.wiecejPojazd.stan.uszkkaroseria ? "+" : "-"}</TableCell>
                                                                <TableCell>{this.state.wiecejPojazd.stan.uszkzawieszenie ? "+" : "-"}</TableCell>
                                                                <TableCell>{this.state.wiecejPojazd.stan.uszksilnik ? "+" : "-"}</TableCell>
                                                                <TableCell>{this.state.wiecejPojazd.stan.uszkwnetrze ? "+" : "-"}</TableCell>
                                                                <TableCell>{this.state.wiecejPojazd.stan.zarejestrowany ? "+" : "-"}</TableCell>
                                                            </TableRow>
                                                        </TableBody>
                                                    </Table>
                                                    <Typography variant="body1">
                                                        Wyposażenie
                                                    </Typography>
                                                    <Table>
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell>ABS</TableCell>
                                                                <TableCell>ESP</TableCell>
                                                                <TableCell>Klim.</TableCell>
                                                                <TableCell>Elek. szyby</TableCell>
                                                                <TableCell>Skóra</TableCell>
                                                                <TableCell>Grza. fot.</TableCell>
                                                                <TableCell>Wsp. kier.</TableCell>
                                                                <TableCell>Czuj. park.</TableCell>
                                                                <TableCell>Inne</TableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            <TableRow>
                                                                <TableCell>{this.state.wiecejPojazd.wyposazenie.abs ? "+" : "-"}</TableCell>
                                                                <TableCell>{this.state.wiecejPojazd.wyposazenie.esp ? "+" : "-"}</TableCell>
                                                                <TableCell>{this.state.wiecejPojazd.wyposazenie.klimatyzacja ? "+" : "-"}</TableCell>
                                                                <TableCell>{this.state.wiecejPojazd.wyposazenie.elekszyby ? "+" : "-"}</TableCell>
                                                                <TableCell>{this.state.wiecejPojazd.wyposazenie.skora ? "+" : "-"}</TableCell>
                                                                <TableCell>{this.state.wiecejPojazd.wyposazenie.grzanefotele ? "+" : "-"}</TableCell>
                                                                <TableCell>{this.state.wiecejPojazd.wyposazenie.wspomaganiekier ? "+" : "-"}</TableCell>
                                                                <TableCell>{this.state.wiecejPojazd.wyposazenie.czujnikipark ? "+" : "-"}</TableCell>
                                                                <TableCell>{this.state.wiecejPojazd.wyposazenie.inne ? "+" : "-"}</TableCell>
                                                            </TableRow>
                                                        </TableBody>
                                                    </Table>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                )}
            </div>
        )
    }
}
