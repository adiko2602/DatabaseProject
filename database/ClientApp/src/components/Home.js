import { Grid, Typography } from '@mui/material'
import { Component } from 'react'

export default class Home extends Component {
  render() {
    return (

      <div style={{ margin: "20px" }}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          style={{ minHeight: '100vh' }}
        >

          <Grid item xs={3}>
            <Typography variant="h5" align="center">System do zarządzania komisem samochodowym.</Typography>
            <Typography variant="body1" style={{marginTop: "20px"}}>System umożliwia dodawanie oraz przeglądanie pojazdów, klientów, transakcji, sprzedawców</Typography>
          </Grid>
        </Grid>
        Umożliwia dodawanie klientów oraz ich przegląd
      </div>
    )
  }
}
