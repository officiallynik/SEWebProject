import { Button, Checkbox, createStyles, fade, FormControlLabel, Grid, InputBase, LinearProgress, makeStyles, TextField, Theme } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import CustomAccordion from '../../components/accordion';
import ThreeLayout from '../../components/threelayout';
import SearchIcon from '@material-ui/icons/Search';

import styles from '../../styles/Dealer.module.css';
import Axios from '../../helpers/axios';
import GridView from '../../components/grid/GridView';
import { connect } from 'react-redux';


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

const Dealers = props => {

    const initialFilters = {
        pincode: null,
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
    const [searchTerm, setSearchTerm] = useState('');
    const [errorCode, setErrorCode] = useState(null);

    const [refresh, setRefresh] = useState(true);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsDone(true);
    //         setCropsData({
    //             "name": "Rice",
    //         })
    //     }, 3000);
    // }, []);

    const handleFilterChange = (val, field) => {
        setFilters((prevState) => ({
            ...prevState,
            [field]: val === 0 || val === ''? null: val
        }))
    }

    const fetchCrops = (type="filter") => {
        setErrorCode(null);
        setCropsData(null);
        let params: any = { term: searchTerm };
        if(type === "filter"){
            params = {}
            for(let k in filters){
                console.log(k)
                if(filters[k]){
                    params[k] = filters[k]
                }
            }
        }
        console.log(params);
        Axios.get(`/crops/${type}`, {
            params: params
        })
        .then(res => {
            // console.log(res.data);
            const data = [] 
            res.data.forEach(item => {
                data.push({
                    name: item.name,
                    price: item.MSP,
                    quantity: item.quantity,
                    bids: item.biddings.length,
                    type: item.type,
                    _id: item._id,
                    biddings: item.biddings,
                    img: item.thumbnail,
                    imgs: item.snapshots,
                    variety: item.variety,
                    pincode: item.pincode,
                    faqs: item.faqs,
                })
            })
            setCropsData(data);
            console.log(data);
        })
        .catch(err => {
            console.log(err);
            setErrorCode(404);
        })
        .finally(() => {
            setIsDone(true);
            setRefresh(false);
            // setRefresh(false);
        })
        // setMyListing(myListings);
        // setIsDone(true);
        // setRefresh(false);
        // setTimeout(() => {
        //     setIsDone(true);
        //     // setErrorCode(400);
        //     setCropsData("data")
        // }, 3000)
    }

    useEffect(() => {
        if(refresh){
            fetchCrops();
        }
    }, [refresh]);
    
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
                        onKeyPress={(e) => {
                            if(e.key === "Enter"){
                                fetchCrops("search")
                            }
                        }}
                        onChange={(e) =>setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );

    const sidebar = (
        <div>
            <CustomAccordion heading="Location">
                <TextField id="outlined-basic" label="Search by pincode" variant="outlined" fullWidth 
                    value={!filters.pincode? '': filters.pincode} 
                    onChange={(e) => {
                        handleFilterChange(+e.target.value, "pincode");
                    }}
                    type="number"
                />
            </CustomAccordion>
            <CustomAccordion heading="Crop Type">
                <div className={styles.croptypeopts}>
                    {
                        ["All", "Kharif", "Rabi", "Vegetable", "Herbal", "Fruit/Flower"].map((cropType: string) => {
                            return (
                                <FormControlLabel
                                    value={10}
                                    key={cropType}
                                    control={
                                    <Checkbox
                                        name="checkedB"
                                        color="primary"
                                        checked={cropType.toLowerCase() === filters.crop_type || 
                                            (cropType.toLowerCase() === "all" && filters.crop_type === null)
                                        }
                                    />
                                    }
                                    label={cropType}
                                    onChange={() => {
                                        setFilters((prevState) => {
                                            return {
                                                ...prevState,
                                                crop_type: cropType.toLowerCase() === "all"? null: cropType.toLowerCase()
                                            }
                                        })
                                    }}
                                />
                            );
                        })
                    }
                    
                </div>
            </CustomAccordion>
            <CustomAccordion heading="Crop Variety">
                {/* <div className={styles.croptypeopts}>
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
                    
                </div> */}
                <TextField id="outlined-basic" label="Crop Variety" variant="outlined" fullWidth 
                    value={!filters.crop_variety? '': filters.crop_variety}
                    onChange={(e) => {
                        handleFilterChange(e.target.value, "crop_variety");
                    }}
                />
            </CustomAccordion>
            <CustomAccordion heading="Quantity">
                <div className={styles.priceopts}>
                    <TextField id="outlined-basic" label="Min. (Q)" variant="outlined" style={{width: "90%"}} 
                        value={!filters.quantity_min? '': filters.quantity_min} 
                        onChange={(e) => {
                            handleFilterChange(+e.target.value, "quantity_min");
                        }}
                        type="number"
                    />
                    <TextField id="outlined-basic" label="Max. (Q)" variant="outlined" style={{width: "90%"}} 
                        value={!filters.quantity_max? '': filters.quantity_max} 
                        onChange={(e) => {
                            handleFilterChange(+e.target.value, "quantity_max");
                        }}
                        type="number"
                    />
                </div>
            </CustomAccordion>
            <CustomAccordion heading="Price per Quintal">
                <div className={styles.priceopts}>
                    <TextField id="outlined-basic" label="Min. Price" variant="outlined" style={{width: "90%"}} 
                        value={!filters.price_min? '': filters.price_min} 
                        onChange={(e) => {
                            handleFilterChange(+e.target.value, "price_min");
                        }}
                        type="number"
                    />
                    <TextField id="outlined-basic" label="Max. Price" variant="outlined" style={{width: "90%"}} 
                        value={!filters.price_max? '': filters.price_max} 
                        onChange={(e) => {
                            handleFilterChange(+e.target.value, "price_max");
                        }}
                        type="number"
                    />
                </div>
            </CustomAccordion>
            <div style={{height: "50px"}}></div>

            <div className={styles.applybtn}>
                <Button variant="contained" fullWidth style={{backgroundColor: "#5cb85c", color: "white"}}
                    onClick={() => {
                        fetchCrops("filter");
                    }}
                >
                    Apply Changes
                </Button>
            </div>
        </div>
    );

    const mainsection = (
        <>
            {
                !cropsData? (!errorCode? <LinearProgress /> :  <div
                    style={{display: "flex", justifyContent: "center"}}
                ><img src="/search_error.png" /></div>) :
                <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <GridView data={cropsData} refresh={() => setRefresh(true)} /> 
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