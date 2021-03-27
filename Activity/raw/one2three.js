// let arr = [1, 2, 3, 4];
// function f(arr) {
//     for (x in arr) {
//         arr[x] = 0
//     }
//     return arr;
// }
// console.log(arr);
// console.log(f(arr));
// console.log(arr);
//   pure function :

  let arr = [1,2,3,4];

  function f(arr){
  	const newArr = [];
  	for(x in arr){
  		newArr.push(0);
  	}
  	return newArr;
  }

console.log(arr);
console.log(f(arr));
console.log(arr);

//   Q2-

//   let obj = {
//   	1:0,
//   	2:1,
//   	3:2,
//   	4:3,
//   	5:4,
//   	length:5,
//   };


//   function f(obj) {
//   	const newObj = {...obj};
//   	for(let i = 1; i < newObj.length; i++){
//   		newObj[i] = newObj[i] + 1;
//   	}
//   	delete newObj['length'];

//   	return newObj;
//   }

//   function g(fn, obj){
//   	obj = fn(obj);
//   	for(const x in obj){
//   		console.log(`at index ${x} we have value ${obj[x]}`);
//   	}
//   }

//   g(f,obj)

//   Q3
//   function f(x,y){
//   	if(y){
//   		return x*y;
//   	}else return function(y){
//   		return x*y;
//   	}
//   }

//   let v = f(2)(3);
//   console.log(v);