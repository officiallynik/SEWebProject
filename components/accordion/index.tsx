import React, { ReactNode } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      alignItems: 'center'
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }),
);

interface props {
  heading: string,
  children: any
}

const CustomAccordion = (props: props) => {
  const classes = useStyles();

  return (
      <Accordion style={{borderRadius: "0px", boxShadow: "0px 2px 1px -1px rgba(0, 0, 0, 0.2)", backgroundColor:"rgba(0,0,0,0)"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{props.heading}</Typography>
        </AccordionSummary>
        <div style={{marginBottom: "20px", display: "flex", justifyContent: "center"}}>
          {props.children}
        </div>
      </Accordion>
  );
}

export default CustomAccordion;