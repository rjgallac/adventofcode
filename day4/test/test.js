var funcs = require('../src/functions/functions');
const main = require('../src/functions/main')

var assert = require('assert');

describe('Array', function() {
    lines = ['7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1',
        '',
        '22 13 17 11  0',
        ' 8  2 23  4 24',
        '21  9 14 16  7',
        ' 6 10  3 18  5',
        ' 1 12 20 15 19',
        '',
        ' 3 15  0  2 22',
        ' 9 18 13 17  5',
        '19  8  7 25 23',
        '20 11 10 24  4',
        '14 21 16 12  6',
        '',
        '14 21 17 24  4',
        '10 16 15  9 19',
        '18  8 23 26 20',
        '22 11 13  6  5',
        ' 2  0 12  3  7'];
        

    it('should get correct number of random caller digits', function() {
        
        assert.equal(funcs.getNums(lines).length, 27);
    });

    it('should be five clean digits', function(){
        assert.equal(funcs.clean(" 2  7 14 24  9").length, 5)
    })

    it('should be 3 boards', function() {
        assert.equal(funcs.getBoards([...lines]).length, 3);
    });

    it('should play game', function(){
        result = main.game([...lines]);
        assert.equal(result.star1, 4512);
        assert.equal(result.star2, 1924);
    })

    it('should check horiztonal', function(){
        const test =
        ['x','x','x','x','x',
         '1','1','1','1','1',
         '1','1','1','1','1',
         '1','1','1','1','1',
         '1','1','1','1','1']
        assert.equal(funcs.checkBoardHorizontal(test), true)
    })

    it('should check horiztonal last', function(){
        const test =
        ['1','1','1','1','1',
         '1','1','1','1','1',
         '1','1','1','1','1',
         '1','1','1','1','1',
         'x','x','x','x','x']
        assert.equal(funcs.checkBoardHorizontal(test), true)
    })


    it('should check horiztonal and be incomplete', function(){
        const test =
        ['x','x','x','x','1',
         '1','1','1','1','1',
         '1','1','1','1','1',
         '1','1','1','1','1',
         '1','1','1','1','1']
        assert.equal(funcs.checkBoardHorizontal(test), false)
    })

    it('should check vertical', function(){
        const test =
        ['x','1','1','1','1',
         'x','1','1','1','1',
         'x','1','1','1','1',
         'x','1','1','1','1',
         'x','1','1','1','1']
        assert.equal(funcs.checkBoardvertical(test), true)
    })

    it('should check vertical and be incomplete', function(){
        const test =
        ['x','1','1','1','1',
         'x','1','1','1','1',
         'x','1','1','1','1',
         'x','1','1','1','1',
         '1','1','1','1','1']
        assert.equal(funcs.checkBoardvertical(test), false)
    })
});