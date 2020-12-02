import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CropCard from '../cropcard';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));

const GridContent = function NestedGrid({ data, refresh }) {
	const classes = useStyles();

	const renderedItems = data.map((item) => {
		return (
			<Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
				<CropCard cropData={item} refresh={refresh} />
			</Grid>
		);
	})

	return (
		<div className={classes.root}>
			<Grid container spacing={2} key={"nested-container"}>
				{renderedItems}
			</Grid>
		</div>
	);
}

export default GridContent