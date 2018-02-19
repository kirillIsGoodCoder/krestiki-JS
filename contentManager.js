var fs = require('fs');
var util = require('util');
var gameManager = require('./gameManager');
var myArray = require('./lib/myArray');

function getContent(pathname, gameParams) {
    if(gameParams === null){
	console.log('contentManager gameParams === null');
} else if (myArray.keyExist( gameParams , 'mode' ) !== true){
	console.log('contentManager key mode undefined');
} else if (myArray.keyExist ( gameParams , 'mode' )){
	console.log('contentManager gameParams.mode:  '+gameParams.mode);
}
  //console.log("About to route a request for " + pathname);
  gameManager.executeOperation(pathname, gameParams);
  let mas = gameManager.getField();
  let mas1 = {
        1: {1: null, 2: null, 3: null},
        2: {1: null, 2: null, 3: null},
        3: {1: null, 2: null, 3: null}
    };
  let lengthX = ( Object.keys( mas ).length );
  for (let i=1; i < lengthX + 1; i++ ) {
        let lengthY = ( Object.keys( mas[i] ).length );
        for (let j = 1; j < lengthY + 1; j++ ){
            if( mas[i][j] === null){
                mas1[i][j] = '';
            }
            if( mas[i][j] === 1) {
                mas1[i][j] = 'x';
            }
            
            if( mas[i][j] === 0) {
                mas1[i][j] = '0';
            }
        }
    }
  var content = fs.readFileSync('public/index.html', 'utf8');
  var message = gameManager.getMessage();
    if ( gameManager.gameOver() === true ){
        content = util.format (content, 'disabled');
    }else {
        content = util.format (content, 'fake')
    }
    for (let i=1; i < lengthX + 1; i++ ) {
        let lengthY = ( Object.keys( mas[i] ).length );
        for (let j = 1; j < lengthY + 1; j++ ){
            content = util.format (content, mas1[j][i]);
 //           console.log(mas1[i][j]);
        }
    }
    content = util.format (content, message);
  return content;
}
    
exports.getContent = getContent; 