import { IconButton, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
import { Done } from '@material-ui/icons';
import React from 'react';

const BidInfo = (props) => {
    return (
        <div style={{ overflow: "auto", maxHeight: "400px", height: "auto" }}>
            <div style={{display: "flex", overflow: "auto", height: "150px"}}>
                {
                    props.data.imgs.map(img => {
                        <img src={`https://fathomless-tundra-87077.herokuapp.com/images/${img}`} 
                            key={img}
                            style={{width: "50%", paddingRight: "5px"}} 
                        />
                    })
                }
            </div>
            <TableContainer>
            <Table aria-label="collapsible table">
                <TableBody>
                    <TableRow>
                        <TableCell align="left">{"Dealer Name"}</TableCell>
                        <TableCell align="left">{"130"}</TableCell>
                        <TableCell align="left">{"30kg"}</TableCell>
                        <TableCell align="left">{"Pincode"}</TableCell>
                        <TableCell align="left">{"Bangalore, Karnataka"}</TableCell>
                        <TableCell>
                            <IconButton aria-label="expand row" size="small" >
                                <Done />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">{"Dealer Name"}</TableCell>
                        <TableCell align="left">{"130"}</TableCell>
                        <TableCell align="left">{"30kg"}</TableCell>
                        <TableCell align="left">{"Pincode"}</TableCell>
                        <TableCell align="left">{"Bangalore, Karnataka"}</TableCell>
                        <TableCell>
                            <IconButton aria-label="expand row" size="small" >
                                <Done />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">{"Dealer Name"}</TableCell>
                        <TableCell align="left">{"130"}</TableCell>
                        <TableCell align="left">{"30kg"}</TableCell>
                        <TableCell align="left">{"Pincode"}</TableCell>
                        <TableCell align="left">{"Bangalore, Karnataka"}</TableCell>
                        <TableCell>
                            <IconButton aria-label="expand row" size="small" >
                                <Done />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">{"Dealer Name"}</TableCell>
                        <TableCell align="left">{"130"}</TableCell>
                        <TableCell align="left">{"30kg"}</TableCell>
                        <TableCell align="left">{"Pincode"}</TableCell>
                        <TableCell align="left">{"Bangalore, Karnataka"}</TableCell>
                        <TableCell>
                            <IconButton aria-label="expand row" size="small" >
                                <Done />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">{"Dealer Name"}</TableCell>
                        <TableCell align="left">{"130"}</TableCell>
                        <TableCell align="left">{"30kg"}</TableCell>
                        <TableCell align="left">{"Pincode"}</TableCell>
                        <TableCell align="left">{"Bangalore, Karnataka"}</TableCell>
                        <TableCell>
                            <IconButton aria-label="expand row" size="small" >
                                <Done />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">{"Dealer Name"}</TableCell>
                        <TableCell align="left">{"130"}</TableCell>
                        <TableCell align="left">{"30kg"}</TableCell>
                        <TableCell align="left">{"Pincode"}</TableCell>
                        <TableCell align="left">{"Bangalore, Karnataka"}</TableCell>
                        <TableCell>
                            <IconButton aria-label="expand row" size="small" >
                                <Done />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">{"Dealer Name"}</TableCell>
                        <TableCell align="left">{"130"}</TableCell>
                        <TableCell align="left">{"30kg"}</TableCell>
                        <TableCell align="left">{"Pincode"}</TableCell>
                        <TableCell align="left">{"Bangalore, Karnataka"}</TableCell>
                        <TableCell>
                            <IconButton aria-label="expand row" size="small" >
                                <Done />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">{"Dealer Name"}</TableCell>
                        <TableCell align="left">{"130"}</TableCell>
                        <TableCell align="left">{"30kg"}</TableCell>
                        <TableCell align="left">{"Pincode"}</TableCell>
                        <TableCell align="left">{"Bangalore, Karnataka"}</TableCell>
                        <TableCell>
                            <IconButton aria-label="expand row" size="small" >
                                <Done />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">{"Dealer Name"}</TableCell>
                        <TableCell align="left">{"130"}</TableCell>
                        <TableCell align="left">{"30kg"}</TableCell>
                        <TableCell align="left">{"Pincode"}</TableCell>
                        <TableCell align="left">{"Bangalore, Karnataka"}</TableCell>
                        <TableCell>
                            <IconButton aria-label="expand row" size="small" >
                                <Done />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
};

export default BidInfo;