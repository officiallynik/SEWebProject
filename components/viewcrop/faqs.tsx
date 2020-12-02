import { Button, CircularProgress, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Axios from '../../helpers/axios';
import { notifyAction } from '../../store/actions/notifyAction';

const Faqs = (props) => {

    const [loading, setLoading] = useState(false);
    const [faqs, setFaqs] = useState([]);

    const [answering, setAnswering] = useState(null);
    const [answer, setAnswer] = useState("");

    // console.log("[faqs]", props.refresh);
    useEffect(() => {
        const data = props.faqs.map(faq => {
            return {
                id: faq._id,
                question: faq.question,
                answer: faq.answer
            }
        });

        setFaqs(data);
    }, []);

    const handleAnswerFaq = () => {
        setLoading(true);
        Axios.post(`/crops/answer/${props.cropId}/${answering}`, {
            answer: answer
        }, {
            headers: {
                'Authorization': `Bearer ${props.token}`
            }
        })
        .then(res => {
            // console.log(res);
            setAnswering(null);
            setAnswer("");
            props.refresh();
            props.dispatchNotify("Successfully answered question", 3, "success");
        })
        .catch(err => {
            // console.log(err);
            props.dispatchNotify("Failed answering, please try again later", 3, "error");
        })
        .finally(() => {
            setLoading(false);
        })
    }

    return (
        <div style={{ overflow: "auto", maxHeight: "400px", height: "auto" }}>

            {faqs.length === 0? <div style={{padding: "10px"}}>No Questions Asked</div>:
            
            <div style={{padding: "10px", overflow: "auto"}}>
                {!loading?
                faqs.map(faq => {
                    return (
                        <div key={faq.id} style={{margin: "5px"}}>
                            <div>{"Q: " + faq.question}</div>
                            {
                                faq.answer? <div>{"A: " + faq.answer}</div>:
                                faq.id === answering? 
                                <div style={{width: "100%", marginTop: "2px"}}>
                                    <TextField 
                                        variant="outlined"
                                        label="Answer"
                                        value={answer}
                                        fullWidth
                                        onChange={e => setAnswer(e.target.value)}
                                    />
                                    <Button style={{backgroundColor: "lightgreen", fontSize: "12px", marginTop: "5px", padding: "2px"}}
                                        onClick={handleAnswerFaq}
                                    >
                                        Submit
                                    </Button>
                                </div>:
                                <Button
                                    variant="outlined"
                                    style={{backgroundColor: "lightblue", fontSize: "12px", padding: "2px"}}
                                    onClick={() => {
                                        setAnswering(faq.id); 
                                        setAnswer("");
                                    }}
                                >Answer</Button>
                            }
                        </div>
                    );
                }):
                <div style={{display: "flex", justifyContent: "center", marginTop: "10px"}}>
                    <CircularProgress />
                </div>
                }
            </div>
            }
        </div>
    );
};

const mapStateToProps = ({ authReducer }) => {
    return {
        token: authReducer.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchNotify: (msg: string, exp: number, notifyType: string) => dispatch(notifyAction(msg, exp, notifyType)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Faqs);