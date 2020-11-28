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
import clsx from 'clsx';
import FilterListIcon from '@material-ui/icons/FilterList';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import useWindowSize from '../../helpers/getSize';

import Router from 'next/router';
import Axios from '../../helpers/axios';
import { CircularProgress, LinearProgress } from '@material-ui/core';

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

	const [blogs, setBlogs] = useState([]);
	const [loadError, setLoadError] = useState(false);

	useEffect(() => {
		setBlogs([]);
		setLoadError(false);

		Axios.get("/blogs/view/all")
		.then((res) => {
			const { data } = res;

			const blogsData = [];
			data.forEach(blog => {
				blogsData.push({
					id: blog._id,
					img: `https://fathomless-tundra-87077.herokuapp.com/images/${blog.thumbnail}`,
					title: blog.title,
					author: 'Expert',
					subtitle: blog.subtitle,
					tags: blog.tags,
					content: blog.content,
					Date: new Date(blog.createdAt).getDate(),
					fav: false,
				})
			})

			setBlogs(blogsData);
		})
		.catch(err => {
			console.log(err);
			setLoadError(true);
		})
	}, [])

	// get all blogs from backend

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
	const [checkedTags, setCheckedTags] = useState(Array);

	const favBlogsHandler = () => {
		if (checkedTags.length === 0) {
			if (isFavBlogs === true) {
				setFilteredBlogs(blogs.filter(blog => blog.fav === true));
			}
			else {
				setFilteredBlogs(blogs);
			}
		}
		else {
			if (isFavBlogs === true) {
				setFilteredBlogs(blogs.filter((blog) => {
					if (blog.fav === true) {
						var flag = 0;
						blog.tags.map((tag) => {
							checkedTags.map((checktag) => {
								if (tag === checktag) {
									flag = 1;
								}
							})
						})
						if (flag === 1) {
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
							if (tag === checktag) {
								flag = 1;
							}
						})
					})
					if (flag === 1) {
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
		if (e.checked === false) {
			setCheckedTags([
				...checkedTags, e.tag
			])
		} else {
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
		Router.push(`/blogs/${e.id}`);
	}

	return (
		<div className={classes.root}>
			<AppBar position="relative" style={{ background: "linear-gradient(314deg, #63a91f 0%, #1a512e 74%", position: "fixed", top: "45px", zIndex: 1 }}>
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
											onChange={() => { handleFilterChange(filter) }}
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
			{
				blogs.length === 0? <div style={{marginTop: "64px", width: "100%", zIndex: 100}}><LinearProgress /></div>: blogs.length === 0 && loadError? 
				(<div>
					Something went wrong please visit again later...
				</div>):(
				<GridList cellHeight={cellHeight} cols={getGridListCols()} className={classes.gridList} spacing={20}>
					{filteredBlogs.map((tile: any) => (
						<GridListTile id={tile.id} key={tile.id}>
							<img src={tile.img} onClick={() => { openSingleBlog(tile) }} alt={tile.title} style={{ height: imgHeight, cursor: 'pointer' }} />
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
				)
			}
		</div>
	);
}

export default AllBlogs;