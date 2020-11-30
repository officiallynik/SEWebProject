import { Button, FormControl, Grid, InputLabel, MenuItem, Select } from '@material-ui/core';
import React, { useState } from 'react';
import RTC from '../../../helpers/rtc';

import io from 'socket.io-client';

const ConnectionForm = (props) => {

    const [language, setLanguage] = useState("english");
    const [chatType, setChatType] = useState("text");

    const [client, setClient] = useState(null);

    const setChannel = async () => {
        console.log("[RTC] expert_id:", props.expertId);

        const peer = await RTC.initChannel(props.expertId);
        console.log("[RTC] user_id:", peer.id);

        const socket = io.connect("localhost:5000");

        const expertSocket = io.connect("localhost:5000/experts", {
            query: {
                expertId: props.expertId,
                expertName: props.expertName,
                language: language,
                chatType: chatType
            }
        });

        expertSocket.on("userConnected", data => {
            console.log("userdata", data);
            setClient(data);
        });

        props.onConnection();
    }

    return (
        // <form>
        //     <Grid container spacing={3}>
        //         <Grid item xs={12} sm={6}>
        //             <FormControl required fullWidth>
        //                 <InputLabel variant="outlined" id="demo-simple-select-required-label">Language</InputLabel>
        //                 <Select
        //                     labelId="demo-simple-select-required-label"
        //                     id="demo-simple-select-required"
        //                     variant="outlined"
        //                     label="Dealer Type"
        //                     onChange={(e) => {
        //                         switch (e.target.value) {
        //                             case 10:
        //                                 setLanguage("english");
        //                                 return;
        //                             case 20:
        //                                 setLanguage("hindi");
        //                                 return
        //                         }
        //                     }}
        //                     value={language === "english"? 10: 20}
        //                 >
        //                     <MenuItem value={10}>Engilsh</MenuItem>
        //                     <MenuItem disabled={chatType === "text"} value={20}>Hindi</MenuItem>
        //                 </Select>
        //             </FormControl>
        //         </Grid>
        //         <Grid item xs={12} sm={6}>
        //             <FormControl required fullWidth>
        //                 <InputLabel variant="outlined" id="demo-simple-select-required-label">Chat Type</InputLabel>
        //                 <Select
        //                     labelId="demo-simple-select-required-label"
        //                     id="demo-simple-select-required"
        //                     variant="outlined"
        //                     label="Dealer Type"
        //                     onChange={(e) => {
        //                         switch (e.target.value) {
        //                             case 10:
        //                                 setChatType("text");
        //                                 setLanguage("english")
        //                                 return;
        //                             case 20:
        //                                 setChatType("voice");
        //                                 return;
        //                         }
        //                     }}
        //                     value={chatType === "text"?10: 20}
        //                 >
        //                     <MenuItem value={10}>Text Only</MenuItem>
        //                     <MenuItem value={20}>Text + Voice</MenuItem>
        //                 </Select>
        //             </FormControl>
        //         </Grid>
        //         <Grid item>
        //             <Button variant="outlined"
        //                 onClick={() => setChannel()}
        //             >
        //                 Connect
        //             </Button>
        //         </Grid>
        //     </Grid>
        // </form>
            <div style={{padding: "15px"}}>
                Taken down due to peerjs ssr error in nextjs in production, will be back soon 
            </div>
    );
};

export default ConnectionForm;