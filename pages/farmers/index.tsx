import { Button, Icon } from '@material-ui/core';
import { List, DoneAll, Favorite } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import Card from '../../components/dashboard/card';
import CardBody from '../../components/dashboard/cardbody';
import CardHeader from '../../components/dashboard/cardheader';
import CardIcon from '../../components/dashboard/cardicon';
import CustomTabs from '../../components/dashboard/tabs';
import CustomLinearProgress from '../../components/linearprogress';
import CollapsibleTable from '../../components/listtable';

const Farmers = () => {

    const [dashboard, setDashboard] = useState(<CustomLinearProgress />);

    useEffect(() => {
        setTimeout(() => {
            setDashboard(
                <div style={{padding: "45px 10px", display:"flex", justifyContent:"space-around"}}>
                        <div style={{width: "70%"}}>
                            <CustomTabs
                                title="Dashboard:"
                                headerColor="primary"
                                tabs={[
                                    {
                                        tabName: "My listings",
                                        tabIcon: List,
                                        tabContent: (
                                            <CollapsibleTable />
                                        )
                                    },
                                    {
                                        tabName: "Completed Orders",
                                        tabIcon: DoneAll,
                                        tabContent: (
                                            <div>
                                                <div>Hello World</div>
                                            </div>
                                        )
                                    }
                                ]}
                            />
                        </div>
                        <div style={{width: "25%"}}>
                            <Card profile>
                                <CardBody profile>
                                <h4>Farmer</h4>
                                <h3>Alec Thompson</h3>
                                <p>560105</p>
                                <p>Bangalore, Karnataka</p>
                                <Button variant="outlined" color="primary">
                                    Edit Profile
                                </Button>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardHeader color="warning" stats icon>
                                    <CardIcon color="warning">
                                        <Icon><Favorite /></Icon>
                                    </CardIcon>
                                    <div style={{float: "right", color: "black"}}>
                                        <p>Rating</p>
                                        <h3>
                                            35/50 <small>Stars</small>
                                        </h3>
                                    </div>
                                </CardHeader>
                            </Card>
                            <Card>
                                <CardHeader color="warning" stats icon>
                                <CardIcon color="warning">
                                    <Icon><DoneAll /></Icon>
                                </CardIcon>
                                <div style={{float: "right", color: "black"}}>
                                    <p>Completed Orders</p>
                                    <h3>
                                        40/43 <small></small>
                                    </h3>
                                </div>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
            )
        }, 3000);
    }, [])

    return dashboard;
};

export default Farmers;