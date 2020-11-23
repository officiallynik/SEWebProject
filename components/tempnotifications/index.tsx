import React,{Component} from "react";
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CheckSharp from '@material-ui/icons/CheckSharp'
import LocalMall from '@material-ui/icons/LocalMall'
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import { DialogContent, Toolbar } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import DialogTitle from '@material-ui/core/DialogTitle';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListSubheader from '@material-ui/core/ListSubheader';


class Notifications extends Component {

    state = {
        notifications : 0, //for notification badge number
        open : false,      //for dialog box
        messages : [],  //  [{type:'',msg:'',url:''}]  
    }

    handleOpen = () => {
        this.setState({open:true});
        
    };

    handleClose = () => {
        this.setState({open:false});
        
       
    };

    // addNotification = () => {
    //     let m = this.state.messages;
    //     let type = ['Bid Placed','Bid Accepted']
    //     let random = Math.floor(Math.random() * 2);
    //     let messageArray = {type: type[random], msg: 'Lorem Ipsum Dolor Sit Amet'}
    //     let messageState = m.unshift(messageArray);
    //     this.setState({notifications: this.state.notifications + 1, received: true, messages: m});
    //     console.log(m)
    // }

    notificationOnClicked = (index) => {

        // deleting it
        const msgs = [...this.state.messages]
        msgs.splice(index,1);
        this.setState({messages: msgs})
        this.state.notifications-=1

        //going to url pending

    }

    render(){
        return (
            <div>
                {/* <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" >
                            Notifications
                        </Typography>
                        <IconButton edge="end" color="inherit" aria-label="notifications" onClick={this.handleOpen}>
                            <Badge badgeContent={this.state.notifications} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>

                 <div>
                   
                    <h1>Simulate new notifications:</h1>
                    <Button variant="contained" onClick={this.addNotification}>
                        Add Notification
                    </Button>
                </div> */}

                <Dialog
                    title = "Notifications"
                    open = {this.state.open}
                    onClose = {this.handleClose}
                    fullWidth  = {true}
                    scroll = "body"
                >
                    <DialogTitle id="alert-dialog-title">{"Notifications"}</DialogTitle>
                    <DialogContent>
                        <List>
                        <ListSubheader>
                            {this.state.notifications} unread notifications
                        </ListSubheader>
                        {this.state.messages.length === 0
                        ? <ListItem>No new notifications</ListItem>

                        :
                            this.state.messages.map((message,i) =>{

                                let isRead = {backgroundColor: 'rgba(119, 119, 119, 0.15)', padding:'20px 50px'};

                                if(message.type === 'Bid Placed') return <ListItem button onClick={() => this.notificationOnClicked(i)}>
                                                                            <ListItemAvatar>
                                                                                <Avatar><LocalMall/></Avatar>
                                                                            </ListItemAvatar>
                                                                            <ListItemText 
                                                                                style={isRead}  
                                                                                key={i} 
                                                                                primary = {message.type}
                                                                                secondary= {message.msg}
                                                                            />
                                                                        </ListItem>
                                else if(message.type === 'Bid Accepted') return <ListItem button onClick={() => this.notificationOnClicked(i)}>
                                                                                    <ListItemAvatar>
                                                                                        <Avatar><CheckSharp /></Avatar>
                                                                                    </ListItemAvatar>
                                                                                    <ListItemText 
                                                                                        style={isRead}  
                                                                                        key={i} 
                                                                                        primary = {message.type}
                                                                                        secondary= {message.msg}
                                                                                    />
                                                                                </ListItem>
                              
                        
                            }
                            
                            )
                    
                        }

                       
                        </List>

                    </DialogContent>
                   

                </Dialog>
            </div>
        )
    }
}       

export default Notifications;
