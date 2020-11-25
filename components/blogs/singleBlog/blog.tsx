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
}

export default function Blog(props: props) {

  const mainFeaturedPost = {    // get this post from backend using { props.blogId }
    title: 'Title of a longer featured blog post',
    image: 'https://source.unsplash.com/random',
    subtitle: 'Sub Title of a longer featured blog post',
    tags: ['Farmers', 'Crops', 'Agriculture'],
    author: 'Author of the Blog',
    Date: '23 Nov 2020',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem donec massa. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Vitae nunc sed velit dignissim sodales. Ac turpis egestas sed tempus urna et pharetra pharetra massa. Morbi tristique senectus et netus et malesuada. Dignissim convallis aenean et tortor at risus. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque viverra mauris in aliquam sem fringilla ut. Non odio euismod lacinia at quis risus sed. Orci porta non pulvinar neque. Donec et odio pellentesque diam volutpat commodo. Consequat semper viverra nam libero justo laoreet sit. Non tellus orci ac auctor augue mauris augue. Mauris in aliquam sem fringilla ut morbi tincidunt. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Blandit cursus risus at ultrices.Molestie ac feugiat sed lectus vestibulum mattis. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Lorem sed risus ultricies tristique nulla aliquet. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Facilisi morbi tempus iaculis urna id. Sem nulla pharetra diam sit amet nisl. Ut sem nulla pharetra diam. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Consequat semper viverra nam libero justo laoreet sit. Est sit amet facilisis magna etiam tempor orci eu lobortis. Mauris augue neque gravida in. Ultrices sagittis orci a scelerisque. In fermentum et sollicitudin ac. Cum sociis natoque penatibus et magnis dis parturient montes nascetur. Nunc mattis enim ut tellus.Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Accumsan sit amet nulla facilisi morbi tempus. Amet cursus sit amet dictum. Elementum curabitur vitae nunc sed velit. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut porttitor leo a diam sollicitudin tempor id. In arcu cursus euismod quis viverra. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Arcu ac tortor dignissim convallis. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Sed elementum tempus egestas sed sed risus pretium. Nunc lobortis mattis aliquam faucibus purus in. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Risus nec feugiat in fermentum posuere urna nec. Tortor id aliquet lectus proin nibh nisl. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum.Vel pretium lectus quam id leo in vitae. Quis hendrerit dolor magna eget est lorem ipsum dolor. Praesent elementum facilisis leo vel fringilla est ullamcorper. A erat nam at lectus urna. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Sed felis eget velit aliquet sagittis id consectetur purus ut. Tellus mauris a diam maecenas sed. Laoreet non curabitur gravida arcu ac tortor. Nunc faucibus a pellentesque sit amet porttitor. Elementum curabitur vitae nunc sed velit. Id interdum velit laoreet id donec ultrices tincidunt. Risus nec feugiat in fermentum posuere. Aliquam sem fringilla ut morbi tincidunt. In egestas erat imperdiet sed euismod. Elit ullamcorper dignissim cras tincidunt lobortis feugiat.Et leo duis ut diam quam nulla porttitor. Nisl tincidunt eget nullam non nisi est. Non diam phasellus vestibulum lorem. Sollicitudin tempor id eu nisl nunc mi ipsum. Quis auctor elit sed vulputate mi sit. Sapien et ligula ullamcorper malesuada proin. Cras pulvinar mattis nunc sed blandit libero volutpat sed cras. In egestas erat imperdiet sed euismod nisi porta. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Nam libero justo laoreet sit. Vel facilisis volutpat est velit egestas. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Accumsan sit amet nulla facilisi morbi tempus. Diam sollicitudin tempor id eu nisl nunc. Amet justo donec enim diam vulputate ut pharetra sit amet. Facilisi morbi tempus iaculis urna id volutpat. Feugiat vivamus at augue eget arcu dictum varius duis at. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo.',
    upvotes: 10,
    downvotes: 5,
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
                children: [
                  {
                    author: 'subcommenter',
                    date: '23 Nov 2020',
                    comment: 'this is my first comment',
                  },
                ]
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
      },
      {
        author: 'commenter',
        date: '23 Nov 2020',
        comment: 'this is my first commentthis is my first commentthis is my first commentthis is my first commentthis is my first commentthis is my first commentthis is my first commentthis is my first commentthis is my first comment',
        children: [
          {
            author: 'subcommenter',
            date: '23 Nov 2020',
            comment: 'this is my first comment',
          },
        ]
      },
      {
        author: 'commenter',
        date: '23 Nov 2020',
        comment: 'this is my first commentthis is my first commentthis is my first commentthis is my first commentthis is my first commentthis is my first commentthis is my first commentthis is my first commentthis is my first comment',
        children: [
          {
            author: 'subcommenter',
            date: '23 Nov 2020',
            comment: 'this is my first comment',
          },
          {
            author: 'subcommenter',
            date: '23 Nov 2020',
            comment: 'this is my first comment',
          },
        ]
      },
      {
        author: 'commenter',
        date: '23 Nov 2020',
        comment: 'this is my first commentthis is my first commentthis is my first commentthis is my first commentthis is my first commentthis is my first commentthis is my first commentthis is my first commentthis is my first comment',
        children: [
          {
            author: 'subcommenter',
            date: '23 Nov 2020',
            comment: 'this is my first comment',
          },
          {
            author: 'subcommenter',
            date: '23 Nov 2020',
            comment: 'this is my first comment',
          },
          {
            author: 'subcommenter',
            date: '23 Nov 2020',
            comment: 'this is my first comment',
          }
        ]
      },
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