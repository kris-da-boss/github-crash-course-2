/*
const name= 'John';
const age= 30;
// Concatenation
console.log('My name is '+name+' and i am '+age)
//  Template String

const hello= `My name is ${name} and i am ${age}`;
console.log(hello);

const s= 'technology, computers, IT, code';
console.log(s.split(','))       

 const fruit = ['apples', 'oranges', 'pears',]  

  fruit[3]= 'grapes';

  fruit.push('mango');

  fruit.unshift('strawberries');

  fruit.pop();

  console.log(Array.isArray('hello'));

  console.log(fruit.indexOf('oranges'))

console.log (fruit); 

const person = {
    firstname: 'Wilson',
    lastname: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sport'],
    Address: {
        Street: '50 main st',
        City: 'Boston',
        State: 'MA'
    }
}
console.log(person.Address.City);

const{ firstname, lastname, Address: {State}} = person;

console.log(State, lastname)

person.email = 'wilson@gmail.com';

console.log(person);

const todos= [
{
    id: 1,
    Text: 'take out trash',
    iscompleted: true},

   { id: 2,
    Text: 'Meeting with boss',
    iscompleted: true},

   {id: 3,
    Text: 'School Meet up',
    iscompleted: false
},

];

console.log(todos[1].Text)


const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//For
for (let i = 0; i <= 10; i++){
    console.log  (`for loop number: ${i}`);
}

//while loop
let i =0;
while(i <= 10) {
    console.log(`while loop number: ${i}`);
    i++;
}

for(let i=0; i< todos.length; i++) {
    console.log(todos[i].Text)
}
for(let todo of todos) {
    console.log(todo.Text);
};
//ForEach, map, filter

todos.forEach(function(todo){
    console.log(todo.Text);
})

const todoText =todos.map(function(todo){
   return todo.Text
});;

console.log(todoText);

const todoCompleted= todos.filter(function(todo){
    return todo.iscompleted ===true;
}).map(function(todo){
    return todo.Text;
})
console.log(todoCompleted);   
//Conditionals

/*  const x = 4;


if(x > 5){
console.log('x is 10');

} else if(x > 10){
    console.log('X is greater than 10')
} else{
    console.log('x is less than 10')
};

const t = 6;

const y = 11; 

if(t > 5 && y > 10) {
    console.log ('x is more than 5 or y is more than 10')
};*/

/*

//Ternary
const x = 10;

const color = x > 10 ? 'red' : 'blue';
console.log(color);

switch(color){
    case 'red':
        console.log('color is red')
        break;
        case 'blue':
            console.log('color is blue')
            break;
            default:
                console.log('color is NOT  red or blue');
                break;
}
//Functions

const addNums= (num1 = 1,) =>(num1 + 5);


console.log(addNums(5));    

 /// Obeject oriented programming
 //Contructive function
 /* function Person(firstname, lastname, dob){
this.firstname = firstname;
this.lastname = lastname;
this.dob = new Date(dob);
 }
 


 
 Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
 }
 Person.prototype.getfullName = function(){
    return `${this.firstname} ${this.lastname}`;
 }
 */
 //Class
 /*
 class Person{
    constructor(firstname, lastname, dob){
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = new Date(dob);
    }
    getBirthYear(){ 
        return this.dob.getFullYear();
    }
    getfullName(){
        return `${this.firstname} ${this.lastname}`
    }
 }

 // Instantiate an Object
 const Person1 = new Person('John', 'Chris', '4-3-1980');
 const Person2 = new Person('Mary', 'harry', '4-3-1980');

 console.log( Person2.getfullName());
 console.log (Person1); 
*/

//DOM Selection
//console.log (document.getElementById('my-form'));
//console.log (document.querySelector('h1'));
// We have single element 

// and multipl element selectors 
/* console.log(document.querySelectorAll('.item'));

console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));
const item = document.querySelectorAll('.item');
item.forEach((item)=> console.log(item));
const ul =document.querySelector('.item'); */
//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent = "Hello";
//ul.children[1].innerHTML = 'Brad';
//ul.lastElementChild.innerHTML = "<h1>HELLO<h1/>"; 
 
//const btn = document.querySelector('.btn');
//btn.style.background = 'blue';

/*const button = document.querySelector('.btn');
button.addEventListener('mouseout',(e)=>{
    e.preventDefault();
document.querySelector('#my-form').style.background ='#ccc'
document.querySelector('body').classList.add('bg-dark');
document.querySelector('.item')
.lastElementChild.innerHTML= '<h1>HELLO<h1/>';
});  */

const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg= document.querySelector('.msg');
const userlist= document.querySelector('#users');

myform.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

   if(nameInput.value === '' || emailInput.value ===''){
    msg.classList.add('error');
msg.innerHTML="please Enter all Fields";
setTimeout(()=> msg.remove(), 4000);
   }
   else{
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
    userlist.appendChild(li);
    //Clear fields
    nameInput.value ='';
    emailInput.value= '';
   }
}