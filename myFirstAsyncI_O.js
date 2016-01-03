var fs = require('fs');

var myNumber=0;

function readData(callback) {
  fs.readFile(process.argv[2], 'utf8', function doneReading(err, fileContents) {
    
    callback(fileContents);
  });
}

function countN(fileContents) {
  myNumber = fileContents.split("\n").length-1;
  console.log(myNumber);
}

readData(countN);





//  var fs = require('fs')
     // var file = process.argv[2]

     // fs.readFile(file, function (err, contents) {
     //   // fs.readFile(file, 'utf8', callback) can also be used
     //   var lines = contents.toString().split('\n').length - 1
     //   console.log(lines)
     // })