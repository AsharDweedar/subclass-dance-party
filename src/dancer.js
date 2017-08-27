var makeDancer = function(top, left, timeBetweenSteps) {
  
  this.$node = $('<span class="dancer"></span>');
  this.stepTimer = timeBetweenSteps ;
  this.top = top ;
  this.left = left ;
  
};

makeDancer.prototype.step = function() {
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