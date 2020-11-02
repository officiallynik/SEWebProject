import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Card, CardContent } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 275,
		margin: "10px 0"
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
}));

export default function Main(props) {
	const classes = useStyles();
	const { posts, title } = props;

	return (
		<Grid item xs={12} md={8}>
			<Typography variant="h6" gutterBottom>
				{title}
			</Typography>
			<Divider />
			<Card className={classes.root}>
				<CardContent>
					<Typography className={classes.title} color="textSecondary" gutterBottom>
						Get Exicted Farmers
         			 </Typography>
					<Typography variant="h5" component="h2">
						Sell your crops
          			</Typography>
					<Typography className={classes.pos} color="textSecondary">
						At best price
          			</Typography>
					<Typography variant="body2" component="p">
						SignUp or Login as farmer
             			<br />
						{'Click "Sell Crops"'}
					</Typography>
				</CardContent>
			</Card>
			<Card className={classes.root}>
				<CardContent>
					<Typography className={classes.title} color="textSecondary" gutterBottom>
						Dealers' No Hassle
         			 </Typography>
					<Typography variant="h5" component="h2">
						Buy directly from producers
          			</Typography>
					<Typography className={classes.pos} color="textSecondary">
						Avoid middlemen
          			</Typography>
					<Typography variant="body2" component="p">
						SignUp or Login as dealer
             			<br />
						{'Click "Find Crops"'}
					</Typography>
				</CardContent>
			</Card>
			<Card className={classes.root}>
				<CardContent>
					<Typography className={classes.title} color="textSecondary" gutterBottom>
						Buy everything necessary
         			 </Typography>
					<Typography variant="h5" component="h2">
						E-Shops
          			</Typography>
					<Typography className={classes.pos} color="textSecondary">
						With price comparison
          			</Typography>
					<Typography variant="body2" component="p">
						SignUp or Login as farmer
             			<br />
						{'Click "E-Shop"'}
					</Typography>
				</CardContent>
			</Card>
			<Card className={classes.root}>
				<CardContent>
					<Typography className={classes.title} color="textSecondary" gutterBottom>
						Blow your minds
         			 </Typography>
					<Typography variant="h5" component="h2">
						Blogs / FAQs and Chat with Experts
          			</Typography>
					<Typography className={classes.pos} color="textSecondary">
						For everybody concerned with agriculture
          			</Typography>
					<Typography variant="body2" component="p">
						Coming Soon
					</Typography>
				</CardContent>
			</Card>
			<Card className={classes.root}>
				<CardContent>
					<Typography className={classes.title} color="textSecondary" gutterBottom>
						Get Help
         			 </Typography>
					<Typography variant="h5" component="h2">
						Loan / Insurance 
          			</Typography>
					<Typography className={classes.pos} color="textSecondary">
						Making getting loans and insurance little easier
          			</Typography>
					<Typography variant="body2" component="p">
						Coming Soon
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
}