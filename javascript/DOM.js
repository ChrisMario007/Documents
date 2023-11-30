//  JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT !!!! & THE DOM
//   & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT !!!! & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT
//   CRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVAS
//   JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM
//   & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT !!!! & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT !!!! & THE DOM JAVASACRIPT
//   CRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT !!!! & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVAS
//   JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT !!!! & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT !!!! & THE DOM JAVASACRIPT !!!! & THE DOM
//   & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT !!!! & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT !!!! & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT
//   CRIPT !!!! & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT!!!!  & THE DOM JAVASACRIPT !!!! & THE DOM JAVASACRIPT!!!!  & THE DOM JAVAS

//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\/\\//\
// Let's start with the DOM
// DOM is short for Document Object Model. Everything you do to to interact with the browser is governed ny the DOM
// Dom is something createtd by the browser, when an html documents loads inside it. Once the html document is loaded in the browser, the browser creates an object which models this document
//... this object is called the "document" object and it contains many different properties about the html document and many different methods we can use to interact with the html doc
// So when we want to manipulate the browser, we do it using the document object.

//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\/\\//\
// Reaching into the DOM to select elements
// first step is to decide which element on the page we want to add elements to or remove elements from or modify in some way and reach into the DOM and get a reference on that element
// the action of reching in and selecting elemets is known as QUERYING the DOM
// if we want to grab the <p> tag and get a reference on that element, we have to store the reference to this element in some var
// Remember the html is stored in the Document Object, and we use the document object whenevr we want to do something with the web page
const para = document.querySelector('p') // the [docment] here is the "object" we're working on, and the [querySlector] is a method. And we place a css selctor in this as a string('') in this case, we are using the p tag.
// .. what this does is that it goes into the code and grabs the first p tag and ignores the rest

console.log(para); // lets see what we have in the p tag on the console

const paraa = document.querySelector('.error') // this is going to grab the line with the class 'error'. NB we used the '.' because it is a class
console.log(paraa)

const parad = document.querySelector('div.error') // this is more spec 
//if you're not sure what selector to use, the browser can help you.
// go to the browser open in developer mode, inspect the browser, highlight the element you want a slector for and right click. got to copy and copy selctor. you would have then copied a more unique selector for the particular element you desire

//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\/\\//\
//[querySelector()] is a method that returns the first element that matches a CSS selector. To return all matches (not only the first), use [querySelectorAll()]
// QUERYSELECTOR ALL

const paras = document.querySelectorAll('p')
console.log(paras)
// this stores all the p tag references in s single node list. the node list looks like like an array, but is not an array. we cannot use all array methods on it
//.. but there are some methods that we can use, likea square bracket notation and an index to pinpoint a particular p tag
// ex..

console.log(paras[2])// this will display on the console the 3rd p tag

// selecting other multiple elements into a node list

const error = document.querySelectorAll('.error') // this is going to return all elements with classes named error

console.log(error)

//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\/\\//\
// alternative ways to grab elements

//get an element by ID

const title = document.getElementById('page-title') // we do not need the [#] symbol in the method. But if we were using [querySelector] we would need the # symbol
console.log(title)

//get elements by class name

const errors = document.getElementsByClassName('error')// notice the get elements is plural, so it will grab multiple elements with that class regardlessnof the type of tag
console.log(errors) // this does not result in a node list, but rather an HTML collection.This is similar to a node list but not identical.

//like a node list you can single out elements using a square bracket notation with index.
// but we cannot use the [forEach] method on an html collection . remember to check the notes for the document left behind


//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\/\\//\
// changing the text and html inside elements
const npara = document.querySelector('p');
// how do we get the inner text of this p tag
// we use the [innerText] property
// let's display the innertext of the first <p> tag on the console

console.log(npara.innerText);// [innerText is a property not a method, hence we use no brackets]. And when we preview in the console we can see the text rigth there

// to update the text we have to grab it and set it ti something else

npara.innerText = ' ninjas are awesome'; // this will override the pre-existing <P> tag. IF you want to append and not oveeride we use "+=" instead of "="

// like this..... npara.innerText += 'ninjas are awesome';

// let's try changing the texts od several items at once

const nparas = document.querySelectorAll('p'); // this is to grab the refrence and store it in a var

nparas.forEach(pe => {
    console.log(pe.innerText);
    pe.innerText += "new text"
}) ;

//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\/\/\/\\//\\//\\/\/\//\\//\/\\//\
// gettting attributes
// we can get or set attributes
// attributes are ..
// we can get the attribute of the anchor tag <a>, which is [href] by using the getAttrubute method

const link = document.querySelector('a');

console.log(link.getAttribute('href')); // we need to pass in the name of the attribute we need as a string
