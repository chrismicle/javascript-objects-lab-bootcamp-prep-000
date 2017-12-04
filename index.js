var recipes = {};

function updateObjectWithKeyAndValue(recipes, key, value){
  recipes[key] = value;
  return recipes;
}

function updateObjectWithKeyAndValue(recipes, key, value){
  var newRecipe = {};
  return Object.assign(newRecipe, recipes, {[key]: value});
}
