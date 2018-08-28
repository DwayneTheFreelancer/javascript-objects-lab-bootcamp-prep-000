var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
 return Object.assign(object, {[key] : value});
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key] : value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key] : value, [key] : value});
}

function deleteFromObjectByKey(object, key) {
  return Object.assign({}, key); 
}

function destructivelyDeleteFromObjectByKey(object, key) {
  Object.assign(object, delete object[key] : 1);
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return Object.assign(...object, key);

}