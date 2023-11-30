// let radius = 35;
// const pi = 3.14

// console.log(radius, pi)

// let likes = 10
// // increasing a variable by 1
// // likes = likes + 1;
// likes += 5
// console.log(likes)

// // concatenating woth numbers
// let result = "the blog has " + likes + " likes";
// console.log(result);


// // template strings
// const title = 'Best reads of 2020';
// const author = 'Mario';
// let likes = 3000;

// // concatenation way
// let result = title + " Is the name of the book."+ " The Author Is " + author + " and the book has " + likes + " likes!!";
// console.log(result)

// // template string or template literal way
// let result = `The blog by the boss ${author}, with the title ${title} has over ${likes} likes`
// console.log(result)

// // ARRAYS 
// let ninjas = ['shaun', 'ryu', 'chung-li'];
// ninjas[1] = 'ken';
// console.log(ninjas[1])
// console.log(ninjas)


// let ages = [20, 25, 30, 35];
// console.log(ages) 
// // //concatenting
// // let result = ninjas.concat(['ken', 'radii', 'average']);
// // console.log(result);

// // taking of last element of array with pop methods and return that value
//  let result = ninjas.pop();
//  console.log(result);

// // Booleans & comparisons
// console.log(true, false, 'true', 'false')

// // methods can return boolean
// let email = 'mario@netninja.com'


// let names = ['mario', 'luigi', 'toad']
// let result = email.includes('!');
// let result = names.includes('mario');

// console.log(result)
// lose comparison
// let age = 25;

// console.log(age == 25);

// let namess = ['shawn']; 

// console.log (namess == 'shawn')
// // for lose comparison values of different types can be compared and double equal is used

// age = 25;
// let newAge = '25'

// // console.log(newAge == age) this returns a true value

// for strict comparision, use ===

// let age = 25;

// console.log(age === 25) //strisct comparison that returns true since they are of the same value
// console.log(age === '25');

// let score = '100'

// score = Number(score)

// console.log(score + 1)

// // FOR loop 
// // syntax for a for loop has an (INTIALIZATION; CONDITION; EXPRESSION)
// // NB: i jsed a template string format
// for (let i = 0; i != 5; i++){
//     console.log(`this is number ${i}`)
// }
// let names = ['mario', 'luigi', 'toad', 'shawn']
//  // cycling through this array we retieved from a hypothetical database usinf a for loop
// // using length method on an array returns the number of elements in that array

// for(let j = 0; j < names.length; j++){
//     console.log(names[j])
//     // this piece of code above is going to display on the console each name from the array as it cycles through
//     // Note the square bracket at the end of an array variable will return the corresponding index if its content is a nø
//     // since the value of j will keep changing afte every iteration, the index of the names array will change.
// }

// console.log(names.length)

// WHILE loop
// unlike the for loop the variable to be used in the while loop is intialized outside the parenthesis 
// it's only the condition that is in the parenthesis. the expression is put at the bottom of the code block before the closing..
//.. curly braccket

// let k = 0;

// while(k < 5){
//     console.log ('in loop:', k );
//     k++;
// }

// // DO WHILE
// // this is an extension of the while loop
// // this makes you run the code at least once even if the conditions are not met
// // taking the above while looop as an example we  have..
// // NB the indentation for the while keyword

// let k = 3;

// do{
//     console.log('in loop:', k );
//     k++;
// }   while(k > 3);

// // if statements 
// // check a condtionn and only execute a code block if the condition is true.
// // var is declared outside the if statement

// const age = 21;

// if(age > 20){
//     console.log('you are over 20 years old')
// }

// const ninjas = ['shaw', 'farook' , 'eshun', 'bible']

// if(ninjas.length == 15){
//     console.log ('somethimg else')
// }4

// // if else statements
// // the else clause shouldbe put right after the if statement closing curly bracket
// const password = 'password'

// if(password.length >=12){
//     console.log('this password is super strong')
// } else if(password.length >= 8){
//     console.log ('your password is valid');
// } else{
//     console.log('your password is invalid');

// }

// // using logical operators - OR [||], AND [&&]
// const password = 'password'

// if(password.length >= 12 && password.includes('@')){
//     console.log('you have the rigth combination for a password')

// }

// break is used to break out of a loop and continue is used to skip a particular iteration

//SWITCH STATEMENTS

//SWITCH is used when checking multiple possible values of a single variable
// ex you want to check is a certain var called [grade], is A+ or B or B+ or C or C+ etc..
// you can use if and else if statements... this will make the codde cumbersome
// you can use SWITCH instead


