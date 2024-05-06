// random deciel 0 to 100 (exclusive)
//let rand1 = Math.random() * 100;
//console.log(rand1);

// random int 0 to 10 (exclusive)
//letrand2 = Math.random() * 10; // 0.00 to 9.99
//rand2 = Math.floor(rand2);
//console.log(rand2);

// random int -5 to 5

//let rand3 = Math.random()*10 // 5 -5 = 10
//rand3 = rand3 - 5;
//console.log(rand3);

// logical opertatirs: && (and), || (or), ! (not)

// && - Each side must be true
// true && true >> true
// true && false >> false
// false && true >> false
// false && false >> false

// || - Only 1 or both must be true
// true || true >> true
// true || False >?> true
// false || true >> true
// false || false >> false

// let x = 5, y = 10, z = 100

//let bool1 = x >= 5 || z < 50;
//console.log(bool1);

//let bool2 = (x + 5 > y && z == 100);
//console.log(bool2)

//let bool3 = (x = 6 > y || z == 100);
//console.log(bool3)

//let bool4 = !(y < x) || !(y * x >= z);
//console.log(bool4);

//let bool5 = x + 10 < z / 2 || !(y * x >= z);
//console.log(bool5)

// Delivery application
// Reject any package with a dimention larger then 10 inches

let length =+prompt("Length?");
let width =+prompt("Width?");
let height =+prompt("Height?");

//if (length > 10 || width > 10 || height > 10) {
//console.log("Reject")
//}else {
//console.log("Accept")
//}

if (length <= 10 && width <= 10 && height <= 10) {
console.log("Accept");
} else {
console.log("Reject");
}

