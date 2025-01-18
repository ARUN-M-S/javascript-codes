function sumOfNumbers(){
    let memo = {}
    return function (n) {
        if(memo[n]!=undefined){
            return memo[n]
        }
let result =0;
        for(let i=1;i<=n;i++){
result+=i
        }
        memo[n]=result

return result
        
    }
}

let memoisationFunction =sumOfNumbers()

console.time('First call for 6')
let x=memoisationFunction(6)
console.timeEnd('First call for 6')

console.time('First call for 7')
let y=memoisationFunction(7)
console.timeEnd('First call for 7')

console.time('second call for 6')
let z=memoisationFunction(6)
console.timeEnd('second call for 6')
console.log(x);
console.log(y);
console.log(z);

function combinationCheck(value){
    let stack =[];
    let combination = {
        '(':')',
        '{':'}',
        '[':']'

    }
for (let char of value) {
    if(Object.keys(combination).includes(char)){
        stack.push(char)
    }else if(Object.values(combination).includes(char)){
        // console.log(char);
        console.log(combination[stack.pop()])
        if(stack.length ===0 || combination[stack.pop()] !== char){
            return false
        }
    }
}
return stack.length === 0;
}

console.log(combinationCheck('{([]])}'))



function chnageLetter(x){
    if (x.length <=0) return 'invalid';
    let result =''
    for(let i=0;i<x.length;i++){
        // console.log(x[i].toUpperCase());
        if(x[i] ==x[i].toUpperCase()){
            console.log("inside");
            result+= x[i].toLowerCase()
        }else{
            result+= x[i].toUpperCase()
        }
    }
    console.log(result);
    return result
}

console.log(chnageLetter('aRuNmSsssssMmmss'));

function findCountOfChar(data){
    if(data.length <=0)return "Please Provide Valid data"
    let result= {}
    for(let i=0;i<data.length;i++){
        let currentLettr = data[i]
        if(result[i]>0){
            result[currentLettr]++
        }else{
            result[currentLettr]=1
        }
    }
    return result
}

console.log(findCountOfChar("hello"));