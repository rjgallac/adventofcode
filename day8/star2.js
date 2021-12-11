const fs = require('fs')
const decode = require('./functions.js')

fs.readFile('data.txt', 'utf8' , (err, data) => {
    if (err) {
        console.error(err)
        return
      }
    lines = data.split("\r\n")
    // console.log(lines)
    size = lines.length;
    console.log(size)
    totals = [];
    for(let i=0; i<1; i++) {
        splitline = lines[i].split(" | ");
        inputs=[...splitline[0].split(" ")]
        outputs=[...splitline[1].split(" ")]
        for(let i=0;i<outputs.length;i++){
            outputs[i] = outputs[i].split('').sort().join('')
        }
        console.log(inputs) 
        let decodedinputsmap = decode.decoded(inputs);
        let reversedecodedinputsmap = {};
        Object.keys(decodedinputsmap).forEach((k) =>{
            let val = decodedinputsmap[k].toString();
            reversedecodedinputsmap[val] = parseInt(k);
        });
        // console.log(decodedinputsmap)
        console.log(reversedecodedinputsmap)
        total = "";
        for(let i=0;i<outputs.length;i++){
            let val = outputs[i];


            total = total + reversedecodedinputsmap[val];
        }
        console.log(total)
        totals.push(parseInt(total))
        console.log(outputs)
        
    }
    console.log(totals)
    console.log(totals.reduce((a,b) => a+b , 0))

});