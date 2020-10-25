import { Button, Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import React from 'react';
import CustomAccordion from '../../components/accordion';
import ThreeLayout from '../../components/threelayout';

import styles from '../../styles/Dealer.module.css';

const Farmers = () => {
    
    const topbar = (
        <div>
            topbar
        </div>
    );

    const sidebar = (
        <div>
            <CustomAccordion heading="Location">
                <TextField id="outlined-basic" label="Search by pincode" variant="outlined" fullWidth />
            </CustomAccordion>
            <CustomAccordion heading="Crop Type">
                <div className={styles.croptypeopts}>
                    {
                        ["All", "Kharif", "Rabi", "Vegetable", "Herbal", "Fruit/Flower"].map((cropType: string) => {
                            return (
                                <FormControlLabel
                                    key={cropType}
                                    control={
                                    <Checkbox
                                        name="checkedB"
                                        color="primary"
                                    />
                                    }
                                    label={cropType}
                                />
                            );
                        })
                    }
                    
                </div>
            </CustomAccordion>
            <CustomAccordion heading="Crop Variety">
                <div className={styles.croptypeopts}>
                    {
                        ["All", "Kharif", "Rabi", "Vegetable", "Herbal", "Fruit/Flower"].map((cropType: string) => {
                            return (
                                <FormControlLabel
                                    key={cropType}
                                    control={
                                    <Checkbox
                                        name="checkedB"
                                        color="primary"
                                    />
                                    }
                                    label={cropType}
                                />
                            );
                        })
                    }
                    
                </div>
            </CustomAccordion>
            <CustomAccordion heading="Quantity">
                <div className={styles.priceopts}>
                    <TextField id="outlined-basic" label="Min. (Kgs)" variant="outlined" style={{width: "90%"}} />
                    <TextField id="outlined-basic" label="Max. (Kgs)" variant="outlined" style={{width: "90%"}} />
                </div>
            </CustomAccordion>
            <CustomAccordion heading="Price per Quintal">
                <div className={styles.priceopts}>
                    <TextField id="outlined-basic" label="Min. Price" variant="outlined" style={{width: "90%"}} />
                    <TextField id="outlined-basic" label="Max. Price" variant="outlined" style={{width: "90%"}} />
                </div>
            </CustomAccordion>
            <div style={{height: "50px"}}></div>

            <div className={styles.applybtn}>
                <Button variant="contained" fullWidth style={{backgroundColor: "#5cb85c"}}>
                    Apply Changes
                </Button>
            </div>
        </div>
    );

    const mainsection = (
        <>
            {/* <CropCard />           */}
        </>
    );
    
    return (
        <ThreeLayout 
            topbar={topbar}
            sidebar={sidebar}
            sidebarOpt="Clear Filters"
            sidebarClose="Close Filters"
            mainsection={mainsection}
        />
    );
};

export default Farmers;