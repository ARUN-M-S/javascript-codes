// Flatten array without inbuild method

//Que-1: let arr=[1[2.[3,[4],[5]],[6]]7]   outPut: arr=[2,3,4,5,6,7]


let arr=[1,[2,[3,[4],[5]],[6]],7] 
function flattenArray(arr) {

    //Validate is array or not
    if (!Array.isArray(arr)) return 'Is not an array'
    let result = []
    // Loop method + Recurssion
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flattenArray(arr[i]))
        } else {
            result.push(arr[i])
        }
    }
    return result
}

// with reduce method

function flattenArrayReduce(arr) {
    //Validate is array or not
    if (!Array.isArray(arr)) return 'Is not an array'
    return arr.reduce((acc, value) => Array.isArray(value) ? acc.concat(flattenArrayReduce(value)) : acc.concat(value), [])
}
// console.log(flattenArrayReduce(arr))
//========================================Q2====================================

// Q2 : flatten object const obj= {
  let obj={  a:{
        a1:1,
        a2:2,
        a3:3
    },
    b:{
        b1:1,
        b3:5,
        z:{
            z1:3,
            z2:8
        }
    
    },
    c:{
        d1:5
    }
}

function flattenObject(data) {
    let x = {}

    function flatten(data) {
        Object.keys(data).forEach((keys) => {
            if (typeof (data[keys]) == 'object') {
                flatten(data[keys])
            } else {
                x[keys] = data[keys]
            }
        })
    }
    flatten(data)
    return x
}
// console.log(flattenObject(obj));

// Q3 // console.log(computeTheAmount().lacs(5).crore(2).crore(6).thounsands(5).value());

function computeTheAmount() {
    let totalAmount = 0;
    const operations = {
        lacs(amount) {
            totalAmount += amount * 100000;
            return this
        },
        crore(amount) {
            totalAmount += amount * 10000000;
            return this
        },
        thounsands(amount) {
            totalAmount += amount * 1000;
            return this
        },
        value() {
            return totalAmount
        }
    }
    return operations
}

// console.log(computeTheAmount().lacs(5).crore(2).crore(6).thounsands(5).value());


// let array1= [-5,-4,-3,0,1,4,6]
// console.log(sortArray(array1));

// function sortArray(arr){
//     console.log(arguments.length);
//     if(!Array.isArray(arr) ) return `${arr} is not a array`
//     return arr.sort((a,b)=>b-a)
// }

// Debouncing


function deBouncing(func,wait){
    let timeOut;
    return function(...args){
        clearTimeout(timeOut)
        return new Promise((resolve)=>{
           timeOut = setTimeout(()=>{
resolve(func.apply(this,args))
           },wait)
        })
    }
}

function throttlle(func,limit){
 let throttled = false;
return function(...args){
    if(!throttled){
        func.apply(this,args);
        throttled= true;
        setTimeout(()=>{
throttled=false
        },limit)
    }
}}



function countNumber() {
    return "called, " + Date.now();
}


 let deBouncingCall = deBouncing(countNumber, 3000);

// // To see the debouncing in action, you need to call the function multiple times
 deBouncingCall().then(console.log);  // This will be debounced
 setTimeout(() => deBouncingCall().then(console.log), 1000);  // This call will be debounced
// setTimeout(() => deBouncingCall().then(console.log), 2000);  // This call will be debounced
// setTimeout(() => deBouncingCall().then(console.log), 4000);  // This call will execute



function plindrome(data) {
if (data.length ==0) return "Provide valid data"   

for(let i=0;i<data.length/2;i++){
    if(data[i]!=data[data.length-1-i]) return "Not a palindorm"
}
return "Palindrom"

}

// console.log(plindrome('MALAYALA'));/

let input = "Welcome arun to flexm!"

// function reverseString(input){
//     if(input.length<=0) return "Please provide a valide data"
// let result = ' ';
// let wordLength=0
//     for(let i =0;i<=input.length;i++){
// if(i==input.length || input[i]== ' '){
//     for(let j=i-1;j>=wordLength;j--){
//         result+=input[j]
//     }
//     if(input[i]== ' '){
//         result+='  '
//     }
//     wordLength= i+1
// }
//     }
//     return result
// }


function noramlReverse(input){
    let result = ' '
    for(let i=input.length-1;i>=0;i--){
result+=input[i]
    }
    return result
}

// console.log(noramlReverse(input));


function reverseString(input) {
    let result = ' ';
    let woldLength =0
    for(let i=0;i<=input.length;i++){

        if(i == input.length || input[i] == ' '){
            for(let j=i-1;j>=woldLength;j--){
result+= input[j]
            }
            if(input[i]=' '){
                result+=' '
            }
        woldLength=i+1

        }
       

    }
    return result
}
// console.log(reverseString(input));





let objs={  a:{
    a1:1,
    a2:2,
    a3:3
},
b:{
    b1:1,
    b3:5,
    z:{
        z1:3,
        z2:8
    }

},
c:{
    d1:5
}
}

// function flattenObjects(data) {
// let x = {}

// function flattens(data) {
//     Object.keys(data).forEach((keys) => {
//         if (typeof (data[keys]) == 'object') {
//             flattens(data[keys])
//         } else {
//             x[keys] = data[keys]
//         }
//     })
// }
// flattens(data)
// return x
// }
// console.log(flattenObject(objs));

function flattenObject(data){
    let result = []

    function flatten(data){
        Object.keys(data).forEach((keys)=>{
            if(typeof(data[keys]) =='object'){
                flatten(data[keys])
            }else{
                result[keys]=data[keys]
            }
        })
    }
    flatten(data)
    return result
}



function findCountOfChar(data){
    if(data.length <=0)return "Please Provide Valid data"
    let result= {}
    for(var char of data){
        char = char.toLowerCase()
       if(isAlphaNumeric(char)){
      
       result[char]=(result[char] || 0) + 1
       
    }
      
    }
    return result
}


function isAlphaNumeric(str){
    let code = str.charCodeAt(0)
    console.log(code);
    if(!(code >47 && code <58) && !(code >64 && code <91) && !(code >96 && code <123)) {
        return false
    }
    return true
}
// console.log(findCountOfChar("hello guys !234"));


function findSquareArray(array1, array2) {
    if (array1.length !== array2.length) return false;

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    // Count frequency of numbers in array1
    for (let num of array1) {
        frequencyCounter1[num ** 2] = (frequencyCounter1[num ** 2] || 0) + 1;
    }
console.log(frequencyCounter1,"fre");
    // Count frequency of numbers in array2
    for (let num of array2) {
        frequencyCounter2[num] = (frequencyCounter2[num] || 0) + 1;
    }

    // Compare frequency maps
    for (let key in frequencyCounter1) {
        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }
    }

    return true;
}

// Example Usage
console.log(findSquareArray([1, 2, 3], [1, 4, 9])); // true
// console.log(findSquareArray([1, 2, 3], [1, 9, 4])); // true
// console.log(findSquareArray([1, 2, 3], [1, 4, 4])); // false
