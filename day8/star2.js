const fs = require('fs');
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
    for(let i=0; i<lines.length; i++) {
        splitline = lines[i].split(" | ");
        inputs=[...splitline[0].split(" ")]
        outputs=[...splitline[1].split(" ")]
        totals.push(decode.calc(inputs, outputs));
        
    }
    console.log(totals)
    console.log(totals.reduce((a,b) => a+b , 0))

});