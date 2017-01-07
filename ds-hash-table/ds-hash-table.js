var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

  return {
    _storage: [],
    retrieve: function(key) {
     var index = hashFn(key, max);
     var container = this._storage[index];
     if(container){
      for(var i=0; i<container.length; i++){
        var kvPair=container[i];
        if(kvPair[0] === key){
          return kvPair[1];
        }
      }
     }
     return undefined;
    },

    insert: function(key, value) {
     var index = hashFn(key, max);
     var container = this._storage[index];
     if(!container){
      container = [];
     }
     var flag = true;
      for(var i=0; i<container.length; i++){
        var kvPair=container[i];
          if(kvPair[0] === key){
            kvPair[1] = value;
            flag = false;
          }
     }
     if(flag){
      container.push([key,value]);
     }
     this._storage[index]= container;
  }
}
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};