import React,{useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';



export default function Faqs () {

    

    const [faqs,setFaqs] = useState([])
    const [newQuestion,setNewQuestion] = useState('')
    const [answer,setAnswer] = useState('Sample answer');
    const [showAnswer,setShowAnswer] = useState(false)
    const [tempState,setTempState] = useState(true)
    const [ansNumber,setAnsNumber] = useState(-1)
    

    const currentQuestion = (event) => {
        setNewQuestion(event.target.value)
    }

    const addQuestion = () => {
        let faqarr = faqs;
        let messageArray = {question: 'Q. '+newQuestion, answer: ''}
        let messageState = faqarr.unshift(messageArray);
        setFaqs(faqarr)
        console.log(faqarr)
        setTempState(!tempState)
      
    }

    const addAnswer = (event,props) => {
        setAnswer(event.target.value)
        setAnsNumber(props.i)
    }
    const emptyTextField = (event) =>{
        event.target.value=''
        setAnswer('')
    }

    const showAnswerHandler = (props) => {

        if(props.i === ansNumber){
            
            setShowAnswer(true)
            faqs[props.i].answer = 'A. '+ answer
            console.log(faqs)
            setTempState(!tempState)
            setAnswer('')
        }
        
     
    }


    let faqarray = (
        <List style={{textAlign:'center'}}>
            
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


                                {faq.answer === ''
                                
                                ? 
                                <div >
                                    <div>
                                        <TextField
                                            variant = "outlined"
                                            color="primary"
                                            onChange = {(event)=>addAnswer(event,{i})}
                                            onFocus = {(event)=>emptyTextField(event)}
                                            style={{marginTop:'5'}}
                                        >
                                        </TextField>
                                    </div>
                                    
                                    <div >
                                        <Button
                                        variant = "contained"
                                        color = "secondary"
                                        onClick = {() => showAnswerHandler({i})}
                                      
                                        >
                                            Add answer
                                        </Button>
                                    </div>
                                   
                                    
                                </div>

                                :null

                                }   

                              

                              
                            </ListItem>

             
                

                }
                
                )

            }


        </List> 
    );
   

    return (
        <div>
            <div >
                <TextField variant="filled" onChange ={(event) => currentQuestion(event)} onFocus = {(event)=>emptyTextField(event)}
                            style={{margin: "5px"}}
                />
                <Button
                    variant="contained"
                    color="secondary"
                    onClick = {addQuestion}
                    style={{margin: "10px"}}
                >
                    Ask Question
                </Button>
                <div>
                    {faqarray}
                </div>
               
            </div>   
    </div>
    );

}


