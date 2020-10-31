import { Button, Checkbox, createStyles, fade, FormControlLabel, Grid, InputBase, LinearProgress, makeStyles, TextField, Theme } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import CustomAccordion from '../../components/accordion';
import ThreeLayout from '../../components/threelayout';
import SearchIcon from '@material-ui/icons/Search';

import styles from '../../styles/Dealer.module.css';
import CustomModal from '../../components/modal';
import Axios from '../../helpers/axios';
import CropCard from '../../components/cropcard';
import GridView from '../../components/grid/GridView';

const useStyles = makeStyles((theme: Theme) => createStyles({
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

    const initialFilters = {
        location: null,
        crop_type: null,
        crop_variety: null,
        price_min: null,
        price_max: null,
        quantity_min: null,
        quantity_max: null,
    }

    const classes = useStyles();
    const [filters, setFilters] = useState(initialFilters);
    const [cropsData, setCropsData] = useState(null);
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsDone(true);
            setCropsData({
                "name": "Rice",
            })
        }, 3000);
    }, []);
    
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
                <TextField id="outlined-basic" label="Search by pincode" variant="outlined" fullWidth 
                    value={filters.location} onChange={(e) =>
                        setFilters((prevState) => {
                            return {
                                ...prevState,
                                location: e.currentTarget.value
                            }
                        })
                    }
                    type="number"
                />
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
            {
                !cropsData? <LinearProgress />:
                <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <GridView /> 
                </div>
            }
        </>
    );
    
    return (
        !isDone? <LinearProgress /> :
        <ThreeLayout 
            topbar={topbar}
            sidebar={sidebar}
            sidebarOpt="Clear Filters"
            handleSideBarOpt={() => setFilters(initialFilters)}
            sidebarClose="Close Filters"
            sidebarname="Filters"
            mainsection={mainsection}
        />
        // <GridView />
    );
};

export default Dealers;