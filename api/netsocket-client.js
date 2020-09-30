// File: api/netsocket-client.js
// Date: 05/07/2020
// Note: NetSockets: How to go real-time stream I/O with Node.js and React.jsx
//..............................................................................
const net = require('net');

// ___ connect to ta server @ port 9898
const client = net.createConnection({ port: 9898 }, () => {
    console.log('CLIENT:  I am connected to the server');
    client.write('CLIENT: Hello this is client!');
});

const data = "Hello";
client.on('data', (data) => {
    console.log(data.toString());
    client.end();
});

client.on('end', () => {
    console.log('CLIENT: I am disconnected from the server.');
});


// eof
