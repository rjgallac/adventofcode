let input = [
    [4,2,4,1,5,1,2,2,4,1,1,2,2,2,4,4,1,2,1,1,4,1,2,1,2,2,2,2,5,2,2,3,1,4,4,4,1,2,3,4,4,5,4,3,5,1,2,5,1,1,5,5,1,4,4,5,1,3,1,4,5,5,5,4,1,2,3,4,2,1,2,1,2,2,1,5,5,1,1,1,1,5,2,2,2,4,2,4,2,4,2,1,2,1,2,4,2,4,1,3,5,5,2,4,4,2,2,2,2,3,3,2,1,1,1,1,4,3,2,5,4,3,5,3,1,5,5,2,4,1,1,2,1,3,5,1,5,3,1,3,1,4,5,1,1,3,2,1,1,1,5,2,1,2,4,2,3,3,2,3,5,1,5,1,2,1,5,2,4,1,2,4,4,1,5,1,1,5,2,2,5,5,3,1,2,2,1,1,4,1,5,4,5,5,2,2,1,1,2,5,4,3,2,2,5,4,2,5,4,4,2,3,1,1,1,5,5,4,5,3,2,5,3,4,5,1,4,1,1,3,4,4,1,1,5,1,4,1,2,1,4,1,1,3,1,5,2,5,1,5,2,5,2,5,4,1,1,4,4,2,3,1,5,2,5,1,5,2,1,1,1,2,1,1,1,4,4,5,4,4,1,4,2,2,2,5,3,2,4,4,5,5,1,1,1,1,3,1,2,1],
    
];
// input = [[3,4,3,1,2]];

for (let i=0;i<255;i++) {
   processLanterns(input);

}
total = 0;
for(let i=0;i<input.length;i++) {
    console.log(i + ":"+input[i].length);
    total += input[i].length

}

console.log("total:"+total)


function processLanterns(){
    let lanterns = 0;
    for(let i=0;i<input.length;i++) {
        lanterns += calcAgeAndAdditionalLanterns(input[i]);
        lanterns = addAdditionalLanterns(input[i], lanterns);
        if(lanterns>0){
            input.push([])
        }                       

    }

    


}

function addAdditionalLanterns(input, lanterns) {
    while(input.length < 50000000 && lanterns > 0){
        for(let i=0; i<lanterns; i++){
            input.push(9);
            lanterns--;
            if(input.length == 50000000) {
                break;
            }
        } 
    }
    return lanterns;
}

function calcAgeAndAdditionalLanterns(currentArray){
    let lanterns = 0;

    for(let j=0;j<currentArray.length;++j) {
        --currentArray[j];
        if(currentArray[j] == 0) {
            lanterns++;
        }
        if(j < currentArray.length && currentArray[j] == -1) {
            currentArray[j] = 6;
        }
    }
    return lanterns;
}