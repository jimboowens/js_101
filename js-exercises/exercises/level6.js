function lvl6exercise1 (num) {
  // Return 'hello' if num is 1, 'world' if num is 2, otherwise return 'bye'
  if (num == 1){
  return "hello";
  } 
  else if (num == 2){
  return 'world';
  } 
  else{
  return 'bye';
  }
}

function lvl6exercise2 () {
  // Push 10 'hello' strings into the array using a for loop, then return it
  var arr = []
  var i=0;
  while (i < 10){
    arr.push('hello');
    i++;
  }
  return arr;
}

function lvl6exercise3 () {
  // Empty this array using a while loop and return it
  var arr = ['hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello']
  var i = arr.length;
  while(i>0){
    arr.pop();
    i-=1;
  }
  return arr;
}
