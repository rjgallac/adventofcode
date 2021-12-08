// input = [4,2,4,1,5,1,2,2,4,1,1,2,2,2,4,4,1,2,1,1,4,1,2,1,2,2,2,2,5,2,2,3,1,4,4,4,1,2,3,4,4,5,4,3,5,1,2,5,1,1,5,5,1,4,4,5,1,3,1,4,5,5,5,4,1,2,3,4,2,1,2,1,2,2,1,5,5,1,1,1,1,5,2,2,2,4,2,4,2,4,2,1,2,1,2,4,2,4,1,3,5,5,2,4,4,2,2,2,2,3,3,2,1,1,1,1,4,3,2,5,4,3,5,3,1,5,5,2,4,1,1,2,1,3,5,1,5,3,1,3,1,4,5,1,1,3,2,1,1,1,5,2,1,2,4,2,3,3,2,3,5,1,5,1,2,1,5,2,4,1,2,4,4,1,5,1,1,5,2,2,5,5,3,1,2,2,1,1,4,1,5,4,5,5,2,2,1,1,2,5,4,3,2,2,5,4,2,5,4,4,2,3,1,1,1,5,5,4,5,3,2,5,3,4,5,1,4,1,1,3,4,4,1,1,5,1,4,1,2,1,4,1,1,3,1,5,2,5,1,5,2,5,2,5,4,1,1,4,4,2,3,1,5,2,5,1,5,2,1,1,1,2,1,1,1,4,4,5,4,4,1,4,2,2,2,5,3,2,4,4,5,5,1,1,1,1,3,1,2,1]
// input = [3,4,3,1,2]
input = [3]
const days = 18
total = 0;
for(let i=0;i<input.length;i++) {
    console.log("i"+i)
    kids = Math.floor((days - input[i] + 1 ) / 6);
    console.log("kids:" + (kids));
    console.log("days left:" + ( days - input[i])); 
    // total += kids
    total += havekids(kids, days - input[i])
}
console.log("total:" + (total));
result = 26

function havekids(kids, daysLeft){
    let newkids = (Math.floor(daysLeft / 8)) * kids ;
    console.log("newkids2:"+ newkids)
    console.log(total)
    if(daysLeft<8){
        return 0;
    }
    let kidstotal =0;
    for(let i=0;i<newkids;i++){
        console.log("calling with : " + newkids + ":" + (daysLeft - 8))
        kidstotal += havekids(newkids, (daysLeft - 8))

    }
    // console.log(kidstotal)
    return (newkids + kidstotal);
}