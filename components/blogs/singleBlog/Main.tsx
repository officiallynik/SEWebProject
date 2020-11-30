import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Comments from './Comments';

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  favIcon: {
    color: '#eb0029',
    float: 'right',
    cursor: 'pointer',
  },
}));

interface props {
  blog: any,
  isFav: any,
  setIsFav: any,
  vote: any,
  setVote: any,
}

export default function Main(props: props) {
  const classes = useStyles();
  const { blog , isFav , setIsFav , vote , setVote } = props;
  const [upvotes,setUpvotes] = useState(blog.upvotes);
  const [downvotes,setDownvotes] = useState(blog.downvotes);

  const upVoteIcon = () => {
    if(vote === "up")
    {
      return <FormControlLabel
      value="top"
      control={<ThumbUpIcon color="primary" onClick={() => {
        setVote("none");
        setUpvotes(upvotes - 1);
      }}/>}
      label={upvotes}
      labelPlacement="bottom"
    />
    }
    else{
      return <FormControlLabel
      value="top"
      control={<StarIcon color="primary" onClick={() => {
        if(vote === "down")
        {
          setDownvotes(downvotes - 1);
        }
        setVote("up");
        setUpvotes(upvotes + 1);
      }}/>}
      label={upvotes}
      labelPlacement="bottom"
    />
    }
  }

  const downVoteIcon = () => {
    if(vote === "down")
    {
      return <FormControlLabel
      value="top"
      control={<ThumbDownIcon color="primary" onClick={() => {
        setVote("none");
        setDownvotes(downvotes - 1);
      }}/>}
      label={downvotes}
      labelPlacement="bottom"
    />
    }
    else{
      return <FormControlLabel
      value="top"
      control={<ThumbDownOutlinedIcon color="primary" onClick={() => {
        if(vote === "up")
        {
          setUpvotes(upvotes - 1);
        }
        setVote("down");
        setDownvotes(downvotes + 1);
      }}/>}
      label={downvotes}
      labelPlacement="bottom"
    />
    }
  }

  const favIcon = () => {
    if (isFav === true) {
      return <StarIcon onClick={() => {
        setIsFav(false);
      }} className={classes.favIcon}/>
    }
    else {
      return <StarBorderIcon onClick={() => {
        setIsFav(true);
      }} className={classes.favIcon}/>
    }
  }

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {blog.subtitle}
        <div style={{float: "right"}}>
        {upVoteIcon()}
        {downVoteIcon()}
        </div>
        {favIcon()}
      </Typography>
      <Divider />
      <Typography variant="body1" gutterBottom>
        {blog.content}
      </Typography>
      <Divider />
      <Comments comments={blog.comments}/>
    </Grid>
  );
}