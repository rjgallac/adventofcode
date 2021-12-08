const funcs = require('./functions')

exports.game = function(lines) {
    nos = funcs.getNums(lines);
    boards = funcs.getBoards(lines);
    found = -1;
    completedboards = [];
    star1 = 0;
    star2 = 0;
    for(i = 0; i < nos.length; i++) {
        no = nos[i];
        for(j=0; j < boards.length; j++) {
            for(k=0; k < boards[j].length; k++) {
                if(boards[j][k] == no) {
                    boards[j][k] = 'x';
                }
                if(funcs.checkBoardHorizontal(boards[j]) || funcs.checkBoardvertical(boards[j])){
                    if(completedboards.filter(b => b == j).length == 0 ){
                        completedboards.push(j)
                    }
                    found = j;
                }
            }
        }
        if(found > 0 && star1 == 0){
            star1 = no * boards[found].filter(x=> x!='x').reduce((a,b) => a+parseInt(b),0)
        }
        if(completedboards.length == boards.length && star2 == 0){
            found = completedboards[completedboards.length-1];
            star2 = no * boards[found].filter(x=> x!='x').reduce((a,b) => a+parseInt(b),0);
        }
    }
    return {"star1" : star1, "star2" : star2};
}