// File: api/netsocket-server.js
// Date: 05/07/2020
// Note: NetSockets: How to go real-time stream I/O with Node.js and React.jsx
//..............................................................................
console.log( "Mounting netsocket-server.js..." );

const net = require('net');

// ___ create a server object ___
const server = net.createServer((socket) => {
    socket.on('data', (date) => {
        console.log(data.toString());
    });

    socket.write('SERVER: Hello! This is server speaking.');
    socket.end('SERVER: Closing connection now.');
}).on('error', (err) => {
            console.error(err);
        });

// ___ open server on port 9898
server.listen(9898, () => {
    console.log('opened server on ', server.address().port);
});

// eof