var makeDancer = function(top, left, timeBetweenSteps) {
  //var dancer = Object.create(makeDancer.prototype);
  // use jQuery to create an HTML <span> tag
  this.log = console.log(top, left, timeBetweenSteps)
  this.$node = $('<span class="dancer"></span>');
  this.stepTimer = timeBetweenSteps ;
  this.top = top ;
  this.left = left ;
  //this.setPosition(top, left);
  //this.setter = this.setPosition(top, left);
  //this.stepper = this.step(timeBetweenSteps);
  //return dancer;
};
// makeDancer.prototype.stepTimer = 1000;

makeDancer.prototype.step = function() {
  console.log(that , 'inside set Position makeDance');
    var that = this;
    setTimeout(function (){
      console.log('l')
      that.step()
      }, that.stepTimer);
  
  }

 makeDancer.prototype.setPosition = function() {
  //var that = this;
  //console.log(that , 'inside set Position makeDance');
    var styleSettings = {
      top: this.top,
      left: this.left
    };
    this.$node.css(styleSettings);
    return;
 };
 /*makeDancer.prototype.stepper = makeDancer.prototype.step(this.stepTimer);

 makeDancer.prototype.setter = makeDancer.prototype.setPosition(this.top, this.left);*/