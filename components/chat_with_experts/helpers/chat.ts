// import io from 'socket.io-client';

// const url = process.env.NODE_ENV === "production"? "https://fathomless-tundra-87077.herokuapp.com": "http://localhost:5000";

// const setup = () => {
//     const Peer= require('peerjs/dist/peerjs');
//     const socket = io(url);
//     const peer = connectToPeerServer(Peer.peerjs.Peer);

//     return [socket, peer];
// }

// const connectToPeerServer = (Peer) => {
//     const peer = new Peer(undefined, {
//         host: process.env.NODE_ENV === "production"? "fathomless-tundra-87077.herokuapp.com":
//                                         "localhost",
//         path: "/chat-with-experts",
//         secure: process.env.NODE_ENV === "production"? true: false,
//         port: process.env.NODE_ENV === "production"? 443: 5000
//     });

//     return peer;
// }

// const handleChatSystem = () => {
//     const [socket, peer] = setup();

//     peer.on('open', id => {
//         console.log("peerjs id:", id);
//     });

//     let expert = null;
//     let conn = null;
//     socket.on('expert-connected', expert => {
//         console.log("expert connected", expert);
//     });

//     socket.on('expert-disconnected', () => {
//         console.log("expert disconnected");
//     });

//     const onExpertConnected = (expertId) => {
//         // connected logic
//         conn = peer.connect(/* expert_id */);

//         conn.on('open', () => {
//             // receive messages
//             conn.on('data', data => {
//                 console.log(data);
//             })
            
//             // send message
//             conn.send("Hello Expert!");
//         })
//     }

//     const onExpertDisconnected = () => {
//         // disconnected logic
//     }
// }

// export default handleChatSystem;
export default null;