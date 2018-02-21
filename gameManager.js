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
            computerMove2(playerName);
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
function computerMove2 (playerName) {
        //1.проверить что нолик выиграет.
        //2.если нолик выиграет,то ставить в клетку, в которой он выиграет.
        let possibleWinNolik = possibleWin(NOLIK);
        if (possibleWinNolik !== false){
            var mas = possibleWinNolik;
            let x = mas[0];
            let y = mas[1];
            gameField[x][y] = NOLIK;
        }else{
        //3.проверить что крестик выиграет.
        //4.если крестик выиграет, то ставить 0 в клетку, в которой крестик выиграет
        let possibleWinKrestik = possibleWin(KRESTIK);
        if (possibleWinKrestik !== false) {
            var mas = possibleWinKrestik;
            let x = mas[0];
            let y = mas[1];
            gameField[x][y] = NOLIK;
        }
        //5.ставить в центр, если занято - в угол, если занято - в сторону.
        else {
            let mas = drawNOLIK();
            let x = mas[0];
            let y = mas[1];
            gameField[x][y] = NOLIK;
        }
    }
}

function drawNOLIK () {
        if( gameField[2][2] === EMPTY_CELL){
            return [2,2];
        }else if (gameField[1][1] === EMPTY_CELL){
            return [1,1];
        }else if (gameField[1][3] === EMPTY_CELL){
            return [1,3];
        }else if (gameField[3][1] === EMPTY_CELL){
            return [3,1];
        }else if (gameField[3][3] === EMPTY_CELL){
            return [3,3];
        }else if (gameField[1][2] === EMPTY_CELL){
            return [1,2];
        }else if (gameField[3][2] === EMPTY_CELL){
            return [3,2];
        }else if (gameField[2][1] === EMPTY_CELL){
            return [2,1]
        }else if (gameField[2][3] === EMPTY_CELL){
            return [2,3];
        }
}


function possibleWin (playerName) {
    //проверка диагонали лево_верх - право_низ
    if (gameField[1][1] === playerName && gameField[2][2] === playerName && gameField[3][3] === EMPTY_CELL) {
        return [3,3];
    }
    if (gameField[1][1] === playerName && gameField[2][2] === EMPTY_CELL && gameField[3][3] === playerName) {
        return [2,2];
    }
    if (gameField[1][1] === EMPTY_CELL && gameField[2][2] === playerName && gameField[3][3] === playerName) {
        return [1,1];
    }
    //проверка диагонали право_верх - лево_низ
    if (gameField[3][1] === EMPTY_CELL && gameField[2][2] === playerName && gameField[1][3] === playerName) {
        return [3,1];
    }
    if (gameField[3][1] === playerName && gameField[2][2] === EMPTY_CELL && gameField[1][3] === playerName) {
        return [2,2];
    }
    if (gameField[3][1] === playerName && gameField[2][2] === playerName && gameField[1][3] === EMPTY_CELL) {
        return [1,3];
    }
    //проверка верхней линии
    if (gameField[1][1] === EMPTY_CELL && gameField[2][1] === playerName && gameField[3][1] === playerName) {
        return [1,1];
    }
    if (gameField[1][1] === playerName && gameField[2][1] === EMPTY_CELL && gameField[3][1] === playerName) {
        return [2,1];
    }
    if (gameField[1][1] === playerName && gameField[2][1] === playerName && gameField[3][1] === EMPTY_CELL) {
        return [3,1];
    }
    //проверка средней линии
    if (gameField[1][2] === EMPTY_CELL && gameField[2][2] === playerName && gameField[3][2] === playerName) {
        return [1,2];
    }
    if (gameField[1][2] === playerName && gameField[2][2] === EMPTY_CELL && gameField[3][2] === playerName) {
        return [2,2];
    }
    if (gameField[1][2] === playerName && gameField[2][2] === playerName && gameField[3][2] === EMPTY_CELL) {
        return [3,2];
    }
    //проверка нижней линии
    if (gameField[1][3] === EMPTY_CELL && gameField[2][3] === playerName && gameField[3][3] === playerName) {
        return [1,3];
    }
    if (gameField[1][3] === playerName && gameField[2][3] === EMPTY_CELL && gameField[3][3] === playerName) {
        return [2,3];
    }
    if (gameField[1][3] === playerName && gameField[2][3] === playerName && gameField[3][3] === EMPTY_CELL) {
        return [3,3];
    }
    //проверка левого столбца EMPTY_CELL
    if (gameField[1][1] === EMPTY_CELL && gameField[1][2] === playerName && gameField[1][3] === playerName) {
        return [1,1];
    }
    if (gameField[1][1] === playerName && gameField[1][2] === EMPTY_CELL && gameField[1][3] === playerName) {
        return [1,2];
    }
    if (gameField[1][1] === playerName && gameField[1][2] === playerName && gameField[1][3] === EMPTY_CELL) {
        return [1,3];
    }
    //проверка среднего столбца EMPTY_CELL
    if (gameField[2][1] === EMPTY_CELL && gameField[2][2] === playerName && gameField[2][3] === playerName) {
        return [2,1];
    }
    if (gameField[2][1] === playerName && gameField[2][2] === EMPTY_CELL && gameField[2][3] === playerName) {
        return [2,2];
    }
    if (gameField[2][1] === playerName && gameField[2][2] === playerName && gameField[2][3] === EMPTY_CELL) {
        return [2,3];
    }
    //проверка нижнего столбца EMPTY_CELL
    if (gameField[3][1] === EMPTY_CELL && gameField[3][2] === playerName && gameField[3][3] === playerName) {
        return [3,1];
    }
    if (gameField[3][1] === playerName && gameField[3][2] === EMPTY_CELL && gameField[3][3] === playerName) {
        return [3,2];
    }
    if (gameField[3][1] === playerName && gameField[3][2] === playerName && gameField[3][3] === EMPTY_CELL) {
        return [3,3];
    }
    return false;
}
function rule3 (playerName) {
    
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