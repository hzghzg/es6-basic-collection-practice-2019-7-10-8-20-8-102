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
      if(currentValue.length>1){
        let zimu=currentValue.split(/[-]/)[0];
        let shuzi=parseInt(currentValue.split(/[-]/)[1]);
        if(newCollection.map((item)=>item.key).includes(zimu)){
          newCollection[newCollection.map((item)=>item.key).indexOf(zimu)].count+=shuzi;
        }
        else{
          obj.key=zimu;
          obj.count=shuzi;
          newCollection.push(obj);
        }
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
    }
    return newCollection;
  }
  return collection.reduce(countTotal,[]);
}
