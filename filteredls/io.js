var fs = require('fs')
var path = require('path')
var sum = 0

function listFiles(callback) {
  fs.readdir(process.argv[2], function doneReading(err, pathContents) {
    myDir = pathContents
    myDir.forEach(function callBack(each) {
      if(path.extname(each) === '.'+process.argv[3]) {
        console.log(each);
      }
    })
    callback()
  })
}

function logMyPathContents() {
}

listFiles(logMyPathContents)

// path.extname(process.argv[3])