//Business Logic 
function PizzaCost (size, toppings, amount) {
  this.size = size; 
  this.toppings = toppings; 
  this.amount = amount;   
}
PizzaCost.prototype.sizeCost = function() { 
  let sizeCost =0 ; 
  if (this.size === "small") {
    sizeCost +=5 ; 
  } else if (this.size === "medium"){
    sizeCost +=10;  
  } else if (this.size === "large") {
    sizeCost +=15;
  } 
  return sizeCost;
}

PizzaCost.prototype.topCost = function () { 
  const totalToppings = this.toppings.length; 
  let topCost=0;
  if (totalToppings < 2 ) {
    topCost +=1 ; 
  } else if (totalToppings < 4){
    topCost +=3 ; 
  } else  if (totalToppings < 6){
    topCost +=5 ;
  } else if (totalToppings < 8){
    topCost +=8;
  } else if (totalToppings < 12){
    topCost +=10;
  } 
  return topCost;
}

PizzaCost.prototype.total = function(sizeCost, topCost){
  var total = (sizeCost + topCost) * this.amount;  
  return total ;
}

//UI Logic  
$(document).ready(function(){
  $("#formOne").submit(function(event) { 
    event.preventDefault(); 
      let size = $("#size-select").val();

      var selectedP = [];
      for (var option of document.getElementById('ProteinTopping-select').options) {
        if (option.selected) {
          selectedP.push(option.value);
        }
      } 
      var selectedV = [];
      for (var option of document.getElementById('VeggieToppings-select').options) {
        if (option.selected) {
          selectedV.push(option.value);
        }
      }
      let toppings = selectedP.concat (selectedV); 

      const amount = parseInt($("#inputGroupSelect01").val());    
   
      let newPizzaCost = new PizzaCost (size, toppings, amount);      
      let topCost = newPizzaCost.topCost (); 
      let sizeCost = newPizzaCost.sizeCost(); 
      let total = newPizzaCost.total(sizeCost, topCost); 


      $("#total-pizza").text(amount);
      $("#size-of-pizza").text(size);
      $("#total-toppings").text(toppings);
      $("#total-cost").text(total);
  
  }); 
});