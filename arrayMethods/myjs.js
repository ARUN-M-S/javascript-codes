// Flatten array without inbuild method

//Que-1: let arr=[1[2.[3,[4],[5]],[6]]7]   outPut: arr=[2,3,4,5,6,7]


let arr=[1,[2,[3,[4],[5]],[6]],7] 

// function flattenArray(arr) {

// let result =[];

// for(let num of arr){
//    if(Array.isArray(num)){
//    result= result.concat(flattenArray(num))
//    }else{
//        result.push(num)
//    }
// }
// return result;
// }
console.log(flattenReducer(arr),"arr result");
// function flattenArray(arr) {

//     //Validate is array or not
//     if (!Array.isArray(arr)) return 'Is not an array'
//     let result = []
//     // Loop method + Recurssion
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             result = result.concat(flattenArray(arr[i]))
//         } else {
//             result.push(arr[i])
//         }
//     }
//     return result
// }

// with reduce method


function flattenReducer (arr){
arr.reduce((acc,num)=> Array.isArray(num) ? acc.concat(flattenReducer(num)) :acc.push(num),[] )
}
function flattenArrayReduce(arr) {
    //Validate is array or not
    if (!Array.isArray(arr)) return 'Is not an array'
    return arr.reduce((acc, value) => Array.isArray(value) ? acc.concat(flattenArrayReduce(value)) : acc.push(value), [])
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
//console.log(findSquareArray([1, 2, 3], [1, 4, 9])); // true
// console.log(findSquareArray([1, 2, 3], [1, 9, 4])); // true
// console.log(findSquareArray([1, 2, 3], [1, 4, 4])); // false

function isAnagram(str1,str2){
    if(str1.length !==str2.length) return "false"
    let frequencyCounter1={}

    for(let str of str1.toLowerCase()){
        frequencyCounter1[str] = (frequencyCounter1[str]||0)+1;
    }

    for(let str of str2.toLowerCase()){
        if (!frequencyCounter1[str]) return false
        frequencyCounter1[str]--
    }
 

    return true

}
// console.log(isAnagram("listen", "silent"));
// console.log(isAnagram("hello", "world"));  // false  
//   console.log(isAnagram("rat", "car"));      // false  
//   console.log(isAnagram("anagram", "nagaram")); // true  

function isPermutation(array1,array2){
    if (!Array.isArray(array1) || !Array.isArray(array2)) return "Please share a valid array";
   if(array1.length !== array2.length) return false;
   let frequencyCounter1={}

    for(let ele of array1){
        frequencyCounter1[ele] = (frequencyCounter1[ele]||0)+1;
    }

for(let ele of array2){
 
    if(!frequencyCounter1[ele]) return false
    frequencyCounter1[ele]--
}
return true

}
// console.log(isPermutation([1, 2, 3], [3, 2, 1])); // true ✅ (Same elements, different order)
// console.log(isPermutation([4, 5, 6], [6, 5, 4])); // true ✅
// console.log(isPermutation([1, 2, 3], [1, 2, 2])); // false ❌ (Different frequency)
// console.log(isPermutation([1, 2, 3], [1, 2]));   // false ❌ (Different lengths)
// console.log(isPermutation(["a", "b", "c"], ["c", "b", "a"])); // true ✅ (Works for strings too


function isFrequennumber(num1,num2){
    let numStr1 =num1.toString();
    let numStr2 =num2.toString();
    if(numStr1.length !== numStr2.length) return false;
    let frequencyCounter= {};
    for(let num of numStr1){
        frequencyCounter[num] = (frequencyCounter[num] ||0)+1;
    }
    for(let key of numStr2){
        if(!frequencyCounter[key]) return false;
        frequencyCounter[key]--
    }
    return true
}

// console.log(isFrequennumber(123,321));


function findDuplicate(arr){
    if(!Array.isArray(arr) || arr.length==0) return false;
    let duplicateCounter={}
for(let elem of arr){
    duplicateCounter[elem]=(duplicateCounter[elem]||0)+1;
    if(duplicateCounter[elem] >1 )return true
}
return false
}

// console.log(findDuplicate([1,2,3,4,5]));


function findIntersection(arr1,arr2){
    if((!Array.isArray(arr1) ||!Array.isArray(arr1)) || (arr1.length ==0 || arr1.length ==0 ) )return "Invalid array";
    let frequencyCounter ={};
    let commonValue =[]
    for(elem of arr1){
        frequencyCounter[elem] = (frequencyCounter[elem]||0)+1;
    }
  //  console.log(frequencyCounter,"freq");
    for(elem2 of arr2){
       // console.log(frequencyCounter[elem2],"countr");
        if(frequencyCounter[elem2]){
            commonValue.push(elem2)
            frequencyCounter[elem2]--
        }
       // frequencyCounter[elem2]?  : null
    }
    return commonValue
}
console.log(findIntersection([1, 2, 2, 1], [2, 2]));  // Expected Output: [2, 2]
console.log(findIntersection([4, 9, 5], [9, 4, 9, 8, 4]));  // Expected Output: [9, 4]
console.log(findIntersection([1, 2, 3, 4], [3, 4, 5, 6]));  // Expected Output: [3, 4]
console.log(findIntersection([1, 1, 1], [1, 1]));  // Expected Output: [1, 1]
console.log(findIntersection([7, 8, 9], [9, 10, 7]));  // Expected Output: [7, 9]






function groupAnagram(arr){
    if(!Array.isArray(arr) || arr.length ==0)return false;
    let frequencyCounter ={};
    for (let elem of arr){
        let sortedWord = elem.split('').sort().join('');Z
        console.log(frequencyCounter[sortedWord]);
if(frequencyCounter[sortedWord]){
    frequencyCounter[sortedWord].push(elem)
}else{
    frequencyCounter[sortedWord] =[elem]
}
console.log(frequencyCounter[sortedWord],"after push");
    }
   return Object.values(frequencyCounter)
}
//  console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"])); 
