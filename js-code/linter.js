let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const storyWords = story.split(" "); //make strings arrayed that check every word with method of array.
//console.log(typeof storyWords);
//console.log(storyWords.length);

const betterWords = storyWords.filter(ele=>{
  return !unnecessaryWords.includes(ele); 
  //if ture enter into the betterWords, ! makes the rusult of include reverse, if the ele is in the unneWords > true > !> false > not enter in betterWords
  }
)

//for check length of overusedWords.
//console.log(betterWords);
let reaCounter =0;
let verCounter =0;
let basicCounter =0;
/*betterWords.forEach(ele=> {
  if(overusedWords[0] === ele){
    reaCounter +=1;
  } else if (overusedWords[1] === ele){
    verCounter +=1;
  } else if (overusedWords[2] === ele){
    basicCounter +=1;
  }
})*/

//for cull out overusedWords
/*const noOUStoty = betterWords.filter(ele=> {
  if(overusedWords[0] === ele){
    reaCounter +=1;
    return false;
  } else if (overusedWords[1] === ele){
    verCounter +=1;
    return false;
  } else if (overusedWords[2] === ele){
    basicCounter +=1;
    return false;
  } else {
    return true;
  }
})*/

const noOUStoty = betterWords.map(ele=> {
  if(overusedWords[0] === ele){
    reaCounter +=1;
    return 'super';
  } else if (overusedWords[1] === ele){
    verCounter +=1;
    return 'quite';
  } else if (overusedWords[2] === ele){
    basicCounter +=1;
    return 'exactly';
  } else {
    return ele;
  }
})

//map return the value to replace the ele being iterated over


      
//console.log(noOUStoty);
const overusedWordsCounter = reaCounter + verCounter + basicCounter;

let betterSentencesCounter = 0;
let noOUStotyCounter = 0;

noOUStoty.forEach(ele=>{
  if(ele.includes(".")||ele.includes("!")){
    noOUStotyCounter+=1;
  }
}) //every  sentence have a . or !

//console.log(betterSentencesCounter);

const logDetails = (para1, para2, para3) =>{
  console.log(`The length of words is ${para1}.`);
  console.log(`The length of sentence is ${para2}.`);
  console.log(`The length of overusedWords is ${para3}.`);
}

logDetails(noOUStoty.length, noOUStotyCounter,overusedWordsCounter)

console.log(`\n${noOUStoty.join(" ")}`);