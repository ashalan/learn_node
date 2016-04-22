var fs = require('fs');

bufferO = fs.readFileSync(process.argv[2]);

stringB = bufferO.toString().split("\n");

console.log(stringB.length - 1);