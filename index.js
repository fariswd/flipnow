/**
 * Flip Coin
 *
 * @param  {}
 * @return {String}
 */
module.exports = {
    flipNow: function() {
        var flip = Math.floor(Math.random() * 2) + 1;
        //var flip = 1;
        if(flip === 1){
            return "head";
        } else {
            return "tails";
        }
    }
  };
