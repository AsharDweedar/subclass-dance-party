var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this,top, left, timeBetweenSteps);
};


makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;


makeBlinkyDancer.prototype.step = function() {
  console.log('inside step of makeBlinkyDancer')
  this.$node.toggle();

  var that = this;
    setTimeout(function (){
      console.log('l')
      that.step()
      }, that.stepTimer);
  };