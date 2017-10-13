var should = require('chai').should(),
    flips = require('../index'),
    flipNow = flips.flipNow;

describe('#flipNow', function() {
    it('Random value between 1 and 2', function() {
        flipNow().should.equal('tails');
    });
});
