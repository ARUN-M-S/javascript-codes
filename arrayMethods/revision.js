// console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"])); 
function groupAnagram(arr1){
    if(!Array.isArray(arr1) || arr1.length ==0) return false;
    let frequencyCounter = {};
    for(let word of arr1){
        let sortedWord =  word.split('').sort().join()
        if(frequencyCounter[sortedWord]){
            frequencyCounter[sortedWord].push(word)
        }else{
            frequencyCounter[sortedWord] = [word]
        }
    }
    console.log(frequencyCounter);
    return Object.values(frequencyCounter)
}

// console.log(findIntersection([1, 2, 2, 1], [2, 2]));  // Expected Output: [2, 2]
// console.log(findIntersection([4, 9, 5], [9, 4, 9, 8, 4]));  // Expected Output: [9, 4]
// console.log(findIntersection([1, 2, 3, 4], [3, 4, 5, 6]));  // Expected Output: [3, 4]
// console.log(findIntersection([1, 1, 1], [1, 1]));  // Expected Output: [1, 1]
// console.log(findIntersection([7, 8, 9], [9, 10, 7]));  // Expected Output: [7, 9]

// console.log(findIntersection([], [])); 

// function findIntersection(arr1,arr2){
//     if((!Array.isArray(arr1)||!Array.isArray(arr2)) || (arr1.length ==0 ||arr2.length==0)) return false;
// let frequencyCounter = {};
// let commonValue=[]

// for (elem of arr1){
//     frequencyCounter[elem]= (frequencyCounter[elem]||0)+1
// }
// for(elem2 of arr2){
//     if(frequencyCounter[elem2]){
//         commonValue.push(elem2);
//         frequencyCounter[elem2]--
//     }
// }
// return commonValue
// }


function findIntersection(arr1,arr2){
    if((!Array.isArray(arr1)||!Array.isArray(arr2)) || (arr1.length ==0 ||arr2.length==0)) return false;
let frequencyCounter = {};
let commonValue=[]

for (let i =0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
        if(arr1[i]==arr2[j] && !commonValue.includes(arr1[i])){
            commonValue.push(arr1[i]);
        }
    }
}
return commonValue
}



function sumZero(arr1){
    if(!Array.isArray(arr1) || arr1.length ==0) return false;
let left = 0;
let right = arr1.length-1;
console.log("here");
while(left<right){
    let sum= arr1[left]+arr1[right];
    if(sum===0){
        return [arr1[left],arr1[right]]
    }
    sum>0? right -- :left ++
}
return "not a pair"
}



// Example Usage:
// console.log(sumZero([-4, -3, -2, 0, 1, 2, 3, 5])); // Output: [-3, 3]



// console.log(isPalindrome("racecar")); // Output: true
// console.log(isPalindrome("hello"));   

function isPalindrome(text){
    if(text.length <=1) return "Share another text"
    let right=text.length-1;
    let left =0;
    while(left<right){
        if(text[left]!==text[right]) return "false "
        left++;
        right--;
    }
    return true
}


function countUnique(arr1){
    if(!Array.isArray(arr1) || arr1.length ==0) return false;
    let i=0;
    for(let j=i+1;j<arr1.length;j++){
        if(arr1[i]!==arr1[j]){
            
i++
arr1[i]=arr1[j]
        }
    }
    console.log(arr1);
    return i+1
}
                         
// console.log(countUnique([1,1,2,2,2,3,3,4,4,4,4,4,5,5,6]));
                           
// console.log(maxSubArraySUm([2,4,5,3,2,1,5,3,7,2,1,9],3));
// function maxSubArraySUm(arr1,num){
//     if(num>arr1.length){
//         return false
//     }
//     let max= -Infinity;
//     for(let i=0;i<arr1.length-num+1;i++){
//         let temp=0;
//         for(let j=0;j<num;j++){
//             temp+=arr1[i+j]
//         }
//         if(temp>max){
//             max=temp
//         }
//     }
//     return max
// }

function maxSubArraySUm(arr1,num){
        if(num>arr1.length){
            return false
        }
        let max= 0;
        let temp =0;
        for(let i=0;i<num;i++){
             max+= arr1[i]
           
        }
        temp=max;
        for(let i=num;i<arr1.length;i++){
            max=max-arr1[i-num]+arr1[i]
            max=Math.max(max,temp)
        }
        return max
    }

    //console.log(maxSubArraySUm([-2, -4, -6, -3, -1, -7], 2)); 



function searchNumber(arr1,num){
    if(!Array.isArray(arr1) || arr1.length ==0) return false;
    let min=0;
    let max= arr1.length-1;
    console.log(max);
    while(min<=max){
        let middle = Math.floor((min+max)/2)
     if(arr1[middle]<num){
         min=middle+1
     }else if(arr1[middle]>num){
         max=middle-1
     }else{
         return middle
     }
    }
    return -1
}


// console.log(searchNumber([1,2,3,4,4,5,5,5,6,67,76,76,77,88],67));


function findDuplicateELements(arr1){
    let frequencyCounter={};
    let duplicates =[];
    console.log(arr1,"arr1");
    for(let value of arr1){
        frequencyCounter[value] = (frequencyCounter[value] || 0)+1;
        if (frequencyCounter[value] > 1) {
            duplicates.push(value);
        }
    }
    return duplicates
}

// console.log(findDuplicateELements([1,2,3,1,2,3,4,5,65,7,8,9,54,45,4,34]));

let createCounter = function(n) {
    let value = n - 1;  // Start from n-1 so first call returns n

    return function() {
        value += 1;  // Increment first, then return
        return value;
    };
};


//   const counter = createCounter(10)
//   console.log(counter());
//   console.log(counter());
//   console.log(counter());
//  * counter() // 10
//  * counter() // 11
//  * counter() // 12


var expect = function(val) {
 let operations= { toBe(num){
      if(val===num)return true
      else return "Not eauql"
  }}
    return operations
};

console.log(expect(4).toBe(4));


var createCounters = function(init) {
    let value = init; // Start from the initial value
    let original = init; // Keep track of the initial value for reset

    return {
        increment() {
            value += 1;
            return value;
        },
        decrement() {
            value -= 1; // Decrease by 1, even if it's negative
            return value;
        },
        reset() {
            value = original; // Reset to the original value
            return value;
        }
    };
};

/**
 * ✅ Example Usage:
 */
// const counter = createCounters(-5);
// console.log(counter.decrement()); // -6
// console.log(counter.decrement()); // -7
// console.log(counter.decrement()); // -8
// console.log(counter.decrement()); // -9

// //   const counter = createCounter1(5)
//   console.log( counter.increment());
//   console.log(  counter.reset());
//   console.log(counter.decrement());
 



// function plusone(arr){
//     for(let key in arr){
//         arr[key]=arr[key]+1
//     }
//     return arr
// }

// console.log(plusone([1,2,3]));
function divideAndConquorer(arr,text){
    if(!Array.isArray(arr)|| arr.length ==0 )return false;
    let min =0;
    let max = arr.length-1;

    while(min<=max){
        let middle = Math.floor((min+max)/2);
        if(arr[middle]>text){
            max=middle-1;
        }else if(arr[middle]<text){
            min =middle+1
        }else{
            return middle
        }
    }
   return -1
}

const names = [
    "Abigail", "Adam", "Adrian", "Aiden", "Alexander", "Alice", "Amanda", "Amber", "Amy", "Andrew",
    "Anthony", "Ava", "Benjamin", "Brian", "Cameron", "Charlotte", "Chloe", "Christopher", "Daniel", "David",
    "Dylan", "Edward", "Eleanor", "Elizabeth", "Ella", "Emily", "Emma", "Ethan", "Evelyn", "Gabriel",
    "Grace", "Hannah", "Harper", "Henry", "Isabella", "Jack", "Jacob", "James", "Jessica", "John",
    "Joseph", "Joshua", "Liam", "Lillian", "Lucas", "Madison", "Matthew", "Mia", "Michael", "Sophia"
];

// console.log(names);


// console.log(divideAndConquorer(names, "Isabella"));

function seachText(text,target){
    for(let i=0;i<text.length;i++){
for(let j=0;j<target.length;j++){
    console.log(text[i],target[j]);
    if(text[i+j]!==target[j]){
        console.log("Break"); 
        break
    }else if((target.length-1)===j){
        console.log("Found"); 
       break
    }
    console.log(target.length,"length");
}
    }
}

console.log(seachText('mangalasseril arun ms','ass')); 