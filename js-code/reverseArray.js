const reverseArray = arr =>{
  const newArr = [];
  for(let i =0;i<arr.length;i++){
    newArr.unshift(arr[i]);
  }
  return newArr;
}

const reverseArrayTwo = arr =>{
  const newArr = [];
  for(let i = arr.length-1;i>=0;i--){
    newArr.push(arr[i]);
  }
  return newArr;
}

const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)) 


console.log(reverseArrayTwo(sentence));

