//1.) Create an array called ages.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
//Programmatically subtract the value of the first element in the array from the last element.
console.log(ages [ages.length-1]-ages[0]);
//1b.Add a new age to your array and repeat the steps above to ensure it is dynamic.
ages.push(34);
console.log(ages[ages.length -1] - ages[0])

 //1c.Use the loop to iterate through the array and calculate the average age.
var sum = 0;
for (i = 0; i < ages.length; i++)  {
    sum += ages[i];
};
console.log(sum / ages.length);

//2.)Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
 var names  =['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

 //2a.Use the loop to iterate the average number of letters per name in the array.
 sum = 0;
 for (i = 0; i < names.length; i++) {
 sum = sum + names[i].length;

};
console.log(sum / names.length);
//2b.Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
let con = " ";
for (let i = 0; i < names.length; i++) {
 con = con.concat(" ", names[i]);
}
console.log(con)

//3. How do you access the last of any array?
//console.log(arrayName - 1)

//4.How do you access the first element of any array?
const firstName = names[0];
console.log(firstName);

//5.Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
var nameLength =[]

for (i = 0; i < name.Length; i++) {
    names.lengths.push(names[i].length);
}
console.log(names.Length);

//example:

//let names = ["Kelly", "Sam", "Kate"];    // starting with this array
//let nameLengths = [5, 3, 4];             // create a new array

//6.Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let lenSum = 0;
 for(let i = 0; i < name.length.length; i++) {
    lenSum = lenSum + nameLengths[i];
 }
console.log(lenSum);

//7.Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
function repeat(word, n) {
    var repeatedWord = "";
for (i = 0; i < n; i++) {
    repeatWord = repeatedWord + word;
  }
   return (repeatWord);

}
  console.log(repeat('Hello', 3));


//8.Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
function fullName( firstName, lastName) {
   
    return (firstName + '  ' + lastName);
}
console.log(fullName['Bianca', 'Lott']);


//9.Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
/* function hundred 
let sum = 0;
for (i = o; i < array.length; i++) {
    sum = sum + array[i]
}
if (sum > 100) {
    return true;
}else {
    return false;
}
console.log(hundred(ages)); */

//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
function average(array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
       sum = sum + array[i];
    
    
    }
      return(sum / array.length);
}
console.log(average(ages));

//11.Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function compareAvgs(array1, array2) {
let sum = 0;
 for (i = 0; i < array.length; i++)
      sum = sum + array1[i];

var avg1 = (sum / array1.length);
  sum = 0;
 for (i = 0; i < array2.length; i++) {
    sum = sum + array2[i];
 }
 var avg2 = (sum / array2,length);
if (avg1 > avg2) {
    return true;
}else {
    return false;
}

}


//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink (isHotOutside,moneyInPocket){
    return isHotOutside && moneyInPocket > 10.50 
}
console.log(willBuyDrink)


//13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
/* function decideWhatToEat()
let catFishDinner = 15;
let  moneyInAccount =30;

if (catFishDinner < moneyInAccount){
    console.log('Will eat takeout!');
}else{
    console.log('Stay home and cook dinner!')
}
console.log(catFishDinner ,*/