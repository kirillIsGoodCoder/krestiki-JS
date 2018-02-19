var server = require("./server");
var contentManager = require("./contentManager");

server.startServer(contentManager.getContent);