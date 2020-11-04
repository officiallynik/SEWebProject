import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MainFeaturedPost from './mainfeatured';
import FeaturedPost from './featured';
import Main from './main';
import Sidebar from './sidebar';
import Footer from './footer';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const mainFeaturedPost = {
  title: 'Kisan Seva',
  description:
    "An app that serves the farmer community the purpose of fetching them right value for there crops. Also educate and provide best practises for free to farmers on all kinds of agricultural aspects.",
  image: '/lander.jpg',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Farmers',
    description:
      'Get the right value for your product and educate yourself on wide variety of stuff.',
    image: '/farmer.jpg',
    imageText: 'Image Text',
  },
  {
    title: 'Dealer',
    description:
      'Leave the hassle of finding middlemen to buy agri products. Instead buy directly from who produce it.',
    image: '/dealer.jpg',
    imageText: 'Image Text',
  },
];

const sidebar = {
  title: 'About',
  description:
    `Highly enthusiastic software developers practicing best software techniques. And backing the backbone of our country.
    An attempt to help farmers get what they actually deserve, eliminating crooked middlemen.
    `,
};

export default function LanderPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Some of our features" />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </React.Fragment>
  );
}