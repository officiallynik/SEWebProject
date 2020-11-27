import React, { useEffect, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs';
import styles from '../../styles/Modal.module.css';
import { HighlightOff } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		modal: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		},
		paper: {
			backgroundColor: theme.palette.background.paper,
			boxShadow: theme.shadows[5],
			padding: theme.spacing(2, 4, 3),
		},
	}),
);

interface FadeProps {
	children?: React.ReactElement;
	in: boolean;
	onEnter?: () => {};
	onExited?: () => {};
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
	const { in: open, children, onEnter, onExited, ...other } = props;
	const style = useSpring({
		from: { opacity: 0 },
		to: { opacity: open ? 1 : 0 },
		onStart: () => {
			if (open && onEnter) {
				onEnter();
			}
		},
		onRest: () => {
			if (!open && onExited) {
				onExited();
			}
		},
	});

	return (
		<animated.div ref={ref} style={style} {...other}>
			{children}
		</animated.div>
	);
});

const CustomModal = (props) => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		if(props.onCloseModal){
			props.onCloseModal();
		}
		setOpen(false);
	};

	const handleCloseModal = (exp) => {
		setTimeout(() => {
			handleClose();
		}, exp);
	}

	if(!props.isLoading && !!props.token){
		handleCloseModal(props.exp);
	}

	return (
		<div>
			<div onClick={handleOpen}>
				{props.modalBtn}
			</div>
			<Modal
				aria-labelledby="spring-modal-title"
				aria-describedby="spring-modal-description"
				className={classes.modal}
				open={open}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<div className={styles.modal}>
						<div
							className={styles.closebtn}
							onClick={handleClose}
							style={!props.isLoading? {}:{display: "none"}}
						>
							<HighlightOff style={{width: "30px", height: "30px"}} />
						</div>
						{props.children}
					</div>
				</Fade>
			</Modal>
		</div>
	);
}

export default CustomModal;