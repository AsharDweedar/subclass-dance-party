var makeColorfulDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this,top, left, timeBetweenSteps);
};


makeColorfulDancer.prototype = Object.create(makeDancer.prototype);
makeColorfulDancer.prototype.constructor = makeColorfulDancer;


makeDancer.prototype.setColors = function() {
  
  var arr = [ 'blue' , 'red' , 'green' , 'yellow']
    this.$node.css('border-color' , arr[ Math.floor(Math.random() * arr.length )]);
    //this.$node = $('<span class="dancer" ></span>');
    //console.log(1);
    return;
 };

 makeColorfulDancer.prototype.step = function() { 
  this.setColors();
  var that = this;
    setTimeout(function (){
      that.step()
      }, that.stepTimer);
  };
