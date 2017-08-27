var makeFunckyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this,top, left, timeBetweenSteps);
  this.x = 1;
  this.y = 1;

};


makeFunckyDancer.prototype = Object.create(makeDancer.prototype);
makeFunckyDancer.prototype.constructor = makeFunckyDancer;


makeFunckyDancer.prototype.step = function() {

  if (this.left > $("body").width()){
    this.x = -1;
  } else if (this.left < 0 ){
    this.x = 1;
  }
  this.left += (5 * this.x);


  if (this.top > $("body").height()){
    this.y = -1;
  } else if (this.top < 0 ){
    this.y = 1;
  }
  this.top += (5 * this.y);
  
  this.setPosition();


  var that = this;
    setTimeout(function (){
      that.step()
      }, that.stepTimer);
  };