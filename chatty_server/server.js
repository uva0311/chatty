const express = require('express');
const WebSockets = require('ws');
const SocketServer = WebSockets.Server;
const uuid = require('uuid');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()

   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

// broadcast msg object to all clients
wss.broadcastJSON = (obj) => wss.broadcast(JSON.stringify(obj));

wss.broadcast = (data) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSockets.OPEN) {
      client.send(data);
    }
  });
};

// assign random color to users
const randomColor = () => {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
};

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  console.log('Client connected');

  // send online user counter to client
  // including data type therefore client side can differentiate
  // this object from regular msg object
  let userCounter = {
    type: 'userCount',
    onlineUsers: wss.clients.size
  };

  wss.broadcastJSON(userCounter);

  let colorObj = {
    type: "setColor",
    userColor: randomColor()
  }
  ws.send(JSON.stringify(colorObj));

  ws.on('message', data => {
    console.log('Got message from the client');

    // setup msg data object to send to client
    const objData = JSON.parse(data);

    const matches = objData.content.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpe?g|gif|png)/);

    // convert the url to the actual image if the url directs to an image file
    if(matches) {
      objData.content = `<img src=${objData.content} width="50%"></img>`;
    }



    //let color = (objData.userColor) ? objData.userColor : randomColor();

    const objToBroadcast = {
      id: uuid(),
      content: objData.content,
      username: objData.username,
      userColor: objData.userColor
    };

    switch(objData.type) {
      case 'postMessage':
        objToBroadcast.type = 'incomingMessage';
        wss.broadcastJSON(objToBroadcast);
        break;
      case 'postNotification':
        objToBroadcast.type = 'incomingNotification';
        wss.broadcastJSON(objToBroadcast);
        break;
      default:
        // show an error in the console if the message type is unknown
        throw new Error("Unknown event type " + objData.type);
    }
  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    console.log('Client disconnected');

    // account for the disconnect of online user
    userCounter = {
      type: 'userCount',
      onlineUsers: wss.clients.size
    };

    wss.broadcastJSON(userCounter);

  });
});