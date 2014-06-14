var utils = {};

utils.roundOffNum = function(num) {
  return Math.round(num * 100) / 100;
};

utils.resizeBackgroundHeight = function() {
  var $window = $(window),
      $background = $('.background-splash'),
      height = $window.height(),
      width = $window.width(),
      aspectRatio = utils.roundOffNum(height/width);
  if(aspectRatio > 1) {
    var specialNumber = 1.55;
    height = utils.roundOffNum(height*specialNumber);
  }
  $background.height(height);
};

export default utils;
