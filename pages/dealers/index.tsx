import { Button, Checkbox, createStyles, fade, FormControlLabel, InputBase, makeStyles, TextField, Theme } from '@material-ui/core';
import React from 'react';
import CustomAccordion from '../../components/accordion';
import ThreeLayout from '../../components/threelayout';
import SearchIcon from '@material-ui/icons/Search';

import styles from '../../styles/Dealer.module.css';
import CustomModal from '../../components/modal';
import Axios from '../../helpers/axios';
import CropCard from '../../components/cropcardDealer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.black, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.black, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }),
);

const Dealers = () => {

    const classes = useStyles();
    
    const topbar = (
        <div className={styles.topbar}>
            <div className={styles.title}>
                Crops For Sale
            </div>
            <div className={styles.search} style={{width: "250px"}}>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                    <SearchIcon />
                    </div>
                    <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
            </div>
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
                <Button variant="contained" fullWidth style={{backgroundColor: "#5cb85c", color: "white"}}>
                    Apply Changes
                </Button>
            </div>
        </div>
    );

    const mainsection = (
        <>
            {/* <CropCard />           */}
            <div>
                <CropCard />
            </div>
        </>
    );
    
    return (
        <ThreeLayout 
            topbar={topbar}
            sidebar={sidebar}
            sidebarOpt="Clear Filters"
            sidebarClose="Close Filters"
            sidebarname="Filters"
            mainsection={mainsection}
        />
    );
};

Dealers.getInitialProps = async (ctx) => {
    try{
        const res = await Axios.get("/crop/filter");
        return { data: res.data, err: null };
    }
    catch(err) {
        return { error: { status: err.response.status, msg: err.response.statusText }, data: null };
    }
}

export default Dealers;