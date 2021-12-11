var main = require('../functions.js');
var assert = require('assert');

describe('Array', function() {

    it('should decode', function() {
        input = ["acedgfb", "cdfbe", "gcdfa", "fbcad", "dab", "cefabd", "cdfgeb", "eafb", "cagedb", "ab"]
        decoded = main.decoded(input)
        console.log(decoded)
        assert.equal(decoded[0], 'cagedb')
        assert.equal(decoded[1], 'ab')
        assert.equal(decoded[2], 'cdfbe')
        assert.equal(decoded[3], 'fbcad')
        assert.equal(decoded[4], 'eafb')
        assert.equal(decoded[5], 'gcdfa')
        
        assert.equal(decoded[7], 'dab')
        assert.equal(decoded[8], 'acedgfb')



    });

    it('should decode', function() {
        input = ["ceb", "bgfdea", "febgc", "ec", "eadcgfb", "eagbcd", "fcdebg", "dcef", "gafbc", "egdbf"]
        decoded = main.decoded(input)
        console.log(decoded)
    });

    it('should decode', function() {
        input = ["cfabg", "dfcgea", "fgc", "cdbf", "dcabg", "fc", "cfdabg", "cbdgae", "fdcgeba", "gefba"]
        decoded = main.decoded(input)
        console.log(decoded)
    });

    it.only('should decode', function() {
        input = ["gefc", "cfgbade", "fg", "eagfd", "aecgd", "efdcag", "ebfad", "geacbd", "bagcdf", "fga"];
        decoded = main.decoded(input)
        console.log(decoded)
    });

      

    it('work out 3,5,2', ()=>{
        let decoded = {
            4: 'eafb',
            7: 'dab',
            8: 'acedgfb',
            1: 'ab'
        };
        const input = ['cdfbe', 'gcdfa', 'fbcad' ];
        decoded = main.workOut352(input, decoded);
        console.log(decoded)
        assert.equal(decoded[3], "fbcad");
        assert.equal(decoded[5], "gcdfa");
        assert.equal(decoded[2], "cdfbe");

        

        
    })
    it('work out 6,9,0', ()=>{
        let decoded = {
            4: 'eafb',
            7: 'dab',
            8: 'acedgfb',
            1: 'ab',
            2: 'cdfbe',
            3: 'fbcad'
        };
        decoded = main.workOut690([ 'abcdef', 'bcdefg', 'abcdeg' ], decoded);
        assert.equal(decoded[6], "bcdefg");
        assert.equal(decoded[9], "abcdef");
        assert.equal(decoded[0], "abcdeg");
    });

});