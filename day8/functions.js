let decoded = {};

exports.decoded = function(input){

    let segments5 = []
    let segments6 = []
    
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

    decoded = workOut352(segments5, decoded)
    decoded = workOut690(segments6, decoded)
    return decoded;


}




exports.workOut352 = workOut352;


function workOut352(segments, decodedin){
    used =[];
   // three has two same segs as one
   if(same(segments[0], decodedin[1]) ==4 ) {
    decodedin["3"] = segments[0];
    used.push(0)
   }
   if(same(segments[1], decodedin[1]) == 4) {
    decodedin['3'] = segments[1];
    used.push(1)
   }
   if(same(segments[2], decodedin[1]) == 4) {
    decodedin['3'] = segments[2];
    used.push(2)
   }
   if(same(segments[0], decodedin[4]) == 4) {
    decodedin["5"] = segments[0];
    used.push(0)

   }
   if(same(segments[1], decodedin[4]) == 4) {
    decodedin['5'] = segments[1];
    used.push(1)

   }
   if(same(segments[2], decodedin[4]) == 4) {
    decodedin['5'] = segments[2];
    used.push(2)

   }
   left = [0,1,2].filter(x=> used.indexOf(x) === -1);
   last = left[0];
   decodedin['2'] = segments[last];

    return decodedin;
}

exports.workOut690 =workOut690;

function workOut690(segments, decodedin){
    // two differences between 6, 9 and zero
    if(diffs(decodedin["2"], segments[0]) == 3){
        decodedin["0"] =  segments[0]
    }
    if(diffs(decodedin["2"], segments[1]) == 3){
        decodedin["0"] =  segments[1]
    }
    if(diffs(decodedin["2"], segments[2]) == 3){
        decodedin["0"] =  segments[2]
    }

    if(diffs(decodedin["7"], segments[0]) == 5){
        decodedin["6"] =  segments[0]
    }
    if(diffs(decodedin["7"], segments[1]) == 5){
        decodedin["6"] =  segments[1]
    }
    if(diffs(decodedin["7"], segments[2]) == 5){
        decodedin["6"] =  segments[2]
    }

    console.log("diff:"+diffs(decodedin["3"], segments[0]))
    console.log("diff:"+diffs(decodedin["3"], segments[1]))
    console.log("diff:"+diffs(decodedin["3"], segments[2]))

    if(diffs(decodedin["3"], segments[0]) == 1){
        decodedin["9"] =  segments[0]
    }
    if(diffs(decodedin["3"], segments[1]) == 1){
        decodedin["9"] =  segments[1]
    }
    if(diffs(decodedin["3"], segments[2]) == 1){
        decodedin["9"] =  segments[2]
    }
    return decodedin;
}

function diffs(segment1, segment2) {
    diff1 = segment1.split("").filter(x => segment2.indexOf(x) === -1);
    diff2 = segment2.split("").filter(x => segment1.indexOf(x) === -1);
    return diff1.length+diff2.length;
}


function same(segment1, segment2) {
    same1 = segment1.split("").filter(x => segment2.indexOf(x) !== -1);
    same2 = segment2.split("").filter(x => segment1.indexOf(x) !== -1);
    return (same1.length + same2.length);
}