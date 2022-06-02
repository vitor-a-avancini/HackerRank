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
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function dynamicArray(n, queries) {
    // Write your code here

var a=(queries.length)

var lastAns=0;
var arr=[];
var x=0;
var y=0;
var idx=0;
var result = []
for (var b=0; b<n; b++){
  arr[b]=[] ;
}

for (var row =0;row<a;row++){
  
  if (queries[row][0]==1){
    
    x=queries[row][1];
    y=queries[row][2];
    idx=((x^lastAns)%n);
    arr[idx].push(y);
    
    
  } else if (queries[row][0]==2){
    
    x=queries[row][1];
    y=queries[row][2];
    idx=((x^lastAns)%n);
    lastAns=arr[idx][y%(arr[idx].length)];
    result.push(lastAns);
  }
}
    return result;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const q = parseInt(firstMultipleInput[1], 10);

    let queries = Array(q);

    for (let i = 0; i < q; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const result = dynamicArray(n, queries);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
