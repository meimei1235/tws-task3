'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
          var arr = new Array();
          for(var i = 0; i < collectionA.length; i++) {
                   for(var j = 0; j < objectB.value.length; j++) {
                        if(collectionA[i].key === objectB.value[j]) {
                           arr.push(collectionA[i].key);
                                  
                        }    
                   }
         }
  return arr;
};