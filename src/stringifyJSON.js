// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === null) {
    return 'null';
  }
  
  var objType = typeof obj;
  if (objType === 'number' || objType === 'undefined' || objType === 'boolean') {
    return `${obj}`;
  }
  
  if (objType === 'string') {
    return `"${obj}"`;
  }

  if (Array.isArray(obj)) {
    var returnArray = [];
    obj.forEach(function(element) {
      returnArray.push(stringifyJSON(element));
    });
    return `[${returnArray}]`;
  }
  
  var returnObj = [];
  for (var key in obj) {
    if (obj[key] !== undefined && typeof obj[key] !== 'function') {
      returnObj.push(`${stringifyJSON(key)}:${stringifyJSON(obj[key])}`);
    }
  }
  return `{${returnObj}}`;
};