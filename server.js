var http = require("http");
var url = require("url");
var querystring = require('querystring');
var myArray = require('./lib/myArray');


function startServer(getContent) {
  function onRequest(request, response) {
    var urlObj = url.parse(request.url);          
    var pathname = urlObj.pathname;
//urlObj.search.slice(1,urlObj.search.length).parse();
   // console.log('результат'+request.url);
   // console.log("Request for " + urlObj.pathname + " received.");
    //console.log('hostname '+ urlObj.hostname);
    //console.log('port '+ urlObj.port);
    //console.log("Request for " + pathname + " received.");
//        var url = null;
//    if ( urlObj.search ){
//          var coords = querystring.parse(urlObj.search.slice(1,urlObj.search.length));
    //    console.log('вывод URL : '+urlObj.search);
//    }
       let gameParams = null;
    //console.log('Вывод  '+urlObj.search );
      if( urlObj.search !== null){
         gameParams = querystring.parse(urlObj.search.slice(1,urlObj.search.length));
      } 
      if(gameParams === null){
	console.log('server gameParams === null');
      }
      else if (myArray.keyExist( gameParams , 'mode' ) !== true){
    	    console.log('server key mode undefined');
    }else if (myArray.keyExist( gameParams , 'mode' )){
	console.log('server gameParams.mode:  '+gameParams.mode);
    }
    //console.log(urlObj.search);
    response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    let content = getContent( pathname , gameParams);
    response.write(content);
    response.end();
    //console.log('Проверка: '+urlObj.pathname);
  }

  http.createServer(onRequest).listen(8080);
  console.log("Server has started.");
}


exports.startServer = startServer;