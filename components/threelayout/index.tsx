import React, { useCallback, useEffect, useState } from 'react';

import styles from '../../styles/Threelayout.module.css';
import MainSection from '../mainsection';
import SideBar from '../sidebar';
import TopBar from '../topbar';

import useWindowSize from '../../helpers/getSize';

const ThreeLayout = (props) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(true);

    const handleSideBarBtn = useCallback(() => {
        setIsSideBarOpen((prevState) => {
            return (!prevState);
        });
    }, []);

    const fullScreen = (
        <div className={styles.threelayout}>
            <TopBar>
                {props.topbar}
            </TopBar>
            <div className={styles.twolayout}>
                <div className={styles.sidebar}>
                    <SideBar sidebarOpt={props.sidebarOpt} handleSideBarOpt={props.handleSideBarOpt}>
                        {props.sidebar}
                    </SideBar>
                </div>
                <div className={styles.divider} />
                <div className={styles.mainsection}>
                    <MainSection>
                        {props.mainsection}
                    </MainSection>
                </div>
            </div>
        </div>
    );

    const withOutSideBar = (
        <div className={styles.threelayout}>
            <TopBar handleSideBarOpen={handleSideBarBtn} sidebarname={props.sidebarname}>
                {props.topbar}
            </TopBar>
            <div className={styles.twolayout}>
                <div className={styles.mainsection}>
                    <MainSection>
                        {props.mainsection}
                    </MainSection>
                </div>
            </div>
        </div>
    );

    const sideBarOnly = (
        <div className={styles.threelayout}>
            <div className={styles.twolayout}>
                <div className={styles.sidebar}>
                    <SideBar 
                        handleSideBarClose={handleSideBarBtn} 
                        sidebarOpt={props.sidebarOpt} 
                        handleSideBarOpt={props.handleSideBarOpt} 
                        sidebarClose={props.sidebarClose}
                    >
                        {props.sidebar}
                    </SideBar>
                </div>
            </div>
        </div>
    );

    useEffect(() => {
        console.log("closing")
        setIsSideBarOpen(false);
    }, [useWindowSize().width > 760 && isSideBarOpen])

    return (
        useWindowSize().width > 760?
        fullScreen:
        isSideBarOpen? sideBarOnly:
        withOutSideBar
    );
};

export default React.memo(ThreeLayout);