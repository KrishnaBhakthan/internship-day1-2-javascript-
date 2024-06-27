//var num=5;//single line commend
/*multyline
 commend*/
 //variables
 //var ,let,const
 //var ourname = "krishna";
 //const pi=3.14
 //storing values
 //var a;//variable declaration
// var b=27;//assignment of variable
 //console.log(a)
 //variable name are case sensitive
 //push for dlt last elmnt in array
 //shift for firt element
 //unshft for adding
/*code

 //DATA types in javascript
 //numbers
 let a=10;
 let b=15;
 c=a+b;
 console.log(c);
 //strings
 let k="krishna";
 let age="20";
 console.log(k);
 //boolean
 let z=true;
 let y=false;
 console.log(y);
 //array
 var arr=new Array(1,2,3,4);
 console.log(arr);
 //add new element
 arr.push(5);
 console.log(arr);
 //pop element
 arr.pop();
 console.log(arr);
 //unshift-for adding in the first position
 arr.unshift(6);
 console.log(arr);

 //object method1
 var ob=new Object();
   ob.name="krishna";
   ob.age=20;
//object method2
var ob={
    fname:"krishna",
    lname:"bhakthan"
}


//operators in javascript
//arithmetic operators
let i=40;
let j=2;
u=i+j;
v=i-j;
w=i*j;
x=i**j;
y=i/j;
f=i%j;
console.log(u,v,w,x,y,f);

//assignment operators
let l =10;
console.log(l);
l += 5;
console.log(l);
l  -= 5;
console.log(l);
l  *= 5;
console.log(l);
l  /= 5;
console.log(l);
l  %= 5;
console.log(l);
l  **= 5;
console.log(l);


//comparison operators
l = 5;
n = 5;
if(l == 5){
console.log(l);
}
if(l === n){
    console.log(l);
}
if(l != 6){
    console.log("not 5");
}
if(l !== 6){
    console.log(l);
}
if(l > 4){
    console.log("5 is greater");
    }
if(l < 6){
        console.log("5 is smaller");
}
if(l >= 4){
    console.log("5 is greater");
}
if(l <= 6){
    console.log("5 is smaller");
}
//ternary operator
let size=20;
let type=(size>18)?"big":"small";
console.log(type);


//logical operators
//&&,|| and !
l=5;
//logical AND
if(l < 6 && l!=6 ){
    console.log("logical and");
}
//logical OR
if(l < 6 || l==6 ){
    console.log("logical or");
}
//logical not
if(l < 6  && !(l==6) ){
    console.log("logical not");
}
l=7;
//typeof 
console.log(typeof l);*/


//day 3

//conditional statements
var e=10;
console.log(e);

if(e < 6){
    console.log("e  is smaller");
}
else if(e>8){
    console.log("e  is bigger");
}
else{
    console.log("e  is zero");
}

//looping statements
for(var z=0;z<4;z++){
    console.log("hello");
}

//functions

function str(){
    console.log("stringgg");
}
str();

//Arrow function

var strr=()=>{
    console.log("arrow function");
}
strr();

//map function

var ary=[1,2,3];
var sqr=ary.map((n)=>
{
    return n*n;
})
console.log(ary);
console.log(sqr);//square

//spread operators
var nums=[1,2,3,4,5];
var numb=[...nums,12,13,14];
console.log(numb);








    
    
    
    




