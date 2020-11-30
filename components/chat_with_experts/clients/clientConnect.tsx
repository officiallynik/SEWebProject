import { Button, FormControl, Grid, InputLabel, MenuItem, Select } from '@material-ui/core';
import React, { useState } from 'react';
import RTC from '../../../helpers/rtc';

import io from 'socket.io-client';

const ConnectionForm = (props) => {

    const [language, setLanguage] = useState("english");
    const [chatType, setChatType] = useState("text");

    const setConnection = async() => {
        // console.log("[RTC] expert_id:", props.expertId);

        // const peer = await RTC.initChannel(props.expertId);
        // console.log("[RTC] user_id:", peer.id);

        const socket = io.connect("localhost:5000");

        const clientSocket = io.connect("localhost:5000/clients", {
            query: {
                clientId: props.clientId,
                clientName: props.clientName,
                clientType: props.clientType,
                language: language,
                chatType: chatType
            }
        });

        clientSocket.on("expertConnected", data => {
            console.log(data);
            props.setConnected();
        });
    }

    return (
        <form>
            <Grid container spacing={1} style={{padding: "10px"}}>
                <Grid item xs={12} sm={6}>
                    <FormControl required fullWidth>
                        <InputLabel variant="outlined" id="demo-simple-select-required-label">Language</InputLabel>
                        <Select
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            variant="outlined"
                            label="Dealer Type"
                            onChange={(e) => {
                                switch (e.target.value) {
                                    case 10:
                                        setLanguage("english");
                                        return;
                                    case 20:
                                        setLanguage("hindi");
                                        return
                                }
                            }}
                            value={language === "english"? 10: 20}
                        >
                            <MenuItem value={10}>Engilsh</MenuItem>
                            <MenuItem value={20}>Hindi</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl required fullWidth>
                        <InputLabel variant="outlined" id="demo-simple-select-required-label">Chat Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            variant="outlined"
                            label="Dealer Type"
                            onChange={(e) => {
                                switch (e.target.value) {
                                    case 10:
                                        setChatType("text");
                                        return;
                                    case 20:
                                        setChatType("voice");
                                        return;
                                }
                            }}
                            value={chatType === "text"?10: 20}
                        >
                            <MenuItem value={10}>Text Only</MenuItem>
                            <MenuItem value={20}>Text + Voice</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item>
                    <Button variant="outlined"
                        onClick={() => setConnection()}
                    >
                        Connect with Expert
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default ConnectionForm;