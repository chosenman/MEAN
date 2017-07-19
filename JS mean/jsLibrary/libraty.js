

var _ = {
   map: function(list, iterate) {
    var newList = list;
    for (var i = 0; i < newList.length; i++) {
      newList[i] = iterate(newList[i])
    }
    return newList
   },
   reduce: function() {
     // code here;
   },
   find: function() {
     // code here;
   },
   filter: function(arr, callback) {
     var newArr = [];
     for (var i = 0; i < arr.length; i++) {
       if( callback(arr[i]) ){
         newArr.push(arr[i])
       }
     }
     return newArr
   },
   reject: function() {
     // code here;
   }
 }

 // End of library

// Filter
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].

var arrayM3 = _.map([1, 2, 3], function(num){ return num * 3; });
console.log(arrayM3);  // => [3, 6, 9]
// _.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
// // => [3, 6, 9]
// _.map([[1, 2], [3, 4]], _.first);
// // => [1, 3]
