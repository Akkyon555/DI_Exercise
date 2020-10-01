// Day 10 Excersie 1

// function checkDriverAge(){
// 	let age = prompt("What is your age?");

// if (Number(age) < 18) {
//     alert("Sorry, you are too young to drive this car. Powering off");
// } else if (Number(age) > 18) {
//     alert("Powering On. Enjoy the ride!");
// } else if (Number(age) === 18) {
//     alert("Congratulations on your first year of driving. Enjoy the ride!");
// }
// }

// checkDriverAge()



// function checkDriverAge(age){
	
// if (Number(age) < 18) {
//     alert("Sorry, you are too young to drive this car. Powering off");
// } else if (Number(age) > 18) {
//     alert("Powering On. Enjoy the ride!");
// } else if (Number(age) === 18) {
//     alert("Congratulations on your first year of driving. Enjoy the ride!");
// }
// }

// checkDriverAge(92)


// Ex 2

// amazonBasket = {
//     glasses: 1,
//     books: 2,
//     floss: 100
// }

// function checkBasket(){
// 	var item = prompt('What item are you looking for?')

// 	if (item in amazonBasket) {
// 		alert('your item is in the basket')
// 	}
// 	else {
// 	alert('your item is not in the basket')
// 	}
// }
// checkBasket

// Ex 6

// ​
// function change_enough(pocket_change,price){
// 	var sum=0
// 	sum=sum+pocket_change[0]*0.25
// 	sum=sum+pocket_change[1]*0.10
// 	sum=sum+pocket_change[2]*0.5
// 	sum=sum+pocket_change[3]*0.1
// ​
// 	if (sum>=price){
// 		console.log("You have enough money.")
// 	}
// ​
// 	else{
// 		console.log("You don't have enough money.")
// 	}
// }

// change_enough([0, 0, 20, 5], 0.75)

// Ex 7

// let shoppingList = ['banana', 'orange', 'apple'];

// 		let stock = { 
// 		    "banana": 6, 
// 		    "apple": 0,
// 		    "pear": 12,
// 		    "orange": 32,
// 		    "blueberry":1
// 		}  

// 		let prices = {    
// 		    "banana": 4, 
// 		    "apple": 2, 
// 		    "pear": 1,
// 		    "orange": 1.5,
// 		    "blueberry":10
// 		} 
// 		let sumOfPrices = 0;

// 		function myBill() {
// 			for (item of shoppingList) 
// 			{
// 				if (stock[item] > 0) {
// 					sumOfPrices = sumOfPrices + prices[item];
// 				}
// 			}
// 			return sumOfPrices;
// 		}
// 		console.log(myBill());
