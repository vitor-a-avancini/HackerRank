'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'balancedSums' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function balancedSums(arr) {
var size = arr.length

var p1=0
var p2=size-1

var x=0
var y=arr[p2]

if (x!=y){
    x=arr[p1]
}

var steps = size-3

if (size<2){
  return("YES")
} else if (size < 4 ){
  if (x==y){
    return("YES")
  } else{
    return("NO")
  }
} else{
  while (steps>0){
    if (x<=y){
      p1=p1+1
      x=x+arr[p1]
      steps=steps-1
    } else{
      p2=p2-1
      y=y+arr[p2]
      steps=steps-1
    }
    
  }
  if(x==y){
    return("YES")
  } else{
    return("NO")
  }


  
}

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim(), 10);

    for (let TItr = 0; TItr < T; TItr++) {
        const n = parseInt(readLine().trim(), 10);

        const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

        const result = balancedSums(arr);

        ws.write(result + '\n');
    }

    ws.end();
}
