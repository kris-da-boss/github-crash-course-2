
/* let age = 25;
let year = 2019;
console.log(age, year);
age = 30;
console.log(age);
const points = 100;
console.log(points);
var score = 75;
console.log(score); 


//Strings
console.log('hello world');

let email = 'kriswilson00000@gmail.com';
console.log(email);


//String concatention
let firstname = 'Wilson';
let lastname = 'Chris';
let fullname = firstname +' '+ lastname;
console.log(fullname);


//getting characters
console.log(fullname[3]);



// String length
console.log(fullname.length);

 */
// String methods
/* console.log(fullname.toUpperCase());
let result= fullname.toLowerCase();
console.log(result, fullname);

let index = email.indexOf('@');
console.log(index); */

//Common String Method 

//let mail = 'kriswilson@gmail.com';

//let result = email.lastIndexOf('n');
//let result = mail.slice(0,10);
//let result =email.substring(4,10);
//let result = email.replace('n', 'w');
//let result = email.replace('k','ch');
//console.log(result);
//Nunbers
//let raduis = 10;
//const pi= 3.14;

//console.log(raduis,pi);

//Maths operators +, -, *, /, **, %.
//console.log(10/2);
//let result = raduis % 3 ;
//let result = pi * raduis**2;
 //ORDER OF OPERATION - B I D M A S

 //let result = 5*(10 - 3)**2;

//console.log(result);

//let likes = 10;   
//likes = likes + 10;
//likes ++;
//likes --;
//likes+=10;
//likes-=5;
//likes*=2;
//likes/=2;
//console.log(likes);
//NaN- Not a number 
//console.log(5/ 'hello');
//console.log(5 * 'hello');

//CONCATINATE NUMBERS
//let result = " the b  log has "+ likes + " likes";
//console.log(result);   

//TEMPLATE STRING
//const title = ' Best reads of 2019';
//const author = 'Mario';
//const likes = 30;

// Concatenation way
//let result = 'the blog called'+ title+ ' by ' + author+ ' has '+ likes + ' likes';
//console.log(result);

//template string way
//let result = `The blog called ${title} by ${author} has ${likes} likes `;
//console.log(result);


//Creating html templates
//let html = `
//<h2>${title}</h2>
//<p> by ${author}</p>
//<span>This blog has ${likes} likes </span>`;

//console.log(html);
//let ninjas =['shawn', 'ryu', 'chun-li'];
//ninjas[1] = 'ken';
//console.log(ninjas[1]);

//let ages = [ 20, 25 , 30 , 35];
//console.log(ages[2]);
//let random = ['shawn', 'crystal', 30, 20];
//console.log(random);
//console.log(ninjas.length);

// ARRAY METHOD 
//let result = ninjas.join(' ');
//let result = ninjas.indexOf('chun-li');
//let result = ninjas.concat(['ken', 'crystal']);
//let result = ninjas.push('ken');
//result = ninjas.pop();
//console.log(result);

//NULL AND UNDEFINED
//let age = null;
//console.log (age, age+3, `the age is ${age}`);

// BOOLEAN & COMPARISON
//console.log(true, false, 'true', " false");


// METHOD CAN RETURN BOOLEAN
//let email = 'kriswilson00000@gmail.com';
//let name = ['mario', 'luigi', 'toad'];

//let result = email.includes('-');
//let result= name.includes('kris');
//console.log(result);

//COMPARISON OPERATORS
//let age = 25;
//console.log(age == 25);
//console.log(age == 30);
//console.log(age != 25);
//console.log(age > 20);
//console.log(age < 20);
//console.log(age <= 25);
//console.log(age >= 25);

//let name = 'shawn';
//console.log(name == 'shawn');
//console.log( name == 'Shawn');
//console.log(name > 'Shawn');
//console.log(name > 'Crystal');

//console.log(age == 25);
//console.log(age == '25');
//console.log(age != 25);
//console.log(age != '25');



// SRICT COMAPRISON(diffrent types cannot be equal)
/* console.log(age === 25);
console.log(age === '25');
console.log(age !== 25);
console.log(age !== '25'); */

// TYPE CONVERSION
//let score = '100';
//score= Number(score);
//console.log(score + 1);  
//console.log(typeof score);
//let result= Number('hello');
//let result = String(12);
//let result = Boolean(0);
//let result = Boolean('');

//console.log(result, typeof result);


// FOR LOOP
//for(let i = 0; i< 5; i++){
//console.log('in loop', i) 
//}
//console.log('loop finished');
//const names = ['shawn', 'mario', 'luigi'];
//for( let i=0; i< names.length; i++ ){
    //console.log(names[i]);
    //let html= `<div>${names[i]}</div>`;
    //console.log(html);   
//}
//WHILE LOOP
//const names = ['shawn', 'mario', 'luigi'];
//let i= 0;

//while(i<5){
    //console.log('in loop', i);
    //i++;
//}
//let i=0;
//while( i< names.length){
    //console.log(names[i]);
    //i++;
//}
//DO WHILE LOOPS
//let i = 3;
//do{
    //console.log('val of i is:', i);
    //++i;
//}
//while(i<5);
//IF STATEMENTS
//const age= 25;
//if(age > 20){
    //console.log('you re over 20 years old');
//}
//const ninjas= ['shawn', 'ryu', 'chun-li', 'yoshi'];

//if(ninjas.length> 3){
    //console.log("that's a lot of ninjas")
//}
//const password = 'password';
//if(password.length>=8){
  //  console.log('that password is long enough!');
//}

//ELSE IF STATEMENT
/* const password = 'pass';
if(password.length >= 12){
    console.log('Password is mighty strong.')
}else if(password.length>=8){
    console.log('that password is long enough!');
}else{
    console.log('password is not enough, oops');
} */
// LOGICAL OPERATORS - OR || and AND &&
//const password = 'pas5s@';
//if(password.length >= 12 && password.includes('@')){
    //console.log('Password is mighty strong.')
//}else if(password.length>=8 || password.includes('@') && password.length >= 5){
    //console.log('that password is strong enough!');
//}else{
    //console.log('password is not enough, oops');
//}

// LOGICAL NOT (!)
//let user = false;

//if(!user){
 //console.log('you must be log in to countinue')
//}
//console.log(!true);
//console.log(!false);

//BREAK AND COUNTIUE
//const scores = [50, 25, 0, 30, 100, 20, 10];

//for(let i=0; i<scores.length; i++){

    //if(scores[i] ===0){
        //continue;
    //}

    //console.log('your score:', scores[i]);

    //if(scores[i] ===100){
        //console.log('congratulation, you got the top score!');
        //break;
    //}

//}
//SWITCH STATEMENT
//const grade = '50';

//switch(grade){
    //case 'A':
    //console.log('you got an A!');
    //break;
    //case 'B':
    //console.log('you got an B!');
    //break;
    //case 'C':
    //console.log('you got an C!');
    //break;
    //case 'D':
   //console.log('you got an D!');
    //break;
    //case 'E':
   //console.log('you got an E!');
    //break;
    //default:
    //console.log('not a valid grade');
//}

// VARIABLE & BLOCK LEVEL SCOPE
//const age = 30;

 
//if(true){
    //const age = 40;
 
    //const name = 'shawn';
//console.log('inside ist code block', age, name);

//if(true){
    //const age = 50;
    //console.log('inside second code block', age);
    //var test = 'hello';
//}
//}



//console.log('outside the code block:', age, name, test);

//FUNCTION EXPRESSION
//const speak = function(){
//console.log('good day');
//};

//great();
//great();
//great();

//speak();
//speak();
//speak();

//FUNCTION DECLEARATION
//function great()  {
    //console.log('hello there');
//}

// ARGUMENT & PARAMETER
//const speak= function(name = 'luigi', time= 'night'){
   // console.log(`good ${time} ${name}`);
//};

//speak();
//speak('shawn');
//RETURNING VALUES
//const speak = function(name = 'lugui', time='night'){
  //  console.log(`good ${time} ${name}`)
//}
//const calcArea = function(raduis){
   // return 3.14 * raduis**2;
     
//};
//const area= calcArea(5);
//console.log(area)

//const calvol = function(area){

//};
//calvol(area)
// REGULAR FUNCTION
//const calcArea = function(raduis){
   // return 3.14 = raduis**2;
//}

// ARROW FUNCTION
//const calcArea = raduis=> 3.14* raduis**2 ;






//const area = calcArea(5);
//console.log('area is:', area);

//PRACTICE ARROW FUNCTION
//const greet = function(){
  //  return 'hello, world';
//};
//const greet= ()=> 'hello, world';
//const result= greet();
//console.log(result);

//const bill = function(products, tax){
    //let total = 0;
    //for(let i =0; i<products.length; i++){
     //   total+= products[i] + products[i] * tax;
    //} 
    //return total;
//}

// const bill = (products, tax) =>{
//     let total=0
//     for(let i=0; i< products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };


// console.log(bill([10,15,30], 0.2));
// const name= 'shawn';
// //FUNCTION

// const greet = ()=> 'hello';
// let  resultOne = greet();
// console.log(resultOne);


// //METHOD
// let resultTwo = name.toUpperCase()
// console.log(resultTwo);

//callbacks & foreach
//const myFunc = (callbackFunc) => {
    //do something
   // let value = 50;
    //callbackFunc(value);
//};

//myFunc(value =>{
    //do something
    //console.log(value);
//});

//let people =["mario", 'luigi', "ryu", "shawn", "chun-li"];
//const logPerson = (person, index) =>{
  //  console.log(`${index} - hello ${person}`);
//};


//people.forEach(logPerson);

//get a refernce to the 'ul'
//const ul = document.querySelector('.people');

//const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];
//let html = ``;
//people.forEach(person=> {
    // create an html template
//html +=`<li style='color:purple'> ${person}</li>`;
//});

//console.log(html);
//ul.innerHTML = html; 

//OBJECT LITERALS CHAPTER 5

// let user = {
//   name: 'crystal',
//   age: 30,
//   email: 'crystal@gmail.com',
//   location:'berlin',
//   blogs:['why mac & cheese rules', '10 things to makre with marmite']
// };
// console.log(user);
// console.log(user.name);
// //user.age= 35;
// console.log(user.age);

// console.log(user['email']); 
//    user['name'] = 'chun-li';
//    console.log(user['name']);
//    console.log(typeof user);

// OBJECT LITERALS

//console.log(blogs)
//let user = {
    //name: 'crystal',
   // age: 30,
//     email: 'crystal@gmail.com',
//     location: 'berlin',
//     blogs: [{title: 'why mac and cheese rules', likes: 30},
//     {title: '10 things to make with marmite', likes: 50}],
//     login(){
//         console.log('the user logged in');
//     },
//     logout(){
//         console.log('the user logged out');
//     },
//     logblogs() {
//         console.log(this.blogs);
//         console.log('this user has written the following blogs')
//         this.blogs.forEach(blog=> {
//           console.log(blog.title, blog.likes);
//         });
//     }
// };
//console.log(this);
//user.logblogs();
//user.logblogs()



// Math object
// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;
// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));
// // RANDOM NUMBERS
// const random = Math.random();

// console.log(random);
// console.log(Math.round(random * 100));

// PRIMITIVE VALUES
// let scoreOne = 50;
// let scoreTwo = scoreOne;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);
// scoreOne= 100;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// REFERENCE VAlUES
 
// const userOne = { name: 'ryu', age: 30};
// const userTwo = userOne;

// console.log(userOne, userTwo);
// userOne.name = 'chunli';
// console.log(userOne, userTwo);

//DOM CHAPTER 6

// const para = document.querySelector('body > h1');
// console.log(para);
//const paras = document.querySelectorAll('p');
//const errors = document.querySelectorAll('.error');
//console.log(errors);
//console.log(paras[2]);

//GET AN ELEMENT BY ID
// const title = document.getElementById('page-title')
// console.log(title);

//GET AN ELEMENT BY THERE CLASS NAME
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);


//GET AN ELEMENT BY THEIR TAG NAME
// const para = document.getElementsByTagName('p');
// console.log(para[1]);
//const para = document.querySelector('p');

//console.log(para.innerText);
//para.innerText += 'ninjas are awesome!';
// const paras = document.querySelectorAll('p');
// paras.forEach(para =>{
//     console.log(para.innerText);
//     para.innerText += ' new text';
// })

//const content = document.querySelector('.content');
//console.log(content.innerHTML);
//content.innerHTML+= '<h2> This is a new H2 </h2>';

//const people = ['mario', 'luigi', 'yoshi'];
//people.forEach(person => {
   // content.innerHTML += `<p>${person} </p>`;
//});
//const  link = document.querySelector('a');
//console.log(link.getAttribute('href'));
//link.setAttribute('href', 'https://www.thenetninja.co.uk');
//link.innerText ='the netninja website';

//const mssg = document.querySelector('p'); b
//console.log(mssg.getAttribute('class'));
//mssg.setAttribute('class', 'success');
//mssg.setAttribute('style', 'color: green');
//const title = document.querySelector('h1');
//title.setAttribute('style', 'margin: 50px');
//console.log(title.style);
//console.log(title.style.color);
//title.style.margin = '50px';
//title.style.color = 'crimson';
//title.style.fontSize= '60px';
//title.style.margin = '';
// const content = document.querySelector('p');
// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

const paras = document.querySelectorAll('p');
paras.forEach(p =>{
if(p.textContent.includes('error')){
   p.classList.add('error');
}

if(p.innerText.includes('success')){
    p.classList.add('success');
}
}) ;
const title = document.querySelector('.title');
title.classList.toggle('test');
title.classList.toggle('test');


