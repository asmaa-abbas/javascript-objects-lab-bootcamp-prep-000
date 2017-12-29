var recipes = {};

function updateObjectWithKeyAndValue (object, key, value) {
  let newObj = {};
  Object.assign(newObj, object, {[key]: value});
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value;
  return object;
}
