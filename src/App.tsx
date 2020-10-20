import React , {StrictMode, useState} from 'react';
import Modal from '@material-ui/core/Modal';
import { Button, colors, withStyles, withTheme, makeStyles } from '@material-ui/core';
import '../src/App.css'
import LoginForm from '../src/components/loginForm';


const styles = makeStyles({
  buttonStyles: {
    color: 'white',
    backgroundColor: 'red',
    '&:hover': {
      color: 'red',
      backgroundColor: 'white',
      border: '1px solid red',
    }
  }
});

function App() {

  const [open , setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

  const body = (
    <div style={{backgroundColor:"white",height:"100px",textAlign:"center"}} className="button">
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
    </div>
  );

  const ColorButton = withStyles(() => ({
    root: {
      color: "#0",
      backgroundColor: "#eb0029",
      '&:hover': {
        color: "#eb0029",
        backgroundColor: "#0",
      },
    },
  }))(Button);

  const classes = styles();

  return (
    <div style={{backgroundColor:"lightblue",height:"100vh",verticalAlign:"middle",textAlign:"center"}}>
      <div className="button">
      <Button className={classes.buttonStyles} onClick={handleOpen} variant="contained">Login</Button>
      <Modal
      open = {open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      >
        <LoginForm/>
      </Modal>
      </div>
    </div>
  );
}
export default App;