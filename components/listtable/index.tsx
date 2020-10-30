import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Launch, SettingsApplications, SettingsApplicationsOutlined } from '@material-ui/icons';

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

function Row(props: { row }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.price}</TableCell>
                <TableCell align="left">{row.quantity}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">{row.bids}</TableCell>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        <Launch />
                    </IconButton>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const CollapsibleTable = (props) => {
    useEffect(() => {
        if(!props.firstTime){
            props.refresh();
        }
        else{
            props.setFirstTime();
        }
    }, []);
    
    return (
        <TableContainer>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        {
                            props.headers.map(header => {
                                return <TableCell key={header}>{header}</TableCell>
                            })
                        }
                        <TableCell key="empty" />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((row) => (
                        <Row key={row._id} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default React.memo(CollapsibleTable);