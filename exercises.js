//9) Generate a random number between 0 and 1 in Javascript
  Math.random();

  //10) Generate a random number between 0 and 10 in Javascript

  Math.random()*10;

  //11) Generate a random integer between 0 and 10 (inclusive)
Math.floor (Math.random()*11)

//12) Generate a random number between 5 and 10
Math.random()*5+5;

//12b) Generate a random integer between 5 and 10
Math.floor(Math.random()*6+5);

//13) Generate a random integer between -10 and 30
Math.floor(Math.random()*41-10);

//14) Write a coin flip function. It should return the string "heads" half
//the time and the string "butts" the other half
function coinFlip(){
var x = (Math.floor(Math.random() * 2) == 0)
if (x){
    return 'is heads';
}else{
    return 'is tails';
}

}


// 15) Write a card picking function that outputs
// cards from a standard deck: ex 'Ace of Clubs', 'Queen of Hearts',
// '10 of Diamonds', '8 of Spades'
// There are 4 suits: Hearts, Diamonds, Clubs, Spades
// There are 13 cards for each suit: Ace, 2-10, Jack, King, Queen

// steps:
// generate a random number between 1-4 for suit
// set the value of a string variable depending on that 1-4 number
// generate a random number between 1-13 for the card's number
// put the number and the suit string together and return it
function pickCard(){
    var suit = Math.round(Math.random()*4);
    if (suit === 0) suit = "Hearts";
    else if (suit === 1) suit = "Diamonds";
    else if (suit === 2) suit = "Clubs";
    else suit = "Spades";

    //your code here
var  cards =math.floor(math.random()*13+1)
 if (cards ===1){

return cards=== "ace";
}
};
//16) In programming, what is the opposite of black?
//everything else no black

//17) In programming, what is the opposite of x > y ?

// x<y
//18) Given an array of numbers, add up all the elements
var a = [5,6,7,5433,543,53,535,53,543,543,23,412,34,45];
function sum (a){
    var sum = a.reduce(function(a, b) { return a + b; }, 0);
    return sum;
}

console.log(sum([5,6,7,5433,543,53,535,53,543,543,23,412,34,45]));

//19) Write a function has1337s which takes an array and
//returns true if the array contains the number 1337
function has1337s(arr){
    for (var i =0; i <arr.length; i++){
    if (arr[i] == 1337) return true;
    }
    return false;
    }
console.log(has1337s([1337,3,4]));

/*20) Write a function that receives an array and another parameter.
It will return true if one of the elements of the array is
equal to the other param. It should return false otherwise */

    function theThing(arr,value){
        for (var i=0;i<arr.length;i++){
            if(arr[i]===value){
                return true;
            }else {
                return false;
            }
        }
}
 console.log(theThing([1,2],6));

/* 21) Write a function that receives an array and another parameter.
It will return true if NONE of the elements of the array is
equal to the other param. It should return false otherwise */
function doesntContain(arr, theThing){
 if(!theThing){
     return false;
 }  else {
     return true;
 }
 }
 console.log( doesntContain([1,2],4));


/* 22) Write a function that receives an array of numbers and returns
the average of those numbers*/
 function getAvg(arr){
         var sum = arr.reduce(function(a,b){return a+b;},0);

         var avr=sum/arr.length;
         return avr;
};

 console.log(getAvg([1,2,3,4]));


 // 23) Write a function which draws a star triangle based
//on an input number
// starz(2) =
// **
// *
//starz(4) =
// ****
// ***
// **
// *

function starz(num){

for (var i =num; i>0; i--){
    console.log(new Array(i).fill('*').join(''));
   }

   };
//
console.log(starz(3));
/* 24) Write a function which receives a parameter n and returns the
sum of its half plus half of that, plus half of that, until You
reach a number lower than 2.
n = 100, result = 50+25+12.5+6.25+3.125+1.5625
n = 64, result = 32+16+8+4+2+1
*/
//
function halfSum(num){

  if(num<=2) return 1;

 return num/2 + halfSum(num/2);

}





console.log(halfSum(64));
