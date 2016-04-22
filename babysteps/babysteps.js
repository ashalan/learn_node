Array.prototype.forEach = function (callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }
  var len = this.length;
  for (var i = 0; i < len; i++) {
    callback.call(thisArg, this[i], i, this);
  }
};

function sumArrayElements(currElement, currIndex, originalArray) {
  if (!isNaN(currElement)) {
    var sum = sum + Number(currElement);
    console.log(sum);
  }
}

process.argv.forEach(sumArrayElements);