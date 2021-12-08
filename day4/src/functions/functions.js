exports.getNums = function(lines) {
    return lines[0].split(",");
}

exports.getBoards = function(lines) {
    lines.shift()
    lines.shift();
    boards = [];
    while(lines.length > 0){
        board = [];
        for(i=0;i<5;i++) {
            board.push(...clean(lines.shift()));
        }
        lines.shift();
        boards.push(board)
    }
    return boards;
}

function clean(line){
    return line.match(/(\d\d)|(\d)/gi);
}


exports.checkBoardHorizontal = function(board){
    for(x=0; x <= 25; x+=5) {
        total = 0;
        for(y=0; y < 5; y++) {
            if(board[x + y] == 'x') total++;
        }
        if(total == 5) return true;
    }
    return false;
}

exports.checkBoardvertical = function(board){
    for(x=0;x<5;x++){
        total = 0
        for(y=0;y<=25;y+=5){
            if(board[x+y] == 'x') total++
        }
        if(total == 5) return true
    }
    return false;
}

exports.clean = clean