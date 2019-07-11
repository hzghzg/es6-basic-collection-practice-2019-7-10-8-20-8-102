'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let collectionExtraFromObjectB=objectB.value;
  return collectionA.filter((item)=>collectionExtraFromObjectB.includes(item));
}
