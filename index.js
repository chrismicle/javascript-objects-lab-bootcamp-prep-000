var recipes = {};

function updateObjectWithKeyAndValue(recipes, key, value){
  var newRecipe = {};
  return Object.assign(newRecipe, recipes, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes[key] = value;
  return recipes;
}

function deleteFromObjectByKey(recipes, key){
  var newObj = Object.assign(newObj, recipes);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(recipes, key){
  delete recipes[key];
  return recipes;
}
