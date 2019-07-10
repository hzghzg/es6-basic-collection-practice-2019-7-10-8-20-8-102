'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  let collectionExtraFromCollectionB=collectionB[0];
  return collectionA.filter((item)=>collectionExtraFromCollectionB.includes(item));
}
