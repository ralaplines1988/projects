// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (num,arr)=>{
  return {
    specimenNum: num,
    dna: arr,
    mutate(){
      const index = Math.floor(Math.random()*arr.length);
      //console.log(index);
      let changedBase;
      do{
        changedBase = returnRandBase();
      }while(arr[index] === changedBase);
      arr[index] = changedBase;
    },
    compareDNA(pAequor){
      const currentDNA = this.dna;
      const comparedDNA = pAequor.dna;
      //console.log(currentDNA);
      //console.log(comparedDNA);
      let similarity = 0;
      for(let i = 0;i<currentDNA.length;i++){
        if(currentDNA[i] === comparedDNA[i]){
          similarity += 1;
          console.log(`index is ${i}`);
          console.log(similarity);
        }
        }
      const percent = ((similarity/15)*100).toFixed(2);
      console.log(`${percent}%`);
      },
    willLikelySurvive(){
      const currentDNA = this.dna;
      let similarity = 0;
      //console.log(currentDNA);
      for(let i = 0;i<currentDNA.length;i++){
        if(currentDNA[i] === "C" || currentDNA[i] === "G"){
          similarity += 1;
          //console.log(similarity);
        }
      }
      const surviveLikely = ((similarity/15)*100).toFixed(2);
      //console.log(surviveLikely+ "%");
      if(surviveLikely>= 60){
        return true;
      } else {
        return false;
      }
    }
    }
  }
const A = pAequorFactory(1,mockUpStrand());
const B = pAequorFactory(26,mockUpStrand());
//console.log(A.dna);
//A.mutate();
//console.log(A.dna);
//A.compareDNA(B);
//console.log(A.willLikelySurvive());

/*const AEntries = Object.entries(A);
console.log(AEntries);*/
const samples = [];

let firstTime = true;
do{
  let specimenNum = Math.floor(Math.random()*30+1);
  let newObj = pAequorFactory(specimenNum, mockUpStrand());
  let sameOrNot = false;
  if(newObj.willLikelySurvive()){
    if(firstTime === true){
      firstTime = false;
      samples.push(newObj);
    } else {
      samples.forEach(val=>{
        if(specimenNum === val.specimenNum){
          sameOrNot = true;
        }
      })
      if(sameOrNot === false){
        samples.push(newObj);
      }
    }
  }
}while(samples.length<30)
  
/*const newArr = [];
for(let i = 0;i<samples.length;i++){
  newArr.push(samples[i].specimenNum);
}*/
  
console.log(samples);
