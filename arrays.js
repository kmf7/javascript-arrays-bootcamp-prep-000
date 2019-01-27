var chocolateBars= new Array('snickers', 'hundred grand', 'kitkat', 'skittles');

function addElementToBeginningOfArray(array,element){
  [element,...array];
  array;
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element);
  array;
}

function addElementToEndOfArray(array,element){
  [...array,element];
  return array;
}
function destructivelyAddElementToEndOfArray(array,element){
  array.push(element);
  return array;
}