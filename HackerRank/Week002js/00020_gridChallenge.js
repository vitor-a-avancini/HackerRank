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
 * Complete the 'gridChallenge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function gridChallenge(grid) {
    // Write your code here
    
var len=grid.length
var valida = "YES";


for(var organ=0;organ<len;organ++){
  var separ = grid[organ].toString().split("");
  var ord = separ.sort();
  grid[organ]=ord.join("");
}

var compr = grid[0].toString().split("").length;
console.log(compr);

for (var init=0;init<compr;init++){
  var check1=[]
  var check2=[]
  const getColumn = grid.map(row => row[init]);
  check1=check1+getColumn
  check2=check2+getColumn.sort()
  if (check1!==check2){
    var valida = "NO";
    break;
  }
}
return valida;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        let grid = [];

        for (let i = 0; i < n; i++) {
            const gridItem = readLine();
            grid.push(gridItem);
        }

        const result = gridChallenge(grid);

        ws.write(result + '\n');
    }

    ws.end();
}
