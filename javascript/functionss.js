//two ways of creating functions
//1, function declarattion

function greet(){
    console.log('good day');
}

greet()

// function declarations has a hoisting property which allows a functions to be called in a line that comes before the function is even created
// creating a function this way, the FUNCTION key word is used followed by a suitable name, the parethensis, after which curly braces follows
// just like most other keywords have, the curly braces contains the block of code affiliated to the function.

//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\

// 2, function expression
// with this, a var is created and the function is stored in the variable. the var should be a CONST to preventin overwriting

const speak = function(){
    console.log('voice out')
};

speak();

// this function is called using the var name and the parenthesis to show it's a function
// this style is preferred by ninjas because it is mandatory to consider the flow of the code when using this method
// this function curly braces should be terminated

//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\

// if you want to pass a vlaue to a function, you first have to declare that value is going to be received into the function
// this is done by passing a var into the parenthesis of the function when declaring it.
//in this case the [name] is the var. When the function is being called it needs to have a value passed into it in the parenthesis
// the value passed is called an argument. In this case, the argument was [mario]
// the when the value is received by the function it called a parameter. In this case the parameter was [function(name){] 
// the arguments passed are supposed to be taken as values for the parameter. the parameter acts like a var and the argument is a val


const moniker = function(name){
    
    console.log(`my name is ${name}`)
};

moniker('mario');

// it is possible to have multiple parameters and arguments
const nomenclature = function(mention , time){
    
    console.log(`my name is ${mention} and the time is ${time}`);
};name

nomenclature('mario', 23);

// you can create default vals as default arguments for the function if you do not want to give a val when calling the function
// do this by passing the val directly into the parameters
const caller = function(mention = 'mario' , time = 23){
    
    console.log(`my name is ${mention} and the time is ${time}`);
};
// over here the we can invoke the function without passing arguments
caller();

// as soon as we pass arguments to the functions, it will overwrite the default parameters
caller('soloju')

//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\

// RETURNING values
// the return statement stops the execution of a function and returns a value.
// if you want to use a value that is gained after passing through a function you need to return the function 
// in order to store the value returned you need to create a variable and assigned the function with the parameter to

const calcArea = function(radius){
    let area = 3.14 * radius **2;
    // console.log(area)
    // because the var area was created locally for the function, calling the var area anywhwere else sill not work
    // in order to use the area value elsewhere, you have to return it
    // when you return the work of a function, you can store the result you will get in a var and reuse it. ex is [placeholder_for_area] below
    return area
    // you can also [return 3.14 * radius **2;] directly
    // using return is like saying make the function compute that line of code and store ot memory to be used elsewhere
}

// when a function returns a val, we need to store the function in a variable
const placeholder_for_area = calcArea(5)
// this pplaceholder_for_area has a global scope
//     console.log(area) .. this will not work if i remove the comments
console.log(placeholder_for_area)
// but the one above works

//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\


// ARROW FUNCTIONS
// Another way of writing functions
// does not use the key word fumction and [function] is replaced by an equal and chevron (arrow) that comes after the bracket for parameters

const calcAreas = (radius) => {
    return 3.14 * radius **2
}

let p_f_a = calcAreas(5) 

console.log(p_f_a)


// when the function has a simgle return on one line you can take away the [return] key word and the curly braces and write everthin on ome line
// const calcAreas = (radius) => 3.14 * radius **2 // like this // and it will return the value
// practice .... const greet = () => 'hello,world'

console.log(calcArea(5)) // functions can be displayed directly on the console without having to store in a var
// worked for the above, 

const anna = function(){
    return 'hello'
}

let annas = anna()
console.log(annas)
console.log(anna())

//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\\\\//\\//\\//\/\/\/\\//\\//\\//\\//\\//\\//\\
// METHODS
// methods are invoked using dot notation ex.
console.log(annas.toUpperCase())


//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\\\\//\\//\\//\/\/\/\\//\\//\\//\\//\\//\\//\\
// CALLBACKS & FOREACH
// when a functions is passed as an argument  to another function, the function passes into the other function is called a callback function

// took a while to grasp this callback thing
// so for callback, you call a functions into another function, the function being call is called the callback function.
// the callback function is passed as a argument to the main function

function greets(namez, customCallback) { // so customCallback here is the placevalue for the function to be passes as a parameter
    console.log(`Hello, ${namez}!`);
    customCallback(); // This is where the callback function gets executed. // over here customCall back is simply saying, "the place value i was holding was for a 
    //... function, and this is where In the code i am going to run".  The parenthesis over there show that it is a function and the position shows where in the code it'll run
  }
  
function sayGoodbye() {
    console.log("Goodbye!");
  }
  
greets("John", sayGoodbye);

  // different example

const myFunc = (callbackFunc) =>{ // this callbackFunc var is a place holder is a parameter over here. this means it will take on arguments
    // do something
    let value = 50;
    callbackFunc(value); // this callbackFunc over here shows that the parameter at the top is going to be a function that also takes on arguments since it has [value] as a parameter
  };

  // now we call the callback function
myFunc(function(value){ // over here the main function myFunc has been called and it is taking on a regular function. (regular function just has the keyword function with no name)
    //becasue it is regular function it was not named
    // do something......// the job of this "function" being passed as a parameter is to log unto the console as we can see now. its job is being defined inside the argument section of the main function doing the callback
    console.log(value);
  });
  
  /////CHANGING THE ABOVE called function TO ARROw FUNCTION
  // we learnt you can either call a function by a name {check line 4} or assign it to a variable {check line 19}, either ways the most important thing is to have the function keyword
  // and we also learnt you do not need the keyword for arrow functions, all you need it the parenthesis followed by and arrow and curly braces
  // so now we can change the [function(value)] which is function being called forn the first time into an arrow function


  const myFuncs = (callbackFunc) =>{ 
    // do something
    let value = 50;
    callbackFunc(value);
  };


myFuncs(value =>{ // genereral premise is to define the callback function here 
    // do something..
    console.log(value);
  });

  //////////////
  /// FOR EACH IS A CALLBACK FUNCTION THING 
let peoples = ['mario', 'luigi', 'anthraxx', 'juvenile', 'peace', 'money'];

peoples.forEach(person => {
    console.log(person)

   });



//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\/\\//\
//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\/\\//\

//OBJECTS!!!!OBJECTS!!!!OBJECTS!!!!OBJECTS!!!!OBJECTS!!!!OBJECTS!!!!OBJECTS!!!!OBJECTS!!!!OBJECTS!!!!OBJECTS!!!!OBJECTS!!!!OBJECTS!!!!OBJECTS!!!!OBJECTS!!!!OBJECTS!!!
//JECTS!!!!OBJECTS!!!!OBJECTS!!!!OBJECTS!!!!OBJECTS!!!!OBJECTS!!!!OBJECTS!!!!OBJECTS!!!!OBJECTS!!!!OBJECTS!!!!OBJECTS!!!!OBJECTS!!!!OBJECTS!!!!OBJECTS!!!!OBJECTS!!!!O
//TS!!!!OBJECTS!!!!OBJECTS!!!!OBJECTS!!!!OBJECTS!!!!OBJECTS!!!!OBJECTS!!!!OBJECTS!!!!OBJECTS!!!!OBJECTS!!!!OBJECTS!!!!OBJECTS!!!!OBJECTS!!!!OBJECTS!!!!OBJECTS!!!!OBJE

//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\/\\//\
//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\\/\\//\

//Object literal notations (creating your own objects)
//just like we use square brackest to create an array, we use curly braces for creating objec literal
//inside the object literal we can have several properties which should contain key:value pairs

let user = { // braces
    namer: "Crystal", // namer is the key and crystal is the value. Use a comma to add more properties. you can have all propeties in one line or each on a new line
    ager: 30,
    email: "crissmario606@gmail.com",
    location: "Money",
    blogs: ['why mac & cheese rules', 'how to become a millionaire', 'how to live a long life', 'how to be smart'] // inside the object, we can have arrays as a property

};
console.log(user)

// in order to acces one of the properties, we use dot notaion
console.log(user.namer);// using the dot notaion here as we can see

//in order to update or change a value of a key we do the following
user.ager = 35;
console.log(user.ager) ;

//we can also access and update properties using square bracket notation instead of dot notation

console.log(user['namer']) // the name of the key should be in quotation 
//ifyou want to update a key using the squre bracket notation...

user['namer'] = 'luigi'
console.log(user['namer'])


//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\/\\//\
// aadding methods to objects
let userm = { 
    namerm: "Crystal", 
    agerm: 30,
    emailm: "crissmario606@gmail.com",
    locationm: "Money",
    blogsm: ['why mac & cheese rules', 'how to become a millionaire', 'how to live a long life', 'how to be smart'],

//adding methods to objects is similar to adding propeties to objects
//make sure it follows a comma
    login: function(){ // essentially, the name of the method is login, and the line below is its function
        console.log('the user logged in')
    }, // nB this function should have been right under [blogsm], if not for the comments 
    // adding another method to the object, note that te previous method must be terminated with a commma

    logout(){ // another way to write a regular functions is to remove the function keyword as well as the colon as can be seen
        console.log('the user logged out')
    },
    // creating a new function that is going to print out all ther items in the blogsm array
    logBlog: function(){
        console.log(this.blogsm) // while attempting to create my method, i realized something, I wanted to pass the key [blogsm] to the the console and it autmatically updated itsel with a [this] keyword 

        // what is [this]
        // the [this] keyword is a context object, and it represents the context in which the current code is written.
        // if we use this inside the root of the document, then it is going to refer to the global context which is called the window object (this is because the global object in JS is called windowobject) this is defined on object
        // when we call a method, ex; [userm.logBLogs], JS sets the value of the this keyword to be the object the method was used on; in this case [userm] is the object
        // apperently, everything defined within an object remains local, hence accessing it outside the local state you need to use the [this] keyword

        console.log('this user has the following books :')

        this.blogsm.forEach(thing => {
            console.log(thing)
            
        })
    },
};
// and you can call the function as you would any regular method; with the dot notation;   
userm.login();
userm.logout(); 
userm.logBlog();

console.log(typeof(userm))

//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\/\\//\
// adding object to an array within an object  
// objects as intialized or defined with a var that has been assigned key:value pairs. All the properties of of an object are found within the curly braces.
// to create objects in an array; initialized the array with a var. INside the array, each obeject should have all their respectives properties within the same curly braces
// each object is now and element of the array and should be separated by commas.

let usero = {
    blogso : [ 
       { title: 'why mac & cheese rules', likes: 10} ,
       { title: 'how to become a millionaire', likes: 300},
       { title: 'how to live a long life', likes: 507}
    ],
    
    tryOut(){
        console.log(typeof(this.blogso))
        this.blogso.forEach(thing => {
            console.log(thing.title, thing.likes) //each [thing] represents the object.
            
        })
    }
}

usero.tryOut();

//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\/\\//\
// MATH OBJECt
// this is amathematical OBJECT in JS thta has a lot of properties and methods bundled up to it
// the math object is accessed like this [Math]
 console.log(Math.PI);
 console.log(Math.E);

 const areas = 7.7;

 console.log(Math.round(areas))
 console.log(Math.floor(areas))
 console.log(Math.ceil(areas))
 console.log(Math.trunc(areas))


 // one usecase of the math object is to generate random numbers

 const randoms = Math.random();// creating a placeholder for the random number. the name og the method that generates random numbers is random

 console.log(randoms) // the number is always between 0 and 1
 //lets try to get a random number between 1 and 100
 console.log(Math.round(randoms * 10000));


 //\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\/\\//\
 //PRIMITIVE AND REFERENCE TYPES
// the difference is how they are stored and used in memory
 //primitive types are numbers, strings, booleans, null, undefined & sumbols
 // when you create a primitive val, like a new string, and assign to a var, that value is stored in a stack . 
 // when you create a reference typr like an array, that is store on a heap which has more space  but it is slower stan a stack
 // reference types are;  all types of objects, object literals, arrays, functions, dates, all other objects
 // Most important thing to note
 // when you copy a reference type into another var; that is... const objs = obj, where obj is previously defined refernce type...
 // updating either of the propeties of of both objs or obj updates both vars. this is because they share the same pointer and the popinter in the stack points to the reference type in the heap
 





 

