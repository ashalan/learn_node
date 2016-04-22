var fs = require('fs')
var sum = 0

function addSum(callback) {
  fs.readFile(process.argv[2], function doneReading(err, fileContents) {
    myNumber = fileContents.toString().split("\n").length-1
    callback()
  })
}

function logMyNumber() {
  console.log(myNumber)
}

addSum(logMyNumber)