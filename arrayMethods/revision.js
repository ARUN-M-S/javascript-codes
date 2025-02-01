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



console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello"));   

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
                           
console.log(maxSubArraySUm([2,4,5,3,2,1,5,3,7,2,1,9],3));
function maxSubArraySUm(arr1,num){
    if(num>arr1.length){
        return false
    }
    let max= -Infinity;
    for(let i=0;i<arr1.length-num+1;i++){
        let temp=0;
        for(let j=0;j<num;j++){
            temp+=arr1[i+j]
        }
        if(temp>max){
            max=temp
        }
    }
    return max
}