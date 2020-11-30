import { Button, Grid } from '@material-ui/core';
import React from 'react';

const EShops = () => {
    return (
        <div>
            <h2 style={{textAlign: "center"}}>
                Shop From
            </h2>
            <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                <div style={{width: "70%"}}>
                    <Grid container spacing={10}>
                        <Grid item sm={12} md={4}>
                            <a href="https://www.farmersstop.com/">
                                <Button style={{display: "flex", flexDirection: "row"}}
                                    
                                >
                                    <img src="https://cdn.shopify.com/s/files/1/0920/8638/t/8/assets/logo.png?v=2126616526635853255" />
                                </Button>
                            </a>
                        </Grid>
                        <Grid item sm={12} md={4}>
                            <a href="https://farmkart.com/home/">
                                <Button style={{display: "flex", flexDirection: "row", background: "rgba(0,0,0,0.5)"}}
                                    
                                >
                                    <img src="https://farmkart.com/assets/images/Farmkart-Logo.svg" />
                                </Button>
                            </a>
                        </Grid>
                        <Grid item sm={12} md={4}>
                            <a href="https://www.bighaat.com/">
                                <Button style={{display: "flex", flexDirection: "row"}}
                                    
                                >
                                    <img src="https://cdn.shopify.com/s/files/1/0722/2059/t/55/assets/logo.png?v=8028297826443046689" />
                                </Button>
                            </a>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <h4 style={{textAlign: "center"}}>
                Building a api to scrap data from eshops on search request, and comparing between products of different types on different
                websites takes time and effort, we will add this feature if this project is continued. Thanks for your patience!!!
            </h4>
        </div>
    );
};

export default EShops;