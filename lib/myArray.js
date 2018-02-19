var myMath = require("./myMath");

// var fruits = ["Яблоко", "Апельсин", "Слива"];
// console.log( fruits.shift() );
// console.log('1.'+ fruits[0] ); // Яблоко
// console.log('2.'+ fruits[1] ); // Апельсин
// console.log('3.'+ fruits[2] ); // Слива

function max(arr) {

    let res = null;
    for (let i = 0; i < arr.length; i++) {
        if(res === null){
            res = arr[i];
        }else {
            if(res < arr[i]){
                res = arr[i];
            }
        }/*
        if(Array.isArray(arr[i])){
            res = max(arr[i]);
        }else{
        res = myMath.max(res, arr[i]);
        }*/
    }
    return res;
}

function min(arr) {
    let res = null;
    for (let i = 0; i < arr.length; i++) {

        if(Array.isArray(arr[i])){
            res = min(arr[i]);
        }else{
            res = myMath.min(res, arr[i]);
        }
    }
    return res;
}
// console.log(min([null, null, [1, null], null]));
/*
function min(arr) {
    let res = null;
    for (let i = 0; i < arr.length; i++) {
       /* if(res === null){//Если в ящике максимум
            res = arr[i];//ему присваивается значение текущей ячейки массива
        }else {//иначе
            if(res > arr[i]){//если ящик меньше текущего элемента массива.
                res = arr[i];//ящику присваивается его значение
            }
        }
        res = myMath.min(res, arr[i]);
    }
    return res;//возвращается результат(ящик).
}
console.log(min([null, null, [1, null], null]));

*/




function sum(arr){
    let res = 0;

    for (let i = 0; i<arr.length; i++) {

        if (Array.isArray(arr[i])) {
            res += sum(arr[i]);
        } else {
            res = res + arr[i];
        }
    }
    return res ;
}


function mul(arr){
    let res = null;
    for (let i = 0; i<arr.length; i++ ){
        if(arr[i] !== null) {
            if (Array.isArray(arr[i])) {

                if(res!==null){
                    res*=mul(arr[i]);
                }else{
                    res = mul(arr[i]);
                }
            }
            else {

                if(res!==null){
                    res*=arr[i];
                }else{
                    res = arr[i];
                }
            }
        }

    }
    return res ;
}

        // 0, 1, -5, 2
        // null, 1, null, -1  == 1
        // 4, 4, 4, 4
        // -10, -20, -5 ,-1
        // null, null, null, null  === null


function hasNull(arr) {

    for(let i=0; i<arr.length; i++){
        if(arr[i] === null){
            return true;
        }else if(Array.isArray(arr[i])){
            if(hasNull(arr[i])){
                return true;
            }
        }
    }
    return false;
}

/**
 * Проверяет ключ на наличие в массиве.
 * @param {String} arr - массив.
 * @param {String} key - ключ.
 * @returns {boolean}
 */
function keyExist(arr, key){
    return key in arr;
}
//console.log(keyExist());


function concat(arr) {
    let res = '';
    // let myArr;
    for(let i=0; i<arr.length; i++){
        if(Array.isArray(arr[i])) {
            res = res + concat(arr[i]);
        } else if(arr[i] !== null){
            res += arr[i].toString();
        }

    }
    return res;
}
// console.log(concat([2, [1, false], null]));

function isArraysEqual(arr1, arr2) {
    let i = 0;
    if(arr1.length === arr2.length){
        for (let i=0; i < arr1.length; i++){
            if( arr1[i] !== arr2[i] ){
               return false;
            }
        }
    }
    else{
        return false;
    }
    return true;
}
//console.log(isArraysEqual([], []));

function arraySelectSort( arr ) {
   for( let i = 0; i < arr.length; i++ ) {
       let min = i;
       for( let j = i+1; j < arr.length; j++ ) {
           if(arr[j] < arr[min]){
               min = j;
           }
       }
       let tmp = arr[i];
       arr[i] = arr[min];
       arr[min] = tmp;
   }
   return arr;
}
//console.log(arraySelectSort([2, 1]));

function arrayBubbleSort( arr ) {
    for( let i = 0; i < arr.length; i++ ) {
        let min = arr[i];
        for (var j = i + 1; j < arr.length; j++) {
            if( arr[j] < min ) {
                let tmp = arr[i];
                min = arr[j];
                arr[i] = min;
                arr[j] = tmp;
            }
        }
    }
    return arr;
}
//console.log('arrayBubbleSort ['+arrayBubbleSort([1, 2, 3, 4, 10, 6, 7, 8, 9, 5])+']');
//console.clear();

function quickSort ( arr ) {
    if(arr.length === 0){
        return [];
    }
    let a = []; 
    let b = [];
    let p = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < p){
            a[a.length] = arr[i];
        }else if (arr[i] > p){
            b[b.length] = arr[i];
        }
    }
    return quickSort(a).concat( p,quickSort(b) );
        
}
//console.log('quickSort  '+quickSort([1, 2, 3, 4, 10, 6, 7, 8, 9, 5]));

function arrayHeapSort(arr) {
    if(arr.length === 0){
        return [];
    }
    var n = arr.length, i = Math.floor(n/2), a, b, c;
    while (true) {
        if(i > 0){
            c = arr[--i];
        }else{
            n -= 1;   
            if( n === 0){
                return arr;
            }
            c = arr[n]; arr[n] = arr[0];
        }
        a = i; b = a*2+1;
        while (b < n){
            if(b+1 < n && arr[b+1] > arr[b]){
                b += 1;
            }
            if( arr[b] > c){
                arr[a] = arr[b]; a = b; b = a*2 +1;
            }
            else break;
        }
        arr[a] = c;
    }
}
//console.log(arrayHeapSort([32,7,0,1,14,5]));
//console.log(arrayHeapSort([32,7,4,5,162]));


//function searchLinear(arr, elem)
//{
//    let n = arr.length, i = 0;
//    arr[n] = elem;
//    while(arr[i] !== elem){
//        i = i + 1;
//    }
//    if(i < n){
//        return i;
//    }else return null; 
//}

/**
 * Поиск элемента в массиве методом перебора.
 * @param {array} arr - массив
 * @param {type} elem - Искомый элемент.
 * @returns {Number|null} - если найден элемент - возвращает индекс, иначе null.
 */
function searchLinear(arr, elem)
{
    for(let i=0; i < arr.length; i++) {
        if(arr[i] === elem){
            return i;
        }
    }
    return null;
}
//console.log('Search_Linear   lol  '+searchLinear([555,105,35,777,23,3,2,3,1], 1)+' lol');


function binarySearch (arr, elem){
    let i = 0, j = arr.length-1,k;
    while(i <= j){
        k = Math.floor((i+j)/2);
        if(elem === arr[k]){
            return k;
        }else if(elem < arr[k]){
            j = k - 1;
        }else{
            i = k + 1;
        }
    }
    return null;
}
//console.log(binarySearch([555,105,35], 555));


module.exports.searchLinear = searchLinear;
module.exports.arrayHeapSort = arrayHeapSort;
module.exports.arraySelectSort = arraySelectSort;
module.exports.arrayBubbleSort = arrayBubbleSort;
module.exports.quickSort = quickSort;
module.exports.hasNull = hasNull;
module.exports.max = max;
module.exports.min = min;
module.exports.sum = sum;
module.exports.concat = concat;
module.exports.isArraysEqual = isArraysEqual;
module.exports.keyExist = keyExist; 
// console.log(sum([4,6,4]));
