let sum = new Function('a', 'b', 'return a+b');
console.log(sum(2,4));

// function sum2(){
//     console.log("Hello Ankit")
// }
// sum2();

// let sum2 =function(){
//     console.log("Hello Ankit")
// }
// sum2();

// Arrow function

// let sum2 =() =>{
//     console.log("Hello Ankit")
// }
// sum2();

let sum2 =() => "Hello Ankit";
    
console.log(sum2());

const greet =()=> ({name:'Ankit'});
console.log(greet());

const greet2 =(name)=> 'Hello ' + name;
console.log(greet2('Shubham'));

let sum3 =(a,b) =>{
    console.log(a+b);
}
sum3(2,3,4,5);

// rest Parameter

let sum4 =(...inputs) =>{
    console.log(...inputs);
}
sum4(2,3,4,5);

let sum5 =(...inputs) =>{
    console.log(...inputs);
    let total=0;
    for(let i of inputs){
        total+=i;
    }
    console.log(total);
}
sum5(2,3,4,5,6);

let fun =(a,b,...c) =>{
    console.log(`${a},${b}`);
    console.log(c);
    console.log(c[0]);
    console.log(c.length);
    console.log(c.indexOf('chetan'));
    
}
fun('ankit', 'shubham','harshal','chetan'); 

// spread Operator
// ES5

function sum6(a,b,c){
    console.log(a+b+c);
}

var arrVal=[8,2,3]
sum6.apply(null,arrVal);

// ES6

function sum7(a,b,c){
    console.log(a+b+c);
}

var arrVal=[6,2,3]
sum7(...arrVal)

///////
 let arr1=[1,2,3]
 let arr2=[4,5,6]

let temp=[];

temp=[...arr1];
 arr1=[...arr2];
 arr2=[...temp];

 console.log(arr1);
 console.log(arr2);

//  Function Object

 function sayHi(){
    console.log("Hi");
 }
 console.log(sayHi.name);
 function f2(a,b){}
 function many(a,b,...more){}
 console.log(f2.length);
 console.log(many.length);

//  SetTimeOut

function greet3(){
    console.log("Hello Ankit");
}

setTimeout(greet3,5000);

function greet4(name){
    console.log("Hello Ankit "+name);
}

setTimeout(greet4,5000, "Shubham"); 

// in settimeout function you dont have to call function
// thats why we justwrite function name without paranthisis

function greet5(name){
    console.log("Hello Ankit "+name);
}

intervalId=setInterval(greet5,2000, "Shubham"); 
clearInterval(intervalId);

//////
// function displayTime(){
//     time=new Date();
//     console.log(time);
//     document.getElementById('time').innerHTML =time;    
// }

// setInterval(displayTime,1000);

/////

let bindObj={
    name:"Ankit",
    content:"Programmer",
    feature: function(){
        console.log(`Hello ${this.name} you are fentastic ${this.content}`)
    }
}

bindObj.feature();

let bindFun= bindObj.feature ;
bindFun();

let bindFun2= bindObj.feature.bind(bindObj) ;
bindFun2(); // The bind method takes an object as an first argument and creates a new function.

///////
let bindObj1={
    name:"Ankit",
    content:"Programmer"
}

let bindObj2={
    name:"Ankit",
    content:"Programmer"
}

let feature1= function(){
    console.log(`Hello ${this.name} you are fentastic ${this.content}`)
}

let featu1=feature1.bind(bindObj1);
featu1();

//////Destructing Object

let personInfo={
    fname:'Ankit',
    lname:'Khichi',
    city:'Indore'
}
let {fname:fn, lname:ln}=personInfo;
console.log(`${fn} ${ln}`);

/////Destrcting Array

let [fname, mname, lname]=['Harshal', 'kumar','khichi'];
lname='Sharma'// comment krke dekhna
console.log(lname);


///Object Literals
function addressMaker(city, state){
    let newAddress={
        newCity:city,
        newState:state
    }
    console.log(newAddress)
}
addressMaker('Indore','MP');


///// another example of object lieterals 

function addressMaker2(address){
    let {city1,state1}=address;

    let newAddress1={
       city1,
       state1,
       country:'India'
    };
    console.log(`${newAddress1.city1},${newAddress1.state1},${newAddress1.country}` )
}
addressMaker2({city1:'Bhopal', state1:'MP'});


/////For Of Loop

let incomes=[25000, 65000, 49000];
total=0;

for(let income of incomes){
    // console.log(income)
    total+=income;
}
console.log(total);

/////another example For Of Loop

let fullName='Shrey Shubhash Jain'


for(let char of fullName){
    console.log(char)
    
}


//// includes
let numArray=[1,2,3,4,5]
console.log(numArray.includes(2));

////////////////////////Import Export

// import { data } from './index.js'
// console.log(data);

//////////Number Methods

var a = "99"
var num = Number(a);
console.log(num+ 10);


/////// Callback Function

const perOne =(friend, callfriend) =>{
    console.log(`Hello ${friend} how are you ?`);
    callfriend();
 }
 
 const perTwo =() =>{
    console.log(`I am fine.`)
 }
 
 
 perOne("Ashutosh", perTwo);
 



