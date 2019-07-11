'use strict';

module.exports = function countSameElements(collection) {
  const countTotal=(newCollection,currentValue,currentIndex)=>{
    let obj={};
    if(newCollection.length==0){
      obj.name=currentValue;
      obj.summary=1;
      newCollection.push(obj);
    }
    else{
      if(currentValue.length>1){
        let zimu=currentValue.split(/[-\[\]:]/)[0];
        let shuzi=parseInt(currentValue.split(/[-\[\]:]/)[1]);
        if(newCollection.map((item)=>item.name).includes(zimu)){
          newCollection[newCollection.map((item)=>item.name).indexOf(zimu)].summary+=shuzi;
        }
        else{
          obj.name=zimu;
          obj.summary=shuzi;
          newCollection.push(obj);
        }
      }
      else{
        if(newCollection.map((item)=>item.name).includes(currentValue)){
          newCollection[newCollection.map((item)=>item.name).indexOf(currentValue)].summary++;
        }
        else{
          obj.name=currentValue;
          obj.summary=1;
          newCollection.push(obj);
        }
      }
    }
    return newCollection;
  }
  return collection.reduce(countTotal,[]);
}
