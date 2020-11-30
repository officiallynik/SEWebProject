import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
    },
    commentstitle: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
        color: "#3f50b5",
        fontWeight: "bold",
    },
    sidebarSection: {
        marginTop: theme.spacing(3),
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        fontSize: "15px",
    },
    iconButton: {
        padding: 10,
    },
    commentauthor: {
        paddingLeft: "20px",
        color: "#3f50b5",
        fontWeight: "bold",
    },
    subcommentauthor: {
        paddingLeft: "20px",
        color: "#000000",
        fontWeight: "bold",
    },
    comment: {
        paddingLeft: "20px",
        paddingBottom: "15px",
    },
    subcomment: {
        paddingLeft: "40px",
    },
    space: {
        height: "10px",
    },
    loadmore: {
        textAlign: "center",
    },
}));

interface props {
    comments: any,
}

function Comments(props: props) {

    const classes = useStyles();

    const [displayComments, setDisplayComments] = useState(props.comments);
    const [displayCommentsNum, setDisplayCommentsNum] = useState(2);

    const handleDisplayComments = () => {
        var index = -1;
        setDisplayComments(props.comments.filter((comment) => {
            index++;
            if (index < displayCommentsNum) {
                return comment
            }
        }));
        setDisplayCommentsNum(displayCommentsNum + 2);
    }

    useEffect(() => {
        handleDisplayComments();
    }, []);

    const handlecomments = (e) => {
        if (e !== undefined) {
            return e.map((comment) => (
                <Typography>
                    <Typography>
                        <Typography variant="caption" className={classes.commentauthor}>{comment.author}</Typography>
                        <Typography variant="caption" className={classes.commentauthor}>{comment.date}</Typography>
                        <Typography variant="subtitle2" className={classes.comment}>{comment.comment}</Typography>
                        <Typography className={classes.subcomment}>
                            <Paper component="form" className={classes.root}>
                                <InputBase
                                    className={classes.input}
                                    placeholder="Reply to this comment..."
                                    inputProps={{ 'aria-label': 'Reply to this comment...' }}
                                />
                                <IconButton color="primary" className={classes.iconButton} aria-label="directions">
                                    <SendIcon />
                                </IconButton>
                            </Paper>
                            {handlecomments(comment.children)}
                        </Typography>
                    </Typography>
                    <Typography className={classes.space}></Typography>
                </Typography>
            ))
        }
    }

    const loadmoreButton = () => {
        if (displayComments.length < props.comments.length) {
            return <Typography className={classes.loadmore}>
                <Button variant="contained" color="primary" onClick={handleDisplayComments}>load more</Button>
            </Typography>
        }
    }

    return (
        <div>
            <Paper elevation={0} className={classes.commentstitle}>
                <Typography variant="h6" gutterBottom>
                    Comments
            </Typography>
            </Paper>
            <Typography className={classes.space}></Typography>
            <Paper component="form" className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder="Add a public Comment..."
                    inputProps={{ 'aria-label': 'Add a public Comment...' }}
                />
                <IconButton color="primary" className={classes.iconButton} aria-label="directions">
                    <SendIcon />
                </IconButton>
            </Paper>
            <Typography className={classes.space}></Typography>
            {displayComments.map((comment) => {
                if (comment !== undefined) {
                    return <Typography>
                        <Paper>
                            <Typography>
                                <Typography variant="caption" className={classes.commentauthor}>{comment.author}</Typography>
                                <Typography variant="caption" className={classes.commentauthor}>{comment.date}</Typography>
                                <Typography variant="subtitle2" className={classes.comment}>{comment.comment}</Typography>
                                <Typography className={classes.subcomment}>
                                    <Paper component="form" className={classes.root}>
                                        <InputBase
                                            className={classes.input}
                                            placeholder="Reply to this comment..."
                                            inputProps={{ 'aria-label': 'search google maps' }}
                                        />
                                        <IconButton color="primary" className={classes.iconButton} aria-label="directions">
                                            <SendIcon />
                                        </IconButton>
                                    </Paper>
                                    {handlecomments(comment.children)}
                                </Typography>
                            </Typography>
                        </Paper>
                        <Typography className={classes.space}></Typography>
                    </Typography>
                }
            })}
            {loadmoreButton()}
        </div>
    );
}

export default Comments;