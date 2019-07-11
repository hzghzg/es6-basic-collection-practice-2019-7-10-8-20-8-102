'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let extraKeyFromCollectionA=collectionA.map((item)=>item.key);
  let collectionExtraFromObjectB=objectB.value;
  return extraKeyFromCollectionA.filter((item)=>collectionExtraFromObjectB.includes(item));
}
