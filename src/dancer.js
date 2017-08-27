var makeDancer = function(top, left, timeBetweenSteps) {
  
  this.log = console.log(top, left, timeBetweenSteps)
  this.$node = $('<span class="dancer"></span>');
  this.stepTimer = timeBetweenSteps ;
  this.top = top ;
  this.left = left ;
  
};

makeDancer.prototype.step = function() {
  console.log(that , 'inside set Position makeDance');
    var that = this;
    setTimeout(function (){
      that.step()
      }, that.stepTimer);
  
  }

 makeDancer.prototype.setPosition = function() {
    var styleSettings = {
      top: this.top,
      left: this.left
    };
    this.$node.css(styleSettings);
    return;
 };