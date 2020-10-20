import { AccordionDetails, Typography } from '@material-ui/core';
import React from 'react';
import CustomAccordion from '../../components/accordion';
import SideBar from '../../components/sidebar';
import styles from '../../styles/Dealers.module.css';

const DealerSideBar = (props) => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebartop}>
                <div>Filters</div>
                <div className={styles.clearfilter}>Clear filters</div>
            </div>
            <SideBar>
                <CustomAccordion heading="Location" >
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </CustomAccordion>
                <CustomAccordion heading="Crop Type" >
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </CustomAccordion>
                <CustomAccordion heading="Quantity" >
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </CustomAccordion>
            </SideBar>
        </div>
    );
};

export default DealerSideBar;