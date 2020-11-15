import io from 'socket.io-client';

const url = process.env.NODE_ENV === "production"? "https://fathomless-tundra-87077.herokuapp.com": "http://localhost:5000";

const socketioSetup = () => {
    const Peer= require('peerjs/dist/peerjs');
    const socket = io(url);
    const peer = connectToPeer(Peer.peerjs.Peer);

    return [socket, peer];
}

const connectToPeer = (Peer) => {
    const peer = new Peer(undefined, {
        host: process.env.NODE_ENV === "production"? "fathomless-tundra-87077.herokuapp.com":
                                        "localhost",
        path: "/chat-with-experts",
        secure: process.env.NODE_ENV === "production"? true: false,
        port: process.env.NODE_ENV === "production"? 443: 5000
    });

    return peer;
}

export default socketioSetup;