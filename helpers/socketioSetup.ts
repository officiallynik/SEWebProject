import { env } from 'process';
import io from 'socket.io-client';

const uri = "http://localhost:5000";

const socketioSetup = (userObj: any) => {
    // console.log(user.id, user.name);
    return io(uri, {
        query: {
            id: userObj.id,
            name: userObj.name
        }
    });
};

export default socketioSetup;