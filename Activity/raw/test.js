// let arr = ["a", "b", "c", "d", 1, 2, 3, 4];
// arr.map(function (e) {
// return 2 * e;
// });
// (function () {
// arr.filter(function () {});
// })();
// console.log(arr);
// let nArr;
// nArr = arr.filter(function (e) {
// return Number.isInteger(e);
// });
// nArr = new Array();
// console.log(nArr);
// nArr = arr
// .filter(function (e) {
// return !Number.isInteger(e);
// })
// .map(function (e) {
// return e + 1;
// });
// console.log(nArr);


// function globalFunction(x) {
//     return function outerFunction(y) {
//     return function innerFunction(z) {
//     return x + y + z;
//     };
//     };
//     }
//     let instance1 = globalFunction(2);
//     var instance2 = instance1(3);
//     console.log(instance2());


// let a = ["a", "b"]
// a[2] = a
// // function f(a) {
// // a = a[2]
// // console.log(a);
// // let n = Array("a", "b")
// // console.log(a[2] = n);
// // console.log(a);
// // console.log(n);
// // a = n;
// // console.log(a);
// // }
// console.log(a);
// // f(a)
// // console.log(a);


// let count = 0;
// let interval = setInterval(function () {
// console.log(count);
// count++;
// }, 100);
// setTimeout(function () {
//     clearInterval(interval);
//     interval = setInterval(function () {
//     console.log(count);
//     count--;
//     if (count < 0) clearInterval(interval);
//     });
//     }, 500);


// function transducer(arr, fFn, mFn) {
//     let nArr = [];
//     for (x in arr) {
//     if (fFn(arr[x])) {
//     nArr.push(arr[x]);
//     }
//     }
//     for (x in nArr) {
//     nArr[x] = mFn(nArr[x]);
//     }
//     return nArr;
// }

// transducer([1,2,3]);

// const f = a => b => a * b;


// console.log(f(2,3));
// console.log(f(2)(3));

function f(x,y){
    if(y){
        return x*y;
    }else return function(y){
        return x*y;
    }
}

let a = f(2,3);
let b = f(2)(3);
console.log("a="+a);
console.log("b="+b);