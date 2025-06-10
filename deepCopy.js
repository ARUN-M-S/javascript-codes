function deepCopy(obj,visited= new WeakMap()){
   if(obj ==null || typeof obj != 'object'){
       return obj
   }
   if(visited.has(obj)){
       return visited.get(obj)
   }

   let copy ;
   if(Array.isArray(obj)){
       copy=[];
       visited.set(obj,copy);
       for(let item of obj){
           copy.push(deepCopy(item,visited))
       }
   }else if(obj instanceof Date){
       return new Date(obj.getTime())
   }else{
       copy ={};
       visited.set(obj,copy);
       for(let key in obj){
           if(obj.hasOwnProperty(key))
           copy[key] = deepCopy(obj[key],visited)
       }

   }
    return copy;
}
let obj = {
    name:"Arun",
    age:30,
    birthday:new Date("1995-05-15"),
    hobbies:['reading','playing'],
    address:{
        city:'Thiruvalla',
        street:'xyz'
    },
    tages:['dev',{stack:'js'}]
}

console.log(deepCopy(obj))