console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"])); 
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