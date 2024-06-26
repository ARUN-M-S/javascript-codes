// Flatten array without inbuild method

//Que: let arr=[1[2.[3,[4],[5]],[6]]7]   outPut: arr=[2,3,4,5,6,7]


let arr=[1,[2,[3,[4],[5]],[6]],7] 
function flattenArray(arr){

    //Validate is array or not
    if(!Array.isArray(arr))return 'Is not an array'
    let result=[]
    // Loop method + Recurssion
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
      result=result.concat(flattenArray(arr[i]))
        }else{
            result.push(arr[i])
        }
    }
    return result
}

console.log(flattenArray(arr))