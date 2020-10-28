import React from 'react'
import { Grid } from '@material-ui/core'
import GridContent from './GridContent'

const GridView = () => {
    return (
        <Grid item container>
            <Grid item xs={0} sm={2} />
            <Grid item xs={12} sm={8}>
                <GridContent/>
            </Grid>
            <Grid item xs={0} sm={2} />
        </Grid>
    );
}

export default GridView