const fs = require('fs')

fs.readFile('input.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  lines = data.split("\r\n")
  console.log(lines)
  size = lines[0].length;

  console.log(size)
  bits=[];
  for(j=0;j<size;j++){
    zero=0;
    ones=0;
    for(i=0;i<lines.length;i++){
        if(lines[i][j]==0){
            zero++;
        }else{
            ones++;
        }
    }
    if(ones>zero){
        bits[j]=1;
    }else{
        bits[j]=0;
    }
  }
  console.log(bits);
  gamma = parseInt(bits.join(''), 2);

  reversebits = bits.map(b=> b==1?0:1);
  epsilon = parseInt(reversebits.join(''), 2);
  powerconsumption = gamma*epsilon;
  console.log(powerconsumption);
});