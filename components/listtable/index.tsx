import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Launch } from '@material-ui/icons';
import CustomModal from '../modal';
import FarmerView from '../viewcrop/farmerView';
import Link from 'next/link';
import DealerView from '../viewcrop/dealerView';

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

function Row(props: { row, refresh, userType }) {
    const { row, refresh, userType } = props;
    const classes = useRowStyles();

    console.log("[userType]", userType);

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                {row.isExpert?
                <> 
                    <TableCell align="left">{row.title}</TableCell>
                    <TableCell align="left">{row.lastModified}</TableCell>
                    <TableCell>
                        <Link href={`/blogs/${row._id}`}>
                            <IconButton aria-label="expand row" size="small">
                                <Launch />
                            </IconButton>
                        </Link>
                    </TableCell>
                </>
                :
                <>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.price}</TableCell>
                    <TableCell align="left">{row.quantity}</TableCell>
                    <TableCell align="left">{row.type}</TableCell>
                    <TableCell align="left">{row.bids}</TableCell>
                    <TableCell align="left">{row.myBid}</TableCell>
                    <TableCell>
                        <CustomModal 
                            modalBtn={
                                (
                                    <IconButton aria-label="expand row" size="small">
                                        <Launch />
                                    </IconButton>
                                )
                            }
                        >
                            <div style={{background: "white", borderRadius: "10px"}}>
                                {userType === "farmer"?
                                    <FarmerView data={row} refresh={refresh} userType="farmer" />:
                                    <DealerView data={row} userType="dealer" />
                                }
                            </div>
                        </CustomModal>
                    </TableCell>
                </>
                }
            </TableRow>
        </React.Fragment >
    );
}

const CollapsibleTable = (props) => {
    useEffect(() => {
        props.refresh();

        console.log(props);
    }, []);

    console.log(props.data);

    return (
        <TableContainer>
            {
                props.data.length === 0 ?
                    <div style={{ fontSize: "18px" }}>
                        {props.nodatamsg}
                    </div>
                    :
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
                                <Row key={row._id} row={row} refresh={props.refresh} userType={props.userType} />
                            ))}
                        </TableBody>
                    </Table>
            }
        </TableContainer>
    );
}

export default React.memo(CollapsibleTable);