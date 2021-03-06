input = ["acedgfb", "cdfbe", "gcdfa", "fbcad", "dab", "cefabd", "cdfgeb", "eafb", "cagedb", "ab"]

// input = ["cdfbe", "gcdfa", "fbcad",  "cefabd", "cdfgeb", "cagedb",]
// [ 'cdfbe', 'gcdfa', 'fbcad' ]
// gcdfa=5
// cdfbe=2
// fbcad=3
// [ 'abcdef', 'bcdefg', 'abcdeg' ]
// cagedb=0
//  =6
//=9

let decoded = {};
let segments5 = []
let segments6 = []
output = ["cdfeb", "fcadb", "cdfeb", "cdbaf"];

for(let i=0;i<input.length;i++){
    if(input[i].length == 4){
        decoded["4"] = input[i];
    }
    if(input[i].length == 3) {
        decoded["7"] = input[i];
    }
    if(input[i].length == 7){
        decoded["8"] = input[i];
    }
    if(input[i].length == 2){
        decoded["1"] = input[i];
    }
    // 3, 5 and 2 have 5 segments
    if(input[i].length == 5){
        segments5.push(input[i]);
    }




    // 6, 9, and 0 have 6 segments
    if(input[i].length == 6){
        segments6.push(input[i]);
    }

}
workOut352(segments5)
workOut690(segments6)


function workOut352(segments5){
    // two and 3 have one difference
    // 
    var difference1 = segments5[0].split("").filter(x => segments5[1].indexOf(x) === -1);
    var difference2 = segments5[1].split("").filter(x => segments5[2].indexOf(x) === -1);
    // console.log(difference1)
    // console.log(difference2)
    // difference two must be 5
    if(difference1.length==1){
        decoded["5"] = segments5[0];
    } else {
        decoded["5"] = segments5[1];
    }
    // now we know five, difference between 5 and 3 is one
    var difference3 = segments5[0].split("").filter(x => decoded["5"].indexOf(x) === -1);
    var difference4 =  segments5[2].split("").filter(x => decoded["5"].indexOf(x) === -1);
    if(difference3.length==1){
        decoded["5"] = segments5[0];
    } else {
        decoded["5"] = segments5[1];
    }
    decoded["3"] = segments5[2]
    decoded["2"] = segments5[0]
}

function workOut690(segments){
    // two differences between 6, 9 and zero
   
    // console.log("diff:"+diffs(decoded["2"], segments[0]))
    // console.log("diff:"+diffs(decoded["2"], segments[1]))
    // console.log("diff:"+diffs(decoded["2"], segments[2]))
    if(diffs(decoded["2"], segments[0]) == 3){
        decoded["0"] =  segments[0]
    }
    if(diffs(decoded["2"], segments[1]) == 3){
        decoded["0"] =  segments[1]
    }
    if(diffs(decoded["2"], segments[2]) == 3){
        decoded["0"] =  segments[2]
    }

    if(diffs(decoded["7"], segments[0]) == 5){
        decoded["6"] =  segments[0]
    }
    if(diffs(decoded["7"], segments[1]) == 5){
        decoded["6"] =  segments[1]
    }
    if(diffs(decoded["7"], segments[2]) == 5){
        decoded["6"] =  segments[2]
    }

    console.log("diff:"+diffs(decoded["3"], segments[0]))
    console.log("diff:"+diffs(decoded["3"], segments[1]))
    console.log("diff:"+diffs(decoded["3"], segments[2]))

    if(diffs(decoded["3"], segments[0]) == 1){
        decoded["9"] =  segments[0]
    }
    if(diffs(decoded["3"], segments[1]) == 1){
        decoded["9"] =  segments[1]
    }
    if(diffs(decoded["3"], segments[2]) == 1){
        decoded["9"] =  segments[2]
    }
}

function diffs(segment1, segment2) {
    diff1 = segment1.split("").filter(x => segment2.indexOf(x) === -1);
    diff2 = segment2.split("").filter(x => segment1.indexOf(x) === -1);
    return diff1.length+diff2.length;
}
// console.log(segments5)
// console.log(segments6)
console.log(decoded)