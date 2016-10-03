//Constructor function defining Diner template.
var Diner = function(name, type, cost){
this.name = name;
this.type = type;
this.cost = cost;
};
//New instance of type Diner object.
var Debby = new Diner("Debby","Steak",50);
var John = new Diner("John","Lobster", 30);
// variables to make printing to dom easier.
var totalCostOfDinnerPreTaxAndTip = John.cost + Debby.cost;
var totalCostOfDinnerWithTaxNoTip = totalCostOfDinnerPreTaxAndTip * .07 + totalCostOfDinnerPreTaxAndTip;
var totalCostOfDinnersTip = totalCostOfDinnerWithTaxNoTip * .20 + totalCostOfDinnerWithTaxNoTip ;
//targets ElementbyId inserting variable.
document.getElementById("cost").innerHTML = totalCostOfDinnerPreTaxAndTip;
document.getElementById("tax").innerHTML = totalCostOfDinnerWithTaxNoTip;
document.getElementById("tip").innerHTML = totalCostOfDinnersTip;
//Constructor function defining Bill template.
var Bill = function(name, total, tax, tip){
this.name = name;
this.total = total;
this.tax = tax;
this.tip = tip;
};
var Diner1 = new Bill ("Diner1", 30, 2.1, 36.42);
var Diner2 = new Bill ("Diner2", 50, 3.5, 10.7);
//targets ElementbyId inserting variable.
var totalOfAllDiners = Diner1.total + Diner2.total;
var totalOfAllDinersIncludingTax = totalOfAllDiners * .07 + totalOfAllDiners;
var totalDinerTips = totalOfAllDiners * .20 + totalOfAllDiners;
var printBreakdownForEachDiner = Diner1.name + "- Total: " + Diner1.total + ", Tax: " + Diner1.tax + ", Tip: " + Diner1.tip + "</br>" + Diner2.name +"- Total: " + Diner2.total + ", Tax: " + Diner2.tax + ", Tip: " + Diner2.tip  ;
//targets ElementbyId inserting variable.
document.getElementById("totalDiners").innerHTML = totalOfAllDinersIncludingTax;
document.getElementById("totalTips").innerHTML = totalDinerTips;
document.getElementById("totalBreakdown").innerHTML = printBreakdownForEachDiner;
