# Hi! This project is a Express.js projects

This means if you are interested on this project, you need follow the stpes below, to execute the server.js on your own computer to see the implement.

1. Download the Git Bash on [Git for Windows](https://gitforwindows.org/)
2. Install Node.js via [Node.js](https://nodejs.org/en/) or [NPM](https://www.npmjs.com/)
3. You can execute the command node -v to see the current version of Node, if it succeed.
4. Execute node server.js, and you can see the implement!


---
Below is my personal note

## My personal note for Express.js and Node.js

With the command `node filename` to start a javascript written in a *filename*

CRUD is not necessary for all API, depend on situations.

To import the Express module and invoke the express function

    const express = require('express');
    const app = express();
    
The app variable actually is a instance of express, which has its own properties and methods, so we can specify the behavior of server.


Point a port to the server and a callback function which will log a message on CLI when the server start listening.

```
const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
```

Port numbers are in range 0 - 65535 (there is a port 0) and Ports 0 - 1023 are known as System Ports.

### About Routes

Routes define the control flow for requests based on the request’s path and HTTP verb.

There are several HTTP verb on API, and the common four are Get Post Put and Delete.
`localhost:4001/monsters` means a request sent to **localhost:4001** with a path **monsters**

Get to retrieve resource from servers, Post for creating, Put is to update and Delete is for deletion.

An example of Get routes and its callback function.
```
app.get('/moods', (req, res, next) => {
  // Here we would send back the moods array in response
});
```
Req and res mean the two objects, Request and response, which will be passed in the callback function.
If no routes are matched on a client request, the Express server will handle sending a 404 Not Found response to the client.

To tell the server that render that index.html file and implement all those static CSS and JS files related to it

```
app.use(express.static('public'));
```

### About Response

One request one response
