var myMath = require('./lib/myMath');
var myArray = require('./lib/myArray');

let playerName, gameField;
const KRESTIK = 1;
const NOLIK = 0;
const EMPTY_CELL = null;
const GAME_MODE_AI = 'playAI';
const GAME_MODE_FR = 'playFR';
let gameMode;

var gameOperation = {};
gameOperation['/reset'] = reset;
gameOperation['/move'] = makeMove;



function makeMove(gameParams) {
    gameField = getField();
    if (playerName === KRESTIK) {
        gameField[gameParams.x][gameParams.y] = KRESTIK;
        playerName = NOLIK;
        if( gameMode === GAME_MODE_AI && !gameOver() ){
            computerMove(playerName);
            playerName = KRESTIK;
        }
    } else if (playerName === NOLIK) {
        gameField[gameParams.x][gameParams.y] = NOLIK;
        playerName = KRESTIK;
    }
  //console.log(searchEmptyFields());
}

function computerMove (playerName) {
        let mas = searchEmptyFields();
          let c = myMath.random(mas.length);
          let x = mas[c]['x'];
          let y = mas[c]['y'];
          gameField[x][y] = playerName;          
}

function getVisionField () {
    let mas = getField();
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
}

function noFreeCells () {
    let mas = getField();
    let lengthX = ( Object.keys( mas ).length );
    //console.log('lengthX'+lengthX);
    for (let i=1; i < lengthX + 1; i++ ) {
        let lengthY = ( Object.keys( mas[i] ).length );
     //   console.log('lengthY'+lengthY);
        for (let j = 1; j < lengthY + 1; j++ ){
       //     console.log('mas[i][j] "'+mas[i][j]+'" [i]  '+i+' [j] '+j);
            if( mas[i][j] === null){
                return false;
            }
        }
    } return true; 
}

function draw () {
       //console.log("noFreeCells()"+noFreeCells());
       
    if ( noFreeCells() && !winTest( NOLIK ) && !winTest( KRESTIK ) ){
        return true;
    }
    return false;
}


function gameOver(){
    let count = 0;
    if ( winTest (KRESTIK) || winTest (NOLIK) || draw() ){
//        console.log('draw()'+draw());
//        console.log('winTest( NOLIK )'+winTest( NOLIK ));
//        console.log('winTest( KRESTIK )'+winTest( KRESTIK ));
        return true;
    }
    return false;
}

function reset( gameParams ) {
    resetField();
    if(gameParams === null){
	console.log('gameManager gameParams === null');
    } else if (myArray.keyExist( gameParams , 'mode' ) !== true){
        console.log('gameManager key mode undefined');
    } else if (myArray.keyExist( gameParams , 'mode' )){
        console.log('gameManager gameParams.mode:   '+gameParams.mode);
    }
    if(gameParams !== null){
    //if (myArray.keyExists( gameParams , 'mode' )){      
        switch(gameParams.mode){
            case GAME_MODE_FR:
                 gameMode = GAME_MODE_FR;
                break;
            case GAME_MODE_AI:
                gameMode = GAME_MODE_AI;
                break;
        }
    //}  
    }
    console.log('gameManager gameMode'+gameMode);
    playerName = 1;
}

function getField() {
    if (gameField === undefined) {
        resetField();
    }
   //console.log(gameField);
    return gameField;
}

function searchEmptyFields () {
    let searchField = getField();
    let mas1 = [];
    let lengthX = ( Object.keys( searchField ).length );
  for (let i=1; i < lengthX + 1; i++ ) {
        let lengthY = ( Object.keys( searchField[i] ).length );
        for (let j = 1; j < lengthY + 1; j++ ){
            if( searchField[i][j] === null){
                mas1.push({'x': i , 'y': j});   
            }
            
        }
    }
    //console.log('Результат функции :  ' +mas1);
    return mas1;
}   

function getMessage() {
    let  textName = '';
    if( gameOver() ){
        if( winTest( KRESTIK) ){
            return "Победил Крестик";
        }
        if( winTest( NOLIK ) ){
            return "Победил Нолик";
        }
        if( draw() ){
            return "Ничья";
        }
    }
    if ( playerName === KRESTIK){
        textName = 'Крестик';
    }else if ( playerName === NOLIK ){
        textName = 'Нолик';
    }
    return "Ход игрока " + textName;
}

function resetField() {
    gameField = {
        1: {1: null, 2: null, 3: null},
        2: {1: null, 2: null, 3: null},
        3: {1: null, 2: null, 3: null}
    };
    return gameField;
}

function executeOperation(operation, gameParams) {
    if (typeof gameOperation[operation] === "function") {
        gameOperation[operation](gameParams);
    }
    //console.log('exec Operation');
    //console.log(gameField);
}

function winTest(playerName) {
    if (gameField[1][1] === playerName && gameField[2][2] === playerName && gameField[3][3] === playerName) {
        return true;
    }
    if (gameField[3][1] === playerName && gameField[2][2] === playerName && gameField[1][3] === playerName) {
        return true;
    }
    if (gameField[1][1] === playerName && gameField[2][1] === playerName && gameField[3][1] === playerName) {
        return true;
    }
    if (gameField[1][2] === playerName && gameField[2][2] === playerName && gameField[3][2] === playerName) {
        return true;
    }
    if (gameField[1][3] === playerName && gameField[2][3] === playerName && gameField[3][3] === playerName) {
        return true;
    }   
    //
    if (gameField[1][1] === playerName && gameField[1][2] === playerName && gameField[1][3] === playerName) {
        return true;
    }
    if (gameField[2][1] === playerName && gameField[2][2] === playerName && gameField[2][3] === playerName) {
        return true;
    }
    if (gameField[3][1] === playerName && gameField[3][2] === playerName && gameField[3][3] === playerName) {
        return true;
    }  
    return false;
}
//gameField[1][1] == gameField[2][2] && gameField[1][1] == gameField[3][3] && gameField[1][1] == KRESTIK

exports.executeOperation = executeOperation;
exports.makeMove = makeMove;
exports.reset = reset;
exports.getMessage = getMessage;
exports.getField = getField; 
exports.winTest = winTest;
exports.gameOver = gameOver;
exports.getVisionField = getVisionField;