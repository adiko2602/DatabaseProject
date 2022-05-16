import { Component } from 'react'
import { Button, AppBar, Toolbar } from '@mui/material'

export default class Header extends Component {
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Button color="secondary" variant="outlined" href="/">Home</Button>
                        <Button color="secondary" variant="outlined" href="/klient">Klient</Button>
                        <Button color="secondary" variant="outlined" href="/pojazd">Pojazd</Button>
                        <Button color="secondary" variant="outlined" href="/transakcja">Transakcja</Button>
                        <Button color="secondary" variant="outlined" href="/sprzedawca">Sprzedawca</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
