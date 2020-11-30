import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  favIcon: {
    color: '#eb0029',
  },
}));

interface props {
  tags:any,
}

export default function Sidebar(props: props) {
  const classes = useStyles();
  const { tags } = props;

  return (
    <Grid item xs={12} md={4}>
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Tags
      </Typography>
      {tags.map((tag) => (
        <Typography display="block" variant="body1" key={tag}>
          {tag.name}
        </Typography>
      ))}
    </Grid>
  );
}