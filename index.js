function printNumbers(){
    let memo ={}
    
    return function(n){
        if(memo[n] !==undefined){
            return memo[n]
        }
        let result =0
        for(let i=0;i<n;i++){
            result+=i
        }
        memo[n]=result
        console.log(memo);
        return result
    }
}

let memoisationFunction =  printNumbers()
