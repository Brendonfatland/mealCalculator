//Constructor function defining Diner template.
var Diner = function(name, type, cost){
this.name = name;
this.type = type;
this.cost = cost;
};
//New instance of type Diner object.
var debby = new Diner("Debby","Steak",50);
var john = new Diner("John","Lobster", 30);
var totalCostOfDinnerPreTaxAndTip = john.cost + debby.cost;
var totalCostOfDinnerWithTaxNoTip = totalCostOfDinnerPreTaxAndTip * .07 + totalCostOfDinnerPreTaxAndTip;
var totalCostOfDinnersTip = totalCostOfDinnerWithTaxNoTip * .20 + totalCostOfDinnerWithTaxNoTip ;
//Add two object costs together. Place in inner html of cost id.
document.getElementById("cost").innerHTML = totalCostOfDinnerPreTaxAndTip;
//Calculates a 7% sales tax. Adds to tip id.
document.getElementById("tax").innerHTML = totalCostOfDinnerWithTaxNoTip;
//asdf
document.getElementById("tip").innerHTML = totalCostOfDinnersTip;
