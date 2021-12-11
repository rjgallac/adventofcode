// input = [
//     [2,1,9,9,9,4,3,2,1,0],
//     [3,9,8,7,8,9,4,9,2,1],
//     [9,8,5,6,7,8,9,8,9,2],
//     [8,7,6,7,8,9,6,7,8,9],
//     [9,8,9,9,9,6,5,6,7,8],
// ]

const fs = require('fs')

fs.readFile('input.txt', 'utf8' , (err, data) => {
    if (err) {
        console.error(err)
        return
      }
    lines = data.split("\r\n")
    input = [];
    for(let i=0;i<lines.length;i++){
        input.push(lines[i].split("").map(x=>parseInt(x)));
    }
    console.log(input)

    main(input)
});

function main(input) {
    lowpoints = [];
    for(let i=0;i<input.length;i++) {
        for(j=0;j<input[0].length; j++) {
            lowest = true;
            //need to consider 8 surrounding points
            point = input[i][j];
            // console.log(point)
            if(input[i-1] && point > input[i-1][j]) {
                lowest=false;
            }
            if(input[i+1] && point > input[i+1][j]) {
                lowest=false;
               
            }
            if(point > input[i][j-1]) {
                lowest=false;
            }
            if(point > input[i][j+1]) {
                lowest=false;
            }
            if(input[i-1] && point > input[i-1][j-1]) {
                lowest=false;
            }
            if(input[i+1] && point > input[i+1][j+1]) {
                lowest=false;
            }
            if(input[i-1] && point > input[i-1][j+1]) {
                lowest=false;
            }
            if(input[i+1] && point > input[i+1][j-1]) {
                lowest=false;
            }
            if(lowest){
                lowpoints.push(point + 1)
                console.log("i:" +i+ ", j:" + j)
            }
        }
    }
    console.log(lowpoints.reduce((a,b) => a+b,0))
}

