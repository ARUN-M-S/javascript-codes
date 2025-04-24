//  function cycle(...values) {
//      let x={
//          totalIndex:values.length-1,
//          currentIndex:0
//      }
//     return function(){
     
//         const result = values[x.currentIndex];
//         if(x.currentIndex<x.totalIndex){
//             x.currentIndex++
//         }else{
//             x.currentIndex=0;
//         }

//         return result;
//     }

//   }

  function cycle(...values) {
   let index=0;
   return function(){
    
       const result = values[index];
      index = (index+1)%values.length;
      return result;
   }

 }


  const helloFn = cycle('hello');
console.log(helloFn()); // "hello"
console.log(helloFn()); // "hello"

const onOffFn = cycle('on', 'off');
console.log(onOffFn()); // "on"
console.log(onOffFn()); // "off"
console.log(onOffFn()); // "on"
