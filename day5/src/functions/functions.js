let models = require('../../src/models')
let Point = models.Point;
let Line = models.Line;

exports.parse = function(line) {
    coord = line.match(/\d\d\d|\d\d|\d/g);
    let p1 = new Point(coord[0], coord[1]);
    let p2 = new Point(coord[2], coord[3])
    return new Line(p1, p2);
}


exports.populateGrid = function(allpoints) {
    maxx = allpoints.reduce((a,b) => b.x > a ? b.x : a,0)
    maxy = allpoints.reduce((a,b) => b.y > a ? b.y : a,0)
    grid = [];
    for(let i=0;i<=maxx;i++){
        grid[i] =[]
        for(let j=0;j<=maxy;j++){
            grid[i][j] =".";
        }
    }
    for(var i=0; i < allpoints.length; i++){
        if(grid[allpoints[i].x] == undefined) {
            grid[allpoints[i].x] = [];
        }
        if(grid[allpoints[i].y][allpoints[i].x] != '.'){
            let val = grid[allpoints[i].y][allpoints[i].x];
            val = val + 1;
            grid[allpoints[i].y][allpoints[i].x] = val;
        } else{
            grid[allpoints[i].y][allpoints[i].x] = 1;
        }
    } 
    return grid;
}

exports.calcTotalOver2 = function(grid){
    let total = 0;;
    for(let i=0;i<grid[0].length;i++){
        for(let j=0;j<grid.length;j++){
            if(grid[i][j] >=2){
                total++;
            }
        }
    }
    return total;
}
exports.allpoints = function(lines) {
    let allpoints = [];
    for(let i=0;i<lines.length;i++) {
        let points = this.pointsBetween(lines[i])
        allpoints.push(...points);
    }
    return allpoints;
}

exports.pointsBetween = pointsBetween;

function pointsBetween(line) {
    let p1x = parseInt(line.p1.x)
    let p1y = parseInt(line.p1.y)
    let p2x = parseInt(line.p2.x)
    let p2y = parseInt(line.p2.y)
    let points = []
    if( p1x == p2x || p1y == p2y){
        if(p1x<p2x) {
            for(let i=p1x;i<=p2x;i++){
                points.push({x:i, y:p1y});
            }
        }
        
        if(p1x > p2x) {
            for(let i=p1x;i>=p2x;i--){
                points.push({x:i, y:p1y});
            }
        }
        if(p1y<p2y) {
            for(let i=p1y;i<=p2y;i++){
                points.push({x:p1x, y:i});
            }
        }
        if(p2y < p1y){
            for(let i=p1y;i>=p2y;i--){
                points.push({x:p1x, y:i});
            }
        }
        return points
    } else {
        return pointsBetweenDiagonal(line);
    }
}

exports.pointsBetweenDiagonal = pointsBetweenDiagonal

function pointsBetweenDiagonal(line) {
    let p1x = parseInt(line.p1.x)
    let p1y = parseInt(line.p1.y)
    let p2x = parseInt(line.p2.x)
    let p2y = parseInt(line.p2.y)
    let points = []
    //assuming they increase/decrease at the same rate
    //both increase
    if(p1x<p2x && p1y<p2y) {
        for(let i=0;i<p2x-p1x+1;i++){
            points.push({x:p1x+i,y:p1y+i});
        }
    }
    //both decrease    
    if(p1x>p2x && p1y>p2y) {   
        for(let i=0;i<p1x-p2x+1;i++){
            points.push({x:p1x-i,y:p1y-i});
        }
    }    
    //x greater y less
    if(p2x>p1x && p1y>p2y) {   
        for(let i=0;i<p2x-p1x+1;i++){
            points.push({x:p1x + i,y: p1y-i});
        }
    }    
    //bottom right - top left
    if(p1x>p2x && p1y<p2y) {
        for(let i=0; i<=p1x-p2x;i++){
            points.push({x:p1x - i, y:p1y+i});
        }
    }    
    return points
}

exports.intersects = interescts; 

exports.allpoints = function(lines) {
    let points = [];
    for(let i=0;i<lines.length;i++) {
        let pointsbetween = pointsBetween(lines[i])
        if(pointsbetween != null){
            points.push(...pointsbetween);
        }
    }
    return points
}

function interescts(a,b,c,d,p,q,r,s) {
    var det, gamma, lambda;
    det = (c - a) * (s - q) - (r - p) * (d - b);
    if (det === 0) {
      return false;
    } else {
      lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
      gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
      return (0 < lambda && lambda < 1) && (0 < gamma && gamma < 1);
    }
};



exports.checkOverLaps = function(lines) {
    overlaps = 0;
    for(i=0;i<lines.length;i++) {
        for(j=0;j<lines.length;j++) {
            intersects = interescts(
                lines[i].p1.x,lines[i].p1.y,
                lines[i].p2.x,lines[i].p2.y,
                lines[j].p1.x,lines[j].p1.y,
                lines[j].p2.x,lines[j].p2.y);
            if(interescts) overlaps++
        }
    }
    return overlaps;
}