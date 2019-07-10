'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let collectionExtraFromObjectB=object.value;
  return collectionA.filter((item)=>collectionExtraFromObjectB.includes(item));
}
