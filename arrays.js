var chocolateBars= new Array('snickers', 'hundred grand', 'kitkat', 'skittles');

function addElementToBeginningOfArray(array,element){
  [element,  ...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array,element){
  var newArray =[...array,  element];
  return newArray;
}
function destructivelyAddElementToEndOfArray(array,element){
  array.push(element);
  return array;
}