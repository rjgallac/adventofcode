
var assert = require('assert');
var funcs = require('../src/functions/functions')
describe('Array', function() {
    lines = [
    '0,9 -> 5,9',
    '8,0 -> 0,8',
    '9,4 -> 3,4',
    '2,2 -> 2,1',
    '7,0 -> 7,4',
    '6,4 -> 2,0',
    '0,9 -> 2,9',
    '3,4 -> 1,4',
    '0,0 -> 8,8',
    '5,5 -> 8,2'];

    it('should get lines from source', function() {
        line = funcs.parse("1,2 -> 3,4");
        assert.equal(line.p1.x, 1);
        assert.equal(line.p1.y, 2);
        assert.equal(line.p2.x, 3);
        assert.equal(line.p2.y, 4);

    });


    it('test intersects', function(){
        result = funcs.intersects(0,0,100,100,0,100,100,0)
        assert.equal(result, true)
    })

    it('should test intersections with example', function(){
        newlines = lines.map(l => funcs.parse(l));
        funcs.checkOverLaps(newlines)
    })

    it('test array', function(){
        result = funcs.pointsBetween({p1:{x:8,y:0}, p2: {x:0,y:8}})
        assert.equal(result.length, 9)
    })

    it('test array', function(){
        result = funcs.pointsBetween({p1:{x:0,y:9}, p2: {x:5,y:9}})
        assert.equal(result.length, 6)
    })

    
    it('test array', function(){
        result = funcs.pointsBetween({p1:{x:5,y:9}, p2: {x:0,y:9}})
        assert.equal(result.length, 6)
    })

        
    it('test array', function(){
        result = funcs.pointsBetween({p1:{x:9,y:5}, p2: {x:9,y:0}})
        assert.equal(result.length, 6)
    })

        
    it('test array', function(){
        result = funcs.pointsBetween({p1:{x:9,y:0}, p2: {x:9,y:5}})
        assert.equal(result.length, 6)
    })

    it('get alls points', function(){
        result = funcs.allpoints([
            {p1:{x:9,y:5}, p2: {x:9,y:0}},
            {p1:{x:9,y:4}, p2: {x:3,y:4}}
        ])
    })

    it('get all points for sample set', function(){
        let newlines = lines.map(l => funcs.parse(l));
        let allpoints = funcs.allpoints(newlines)
        assert.equal(allpoints.length,53)
    })

    it('populate grid', function(){
        let newlines = lines.map(l => funcs.parse(l));
        let allpoints = funcs.allpoints(newlines)
        let grid = funcs.populateGrid(allpoints)
        let total = funcs.calcTotalOver2(grid)
        // console.table(grid)
        assert.equal(total,12)
    })

    it('test both increasing', function(){
        line = {p1: {x:1,y:1},p2:{x:3,y:3}};
        results = funcs.pointsBetweenDiagonal(line)
        assert.deepEqual([{x:1,y:1},{x:2,y:2},{x:3,y:3}], results)
    })

    it('test both decreasing', function(){
        line = {p1: {x:3,y:3},p2:{x:1,y:1}};
        results = funcs.pointsBetweenDiagonal(line)
        assert.deepEqual([{x:3,y:3},{x:2,y:2},{x:1,y:1}], results)
    })

    it('test x increasing y decreasing- top left to bottom right', function(){
        line = {p1: {x:1,y:3},p2:{x:3,y:1}};
        results = funcs.pointsBetweenDiagonal(line)

        assert.deepEqual([{x:1,y:3},{x:2,y:2},{x:3,y:1}], results)
    })

    it('test lines at diagonal 4', function(){
        line = {p1: {x:3,y:1},p2:{x:1,y:3}};
        results = funcs.pointsBetweenDiagonal(line)
        assert.deepEqual([{x:3,y:1},{x:2,y:2},{x:1,y:3}], results)
    })

});