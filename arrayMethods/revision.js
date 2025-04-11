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

// console.log(seachText('mangalasseril arun ms','ass')); 


function bubbleSortPsudo(arr){
    if(!Array.isArray(arr)|| arr.length ==0 )return false;
let noSwap = true;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            console.log(arr[i],arr[j]);
            if(arr[i]<arr[j]){
                let temp = arr[i]
                arr[i]=arr[j]
                arr[j]=temp
                noSwap=false
            }
         
        }
        if(noSwap) break;
        console.log("one pass completed");
    }
    return arr
}

// console.log(bubbleSortPsudo([4,1,5,9,3,6,7]));
// console.log(bubbleSortPsudo([8,1,2,3,4,5,6]));
// console.log(bubbleSortPsudo([8,7,6,5,4,3,2,9]));


function selectionSortPsudo(arr){
    if(!Array.isArray(arr)|| arr.length ==0 )return false;
let noSwap = true;
    for(let i=0;i<arr.length;i++){
        let lowest=i
        for(let j=i+1;j<arr.length;j++){
            console.log(arr[i],arr[j]);
            if(arr[j]<arr[lowest]){
                lowest=j
            }
 
         
        }
        let temp= arr[i]
        arr[i]=arr[lowest]
        arr[lowest]=temp
        // if(noSwap) break;
        console.log(arr);
        console.log("one pass completed");
    }
    return arr
}

// console.log(selectionSortPsudo([8,1,2,3,4,5,6]));



function InsertionSortPsudo(arr){
    if(!Array.isArray(arr)|| arr.length ==0 )return false;
let noSwap = true;
    for(let i=1;i<arr.length;i++){
        let lowest=arr[i]
        for(var j=i-1;j>=0 && arr[j] >lowest;j--){
            console.log(lowest,arr[j]);
            // if(arr[j]>lowest){
               arr[j+1]=arr[j]
            // }
         
 
         
        }
        arr[j+1]=lowest
      
        // if(noSwap) break;
        console.log(arr);
        console.log("one pass completed");
    }
    return arr
}

// console.log(InsertionSortPsudo([8,2,1,3,5]));


function mergeTwoArray(arr1,arr2){
  let i=0;
  let  j=0;
  let merged=[];

 while(i<arr1.length && j<arr2.length){
     if(arr1[i]<arr2[j]){
         merged.push(arr1[i]);
         i++
     }else{
         merged.push(arr2[j]);
         j++
     }
     while(i<arr1.length) merged.push(arr1[i++])
     while(j<arr2.length) merged.push(arr2[j++])
return merged
 }
}

// console.log(mergeTwoArray([1,5,6,7],[2,3,8]));


function jsMergeSort(arr1,arr2){
    return[...arr1, ...arr2].sort((a,b)=>a-b)
}

// console.log(jsMergeSort([1,5,6,7],[2,3,8]));





function swpaArray(arr,start=0,end=arr.length-1){
    let swap = (arr1,idx1,idx2)=>{
         [arr1[idx1],arr1[idx2]]=[arr1[idx2],arr1[idx1]]
    };

    let pivot = arr[start];
    let swapIndex = start;

    for(var i =start+1;i<=end;i++){
        if(pivot>arr[i]){
            swapIndex++
            swap(arr,swapIndex,i)
            console.log(arr);
        }
    }
    swap(arr,start,swapIndex)
    return swapIndex
}

function quickSort(arr,left=0,right=arr.length-1){
    if(left<right){
        let pivotIndex = swpaArray(arr,left,right);
        quickSort(arr,left,pivotIndex-1)
        quickSort(arr,pivotIndex+1,right)


    }
    return arr
}

// console.log(quickSort([4,8,-3,-6,10,2,5,3,2,1,9]));



function getDigit(num,i){
    return Math.floor(Math.abs(num)/Math.pow(10,i))%10
}
function countDigit(num){
    if(num==0) return 1
    return Math.floor(Math.log10(num))+1
}


function mostDigit(arr){
    let max=0;
    for(let i =0;i<arr.length;i++){
        max=Math.max(max, countDigit(arr[i]))
        // console.log(max);
    }
return max
}

// console.log(mostDigit([1,22,44,555,645454,787654526,22,33,1,2,3]));
// console.log(getDigit(234,));

// console.log(countDigit(555));



var removeDuplicates = function (nums) {
    let frequencyCounter = {}
    let result = []
    for (let elem of nums) {
        frequencyCounter[elem] = (frequencyCounter[elem] || 0) + 1
    }
    
    for (elem in frequencyCounter) {
        if (frequencyCounter[elem] >= 1) {
            result.push(elem);
            frequencyCounter[elem] -= 1
        }
    }

    return result
};


//   console.log(removeDuplicates([33,33,2]));
var removeElement = function(nums, val) {
    let slow =0;
    for(let fast =0;fast<nums.length;fast++){
      if(nums[fast]!==val){
   
        nums[slow]=nums[fast]
        slow++
      }
      
    }
    return slow
};
                
// console.log(removeElement([1,2,5,5,5,6,2,6,2,1,5],5));

var romanToInt = function (s) {

    let romanObject = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
    }
    let sum = 0
    for (let i = 0; i < s.length; i++) {
        if (romanObject[s[i]] < romanObject[s[i + 1]] && i < s.length - 1) {
            sum -= romanObject[s[i]]
        }
        else {
            sum += romanObject[s[i]]
        }
    }

    return sum
};

// console.log(romanToInt("LVIII"));


// function twoSum(arr,num){
//     if (!Array.isArray(arr)) return false;
//     let arr1= new Object()
//     for(let i=0;i<arr.length;i++){
//         if(arr1.hasOwnProperty(num-arr[i])){
//             return [num-arr[i],arr[i]]
//         }else{
//            arr1[arr[i]]=i
//            console.log(arr1);
//         }
//     }
//     return false
// }
//       console.log(twoSum([4,3,2,3,56,2,1,3,4,8],9));


         var nextPermutation = function(nums) {
             let smallPointer =0
             for(let i=0;i<nums.length;i++){

             }
    
        };



        var majorityElement = function(nums) {

            let frequencyCounter ={}
            
            for(elem of nums){
                frequencyCounter[elem]= (frequencyCounter[elem]||0)+1
                console.log(frequencyCounter);
                if(frequencyCounter[elem]>nums.length/2) return elem
            }
            return false
                
            };



            var majorityElement = function(nums) {
                let candidate = null;
                let count = 0;
            
                for (let num of nums) {
                    console.log(count,"count");
                    if (count === 0) {
                        candidate = num;
                    }
                    console.log(candidate);
                    count += (num === candidate) ? 1 : -1;
                }
                
                return candidate;
            };
            


            // console.log(majorityElement([1,2,2,3,3,3,1,1,1,1]));

            var twoSum = function(numbers, target) {
                let frequencyCounter ={};
                for(let i=0;i<numbers.length;i++){
                    frequencyCounter[numbers[i]] = i;
                    console.log(frequencyCounter);
                    if((target-numbers[i]) in frequencyCounter){
                        return [i,frequencyCounter[target-numbers[i]]]
                    }
                }
                return []
            };


            // console.log(twoSum([1,2,6,5,10,7],9));

            var singleNumber = function(nums) {
                let frequencyCounter =  { }
            
                for(let num of nums){
                    frequencyCounter[num] = (frequencyCounter[num]||0)+1
                }
                for(let num in frequencyCounter){
                    if(frequencyCounter[num]==1)return num
                }
                return -1
            };


           // console.log(singleNumber([1,2,2,3,3]));



            var missingNumber = function(nums) {
                let missing = nums.length;
                for (let i = 0; i < nums.length; i++) {
                    missing ^= i ^ nums[i];  // XOR index and value
                    console.log(missing,"inside");
                    console.log(i ^ nums[i],"xyx");
                }
                return missing;
            };
// console.log(missingNumber([0,3,4,2,1,6,7,9,5]));  


strs = ["eat","tea","tan","ate","nat","bat"]

function groupAnagram(arr){
    let objec={};
    for(let elem of arr){
        let sorted = elem.split('').sort().join('')
      if(objec[sorted]){
          objec[sorted].push(elem)
          console.log(objec);
      }else{
        objec[sorted]=[elem]
      }
    }
return Object.values(objec)
}

// console.log(groupAnagram(strs));


// var findAnagrams = function(s, p) {
    
// };

// s = "cbaebabacd", p = "abc"

// console.log(s,p);


function computSum(num){
    let sum =0

    while(num>0){
        sum+= num%10
        console.log(sum);
        num=Math.floor(num/10)
        console.log(num);
    }
    return sum
}

// console.log(computSum('1234'));


let user = {
name:"Arun",
Address:{
    primary:{
        house:"1",
        street:{
            main:21,
            cross:["32","33"]
        }
    }
}
}


function flattenObject(obj, path='', result={}) {


        Object.keys(obj).forEach((keys) => {
            let currentPath = path ? `${path}${keys.slice(0,1).toUpperCase()}${keys.slice(1).toLowerCase()}` : keys;

            if (typeof obj[keys] === 'object' && obj[keys] !== null && !Array.isArray(obj[keys])) {
                flattenObject(obj[keys], currentPath, result)
            } else {
                result[currentPath] = obj[keys];
            }
          

        })

        return result;

}

console.log(flattenObject(user,'user'));
