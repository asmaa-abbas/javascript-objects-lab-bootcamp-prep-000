var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  let newObj = {};
  Object.assign(newObj, object, {[key]: value});
  return newObj;
}

