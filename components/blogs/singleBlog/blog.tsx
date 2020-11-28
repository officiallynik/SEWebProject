import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MainFeaturedPost from './MainFeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

interface props {
  blogId: number;
  blog: any
}

export default function Blog(props: props) {

  const mainFeaturedPost = {    
    // get this post from backend using { props.blogId }
    ...props.blog,
    comments: [
      {
        author: 'commenter',
        date: '23 Nov 2020',
        comment: 'this is my first commentthis is my first commentthis is my first commentthis is my first commentthis is my first commentthis is my first commentthis is my first commentthis is my first commentthis is my first comment',
        children: [
          {
            author: 'subcommenter',
            date: '23 Nov 2020',
            comment: 'this is my first comment',
            children: [
              {
                author: 'commenter',
                date: '23 Nov 2020',
                comment: 'this is my first commentthis is my first commentthis is my first commentthis is my first commentthis is my first commentthis is my first commentthis is my first commentthis is my first commentthis is my first comment',
              },
              {
                author: 'commenter',
                date: '23 Nov 2020',
                comment: 'this is my first commentthis is my first commentthis is my first commentthis is my first commentthis is my first commentthis is my first commentthis is my first commentthis is my first commentthis is my first comment',
              },
            ]
          },
          {
            author: 'subcommenter',
            date: '23 Nov 2020',
            comment: 'this is my first comment',
          },
        ]
      }
    ]
  };

  const classes = useStyles();
  const [isFav, setIsFav] = useState(false); // get this from backend if user has this blog in his favs or not
  const [vote, setVote] = useState("up"); // get this from backend if user not voted or upvoted or downvoted  upvoted: "up" downvoted: "down" notvoted: "none"

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main blog={mainFeaturedPost} isFav={isFav} setIsFav={setIsFav} vote={vote} setVote={setVote} />
            <Sidebar
              tags={mainFeaturedPost.tags}
            />
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}