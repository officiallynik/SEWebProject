import React, { useEffect, useState } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import { useWindowSize } from 'use-window-size-hook';

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
    }
  }),
);

interface props {
  isExpert: boolean;
  blogs: any;
}

function AllBlogs(props: props) {

  const classes = useStyles();
  const [blogs, setBlogs] = useState(props.blogs);
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const [isFavBlogs, setIsFavBlogs] = useState(false);
  const wid = useWindowSize();
  const [cellHeight, setCellHeight] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);

  const favBlogsHandler = () => {
    if (isFavBlogs === true) {
      setFilteredBlogs(blogs.filter(blog => blog.fav === true));
    }
    else {
      setFilteredBlogs(blogs);
    }
  }

  const icon = (e: any) => {
    if (e.fav === true) {
      return <StarIcon onClick={() => {
        setBlogs(blogs.map((item: any) => {
          if (item.id === e.id) {
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

  const newBlogButton = () => {
    if (props.isExpert === true) {
      return <Button
        className={classes.newBlogButton}
      >
        New Blog
    </Button>
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Blog Page
          </Typography>
          {newBlogButton()}
          <Switch size="small" onChange={isFavHandler} aria-label="fav switch" />
          <Typography variant="subtitle2" className={classes.state}>
            {state()}
          </Typography>
        </Toolbar>
      </AppBar>
      <GridList cellHeight={cellHeight} cols={getGridListCols()} className={classes.gridList} spacing={20}>
        {filteredBlogs.map((tile:any) => (
          <GridListTile id={tile.id} key={tile.id}>
            <img src={tile.img} alt={tile.title} style={{ height: imgHeight, cursor: 'pointer' }} />
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
