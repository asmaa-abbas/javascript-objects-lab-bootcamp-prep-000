var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  let newObj = {};
  Object.assign(newObj, Object, {[key]: value});
  return newObj;
}

