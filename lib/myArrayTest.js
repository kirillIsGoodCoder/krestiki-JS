var myArray = require("./myArray");

function testMax(){
    let errors = '';
                                                                                                     //
    if(myArray.max([1,2,4,3,5])!==5){
        errors = errors+"[1,2,4,3,5]";

    }
    if(myArray.max([0, 1, -5, 2])!==2){
        errors+=" "+"[0, 1, -5, 2]";
    }
    if(myArray.max([null, 1, null, -1])!==1){
        errors+=" "+"[null, 1, null, -1]";
    }
    if(myArray.max([4, 4, 4, 4])!==4){
        errors+=" "+"[4, 4, 4, 4]";
    }
    if(myArray.max([-10, -20, -5 ,-1])!==-1){
        errors+=" "+"[-10, -20, -5 ,-1]";
    }
    if(myArray.max([null, null, null, null])!== null){
        errors+=" "+"[null, null, null, null]";
    }
    if(myArray.max([4, [4,5], 4, 4])!==5){
        errors+=" "+"[4, 4, 4, 4]";
    }
    if(myArray.max([-10, -20, [-12, -19] ,-1])!==-1){
        errors+=" "+"[-10, -20, -5 ,-1]";
    }
    if(myArray.max([null, [null, 1], null, -1])!== 1) {
  
        errors += " " + "[null, null, null, null]";
    }
    // 0, 1, -5, 2
    // null, 1, null, -1  == 1
    // 4, 4, 4, 4
    // -10, -20, -5 ,-1
    // null, null, null, null  === null
    return errors;
}

function testKeyExist(){
    let errors = '';
    console.log('ВОТ ЧТО ВОЗВРАЩАЕТ  '+Object.keys({ 10: 'a', 1: 'b', 2: 'c' }).includes(10));
    
    if (myArray.keyExist( { 10: 'a', 1: 'b', 2: 'c' } , 1 ) !== true){
        errors += 'a ';
    }
    if (myArray.keyExist( { 100: 'a', 2: 'b', 7: 'c' } , 8 ) !== false ){
        errors += ' b ';
    }
    if (myArray.keyExist( ['a', 'b', 'c' ] , 1 ) !== true){
        errors += 'c ';
    }
    if (myArray.keyExist( { 'a': 100, 'b': 200, 'c': 300 } , 'a' ) !== true ){
        errors += ' d';
    }
    return errors;
}


function testMin(){
    let errors =" ";

    if(myArray.min([1,2,4,3,5])!==1){
        errors = errors+"[1,2,4,3,5]";

    }
    if(myArray.min([0, 1, -5, 2])!==-5){
        errors+=" "+"[0, 1, -5, 2]";
    }
    if(myArray.min([null, 1, null, -1])!==-1){
        errors+=" "+"[null, 1, null, -1]";
    }
    if(myArray.min([4, 4, 4, 4])!==4){
        errors+=" "+"[4, 4, 4, 4]";
    }
    if(myArray.min([-10, -20, -5 ,-1])!==-20){
        errors+=" "+"[-10, -20, -5 ,-1]";
    }
    if(myArray.min([null, null, null, null])!== null){
        errors+=" "+"[null, null, null, null]";
    }//
    if(myArray.min([null, null, [1, null], null])!== 1){
        errors+=" "+"[null, null, [1, null], null]";
    }
    if(myArray.min([null, 9, [12, 10, 7], 5])!== 5){
        errors+=" "+"[null, 9, [12, 10, 7], 5]";
    }
    if(myArray.min([null, 3, [-12, 17], -1])!== -12){
        errors+=" "+"[null, 3, [-12, 17], -1]";
    }
    return errors;
}

function testSum(){
    let errors =" ";

    if(myArray.sum([1,2,4,3,5])!==15){
        errors = errors+"[1,2,4,3,5]";

    }
    if(myArray.sum([0, 1, -5, 2])!==-2){
        errors+=" "+"[0, 1, -5, 2]";
    }
    if(myArray.sum([null, 1, null, -1])!==0){
        errors+=" "+"[null, 1, null, -1]";
    }
    if(myArray.sum([4, 4, 4, 4])!==16){
        errors+=" "+"[4, 4, 4, 4]";
    }
    if(myArray.sum([-10, -20, -5 ,-1])!==-36){
        errors+=" "+"[-10, -20, -5 ,-1]";
    }
    if(myArray.sum([10, 20, 5 ,[3, 5]])!==43){
        errors+=" "+"[10, 20, 5 ,[3, 5]]";
    }
    if(myArray.sum([10, [-10, -10], 5 ,56])!==51){
        errors+=" "+"[10, [-10, -10], 5 ,56]";
    }
    if(myArray.sum([[-10, -10], 10 ,[5, -5]])!==-10){
        errors+=" "+"[[-10, -10], 10 ,[5, -5]]";
    }
    if(myArray.sum( [[-10, -10, [5,6,3]], 10 ,[5, -5]]) !== 4 ){
        errors+=' myArray.sum( [[-10, -10, [5,6,3]], 10 ,[5, -5]]) !== 4';
    }
    return errors;
}

function testMul(){
    let errors =" ";

    if(myArray.mul([1,2,4])!==8){
        errors = errors+" myArray.mul([1,2,4])!==8;";

    }
    if(myArray.mul([0, 1, -5, 2])!==0){
        errors+=" myArray.mul([0, 1, -5, 2])!==0;";
    }
    if(myArray.mul([null, 1, null, -1])!==-1){
        errors+=" myArray.mul([null, 1, null, -1])!==-1;";
    }
    if(myArray.mul([4, 4, 4, 4])!==256){
        errors+=" myArray.mul([4, 4, 4, 4])!==256;";
    }
    if(myArray.mul([-10, -20, -5 ,-1])!==1000){
        errors+=" myArray.mul([-10, -20, -5 ,-1])!==1000;";
    }
    if(myArray.mul([4, [4,5], 4])!==320){
        errors+=" myArray.mul([4, [4,5], 4])!==320;";
    }
    if(myArray.mul([-10, -20, [-12, 0] ,-1])!==0){
        errors+=" myArray.mul([-10, -20, [-12, 0] ,-1])!==0;";
    }
    if(myArray.mul([null, [null, 1], null, -1])!== -1){
        errors+=" myArray.mul([null, [null, 1], null, -1])!== -1";
    }
    if(myArray.mul([null, null, null, null])!== null){
        errors+=" myArray.mul([null, null, null, null])!== null;";
    }


    return errors;
}

//////////////////////////////////////
function testHasNull() {
    let errors = '';
    if (myArray.hasNull([1, 2, 3]) !== false) {
        errors += ' myArray.hasNull([1, 2, 3]) !== false;';
    }

    if (myArray.hasNull([null, 0, 500]) !== true) {
        errors += ' myArray.hasNull([null, 0, 500]) !== true;';
    }

    if (myArray.hasNull([-200, 2, null]) !== true) {
        errors += ' myArray.hasNull([-200, 2, null]) !== true;';
    }

    if (myArray.hasNull([null, null, null]) !== true) {
        errors += ' myArray.hasNull([null, null, null]) !== true;';
    }

    if (myArray.hasNull([0, 0, 0]) !== false) {
        errors += ' myArray.hasNull([0, 0, 0]) !== false;';
    }
    if (myArray.hasNull([false, false, null]) !== true)
    {
        errors += ' myArray.hasNull([false, false, null]) !== true;';
    }

    if (myArray.hasNull([false, false, false]) !== false)
    {
        errors += ' myArray.hasNull([false, false, false]) !== false;';
    }
    if (myArray.hasNull([2, [1, null], 0]) !== true)
    {
        errors += ' myArray.hasNull([2, [1, null], 0]) !== true;';
    }

    if (myArray.hasNull([2, [1, 5], [null]]) !== true)
    {
        errors += ' myArray.hasNull([2, [1, 5], [null]]) !== true;';
    }

    if (myArray.hasNull([2, [1, false], null]) !== true)
    {
        errors += ' myArray.hasNull([2, [1, false], null]) !== true;';
    }

    if (myArray.hasNull([0, [0, 1], false]) !== false)
    {
        errors += ' myArray.hasNull([0, [0, 1], false]) !== false;';
    }
    return errors;
}

function testConcat()
{
    let errors = '';
    if (myArray.concat([1, 2, 3]) !== '123')
    {
        errors += " concat([1, 2, 3]) !== '123';";
    }

    if (myArray.concat([null, 0, 500]) !== '0500')
    {
        errors += " concat([null, 0, 500]) !== '0500';";
    }

    if (myArray.concat([-200, 2, null]) !== '-2002')
    {
        errors += " concat([-200, 2, null]) !== '-2002';";
    }

    if (myArray.concat([null, null, null]) !== '')
    {
        errors += " concat([null, null, null]) !== '';";
    }

    if (myArray.concat([0, 0, 0]) !== '000')
    {
        errors += " concat([0, 0, 0]) !== '000';";
    }

    if (myArray.concat([false, false, null]) !== 'falsefalse')
    {
        errors += " concat([false, false, null]) !== 'falsefalse';";
    }

    if (myArray.concat([false, false, false]) !== 'falsefalsefalse')
    {
        errors += " concat([false, false, false]) !== 'falsefalsefalse';";
    }
    if (myArray.concat([false, [false, null], false]) !== 'falsefalsefalse')
    {
        errors += " concat([false, [false, null], false]) !== 'falsefalsefalse';";
    }
    if (myArray.concat([2, [1, 5], [null]]) !== '215')
    {
        errors += " concat([2, [1, 5], [null]]) !== '215';";
    }

    if (myArray.concat([2, [1, false], null]) !== '21false')
    {
        errors += " concat([2, [1, false], null]) !== '21false';";
    }

    if (myArray.concat([0, [0, 1], false]) !== '001false')
    {
        errors += " concat([0, [0, 1], false]) !== '001false';";
    }

    return errors;
}

function testIsArraysEqual() {
    let errors ='';
    
    if (myArray.isArraysEqual([1, 2, 5, 6, 7, 8], [1, 2, 5, 6, 7, 8]) !== true ){
        errors += 'myArray.isArraysEqual([1, 2, 5, 6, 7, 8], [1, 2, 5, 6, 7, 8]) !== true';
    }
    if (myArray.isArraysEqual([9, 0, 9], [9, 0, 9]) !== true){
        errors += 'myArray.isArraysEqual([9, 0, 9], [9, 0, 9]) !== true';
    }
    if (myArray.isArraysEqual([], []) !== true){
        errors += 'myArray.isArraysEqual([], []) !== true';
    }
    if (myArray.isArraysEqual([-11, 2, 4, -8], [-11, 2, 4, -8]) !== true ){
        errors += 'myArray.isArraysEqual([-11, 2, 4, -8], [-11, 2, 4, -8]) !== true ';
    }
    if (myArray.isArraysEqual([44, 17, 106], [44, 17, 106]) !== true) {
        errors += 'myArray.isArraysEqual([44, 17, 106], [44, 17, 106]) !== true ';
    }
    if (myArray.isArraysEqual([1, 2, 5, 6, 7, 8], [44, 17, 106]) !== false) {
        errors += 'myArray.isArraysEqual([1, 2, 5, 6, 7, 8], [44, 17, 106]) !== false ';
    }
    if (myArray.isArraysEqual([], [9, 0, 9]) !== false){
        errors += 'myArray.isArraysEqual([], [9, 0, 9]) !== false';
    }
    if (myArray.isArraysEqual([9], [9, 0]) !== false) { 
        errors += 'myArray.isArraysEqual([9], [9, 0]) !== false';
    }
    if (myArray.isArraysEqual([1],[]) !== false) {
        errors += 'myArray.isArraysEqual([1],[]) !== false';
    }
    if (myArray.isArraysEqual([1, 1, 1, 1], [1, 1, 1, 2]) !== false) {
        errors += 'myArray.isArraysEqual([1, 1, 1, 1], [1, 1, 1, 2]) !== false';
    }
    
    
    return errors;
}

function testArraySelectSort() {
    let errors = '';
    if(myArray.isArraysEqual(myArray.arraySelectSort([2, 1]), [1, 2]) !== true ){
        errors += 'myArray.isArraysEqual(myArray.arraySelectSort([2, 1]), [1, 2]) !== true ';
    }
    if(myArray.isArraysEqual(myArray.arraySelectSort([]), []) !== true ){
        errors += 'myArray.isArraysEqual(myArray.arraySelectSort([]), []) !== true ';
    }
    if(myArray.isArraysEqual(myArray.arraySelectSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]) !== true ){
        errors += 'myArray.isArraysEqual(myArray.arraySelectSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5] !== true ';
    }
    if(myArray.isArraysEqual(myArray.arraySelectSort([2, -1]), [-1, 2]) !== true ){
        errors += 'myArray.isArraysEqual(myArray.arraySelectSort([2, -1]), [-1, 2]) !== true  ';
    }
    if(myArray.isArraysEqual(myArray.arraySelectSort([10002, 10001]), [10001, 10002]) !== true ){
        errors += 'myArray.isArraysEqual(myArray.arraySelectSort([10002, 10001]), [10001, 10002]) !== true  ';
    }
    if(myArray.isArraysEqual(myArray.arraySelectSort([21, 12]), [12, 21]) !== true ){
        errors += 'myArray.isArraysEqual(myArray.arraySelectSort([21, 12]), [12, 21]) !== true ';
    }
    return errors;
}

function testArrayBubbleSort() {
    let errors = '';
    if(myArray.isArraysEqual(myArray.arrayBubbleSort([2, 1]), [1, 2]) !== true ){
        errors += 'myArray.isArraysEqual(myArray.arraySelectSort([2, 1]), [1, 2]) !== true ';
    }
    if(myArray.isArraysEqual(myArray.arrayBubbleSort([]), []) !== true ){
        errors += 'myArray.isArraysEqual(myArray.arraySelectSort([]), []) !== true ';
    }
    if(myArray.isArraysEqual(myArray.arrayBubbleSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]) !== true ){
        errors += 'myArray.isArraysEqual(myArray.arraySelectSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5] !== true ';
    }
    if(myArray.isArraysEqual(myArray.arrayBubbleSort([2, -1]), [-1, 2]) !== true ){
        errors += 'myArray.isArraysEqual(myArray.arraySelectSort([2, -1]), [-1, 2]) !== true  ';
    }
    if(myArray.isArraysEqual(myArray.arrayBubbleSort([10002, 10001]), [10001, 10002]) !== true ){
        errors += 'myArray.isArraysEqual(myArray.arraySelectSort([10002, 10001]), [10001, 10002]) !== true  ';
    }
    if(myArray.isArraysEqual(myArray.arrayBubbleSort([21, 12]), [12, 21]) !== true ){
        errors += 'myArray.isArraysEqual(myArray.arraySelectSort([21, 12]), [12, 21]) !== true ';
    }
    return errors;
}

function testQuickSort() {
    let errors = '';
    if(myArray.isArraysEqual(myArray.quickSort([2, 1]), [1, 2]) !== true ){
        errors += 'myArray.isArraysEqual(myArray.quickSort([2, 1]), [1, 2]) !== true ';
    }
    if(myArray.isArraysEqual(myArray.quickSort([]), []) !== true ){
        errors += 'myArray.isArraysEqual(myArray.quickSort([]), []) !== true ';
    }
    if(myArray.isArraysEqual(myArray.quickSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]) !== true ){
        errors += 'myArray.isArraysEqual(myArray.quickSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]) !== true ';
    }
    if(myArray.isArraysEqual(myArray.quickSort([2, -1]), [-1, 2]) !== true ){
        errors += 'myArray.isArraysEqual(myArray.arraySelectSort([2, -1]), [-1, 2]) !== true  ';
    }
    if(myArray.isArraysEqual(myArray.quickSort([10002, 10001]), [10001, 10002]) !== true ){
        errors += 'myArray.isArraysEqual(myArray.quickSort([10002, 10001]), [10001, 10002]) !== true ';
    }
    if(myArray.isArraysEqual(myArray.quickSort([21, 12]), [12, 21]) !== true ){
        errors += 'myArray.isArraysEqual(myArray.quickSort([21, 12]), [12, 21]) !== true';
    }
    return errors;
}


function testHeapSort() {
    let errors = '';
    if(myArray.isArraysEqual(myArray.arrayHeapSort([2, 1]), [1, 2]) !== true ){
        errors += 'myArray.isArraysEqual(myArray.arrayHeapSort([2, 1]), [1, 2]) !== true ';
    }
    if(myArray.isArraysEqual(myArray.arrayHeapSort([]), []) !== true ){
        errors += 'myArray.isArraysEqual(myArray.arrayHeapSort([]), []) !== true ';
    }
    if(myArray.isArraysEqual(myArray.arrayHeapSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]) !== true ){
        errors += 'myArray.isArraysEqual(myArray.arrayHeapSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]) !== true ';
    }
    if(myArray.isArraysEqual(myArray.arrayHeapSort([2, -1]), [-1, 2]) !== true ){
        errors += 'myArray.isArraysEqual(myArray.arrayHeapSort([2, -1]), [-1, 2]) !== true  ';
    }
    if(myArray.isArraysEqual(myArray.arrayHeapSort([10002, 10001]), [10001, 10002]) !== true ){
        errors += 'myArray.isArraysEqual(myArray.arrayHeapSort([10002, 10001]), [10001, 10002]) !== true ';
    }
    if(myArray.isArraysEqual(myArray.arrayHeapSort([21, 12]), [12, 21]) !== true ){
        errors += 'myArray.isArraysEqual(myArray.arrayHeapSort([21, 12]), [12, 21]) !== true';
    }
    return errors;
}

function testSearchLinear() {
    let errors = '';
    if(myArray.searchLinear([2,7,8,3,90,56], 90) !== 4){
        errors+= 'searchLinear([2,7,8,3,90,56], 90 !== 4';
    }
    if(myArray.searchLinear([2,7,8,3,90,56], 7) !== 1){
        errors+= 'searchLinear([2,7,8,3,90,56], 7) !== 1';
    }
    if(myArray.searchLinear([2,7,8,3,90,56], 904) !== null){
        errors+= 'searchLinear([2,7,8,3,90,56], 904) !== null';
    }
    if(myArray.searchLinear([90,56], 90) !== 0){
        errors+= 'searchLinear([90,56], 90) !== 0';
    }
    if(myArray.searchLinear([0,1,2,3,4], 3) !== 3){
        errors+= 'searchLinear([0,1,2,3,4], 3) !== 3';
    }
    if(myArray.searchLinear([555,105,35,777,23,1,2,3,1], 1) !== 5){
        errors+= 'searchLinear([555,105,35,777,23,1,2,3,1], 1) !== 5';
    }
    if(myArray.searchLinear([555,105,35,777,23,3,2,3,1], 1) !== 8){
        errors+= 'searchLinear([555,105,35,777,23,3,2,3,1], 1) !== 8';
    }
    if(myArray.searchLinear([555,105,35,777,23,3,2,3,1], 3) !== 5){
        errors+= 'searchLinear([555,105,35,777,23,3,2,3,1], 3) !== 5';
    }
    
    return errors;
}


function test(){
    console.log('test_testKeyExist_errors : '+testKeyExist());
    console.log('test_HeapSort_errors : '+testHeapSort());
    console.log('hasNull_errors : '+testHasNull());
    console.log('maxArray_errors : '+testMax());
    console.log('minArray_errors : '+testMin());
    console.log('sumArray_errors : '+testSum());
    console.log('concat_array_errors : '+testConcat());
    console.log('testIsArraysEqual : '+testIsArraysEqual());
    console.log('testArraySelectSort : '+testArraySelectSort());
    console.log('testArrayBubbleSort : '+testArrayBubbleSort());
    console.log('testQuickSort : '+testQuickSort());
    console.log('testSearchLinear : '+testSearchLinear());
    // console.log('mul_array_errors : '+testMul());
}
test();