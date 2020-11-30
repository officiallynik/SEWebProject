import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import Link from 'next/link'

import styles from '../../styles/General.module.css';
import Blog from '../../components/blogs/singleBlog/blog';
import Axios from '../../helpers/axios';

const SingleBlog = ({ blog }) => {

    return (
        <div>
            <AppBar position="relative" style={{ background: "linear-gradient(314deg, #63a91f 0%, #1a512e 74%", zIndex: 1 }}>
                <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Toolbar>
                        <Link href="/blogs">
                            <div
                                className={styles.backbtn}
                            >
                                <ArrowBack />
                            </div>
                        </Link>
                    </Toolbar>

                    <Toolbar>
                        <Typography variant="h6">
                            Blog Page
                        </Typography>
                    </Toolbar>

                </div>
            </AppBar>
            <div>
                <Blog
                    blogId={blog.id}
                    blog={blog}
                />
            </div>
        </div>
    );
}

SingleBlog.getInitialProps = async ({ query }) => {
    const blogId = query.id
    console.log(blogId)
    const res = await Axios.get("/blogs/single/" + blogId)
    const { data } = res;
    console.log("[single blog page]", data)
    return {
        blog: {
            id: data.id,
            image: "https://fathomless-tundra-87077.herokuapp.com/images/" + data.thumbnail,
            title: data.title,
            author: 'Expert',
            subtitle: data.subtitle,
            tags: data.tags,
            content: data.content,
            Date: new Date(data.createdAt).toDateString(),
            fav: false,
            upvotes: data.meta.upv,
            favs: data.meta.favs,
        }
    }
}

export default SingleBlog;