// line 112
// line 222
// line 327
// line 405

import React, { useEffect, useState } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import { useWindowSize } from 'use-window-size-hook';
import image from '../src/images/11.jpeg';
import image1 from '../src/images/22.jpeg';
import image3 from '../src/images/33.jpeg';
import image4 from '../src/images/44.jpeg';
import image5 from '../src/images/5.jpeg';
import image2 from '../src/images/2.jpeg';
import image6 from '../src/images/3.jpeg';
import image7 from '../src/images/4.jpeg';
import image8 from '../src/images/111.jpeg';
import clsx from 'clsx';
import FilterListIcon from '@material-ui/icons/FilterList';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      padding: "3%",
      paddingTop: "80px",
      width: "100%",
    },
    gridListTileBar: {
      backgroundColor: '#000',
      color: '#00ff55',
    },
    favIcon: {
      color: '#eb0029',
    },
    title: {
      flexGrow: 1,
    },
    newBlogButton: {
      color: "#ffffff",
      fontSize: '70%',
      '&:hover': {
        backgroundColor: '#ffffff',
        color: '#3f50b5',
      }
    },
    state: {
      width: '70px',
      textAlign: 'center',
    },
    pagination: {
      paddingBottom: "50px",
    },
    tester: {
      height: "0px",
      width: "100%",
      visibility: "hidden",
      backgroundColor: "#ffffff",
    },
    testerShift: {
      height: "auto",
      visibility: 'visible',
      transition: theme.transitions.create(['height', 'visible'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    filterbutton: {
      color: "#ffffff"
    },
    paper: {
      height: "13px",
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    filterscontainer: {
      paddingTop: "20px",
      paddingLeft: "10%",
      paddingRight: "10%",
      paddingBottom: "20px",
    },
    filtername: {
      color: "#000000",
    }
  }),
);

function AllBlogs() {

  const classes = useStyles();
  // get all blogs from backend
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      img: image,
      title: 'For Moments like No Other',
      author: 'United Kingdom',
      subtitle: 'Sub Title of a longer featured blog post',
      tags: ['Farmers', 'Crops', 'Agriculture'],
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem donec massa. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Vitae nunc sed velit dignissim sodales. Ac turpis egestas sed tempus urna et pharetra pharetra massa. Morbi tristique senectus et netus et malesuada. Dignissim convallis aenean et tortor at risus. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque viverra mauris in aliquam sem fringilla ut. Non odio euismod lacinia at quis risus sed. Orci porta non pulvinar neque. Donec et odio pellentesque diam volutpat commodo. Consequat semper viverra nam libero justo laoreet sit. Non tellus orci ac auctor augue mauris augue. Mauris in aliquam sem fringilla ut morbi tincidunt. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Blandit cursus risus at ultrices.Molestie ac feugiat sed lectus vestibulum mattis. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Lorem sed risus ultricies tristique nulla aliquet. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Facilisi morbi tempus iaculis urna id. Sem nulla pharetra diam sit amet nisl. Ut sem nulla pharetra diam. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Consequat semper viverra nam libero justo laoreet sit. Est sit amet facilisis magna etiam tempor orci eu lobortis. Mauris augue neque gravida in. Ultrices sagittis orci a scelerisque. In fermentum et sollicitudin ac. Cum sociis natoque penatibus et magnis dis parturient montes nascetur. Nunc mattis enim ut tellus.Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Accumsan sit amet nulla facilisi morbi tempus. Amet cursus sit amet dictum. Elementum curabitur vitae nunc sed velit. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut porttitor leo a diam sollicitudin tempor id. In arcu cursus euismod quis viverra. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Arcu ac tortor dignissim convallis. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Sed elementum tempus egestas sed sed risus pretium. Nunc lobortis mattis aliquam faucibus purus in. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Risus nec feugiat in fermentum posuere urna nec. Tortor id aliquet lectus proin nibh nisl. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum.Vel pretium lectus quam id leo in vitae. Quis hendrerit dolor magna eget est lorem ipsum dolor. Praesent elementum facilisis leo vel fringilla est ullamcorper. A erat nam at lectus urna. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Sed felis eget velit aliquet sagittis id consectetur purus ut. Tellus mauris a diam maecenas sed. Laoreet non curabitur gravida arcu ac tortor. Nunc faucibus a pellentesque sit amet porttitor. Elementum curabitur vitae nunc sed velit. Id interdum velit laoreet id donec ultrices tincidunt. Risus nec feugiat in fermentum posuere. Aliquam sem fringilla ut morbi tincidunt. In egestas erat imperdiet sed euismod. Elit ullamcorper dignissim cras tincidunt lobortis feugiat.Et leo duis ut diam quam nulla porttitor. Nisl tincidunt eget nullam non nisi est. Non diam phasellus vestibulum lorem. Sollicitudin tempor id eu nisl nunc mi ipsum. Quis auctor elit sed vulputate mi sit. Sapien et ligula ullamcorper malesuada proin. Cras pulvinar mattis nunc sed blandit libero volutpat sed cras. In egestas erat imperdiet sed euismod nisi porta. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Nam libero justo laoreet sit. Vel facilisis volutpat est velit egestas. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Accumsan sit amet nulla facilisi morbi tempus. Diam sollicitudin tempor id eu nisl nunc. Amet justo donec enim diam vulputate ut pharetra sit amet. Facilisi morbi tempus iaculis urna id volutpat. Feugiat vivamus at augue eget arcu dictum varius duis at. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo.',
      Date: '23 Nov 2020',
      fav: false,
    },
    {
      id: 2,
      img: image1,
      title: 'Title of a longer featured blog post',
      author: 'Author of the Blog',
      subtitle: 'Sub Title of a longer featured blog post',
      tags: [ 'Agriculture'],
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem donec massa. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Vitae nunc sed velit dignissim sodales. Ac turpis egestas sed tempus urna et pharetra pharetra massa. Morbi tristique senectus et netus et malesuada. Dignissim convallis aenean et tortor at risus. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque viverra mauris in aliquam sem fringilla ut. Non odio euismod lacinia at quis risus sed. Orci porta non pulvinar neque. Donec et odio pellentesque diam volutpat commodo. Consequat semper viverra nam libero justo laoreet sit. Non tellus orci ac auctor augue mauris augue. Mauris in aliquam sem fringilla ut morbi tincidunt. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Blandit cursus risus at ultrices.Molestie ac feugiat sed lectus vestibulum mattis. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Lorem sed risus ultricies tristique nulla aliquet. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Facilisi morbi tempus iaculis urna id. Sem nulla pharetra diam sit amet nisl. Ut sem nulla pharetra diam. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Consequat semper viverra nam libero justo laoreet sit. Est sit amet facilisis magna etiam tempor orci eu lobortis. Mauris augue neque gravida in. Ultrices sagittis orci a scelerisque. In fermentum et sollicitudin ac. Cum sociis natoque penatibus et magnis dis parturient montes nascetur. Nunc mattis enim ut tellus.Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Accumsan sit amet nulla facilisi morbi tempus. Amet cursus sit amet dictum. Elementum curabitur vitae nunc sed velit. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut porttitor leo a diam sollicitudin tempor id. In arcu cursus euismod quis viverra. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Arcu ac tortor dignissim convallis. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Sed elementum tempus egestas sed sed risus pretium. Nunc lobortis mattis aliquam faucibus purus in. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Risus nec feugiat in fermentum posuere urna nec. Tortor id aliquet lectus proin nibh nisl. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum.Vel pretium lectus quam id leo in vitae. Quis hendrerit dolor magna eget est lorem ipsum dolor. Praesent elementum facilisis leo vel fringilla est ullamcorper. A erat nam at lectus urna. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Sed felis eget velit aliquet sagittis id consectetur purus ut. Tellus mauris a diam maecenas sed. Laoreet non curabitur gravida arcu ac tortor. Nunc faucibus a pellentesque sit amet porttitor. Elementum curabitur vitae nunc sed velit. Id interdum velit laoreet id donec ultrices tincidunt. Risus nec feugiat in fermentum posuere. Aliquam sem fringilla ut morbi tincidunt. In egestas erat imperdiet sed euismod. Elit ullamcorper dignissim cras tincidunt lobortis feugiat.Et leo duis ut diam quam nulla porttitor. Nisl tincidunt eget nullam non nisi est. Non diam phasellus vestibulum lorem. Sollicitudin tempor id eu nisl nunc mi ipsum. Quis auctor elit sed vulputate mi sit. Sapien et ligula ullamcorper malesuada proin. Cras pulvinar mattis nunc sed blandit libero volutpat sed cras. In egestas erat imperdiet sed euismod nisi porta. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Nam libero justo laoreet sit. Vel facilisis volutpat est velit egestas. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Accumsan sit amet nulla facilisi morbi tempus. Diam sollicitudin tempor id eu nisl nunc. Amet justo donec enim diam vulputate ut pharetra sit amet. Facilisi morbi tempus iaculis urna id volutpat. Feugiat vivamus at augue eget arcu dictum varius duis at. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo.',
      Date: '23 Nov 2020',
      fav: false,
    },
    {
      id: 3,
      img: image2,
      title: 'Spotify Design',
      author: 'India',
      subtitle: 'Sub Title of a longer featured blog post',
      tags: ['Crops', 'Agriculture'],
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem donec massa. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Vitae nunc sed velit dignissim sodales. Ac turpis egestas sed tempus urna et pharetra pharetra massa. Morbi tristique senectus et netus et malesuada. Dignissim convallis aenean et tortor at risus. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque viverra mauris in aliquam sem fringilla ut. Non odio euismod lacinia at quis risus sed. Orci porta non pulvinar neque. Donec et odio pellentesque diam volutpat commodo. Consequat semper viverra nam libero justo laoreet sit. Non tellus orci ac auctor augue mauris augue. Mauris in aliquam sem fringilla ut morbi tincidunt. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Blandit cursus risus at ultrices.Molestie ac feugiat sed lectus vestibulum mattis. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Lorem sed risus ultricies tristique nulla aliquet. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Facilisi morbi tempus iaculis urna id. Sem nulla pharetra diam sit amet nisl. Ut sem nulla pharetra diam. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Consequat semper viverra nam libero justo laoreet sit. Est sit amet facilisis magna etiam tempor orci eu lobortis. Mauris augue neque gravida in. Ultrices sagittis orci a scelerisque. In fermentum et sollicitudin ac. Cum sociis natoque penatibus et magnis dis parturient montes nascetur. Nunc mattis enim ut tellus.Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Accumsan sit amet nulla facilisi morbi tempus. Amet cursus sit amet dictum. Elementum curabitur vitae nunc sed velit. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut porttitor leo a diam sollicitudin tempor id. In arcu cursus euismod quis viverra. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Arcu ac tortor dignissim convallis. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Sed elementum tempus egestas sed sed risus pretium. Nunc lobortis mattis aliquam faucibus purus in. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Risus nec feugiat in fermentum posuere urna nec. Tortor id aliquet lectus proin nibh nisl. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum.Vel pretium lectus quam id leo in vitae. Quis hendrerit dolor magna eget est lorem ipsum dolor. Praesent elementum facilisis leo vel fringilla est ullamcorper. A erat nam at lectus urna. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Sed felis eget velit aliquet sagittis id consectetur purus ut. Tellus mauris a diam maecenas sed. Laoreet non curabitur gravida arcu ac tortor. Nunc faucibus a pellentesque sit amet porttitor. Elementum curabitur vitae nunc sed velit. Id interdum velit laoreet id donec ultrices tincidunt. Risus nec feugiat in fermentum posuere. Aliquam sem fringilla ut morbi tincidunt. In egestas erat imperdiet sed euismod. Elit ullamcorper dignissim cras tincidunt lobortis feugiat.Et leo duis ut diam quam nulla porttitor. Nisl tincidunt eget nullam non nisi est. Non diam phasellus vestibulum lorem. Sollicitudin tempor id eu nisl nunc mi ipsum. Quis auctor elit sed vulputate mi sit. Sapien et ligula ullamcorper malesuada proin. Cras pulvinar mattis nunc sed blandit libero volutpat sed cras. In egestas erat imperdiet sed euismod nisi porta. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Nam libero justo laoreet sit. Vel facilisis volutpat est velit egestas. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Accumsan sit amet nulla facilisi morbi tempus. Diam sollicitudin tempor id eu nisl nunc. Amet justo donec enim diam vulputate ut pharetra sit amet. Facilisi morbi tempus iaculis urna id volutpat. Feugiat vivamus at augue eget arcu dictum varius duis at. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo.',
      Date: '23 Nov 2020',
      fav: true,
    },
    {
      id: 4,
      img: image3,
      title: 'Flux Academy',
      author: 'Israel',
      subtitle: 'Sub Title of a longer featured blog post',
      tags: ['Farmers', 'Crops'],
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem donec massa. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Vitae nunc sed velit dignissim sodales. Ac turpis egestas sed tempus urna et pharetra pharetra massa. Morbi tristique senectus et netus et malesuada. Dignissim convallis aenean et tortor at risus. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque viverra mauris in aliquam sem fringilla ut. Non odio euismod lacinia at quis risus sed. Orci porta non pulvinar neque. Donec et odio pellentesque diam volutpat commodo. Consequat semper viverra nam libero justo laoreet sit. Non tellus orci ac auctor augue mauris augue. Mauris in aliquam sem fringilla ut morbi tincidunt. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Blandit cursus risus at ultrices.Molestie ac feugiat sed lectus vestibulum mattis. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Lorem sed risus ultricies tristique nulla aliquet. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Facilisi morbi tempus iaculis urna id. Sem nulla pharetra diam sit amet nisl. Ut sem nulla pharetra diam. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Consequat semper viverra nam libero justo laoreet sit. Est sit amet facilisis magna etiam tempor orci eu lobortis. Mauris augue neque gravida in. Ultrices sagittis orci a scelerisque. In fermentum et sollicitudin ac. Cum sociis natoque penatibus et magnis dis parturient montes nascetur. Nunc mattis enim ut tellus.Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Accumsan sit amet nulla facilisi morbi tempus. Amet cursus sit amet dictum. Elementum curabitur vitae nunc sed velit. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut porttitor leo a diam sollicitudin tempor id. In arcu cursus euismod quis viverra. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Arcu ac tortor dignissim convallis. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Sed elementum tempus egestas sed sed risus pretium. Nunc lobortis mattis aliquam faucibus purus in. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Risus nec feugiat in fermentum posuere urna nec. Tortor id aliquet lectus proin nibh nisl. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum.Vel pretium lectus quam id leo in vitae. Quis hendrerit dolor magna eget est lorem ipsum dolor. Praesent elementum facilisis leo vel fringilla est ullamcorper. A erat nam at lectus urna. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Sed felis eget velit aliquet sagittis id consectetur purus ut. Tellus mauris a diam maecenas sed. Laoreet non curabitur gravida arcu ac tortor. Nunc faucibus a pellentesque sit amet porttitor. Elementum curabitur vitae nunc sed velit. Id interdum velit laoreet id donec ultrices tincidunt. Risus nec feugiat in fermentum posuere. Aliquam sem fringilla ut morbi tincidunt. In egestas erat imperdiet sed euismod. Elit ullamcorper dignissim cras tincidunt lobortis feugiat.Et leo duis ut diam quam nulla porttitor. Nisl tincidunt eget nullam non nisi est. Non diam phasellus vestibulum lorem. Sollicitudin tempor id eu nisl nunc mi ipsum. Quis auctor elit sed vulputate mi sit. Sapien et ligula ullamcorper malesuada proin. Cras pulvinar mattis nunc sed blandit libero volutpat sed cras. In egestas erat imperdiet sed euismod nisi porta. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Nam libero justo laoreet sit. Vel facilisis volutpat est velit egestas. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Accumsan sit amet nulla facilisi morbi tempus. Diam sollicitudin tempor id eu nisl nunc. Amet justo donec enim diam vulputate ut pharetra sit amet. Facilisi morbi tempus iaculis urna id volutpat. Feugiat vivamus at augue eget arcu dictum varius duis at. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo.',
      Date: '23 Nov 2020',
      fav: false,
    },
    {
      id: 5,
      img: image4,
      title: 'Marina Beach',
      author: 'India',
      subtitle: 'Sub Title of a longer featured blog post',
      tags: ['Farmers', 'Agriculture'],
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem donec massa. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Vitae nunc sed velit dignissim sodales. Ac turpis egestas sed tempus urna et pharetra pharetra massa. Morbi tristique senectus et netus et malesuada. Dignissim convallis aenean et tortor at risus. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque viverra mauris in aliquam sem fringilla ut. Non odio euismod lacinia at quis risus sed. Orci porta non pulvinar neque. Donec et odio pellentesque diam volutpat commodo. Consequat semper viverra nam libero justo laoreet sit. Non tellus orci ac auctor augue mauris augue. Mauris in aliquam sem fringilla ut morbi tincidunt. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Blandit cursus risus at ultrices.Molestie ac feugiat sed lectus vestibulum mattis. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Lorem sed risus ultricies tristique nulla aliquet. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Facilisi morbi tempus iaculis urna id. Sem nulla pharetra diam sit amet nisl. Ut sem nulla pharetra diam. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Consequat semper viverra nam libero justo laoreet sit. Est sit amet facilisis magna etiam tempor orci eu lobortis. Mauris augue neque gravida in. Ultrices sagittis orci a scelerisque. In fermentum et sollicitudin ac. Cum sociis natoque penatibus et magnis dis parturient montes nascetur. Nunc mattis enim ut tellus.Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Accumsan sit amet nulla facilisi morbi tempus. Amet cursus sit amet dictum. Elementum curabitur vitae nunc sed velit. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut porttitor leo a diam sollicitudin tempor id. In arcu cursus euismod quis viverra. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Arcu ac tortor dignissim convallis. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Sed elementum tempus egestas sed sed risus pretium. Nunc lobortis mattis aliquam faucibus purus in. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Risus nec feugiat in fermentum posuere urna nec. Tortor id aliquet lectus proin nibh nisl. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum.Vel pretium lectus quam id leo in vitae. Quis hendrerit dolor magna eget est lorem ipsum dolor. Praesent elementum facilisis leo vel fringilla est ullamcorper. A erat nam at lectus urna. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Sed felis eget velit aliquet sagittis id consectetur purus ut. Tellus mauris a diam maecenas sed. Laoreet non curabitur gravida arcu ac tortor. Nunc faucibus a pellentesque sit amet porttitor. Elementum curabitur vitae nunc sed velit. Id interdum velit laoreet id donec ultrices tincidunt. Risus nec feugiat in fermentum posuere. Aliquam sem fringilla ut morbi tincidunt. In egestas erat imperdiet sed euismod. Elit ullamcorper dignissim cras tincidunt lobortis feugiat.Et leo duis ut diam quam nulla porttitor. Nisl tincidunt eget nullam non nisi est. Non diam phasellus vestibulum lorem. Sollicitudin tempor id eu nisl nunc mi ipsum. Quis auctor elit sed vulputate mi sit. Sapien et ligula ullamcorper malesuada proin. Cras pulvinar mattis nunc sed blandit libero volutpat sed cras. In egestas erat imperdiet sed euismod nisi porta. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Nam libero justo laoreet sit. Vel facilisis volutpat est velit egestas. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Accumsan sit amet nulla facilisi morbi tempus. Diam sollicitudin tempor id eu nisl nunc. Amet justo donec enim diam vulputate ut pharetra sit amet. Facilisi morbi tempus iaculis urna id volutpat. Feugiat vivamus at augue eget arcu dictum varius duis at. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo.',
      Date: '23 Nov 2020',
      fav: false,
    },
    {
      id: 6,
      img: image5,
      title: 'Marina Beach',
      author: 'India',
      subtitle: 'Sub Title of a longer featured blog post',
      tags: ['Farmers', 'Crops'],
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem donec massa. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Vitae nunc sed velit dignissim sodales. Ac turpis egestas sed tempus urna et pharetra pharetra massa. Morbi tristique senectus et netus et malesuada. Dignissim convallis aenean et tortor at risus. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque viverra mauris in aliquam sem fringilla ut. Non odio euismod lacinia at quis risus sed. Orci porta non pulvinar neque. Donec et odio pellentesque diam volutpat commodo. Consequat semper viverra nam libero justo laoreet sit. Non tellus orci ac auctor augue mauris augue. Mauris in aliquam sem fringilla ut morbi tincidunt. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Blandit cursus risus at ultrices.Molestie ac feugiat sed lectus vestibulum mattis. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Lorem sed risus ultricies tristique nulla aliquet. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Facilisi morbi tempus iaculis urna id. Sem nulla pharetra diam sit amet nisl. Ut sem nulla pharetra diam. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Consequat semper viverra nam libero justo laoreet sit. Est sit amet facilisis magna etiam tempor orci eu lobortis. Mauris augue neque gravida in. Ultrices sagittis orci a scelerisque. In fermentum et sollicitudin ac. Cum sociis natoque penatibus et magnis dis parturient montes nascetur. Nunc mattis enim ut tellus.Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Accumsan sit amet nulla facilisi morbi tempus. Amet cursus sit amet dictum. Elementum curabitur vitae nunc sed velit. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut porttitor leo a diam sollicitudin tempor id. In arcu cursus euismod quis viverra. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Arcu ac tortor dignissim convallis. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Sed elementum tempus egestas sed sed risus pretium. Nunc lobortis mattis aliquam faucibus purus in. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Risus nec feugiat in fermentum posuere urna nec. Tortor id aliquet lectus proin nibh nisl. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum.Vel pretium lectus quam id leo in vitae. Quis hendrerit dolor magna eget est lorem ipsum dolor. Praesent elementum facilisis leo vel fringilla est ullamcorper. A erat nam at lectus urna. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Sed felis eget velit aliquet sagittis id consectetur purus ut. Tellus mauris a diam maecenas sed. Laoreet non curabitur gravida arcu ac tortor. Nunc faucibus a pellentesque sit amet porttitor. Elementum curabitur vitae nunc sed velit. Id interdum velit laoreet id donec ultrices tincidunt. Risus nec feugiat in fermentum posuere. Aliquam sem fringilla ut morbi tincidunt. In egestas erat imperdiet sed euismod. Elit ullamcorper dignissim cras tincidunt lobortis feugiat.Et leo duis ut diam quam nulla porttitor. Nisl tincidunt eget nullam non nisi est. Non diam phasellus vestibulum lorem. Sollicitudin tempor id eu nisl nunc mi ipsum. Quis auctor elit sed vulputate mi sit. Sapien et ligula ullamcorper malesuada proin. Cras pulvinar mattis nunc sed blandit libero volutpat sed cras. In egestas erat imperdiet sed euismod nisi porta. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Nam libero justo laoreet sit. Vel facilisis volutpat est velit egestas. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Accumsan sit amet nulla facilisi morbi tempus. Diam sollicitudin tempor id eu nisl nunc. Amet justo donec enim diam vulputate ut pharetra sit amet. Facilisi morbi tempus iaculis urna id volutpat. Feugiat vivamus at augue eget arcu dictum varius duis at. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo.',
      Date: '23 Nov 2020',
      fav: true,
    },
    {
      id: 7,
      img: image6,
      title: 'Marina Beach',
      author: 'India',
      subtitle: 'Sub Title of a longer featured blog post',
      tags: ['Farmers'],
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem donec massa. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Vitae nunc sed velit dignissim sodales. Ac turpis egestas sed tempus urna et pharetra pharetra massa. Morbi tristique senectus et netus et malesuada. Dignissim convallis aenean et tortor at risus. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque viverra mauris in aliquam sem fringilla ut. Non odio euismod lacinia at quis risus sed. Orci porta non pulvinar neque. Donec et odio pellentesque diam volutpat commodo. Consequat semper viverra nam libero justo laoreet sit. Non tellus orci ac auctor augue mauris augue. Mauris in aliquam sem fringilla ut morbi tincidunt. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Blandit cursus risus at ultrices.Molestie ac feugiat sed lectus vestibulum mattis. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Lorem sed risus ultricies tristique nulla aliquet. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Facilisi morbi tempus iaculis urna id. Sem nulla pharetra diam sit amet nisl. Ut sem nulla pharetra diam. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Consequat semper viverra nam libero justo laoreet sit. Est sit amet facilisis magna etiam tempor orci eu lobortis. Mauris augue neque gravida in. Ultrices sagittis orci a scelerisque. In fermentum et sollicitudin ac. Cum sociis natoque penatibus et magnis dis parturient montes nascetur. Nunc mattis enim ut tellus.Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Accumsan sit amet nulla facilisi morbi tempus. Amet cursus sit amet dictum. Elementum curabitur vitae nunc sed velit. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut porttitor leo a diam sollicitudin tempor id. In arcu cursus euismod quis viverra. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Arcu ac tortor dignissim convallis. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Sed elementum tempus egestas sed sed risus pretium. Nunc lobortis mattis aliquam faucibus purus in. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Risus nec feugiat in fermentum posuere urna nec. Tortor id aliquet lectus proin nibh nisl. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum.Vel pretium lectus quam id leo in vitae. Quis hendrerit dolor magna eget est lorem ipsum dolor. Praesent elementum facilisis leo vel fringilla est ullamcorper. A erat nam at lectus urna. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Sed felis eget velit aliquet sagittis id consectetur purus ut. Tellus mauris a diam maecenas sed. Laoreet non curabitur gravida arcu ac tortor. Nunc faucibus a pellentesque sit amet porttitor. Elementum curabitur vitae nunc sed velit. Id interdum velit laoreet id donec ultrices tincidunt. Risus nec feugiat in fermentum posuere. Aliquam sem fringilla ut morbi tincidunt. In egestas erat imperdiet sed euismod. Elit ullamcorper dignissim cras tincidunt lobortis feugiat.Et leo duis ut diam quam nulla porttitor. Nisl tincidunt eget nullam non nisi est. Non diam phasellus vestibulum lorem. Sollicitudin tempor id eu nisl nunc mi ipsum. Quis auctor elit sed vulputate mi sit. Sapien et ligula ullamcorper malesuada proin. Cras pulvinar mattis nunc sed blandit libero volutpat sed cras. In egestas erat imperdiet sed euismod nisi porta. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Nam libero justo laoreet sit. Vel facilisis volutpat est velit egestas. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Accumsan sit amet nulla facilisi morbi tempus. Diam sollicitudin tempor id eu nisl nunc. Amet justo donec enim diam vulputate ut pharetra sit amet. Facilisi morbi tempus iaculis urna id volutpat. Feugiat vivamus at augue eget arcu dictum varius duis at. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo.',
      Date: '23 Nov 2020',
      fav: false,
    },
    {
      id: 8,
      img: image7,
      title: 'Crops',
      author: 'India',
      subtitle: 'Sub Title of a longer featured blog post',
      tags: ['Crops'],
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem donec massa. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Vitae nunc sed velit dignissim sodales. Ac turpis egestas sed tempus urna et pharetra pharetra massa. Morbi tristique senectus et netus et malesuada. Dignissim convallis aenean et tortor at risus. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque viverra mauris in aliquam sem fringilla ut. Non odio euismod lacinia at quis risus sed. Orci porta non pulvinar neque. Donec et odio pellentesque diam volutpat commodo. Consequat semper viverra nam libero justo laoreet sit. Non tellus orci ac auctor augue mauris augue. Mauris in aliquam sem fringilla ut morbi tincidunt. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Blandit cursus risus at ultrices.Molestie ac feugiat sed lectus vestibulum mattis. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Lorem sed risus ultricies tristique nulla aliquet. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Facilisi morbi tempus iaculis urna id. Sem nulla pharetra diam sit amet nisl. Ut sem nulla pharetra diam. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Consequat semper viverra nam libero justo laoreet sit. Est sit amet facilisis magna etiam tempor orci eu lobortis. Mauris augue neque gravida in. Ultrices sagittis orci a scelerisque. In fermentum et sollicitudin ac. Cum sociis natoque penatibus et magnis dis parturient montes nascetur. Nunc mattis enim ut tellus.Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Accumsan sit amet nulla facilisi morbi tempus. Amet cursus sit amet dictum. Elementum curabitur vitae nunc sed velit. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut porttitor leo a diam sollicitudin tempor id. In arcu cursus euismod quis viverra. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Arcu ac tortor dignissim convallis. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Sed elementum tempus egestas sed sed risus pretium. Nunc lobortis mattis aliquam faucibus purus in. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Risus nec feugiat in fermentum posuere urna nec. Tortor id aliquet lectus proin nibh nisl. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum.Vel pretium lectus quam id leo in vitae. Quis hendrerit dolor magna eget est lorem ipsum dolor. Praesent elementum facilisis leo vel fringilla est ullamcorper. A erat nam at lectus urna. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Sed felis eget velit aliquet sagittis id consectetur purus ut. Tellus mauris a diam maecenas sed. Laoreet non curabitur gravida arcu ac tortor. Nunc faucibus a pellentesque sit amet porttitor. Elementum curabitur vitae nunc sed velit. Id interdum velit laoreet id donec ultrices tincidunt. Risus nec feugiat in fermentum posuere. Aliquam sem fringilla ut morbi tincidunt. In egestas erat imperdiet sed euismod. Elit ullamcorper dignissim cras tincidunt lobortis feugiat.Et leo duis ut diam quam nulla porttitor. Nisl tincidunt eget nullam non nisi est. Non diam phasellus vestibulum lorem. Sollicitudin tempor id eu nisl nunc mi ipsum. Quis auctor elit sed vulputate mi sit. Sapien et ligula ullamcorper malesuada proin. Cras pulvinar mattis nunc sed blandit libero volutpat sed cras. In egestas erat imperdiet sed euismod nisi porta. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Nam libero justo laoreet sit. Vel facilisis volutpat est velit egestas. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Accumsan sit amet nulla facilisi morbi tempus. Diam sollicitudin tempor id eu nisl nunc. Amet justo donec enim diam vulputate ut pharetra sit amet. Facilisi morbi tempus iaculis urna id volutpat. Feugiat vivamus at augue eget arcu dictum varius duis at. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo.',
      Date: '23 Nov 2020',
      fav: true,
    },
    {
      id: 9,
      img: image8,
      title: 'Marina Beach',
      author: 'India',
      subtitle: 'Sub Title of a longer featured blog post',
      tags: ['Farmers', 'Agriculture'],
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem donec massa. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Vitae nunc sed velit dignissim sodales. Ac turpis egestas sed tempus urna et pharetra pharetra massa. Morbi tristique senectus et netus et malesuada. Dignissim convallis aenean et tortor at risus. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque viverra mauris in aliquam sem fringilla ut. Non odio euismod lacinia at quis risus sed. Orci porta non pulvinar neque. Donec et odio pellentesque diam volutpat commodo. Consequat semper viverra nam libero justo laoreet sit. Non tellus orci ac auctor augue mauris augue. Mauris in aliquam sem fringilla ut morbi tincidunt. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Blandit cursus risus at ultrices.Molestie ac feugiat sed lectus vestibulum mattis. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Lorem sed risus ultricies tristique nulla aliquet. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Facilisi morbi tempus iaculis urna id. Sem nulla pharetra diam sit amet nisl. Ut sem nulla pharetra diam. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Consequat semper viverra nam libero justo laoreet sit. Est sit amet facilisis magna etiam tempor orci eu lobortis. Mauris augue neque gravida in. Ultrices sagittis orci a scelerisque. In fermentum et sollicitudin ac. Cum sociis natoque penatibus et magnis dis parturient montes nascetur. Nunc mattis enim ut tellus.Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Accumsan sit amet nulla facilisi morbi tempus. Amet cursus sit amet dictum. Elementum curabitur vitae nunc sed velit. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut porttitor leo a diam sollicitudin tempor id. In arcu cursus euismod quis viverra. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Arcu ac tortor dignissim convallis. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Sed elementum tempus egestas sed sed risus pretium. Nunc lobortis mattis aliquam faucibus purus in. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Risus nec feugiat in fermentum posuere urna nec. Tortor id aliquet lectus proin nibh nisl. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum.Vel pretium lectus quam id leo in vitae. Quis hendrerit dolor magna eget est lorem ipsum dolor. Praesent elementum facilisis leo vel fringilla est ullamcorper. A erat nam at lectus urna. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Sed felis eget velit aliquet sagittis id consectetur purus ut. Tellus mauris a diam maecenas sed. Laoreet non curabitur gravida arcu ac tortor. Nunc faucibus a pellentesque sit amet porttitor. Elementum curabitur vitae nunc sed velit. Id interdum velit laoreet id donec ultrices tincidunt. Risus nec feugiat in fermentum posuere. Aliquam sem fringilla ut morbi tincidunt. In egestas erat imperdiet sed euismod. Elit ullamcorper dignissim cras tincidunt lobortis feugiat.Et leo duis ut diam quam nulla porttitor. Nisl tincidunt eget nullam non nisi est. Non diam phasellus vestibulum lorem. Sollicitudin tempor id eu nisl nunc mi ipsum. Quis auctor elit sed vulputate mi sit. Sapien et ligula ullamcorper malesuada proin. Cras pulvinar mattis nunc sed blandit libero volutpat sed cras. In egestas erat imperdiet sed euismod nisi porta. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Nam libero justo laoreet sit. Vel facilisis volutpat est velit egestas. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Accumsan sit amet nulla facilisi morbi tempus. Diam sollicitudin tempor id eu nisl nunc. Amet justo donec enim diam vulputate ut pharetra sit amet. Facilisi morbi tempus iaculis urna id volutpat. Feugiat vivamus at augue eget arcu dictum varius duis at. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo.',
      Date: '23 Nov 2020',
      fav: false,
    }
  ]);

  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const [isFavBlogs, setIsFavBlogs] = useState(false);
  const wid = useWindowSize();
  const [cellHeight, setCellHeight] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // get all tags from backend
  const [filters, setFilters] = useState([
    {
      tag: 'Farmers',
      checked: false,
    },
    {
      tag: 'Crops',
      checked: false,
    },
    {
      tag: 'Agriculture',
      checked: false,
    },
  ])
  const [checkedTags,setCheckedTags] = useState(Array);

  const favBlogsHandler = () => {
    if(checkedTags.length === 0)
    {
      if (isFavBlogs === true) {
        setFilteredBlogs(blogs.filter(blog => blog.fav === true));
      }
      else {
        setFilteredBlogs(blogs);
      }
    }
    else{
      if (isFavBlogs === true) {
        setFilteredBlogs(blogs.filter((blog) => {
          if(blog.fav === true)
          {
            var flag = 0;
            blog.tags.map((tag) => {
              checkedTags.map((checktag) => {
                if(tag === checktag)
                {
                  flag = 1;
                }
              })
            })
            if(flag === 1)
            {
              return blog
            }
          }
        }));
      }
      else {
        setFilteredBlogs(blogs.filter((blog) => {
          var flag = 0;
          blog.tags.map((tag) => {
            checkedTags.map((checktag) => {
              if(tag === checktag)
              {
                flag = 1;
              }
            })
          })
          if(flag === 1)
          {
            return blog
          }
        }));
    }
  }
}

  const handleFilter = () => {
    if (isFilterOpen === true) {
      setIsFilterOpen(false);
    }
    else {
      setIsFilterOpen(true);
    }
  }

  const handleFilterChange = (e) => {
    setFilters(filters.map((filter) => {
      if (filter.tag === e.tag) {
        return {
          ...filter, checked: !filter.checked
        };
      }
      return filter;
    }));
    if(e.checked === false)
    {
      setCheckedTags([
        ...checkedTags, e.tag
      ])
    }else{
      setCheckedTags(checkedTags.filter((tag) => tag !== e.tag));
    }
  }

  useEffect(() => {
    favBlogsHandler();
  }, [checkedTags]);

  const icon = (e) => {
    if (e.fav === true) {
      return <StarIcon onClick={() => {
        setBlogs(blogs.map((item) => {
          if (item.id === e.id) {
            // add your code here to change the blog user favs.
            return {
              ...item, fav: false
            };
          }
          return item;
        }));
      }} className={classes.favIcon} />
    }
  }

  const getGridListCols = () => {

    if (wid.width !== undefined) {
      if (wid.width > 1460) {
        return 4;
      }

      if (wid.width > 1050) {
        return 3;
      }

      if (wid.width > 550) {
        return 2;
      }
    }
    return 1;
  }

  const handleHeights = () => {
    var cols = getGridListCols();
    if (wid.width !== undefined) {
      if (cols === 4) {
        setCellHeight(wid.width / 5);
        setImgHeight(wid.width / 5.925);
      }
      else if (cols === 3) {
        setCellHeight(wid.width / 3.9);
        setImgHeight(wid.width / 4.62);
      }
      else if (cols === 2) {
        setCellHeight(wid.width / 2.53);
        setImgHeight(wid.width / 3.07);
      }
      else if (cols === 1) {
        setCellHeight(wid.width / 1.13);
        setImgHeight(wid.width / 1.3);
      }
    }
  }

  useEffect(() => {
    handleHeights();
  }, [wid]);

  useEffect(() => {
    favBlogsHandler();
  }, [blogs, isFavBlogs]);

  const isFavHandler = () => {
    if (isFavBlogs === true) {
      setIsFavBlogs(false);
    }
    else {
      setIsFavBlogs(true);
    }
  }

  const state = () => {
    if (isFavBlogs === true) {
      return "Favourites";
    }
    else {
      return "All Blogs";
    }
  }

  const openSingleBlog = (e) => {
    // navigate to single blog page { props are tile.id }
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Blog Page
          </Typography>
          <Button
            variant="text"
            className={classes.filterbutton}
            startIcon={<FilterListIcon />}
            onClick={handleFilter}
          >
            Filter
          </Button>
          <Switch size="small" onChange={isFavHandler} aria-label="fav switch" />
          <Typography variant="subtitle2" className={classes.state}>
            {state()}
          </Typography>
        </Toolbar>
        <div className={clsx(classes.tester, {
          [classes.testerShift]: isFilterOpen,
        })}>
          <Grid container spacing={3} className={classes.filterscontainer}>
            {filters.map((filter) => (
              <Grid item xs={"auto"}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={filter.checked}
                      onChange={() => {handleFilterChange(filter)}}
                      color="primary"
                    />
                  }
                  label={filter.tag}
                  className={classes.filtername}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </AppBar>
      <GridList cellHeight={cellHeight} cols={getGridListCols()} className={classes.gridList} spacing={20}>
        {filteredBlogs.map((tile: any) => (
          <GridListTile id={tile.id} key={tile.id}>
            <img src={tile.img} onClick={() => {openSingleBlog(tile)}} alt={tile.title} style={{ height: imgHeight, cursor: 'pointer' }} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              className={classes.gridListTileBar}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`}>
                  {icon(tile)}
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default AllBlogs;