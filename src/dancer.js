// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  //var dancer = Object.create(makeDancer.prototype);
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.stepTimer = timeBetweenSteps ;
  this.setPosition(top, left);
  // this.setter = this.setPosition(top, left);
  // this.stepper = this.step(timeBetweenSteps);
  //return dancer;
};

makeDancer.prototype.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    var that = this;
    setTimeout(function (){
      console.log('l')
      that.step()
      }, this.stepTimer);
  
  }

 makeDancer.prototype.setPosition = function(top, left) {
  var that = this;
  // console.log(that)
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    var styleSettings = {
      top: top,
      left: left
    };
    that.$node.css(styleSettings);
    return;
 };

