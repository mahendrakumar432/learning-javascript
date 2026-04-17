
// let c =0;
//  for(var i=2;c<10;i++)
//  {
//     let fc=0;
//        for(var j=1;j<=i;j++)
//        {
//         if(i%j==0)
//         {
//             fc++;
//         }
//        }
//        if(fc==2)
//        {
//         console.log(i);
//         c++;
//        }
//  }

// var a=10;
// var a=20;
// console.log(a);

// let c=30;
// c=40;
// console.log(c);

// const b=50;
// console.log(b);

// for(let i=0;i<5;i++)
// {
//     for(let j=0;j<5;j++)
//     {
//         console.log(i+" ");
//     }
//     console.log("\n");
// }

//Arrays
// let arr=[1,"hii",15.0,true,[1,2,3],'okkk',null];
// console.log(arr);
// for(let i=0;i<arr.length;i++)
// {
//     console.log(typeof arr[i]);
// }
// let arr=[1,"hii",15.0,true];
// console.log(arr);
// arr.push("okkk");
// arr.pop(20);
// arr.unshift("okkk");
// arr.shift();
// console.log(arr);
// const obj={
//     name:"sai",
//     age:22,
//     arr:[1,"hii",15.0,true]

// }
// console.log(obj.loc);
// obj.loc="hyd";
// console.log(obj);
// const user=[
//     {
//         id:1, 
//         name:"user1",
//         loc:"hyd"
//     },
//     {
//         id:2,
//         name:"user2",
//         loc:"bag"
//     },

// ]
// console.log(user[0].name);

// function muFunc()
// {
//     console.log("hello");
//     return -1
// }
// console.log(muFunc);
// console.log(muFunc());

// Function to add two numbers
// function addNumbers(a, b) {
//     return a + b;
// }

// let result = addNumbers(5, 3);
// console.log("The sum is: " + result);

// const myFun=function(num1,num2) 
// {
//     return num1+num2;
// }   
// console.log(myFun(10,20));

//   const doMath = (num1, num2, op) => {
//     switch (op) {
//         case "+":
//             console.log(`The addition of ${num1} and ${num2} is ${num1 + num2} `);
//             break;
//         case "-":
//             console.log(`The subtraction of ${num1} and ${num2} is ${num1 - num2} `);
//             break;
//         case "*":
//             console.log(`The multiplication of ${num1} and ${num2} is ${num1 * num2} `);
//             break;
//         case "/":
//             console.log(`The division of ${num1} and ${num2} is ${num1 / num2} `);
//             break;
//         case "%":
//             console.log(`The reminder of ${num1} and ${num2} is ${num1 % num2} `);
//             break;
//         case "**":
//             console.log(`The power of ${num1} and ${num2} is ${num1 ** num2} `);
//             break;
//         default:
//             console.log("Please pass a Valid Input");
//             break;
//     }
// }

// doMath(2, 3, "**")
// let name ="riya";
// let age ="22";
// console.log(`My name is ${name} and my age is ${age}`);
// console.log("My name is "+name+" and my age is "+age);
//console.log(document);
// let buchi=document.getElementById("buchi");
// buchi.innerText="welcome";
// buchi.innerHTML="<b>hello</b>";
// let ishow=true;
// const myFun=()=>{
//     let display = document.getElementById("display");
//     if(ishow){
//         display.src ="https://www.dexerto.com/cdn-image/wp-content/uploads/2023/07/18/spider-man-movies-in-order.jpg?width=1200&quality=60&format=auto";
//         ishow=false;
//     }
//     else{
//         display.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3LvNAANNO_qJNUGxzrsix0hK7fVElqtquTA&s";
//         ishow=true;
//     }
// } 

// const add=()=>{
//     event.preventDefault();
//     let value1=document.getElementById("value1").value;
//     let value2=document.getElementById("value2").value; 
//     let display=document.getElementById("display");
//     display.innerHTML= `The sum of ${value1} and ${value2} is ${Number(value1)+Number(value2)}`;
//     display.innerHTML = `The difference of ${value1} and ${value2} is ${Number(value1) - Number(value2)}`;
//     display.innerHTML = `The product of ${value1} and ${value2} is ${Number(value1) * Number(value2)}`;
//     display.innerHTML = `The division of ${value1} and ${value2} is ${Number(value1) / Number(value2)}`;
//     display.innerHTML = `The remainder when ${value1} is divided by ${value2} is ${Number(value1) % Number(value2)}`;
// }
// const calculate = (type) => {
//     let value1 = document.getElementById("value1").value;
//     let value2 = document.getElementById("value2").value;
//     let display = document.getElementById("display");

//     if (value1 === "" || value2 === "" || isNaN(value1) || isNaN(value2)) {
//         display.innerHTML = "⚠️ Enter valid numbers";
//         return;
//     }

//     let num1 = Number(value1);
//     let num2 = Number(value2);
//     let result;

//     if (type === "add") {
//         result = num1 + num2;
//         display.innerHTML = `The sum of ${value1} and ${value2} is ${result}`;
//     }
//     else if (type === "sub") {
//         result = num1 - num2;
//         display.innerHTML = `The difference of ${value1} and ${value2} is ${result}`;
//     }
//     else if (type === "mul") {
//         result = num1 * num2;
//         display.innerHTML = `The product of ${value1} and ${value2} is ${result}`;
//     }
//     else if (type === "div") {
//         if (num2 === 0) {
//             display.innerHTML = "⚠️ Cannot divide by zero";
//             return;
//         }
//         result = num1 / num2;
//         display.innerHTML = `The division of ${value1} by ${value2} is ${result}`;
//     }
//     else if (type === "mod") {
//         if (num2 === 0) {
//             display.innerHTML = "⚠️ Cannot divide by zero";
//             return;
//         }
//         result = num1 % num2;
//         display.innerHTML = `The remainder when ${value1} is divided by ${value2} is ${result}`;
//     }
// }
// function changeColor() {
//     let letters = "0123456789ABCDEF";
//     let color = "#";

//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }

//     document.getElementById("box").style.backgroundColor = color;
// }
