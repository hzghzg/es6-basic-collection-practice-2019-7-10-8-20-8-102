'use strict';

module.exports = function countSameElements(collection) {
  const countTotal=(newCollection,currentValue,currentIndex)=>{
    let obj={};
    if(newCollection.length==0){
     obj.key=currentValue;
     obj.count=1;
     newCollection.push(obj);
    }
    else{
     if(newCollection.map((item)=>item.key).includes(currentValue)){
       newCollection[newCollection.map((item)=>item.key).indexOf(currentValue)].count++;
     }
     else{
       obj.key=currentValue;
         obj.count=1;
         newCollection.push(obj);
     }
    }
   return newCollection;
   }
   //let i=collection.reduce(countTotal,[]);
   return collection.reduce(countTotal,[]);
}
