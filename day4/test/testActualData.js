const fileread = require('../src/functions/fileread');
const main = require('../src/functions/main')

var assert = require('assert');

describe('Array', function() {
    it('test actual data', async function() {
        await fileread.read().then(lines => {
            result = main.game(lines);
            assert.equal(result.star1, 38594);
            assert.equal(result.star2, 21184);
        });
    });
});