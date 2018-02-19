//console.log('Hello World');

// a = 10;
// b = 5;
// _add +
// _sub -
// _mul *
// _div /


    let a = 10;
    let b = 5;
    let n = 7;

    const add = (a, b) => {
        return (a+b);
    };

    const sub = (a, b) => {
        return (a-b);
    };

    const mul = (a, b) => {
        return (a*b);
    };

    const div = (a, b) => {
        return (a/b);
    };

    function min(a, b){
        if(a === null){
            return b;
        }
        if(b === null){
            return a;
        }
        if(a>b){
            return b;
        }else{
        return a;
        }
    };
    function max(a, b){
        if(a === null){
            return b;
        }
        if(b === null){
            return a;
        }
        if(a>b){
            return a;
        }else {
            return b;
        }
    };

    function fact(n){

        let result = 1;

        for ( let i = 2; i <= n; i++ ) {
            result *= i;
        }
        return result;
    };

/**
 * Находит остаток от деления нацело.
 * @param a - делимое.
 * @param b - делитель.
 * @returns {number} - остаток от деления.
 */
function mod(a, b) {
        let res = a%b;
        return res;
}


/**
 *  Находит результат деления нацело.
 * @param a - Делимое.
 * @param b - Делитель.
 * @returns {number} - результат деления.
 */
function divInt_1(a, b) {
    let n = 0;
    if(a < b){
        return 0;
    }
    else if(b !== 0){
        while(a >= b){
            a = a-b;
            n = n + 1;
        }
    }
    return n;
}

function divInt(a, b) {
    return (a - mod(a, b)) / b;
}

function power(a, b) {
    let res;
        res = a;
        if( b === 0){
            return 1;
        }
        for (let i = 1; i < b; i++) {

            a = a * res;

        }
    return a;
}

function random (max) {
    return Math.floor( Math.random() * max );
}
    

//if (arr.length == 0) return [];
//    var n = arr.length, i = Math.floor(n/2), j, k, t;
//    while (true)
//    { if (i > 0) t = arr[--i];
//      else { n--;
//             if (n == 0) return arr;
//             t = arr[n];  arr[n] = arr[0];
//           }        
//      j = i;  k = j*2+1;
//      while (k < n)
//       { if (k+1 < n && arr[k+1] > arr[k]) k++;
//         if (arr[k] > t)
//          { arr[j] = arr[k];  j = k;  k = j*2+1; }
//         else break;
//       }
//      arr[j] = t; 


module.exports.add = add;
module.exports.sub = sub;
module.exports.mul = mul;
module.exports.div = div;
module.exports.min = min;
module.exports.max = max;
module.exports.fact = fact;
module.exports.mod = mod;
module.exports.divInt = divInt;
module.exports.power = power;
module.exports.random = random;
