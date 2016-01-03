var total=0;

var numArray = process.argv.slice(2);

for (var i=0;i<numArray.length;i++){
  // var num=Number(numArray[i])
  total+=Number(numArray[i]);
}

console.log(total);


// var result = 0

//      for (var i = 2; i < process.argv.length; i++)
//        result += Number(process.argv[i])

//      console.log(result)