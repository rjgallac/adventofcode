fish = [3,4,3,1,2]

countfish=0;

for(let i=0;i<18;i++) {
    for(let i=0;i<countfish;i++) {
        fish.push(8)
    }
    for(let l=0;l<fish.length;l++){
        fish[l]--;
    }
    countfish = fish.filter(f=>f==0).length;
    for(let l=0;l<fish.length;l++){
       if(fish[l]==0){
           fish[l]=6
       }
    }
}
console.log(fish)
console.log(fish.length )
