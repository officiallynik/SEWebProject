import React from "react";
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Card from "./card";
import CardBody from "./cardbody";
import CardHeader from "./cardheader";

import styles from "./styles/tabs";

const useStyles = makeStyles(styles);

const CustomTabs = (props) => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, value) => {
        setValue(value);
    };
    const classes = useStyles();
    const { headerColor, plainTabs, tabs, title, rtlActive } = props;
    const cardTitle = classNames({
        [classes.cardTitle]: true,
        [classes.cardTitleRTL]: rtlActive
    });
    return (
        <Card plain={plainTabs}>
            <CardHeader color={headerColor} plain={plainTabs}>
                {title !== undefined ? <div className={cardTitle}>{title}</div> : null}
                <Tabs
                    value={value}
                    onChange={handleChange}
                    classes={{
                        root: classes.tabsRoot,
                        indicator: classes.displayNone,
                        scrollButtons: classes.displayNone
                    }}
                    variant="scrollable"
                    scrollButtons="auto"
                >
                    {tabs.map((prop, key) => {
                        var icon = {};
                        if (prop.tabIcon) {
                            icon = {
                                icon: <prop.tabIcon />
                            };
                        }
                        return (
                            <Tab
                                classes={{
                                    root: classes.tabRootButton,
                                    selected: classes.tabSelected,
                                    wrapper: classes.tabWrapper
                                }}
                                key={key}
                                label={prop.tabName}
                                {...icon}
                            />
                        );
                    })}
                </Tabs>
            </CardHeader>
            <CardBody>
                {tabs.map((prop, key) => {
                    if (key === value) {
                        return <div key={key}>{prop.tabContent}</div>;
                    }
                    return null;
                })}
            </CardBody>
        </Card>
    );
}

export default CustomTabs;