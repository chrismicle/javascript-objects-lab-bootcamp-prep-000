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
  var newRecipe = Object.assign(newRecipe, recipes[key]);
  delete newRecipe[key];
  return recipes;
}

function destructivelyDeleteFromObjectByKey(recipes, key){
  delete recipes[key];
  return recipes;
}
