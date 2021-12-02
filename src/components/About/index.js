import React from 'react'
import { Typography } from '@material-ui/core'

function index() {
    return (
        <p>
            <h2>Is this Official website?</h2>
            <Typography>No. This is a website that aggregate any Vietnam Covid-19 news from reliable sources.</Typography>
            <h2>References</h2>
            <Typography >
                [1] World Health Organization:      
                <a href="who.int"> Link</a>
        </Typography>
           <Typography >
                [2] Vietnam Ministry of Health: 
                <a href="https://covid19.gov.vn/"> Link</a>
        </Typography>
        <Typography >
                [3] Vietnam Vaccination Portal:
                <a href="https://tiemchungcovid19.gov.vn/portal"> Link</a>
        </Typography>
        <Typography >
                [4] Vnexpress:
                <a href="https://vnexpress.net/"> Link</a>
        </Typography>
        </p>
    )
}

export default index
