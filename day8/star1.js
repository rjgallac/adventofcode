const fs = require('fs')

fs.readFile('data.txt', 'utf8' , (err, data) => {
    if (err) {
        console.error(err)
        return
      }
    lines = data.split("\r\n")
    // console.log(lines)
    size = lines.length;
    console.log(size)
    outputs = [];
    matchingoutputs = [];
    for(let i=0; i<lines.length; i++) {
        splitline = lines[i].split("|");
        
        outputs.push(...splitline[1].split(" "))
    }
    counts = outputs.reduce((a,b) => b.split("").length==2 || b.split("").length==3 || b.split("").length==4 || b.split("").length==7 ? a+1 : a,0)
    console.log("count" + counts)
    // console.log(outputs)
});