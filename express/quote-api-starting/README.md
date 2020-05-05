# Hi! This project is a Express.js projects

This means if you are interested on this project, you need follow the stpes below, to execute the server.js on your own computer to see the implement.

1. Download the Git Bash on [Git for Windows](https://gitforwindows.org/)
2. Install Node.js via [Node.js](https://nodejs.org/en/) or [NPM](https://www.npmjs.com/)
3. You can execute the command node -v to see the current version of Node, if it succeed.
4. Execute node server.js, and you can see the implement!


---
Below is my personal note

## My personal note for Express.js and Node.js

**CRUD** (Create, Read, Update, and Delete)

```
Create ---------> POST
Read -----------> GET
Update --------> PUT
Delete ---------> DELETE
```
Does a RESTful API requires its endpoints have full CRUD functionality? [Answer](https://discuss.codecademy.com/t/do-we-always-use-all-methods-in-an-api/402421/2)

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

One request one response.
There are several useful methods on two objects, req and res, which mean response will be sent later by our API and the resquest recieved by our API.

To send information we want send, we can use:
```
app.get('/monsters', (req, res, next) => {
  res.send(monsters);
});
```
Request sometime means the query sent by our client, for we are building API here, the request now means the queries we receieved by our API.
Requests matches by order, from first to last, and it must match exactly the same path written in the route.

### About Named route parameters, looking for some thing specific.

Parameters are route path segments that begin with : in their Express route definitions. They act as wildcards, matching any text at that path segment. 

For example:
```
/monsters/:id will match both/monsters/1 and /monsters/45
```
```
const monsters = { hydra: { height: 3, age: 4 }, dragon: { height: 200, age: 350 } };
// GET /monsters/hydra
app.get('/monsters/:name', (req, res, next) => {
  console.log(req.params) // { name: 'hydra' };
  res.send(monsters[req.params.name]);//{ height: 3, age: 4 }
});
```
Not all APIs implement route parameters but when they do, it most commonly does not access sensitive data, unless it also requires to have an API key to access the response from such route.


### Setting Response code

Use status() method on res object to send back the status code to client, and chain the send() method after it.

```
const monsterStoreInventory = { fenrirs: 4, banshees: 1, jerseyDevils: 4, krakens: 3 };
app.get('/monsters-inventory/:name', (req, res, next) => {
  const monsterInventory = monsterStoreInventory[req.params.name];
  if (monsterInventory) {
    res.send(monsterInventory);
  } else {
    res.status(404).send('Monster not found');
  }
});
```
Status codes help people trying to access the response to know if something went wrong or is missing, and it helps us as developers to debug our calls or API depending on the response code.

There are five types of status codes:
1. Starting with **1xx** are informational responses, for example: 102 it is being processed.
2. Starting with **2xx** are success responses, like 200 ok response, that lets us know that the data we received or that the process we requested was successfully done.
3. Starting with **3xx** are redirection related responses, they declared if the endpoint you requested had moved and that you are being redirected there 301.
4. Starting with **4xx** are responses with client errors, like the well known 404 page or content not found, or the detested **403** forbidden that lets us know that the request was properly done but we do not have permissions to access its content.
5. And starting with **5xx**, which are responses related to server errors, which we as developers also have to keep an eye for, like **502** bad gateway, which lets us know that there is a problem with how our server is sending the response.

The more detail we can be with our res.status() responses, the easier and more productive it will be for us and other developers to upkeep our API or server.


### How to update some thing in database? Using query string.

Query string is almost the most common way you will encounter in your coding travel while connecting with some API.

They are indicated with a `?` character. 
For instance
```
/monsters/1?name=chimera&age=1
```
The query string is `name=chimera&age=1` and the path is `/monsters/1/`
