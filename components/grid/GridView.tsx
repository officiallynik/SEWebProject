import React from 'react'
import { Grid } from '@material-ui/core'
import GridContent from './GridContent'

const GridView = (props) => {
    return (
        <Grid 
            container
            key={"top-grid"}
        >
            <GridContent data={props.data} key={"grid-content"} refresh={props.refresh} />
        </Grid>
    );
}

export default GridView