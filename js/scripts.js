//Business Logic 
//constructor for cost of pizza 
function PizzaCost (size, toppings, amount) {
  this.size=size; 
  this.toppings=toppings; 
  this.amount =amount; 
}
// PizzaCost.prototype.totaltoppings =function (){ 
// this.toppings = //toppings + this.toppings; 
// let toppings =0;
}//

PizzaCost.prototype.cost =function (){
  let cost = 0 ; 
 
  if (this.size ===5) {
    cost +=5 ;
  } else if (this.size ===10 ){
    cost +=10; 
  }else (this.size ===15)
  cost +=15; 
  if (this.totalToppings < 3 ) {
    cost +=1 ; 
  } else if (this.totalToppings < 6){
    cost +=2 ; 
  }else  if (this.totalToppings < 9){
    cost +=3 ;
  }else if (this.totalTtoppings < 12){
    cost +=8; 
  }
  if (this.amount ===1){ 
    let totalcost =cost ; 
  } else if (this.amount ===2){ 
     totalcost += (cost * 2); 
  }else if (this.amount ===3){ 
    totalcost += (cost * 3); 
  }else (this.amount ===4)
     totalcost += (cost *4);
}

//UI Logic  

$(document).ready(function(){
 ("form#formOne").submit(function(event) {
   event.preventDefault(); 
   const size =$("select#size").val(); 
   const toppings = $("select#toppings").val(); 
   const amount =$("select#amount").val(); 
   $("select#size").val("")
   $("select#toppings").val("")
   $("select#amount").val("")
   var newPizzaCost = new PizzaCost (size, toppings, amount);
   newPizzaCost.totalcost();
 });
});


