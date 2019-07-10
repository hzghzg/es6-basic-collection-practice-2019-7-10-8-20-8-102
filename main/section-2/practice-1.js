'use strict';

module.exports = function countSameElements(collection) {
 return collection.reduce(objectArray,currentKey=>{
   if(objectArray.map((item)=>item.key).includes(currentKey)){
     objectArray[objectArray.map((item)=>item.key).indexOf(currentKey)].count++;
   }
   else{
     let obj={key:currentKey,count:1};
     objectArray.push(obj);
   }
 });
}
