import React,{useEffect, useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import Axios from '../../helpers/axios';
import { connect } from 'react-redux';
import { notifyAction } from '../../store/actions/notifyAction';
import { CircularProgress } from '@material-ui/core';



const Faqs = (props) => {

    

    const [faqs,setFaqs] = useState([])
    const [newQuestion,setNewQuestion] = useState('')
    const [answer,setAnswer] = useState('Sample answer');
    const [showAnswer,setShowAnswer] = useState(false)
    const [tempState,setTempState] = useState(true)
    const [ansNumber,setAnsNumber] = useState(-1)

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const data = props.faqs.map((faq) => {
            return {question: 'Q. '+ faq.question, answer: (!faq.answer? "A: Pending...": faq.answer)}
        });

        setFaqs(data);
    }, []);
    

    const currentQuestion = (event) => {
        setNewQuestion(event.target.value)
    }

    const addQuestion = () => {
        setLoading(true);
        let faqarr = faqs;
        let messageArray = {question: 'Q. '+newQuestion, answer: 'A: Pending...'}

        Axios.post(`crops/ask/${props.cropId}`, {
            question: newQuestion
        }, {
            headers: {
                'Authorization': `Bearer ${props.token}`
            }
        })
        .then(res => {
            console.log(res.data);
            faqarr.unshift(messageArray);
            setFaqs(faqarr)
            console.log(faqarr)
            setTempState(!tempState)

            props.dispatchNotification("Successfully added your question", 3, "success");
            props.refresh();
        })
        .catch(err => {
            console.log(err);
            props.dispatchNotification("Something went wrong, please try again later", 3, "error");
        })
        .finally(() => {
            setLoading(false);
        })
    }

    let faqarray = (
        <List style={{textAlign:'center', overflow: "auto"}}>
            
            {faqs.length === 0
            ? <ListItem>No FAQs</ListItem>

            :
                faqs.map((faq,i) =>{

                    return <ListItem key={i} >
                                                            
                                <ListItemText 
                                   
                                    primary = {faq.question}
                                    secondary = {faq.answer}
                                >
                                </ListItemText>
                            </ListItem>

                }
                
                )

            }


        </List> 
    );
   

    return (
        <div style={{overflow: "auto"}}>
            {!loading?
            <div >
                <div style={{display: "flex", justifyContent: "center"}}>
                <TextField variant="outlined" onChange ={(event) => currentQuestion(event)}
                            style={{margin: "5px", backgroundColor: "white"}}
                    label="Question"
                />
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick = {addQuestion}
                    style={{margin: "10px", backgroundColor: "lightgreen"}}
                >
                    Ask Question
                </Button>
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick = {props.closeFaqs}
                    style={{margin: "10px", backgroundColor: "coral", color: "white"}}
                >
                    Close FAQs
                </Button>
                </div>
                <div style={{overflow: "auto"}}>
                    {faqarray}
                </div>
               
            </div>:
            <div style={{display: "flex", justifyContent: "center"}}>
                <CircularProgress />
            </div>
            }  
    </div>
    );

}

const mapStateToProps = ({ authReducer }) => {
    return {
        token: authReducer.token,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchNotification: (msg: string, exp: number, notifyType: string) => dispatch(notifyAction(msg, exp, notifyType)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Faqs);