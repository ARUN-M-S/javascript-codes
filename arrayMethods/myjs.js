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

console.log(computeTheAmount().lacs(5).crore(2).crore(6).thounsands(5).value());


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
