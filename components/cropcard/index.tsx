import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button, CircularProgress } from "@material-ui/core";
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import Modal from 'react-modal';
import DetailCropCard from '../cropcard/detailcropcard'
import AllBids from '../cropcard/viewbidscard'
import BidActions from '../cropcard/bidaction'

import { connect } from 'react-redux';
import { notifyAction } from '../../store/actions/notifyAction';

const useStyles = makeStyles({
	card: {
		// maxWidth: 250,
		//textAlign: "center",
		backgroundColor: "white"
	},
	cropPhoto: {
		width: '100%',
		height: 130,
	},
	cardContent: {
		textAlign: 'center',
		// paddingBottom:'0px'
	},
	text: {
		fontFamily: "Monserrat",
		fontWeight: "bold",
		fontSize: 18,
		textAlign: 'center'
	},
	textInfo: {
		fontFamily: "Monserrat",
		fontSize: 12,
		paddingBottom: 6,
		textAlign: 'center'
	},
	placeBid: {
		fontFamily: "Montserrat",
		fontSize: 12,
		paddingLeft: 20,
		paddingRight: 20,
		borderRadius: 20,
	},
	cardHead: {
		display: 'flex',
		padding: '6px',
		alignItems: 'center',
	},
	avatar: {
		backgroundColor: red[500],
	},
	modal: {
		backgroundColor: "#E6FBE9",
		maxWidth: 600,
		width: '95%',
		borderRadius: 20,
		//height:'60%',
		margin: 'auto',
		marginTop: '5%',
	},
	test: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},

	modalCards: {
		marginTop: '4%',
		marginLeft: '3%',
		marginRight: '3%',
	},
});

const CropCard = (props) => {
	const classes = useStyles();

	const [modalState, setModalState] = useState(false);

	const openModal = () => {
		if(props.userType !== "dealer"){
			props.dispatchNotification("Only dealers can see all details", 3, "error");
		}else{
			setModalState(true);
		}
	};

	const closeModal = () => {
		setModalState(false);
	};



	return (
		<div>

			<Card className={classes.card} variant="outlined">
				{/* <CardHeader className={classes.cardHead}
					avatar={
						<Avatar aria-label="recipe" className={classes.avatar}>

						</Avatar>
					}
					title="Farmer's name"
					subheader="September 14, 2016"
				/> */}
				<CardMedia>
					<img
						className={classes.cropPhoto}
						src={"https://fathomless-tundra-87077.herokuapp.com/images/" + props.cropData.img}
						alt="loading..."
					></img>
				</CardMedia>
				<CardContent className={classes.cardContent}>
					<div style={{display: "flex", justifyContent:"space-between"}}>
						<Typography variant="h6" className={classes.text}>
							{props.cropData.name}
          				</Typography>
						<Typography variant="h6" className={classes.text}>
							Rs. {props.cropData.price} /Q
          				</Typography>
					</div>
					<div style={{display: "flex", }}>
						<Typography variant="h6" className={classes.text}>
								Quantity: {props.cropData.quantity} Q
						</Typography>
					</div>

					<div style={{display: "flex", width: "100%", justifyContent:"flex-end"}}>
						<Button
							variant="contained"
							color="secondary"
							className={classes.placeBid}
							onClick={openModal}
						>
							Details
						</Button>
					</div>
				</CardContent>
			</Card>

			<Modal isOpen={modalState} onRequestClose={closeModal} className={classes.modal}>

				<div className={classes.test}>
					<div className={classes.modalCards}><DetailCropCard cropData={props.cropData} /></div>
					<div className={classes.modalCards}><AllBids data={props.cropData.biddings} /></div>
				</div>


				<div ><BidActions _id={props.cropData._id} biddings={props.cropData.biddings} /></div>

			</Modal>


		</div>
	);
}

const mapStateToProps = ({ authReducer }) => {
    return {
        token: authReducer.token,
        userType: authReducer.userType
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchNotification: (msg: string, exp: number, notifyType: string) => dispatch(notifyAction(msg, exp, notifyType)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CropCard);