import { IconButton, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
import { Done } from '@material-ui/icons';
import React from 'react';

const BidInfo = () => {
    return (
        <div style={{ overflow: "auto", height: "400px" }}>
            <div style={{display: "flex", overflow: "auto", height: "150px"}}>
                <img src="/dummy/ubuntu1.jpg" style={{width: "50%", paddingRight: "5px"}} />
                <img src="/dummy/ubuntu1.jpg" style={{width: "50%", paddingRight: "5px"}} />
                <img src="/dummy/ubuntu1.jpg" style={{width: "50%", paddingRight: "5px"}} />
                <img src="/dummy/ubuntu1.jpg" style={{width: "50%", paddingRight: "5px"}} />
                <img src="/dummy/ubuntu1.jpg" style={{width: "50%", paddingRight: "5px"}} />
                <img src="/dummy/ubuntu1.jpg" style={{width: "50%", paddingRight: "5px"}} />
                <img src="/dummy/ubuntu1.jpg" style={{width: "50%", paddingRight: "5px"}} />
                <img src="/dummy/ubuntu1.jpg" style={{width: "50%", paddingRight: "5px"}} />
                <img src="/dummy/ubuntu1.jpg" style={{width: "50%", paddingRight: "5px"}} />
                <img src="/dummy/ubuntu1.jpg" style={{width: "50%", paddingRight: "5px"}} />
                <img src="/dummy/ubuntu1.jpg" style={{width: "50%"}} />
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