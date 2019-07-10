'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let extraKeyFromCollectionA=collection.map((item)=>item.key);
  let collectionExtraFromObjectB=object.value;
  return extraKeyFromCollectionA.filter((item)=>collectionExtraFromObjectB.includes(item));
}
