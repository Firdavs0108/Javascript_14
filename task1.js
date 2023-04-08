
///Simple way

// function findNumber(n) {
//     let sum = 0

//     for(let i = 1; i<=n; i++){
//         sum+=i
//     }
//     console.log(sum);
// }

// findNumber(5)





///////////////////////////////////////////recourse

// function recursion(number){
//     let NewNumber = number - 1;
//     if(NewNumber>0){
//         recursion(NewNumber)
//        console.log(number); 
//     }
// } 
// recursion(4)

// function findSum(n) {
//     if(n>0){
//         return n + findSum(n-1)  
//     }else {
//         return n 
//     }
// }
// console.log(findSum(6));






////////////////////////////////////closure

// function parent(){
//     let num = 10;


//     function child(){
//         console.log(num);
//     }
//     child()

// }
// parent()





///////////////////////////////////////higher order function

// let arr = [1,2,3,4,5,6,7]

// arr.forEach((number) => console.log(number+1))







////////////////////////////////////////getter and setter

// const person = {

//     firstName: 'Shaxboz',
//     lastName: 'Yaxyoyev',

//     get fullName(){
//         return `${person.firstName} ${person.lastName}`
//     },

//     set fullName(value){
//         const values = value.split('  ');
//         this.firstName = values [0];
//         this.lastName = values[1];
//     }

// }

// person.fullName = 'Firdavs  Nazarov';
// console.log(person.fullName);



///////////////////////////////////curry function


//simple way without curry function


// const addition = (a,b,c) => {
//     return a+b+c
// }


// console.log(addition(1,2,3));


// with curry function

// const addition = (a) => {
//     return (b)  => {
//         return (c) => {
//             return a+b+c
//         }
//     }
// }

// console.log(addition (2) (3) (5));

function sendRequest(greet){
    return function(name) {
        return function(message){
            console.log(`${greet} ${name} ${message}`);
        }
    }
}

sendRequest('Salom')('Firdavs')('Ahvollar qanday')