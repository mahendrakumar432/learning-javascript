
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
let name ="riya";
let age ="22";
console.log(`My name is ${name} and my age is ${age}`);
console.log("My name is "+name+" and my age is "+age);