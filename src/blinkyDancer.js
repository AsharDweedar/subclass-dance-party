var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this,top, left, timeBetweenSteps);
  this.log = console.log(top, left, timeBetweenSteps);
};


makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;






makeBlinkyDancer.prototype.step = function() {
    // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.toggle();

  var that = this;
    setTimeout(function (){
      console.log('l')
      that.step()
      }, that.stepTimer);
  

    //this.oldStep();
    
  };