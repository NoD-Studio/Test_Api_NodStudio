import socketIOClient from 'socket.io-client';

const socket = socketIOClient(`${process.env.REACT_APP_API_URL}`);

export default socket;
