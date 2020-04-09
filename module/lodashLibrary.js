// use javascript to simulate dash command

const _ ={
  clamp(number,lower,upper){
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  inRange(number,start,end){
    if(!end){
      end = start;
      start = 0;
    };
    if(start>end){
      const temp = end;
      end = start;
      start = temp;
    };
    const isInRange = (number>=start && number<end);
    return isInRange;
  },
  words(string){
    const words = string.split(" ");
    return words;
  },
  pad(string,length){
    if(!length>string.string){
      return string;
    };
    const lengthOfStart = Math.floor((length-string.length)/2);
    const lengthOfEnd = (length-string.length) - lengthOfStart;
    let paddingOfStart = "";
    let paddingOfEnd = "";
    for(let i =0;i<lengthOfStart;i++){
      paddingOfStart += " ";
    };
    for(let i =0;i<lengthOfEnd;i++){
      paddingOfEnd += " ";
    };
    return paddingOfStart + string + paddingOfEnd;
    /*const padding = " ";
    return padding.repeat(lengthOfStart) + string + padding.repeat(lengthOfEnd);*/
  },
  has(object, key){
    if(object[key]){
      return true;
    } else {
      return false;
    }
  },
  invert(object){
    /*const objArray = Object.entries(object);
    objArray.forEach(val=>{
      const temp = val[0];
      val[0] = val[1];
      val[1] = temp;
    });
    const obj = Object.fromEntries(objArray);
    return obj;*/
    const invertedObject = {};
    for(let key in object){
      const originalValue = object[key];
      invertedObject[originalValue] = key;
    }
    return invertedObject;
  },
  findKey(object,predicate){
    for(let key in object){
      const value = object[key];
      const predicateReturnValue = predicate(value);
      if(predicateReturnValue){
        return key;
      }
    }
    return undefined;
  },
  drop(array,n){
    const length = n || 1;
    const droppedArray = array.slice(length);
    return droppedArray;
  },
  dropWhile(array,predicate){
    const dropNumber = array.findIndex((element,index)=>{
      return !predicate(element,index,array);
    });
    const droppedArray = this.drop(array,dropNumber);
    return droppedArray;
  },
  chunk(array,size){
    const arrLength = size || 1;
    const arrayChunks = [];
    for(let i = 0;i<array.length;){
      const arrayChunk = array.slice(i,i+arrLength); 
      i+=arrLength;
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  }
};

//module.exports = _; //for node.js
export default _; //for ES6