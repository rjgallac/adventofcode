const fileread = require('./functions/fileread');
const funcs = require('./functions/functions')

fileread.read().then(lines => {
    let newlines = lines.map(l => funcs.parse(l));
    let allpoints = funcs.allpoints(newlines)
    let grid = funcs.populateGrid(allpoints)    
    let total = funcs.calcTotalOver2(grid)
    console.log(total)
});