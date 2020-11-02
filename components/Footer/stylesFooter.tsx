import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    footer:{
        width:'100%',
        //minWidth:800,
    },
    container1:{
        display:'flex',
        justifyContent:'space-around',
        backgroundColor:'#2D7E2C',
        color:'#ffffff',
        flexWrap:'wrap',
    },
    container2:{
        display:'flex',
        backgroundColor:'#000000',
        color:'#ffffff'
    },
    
    container1Div:{
        textAlign:'center',
        //border:'1px #ccc solid',
        padding:'10px',
        flexBasis:'25%'
        
    },
    container1Div3:{
        display:'flex',
        textAlign:'center',
        flexWrap:'wrap'
    },
    table:{
        width:'100%',
        textAlign:'center',
        marginBottom:10,
    },
    txtPlaceBid:{
        width:'90%',
        backgroundColor:'#ffffff',
        margin:6,
    },
    btnSend:{
        display:'flex',
        justifyContent:'center'
    },
    btnPlaceBid:{
        fontFamily: "Montserrat",
        fontSize: 15,
        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 40,
        margin:'auto',
        fontWeight:'bold',
        backgroundColor:'#000000',
        marginLeft:20,
        height:30,
    },
    container2p:{
        marginLeft: 30,
        flex:1
    },
    container2p3:{
        flex:5,
        textAlign:'right',
        marginRight:'1%',
    },
    a:{
        textDecoration:'none',
        color:'#ffffff'
    }
    

});

export default useStyles;