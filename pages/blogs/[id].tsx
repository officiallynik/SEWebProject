import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from '../../styles/General.module.css';
import Blog from '../../components/blogs/singleBlog/blog';

const SingleBlog = () => {
    const router = useRouter()
    const { pid } = router.query

    const dummyContent = {
        id: 9,
        img: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
        title: 'Marina Beach',
        author: 'India',
        subtitle: 'Sub Title of a longer featured blog post',
        tags: ['Farmers', 'Agriculture'],
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem donec massa. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Vitae nunc sed velit dignissim sodales. Ac turpis egestas sed tempus urna et pharetra pharetra massa. Morbi tristique senectus et netus et malesuada. Dignissim convallis aenean et tortor at risus. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque viverra mauris in aliquam sem fringilla ut. Non odio euismod lacinia at quis risus sed. Orci porta non pulvinar neque. Donec et odio pellentesque diam volutpat commodo. Consequat semper viverra nam libero justo laoreet sit. Non tellus orci ac auctor augue mauris augue. Mauris in aliquam sem fringilla ut morbi tincidunt. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Blandit cursus risus at ultrices.Molestie ac feugiat sed lectus vestibulum mattis. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Lorem sed risus ultricies tristique nulla aliquet. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Facilisi morbi tempus iaculis urna id. Sem nulla pharetra diam sit amet nisl. Ut sem nulla pharetra diam. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Consequat semper viverra nam libero justo laoreet sit. Est sit amet facilisis magna etiam tempor orci eu lobortis. Mauris augue neque gravida in. Ultrices sagittis orci a scelerisque. In fermentum et sollicitudin ac. Cum sociis natoque penatibus et magnis dis parturient montes nascetur. Nunc mattis enim ut tellus.Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Accumsan sit amet nulla facilisi morbi tempus. Amet cursus sit amet dictum. Elementum curabitur vitae nunc sed velit. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ut porttitor leo a diam sollicitudin tempor id. In arcu cursus euismod quis viverra. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Arcu ac tortor dignissim convallis. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Sed elementum tempus egestas sed sed risus pretium. Nunc lobortis mattis aliquam faucibus purus in. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Risus nec feugiat in fermentum posuere urna nec. Tortor id aliquet lectus proin nibh nisl. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum.Vel pretium lectus quam id leo in vitae. Quis hendrerit dolor magna eget est lorem ipsum dolor. Praesent elementum facilisis leo vel fringilla est ullamcorper. A erat nam at lectus urna. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Sed felis eget velit aliquet sagittis id consectetur purus ut. Tellus mauris a diam maecenas sed. Laoreet non curabitur gravida arcu ac tortor. Nunc faucibus a pellentesque sit amet porttitor. Elementum curabitur vitae nunc sed velit. Id interdum velit laoreet id donec ultrices tincidunt. Risus nec feugiat in fermentum posuere. Aliquam sem fringilla ut morbi tincidunt. In egestas erat imperdiet sed euismod. Elit ullamcorper dignissim cras tincidunt lobortis feugiat.Et leo duis ut diam quam nulla porttitor. Nisl tincidunt eget nullam non nisi est. Non diam phasellus vestibulum lorem. Sollicitudin tempor id eu nisl nunc mi ipsum. Quis auctor elit sed vulputate mi sit. Sapien et ligula ullamcorper malesuada proin. Cras pulvinar mattis nunc sed blandit libero volutpat sed cras. In egestas erat imperdiet sed euismod nisi porta. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Nam libero justo laoreet sit. Vel facilisis volutpat est velit egestas. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Accumsan sit amet nulla facilisi morbi tempus. Diam sollicitudin tempor id eu nisl nunc. Amet justo donec enim diam vulputate ut pharetra sit amet. Facilisi morbi tempus iaculis urna id volutpat. Feugiat vivamus at augue eget arcu dictum varius duis at. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo.',
        Date: '23 Nov 2020',
        fav: false,
    }

    return (
        <div>
            <AppBar position="relative" style={{ background: "linear-gradient(314deg, #63a91f 0%, #1a512e 74%", zIndex: 1 }}>
                <div
                    style={{display: "flex", justifyContent: "space-between"}}
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
                    blogId={9}
                />
            </div>
        </div>
    );
}

export default SingleBlog;