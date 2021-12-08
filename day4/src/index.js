const fileread = require('./functions/fileread');
const main = require('./functions/main')
fileread.read().then(lines => {
    const score = main.game(lines);
    console.log(score)
});

