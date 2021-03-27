let fs = require("fs");

console.log("before");

// async function fs.readfile()
fs.readFile("f1.txt","utf8",cb);
function cb(err, data){
    if(err){
        console.log(err);
    }else{
        console.log("content->", data);
    }
}

console.log("after");

console.log("other");