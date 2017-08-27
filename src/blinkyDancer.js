var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this,top, left, timeBetweenSteps);
  this.log = console.log(top, left, timeBetweenSteps);
  /*this.setStep = this.step();
  this.setPos = this.setPosition();
  this.oldStep = this.step();
*/
};


makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;






makeBlinkyDancer.prototype.step = function() {
  console.log('inside step of makeBlinkyDancer')
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