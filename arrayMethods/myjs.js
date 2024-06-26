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