let originalString = "Hello World!";
let sortedLowercaseString = originalString.toLowerCase().split('').sort((a, b) => a.localeCompare(b)).join('');

//console.log(sortedLowercaseString); // Output: ' !deHllloorW'

const string = "In the vast tapestry of humanity, diversity emerges as a radiant thread, weaving together the rich fabric of our shared existence. Each individual, a unique hue in the palette of life, contributes to the collective masterpiece with their distinct experiences, perspectives, and aspirations."

const result = string.toLocaleLowerCase().split(' ')
console.log(result)

const reply = result.map((res)=>res.replace(/[,]/g,""))
// console.log(reply)

const wordCount = {}
reply.forEach(rep => {
  const lowerCaseWord =rep.toLowerCase();//lowercase oru value
  //This line increments the count of the current lowerCaseWord in the wordCount object. If lowerCaseWord is not already a 
  //key in wordCount, it initializes the count to 1. The logical OR 
  //operator with 0 is used to provide a default value of 0 if the key doesn't exist.
  wordCount[lowerCaseWord] = (wordCount[lowerCaseWord] || 0) + 1;//
  //|| 0: This is a conditional expression that ensures the retrieved value is at least 0. 
  //If the word hasn't been encountered before, the expression evaluates to 0.
  //+ 1: Increments the retrieved count by 1.
  //lowercount vechit wordCount array change or access
  //object  (wordCount[lowerCaseWord]  1 element ayit add chyunu
  //(wordCount[lowerCaseWord] || 0) The logical OR operator is used here. If the value obtained 
  //in step 1 is truthy (i.e., the key lowerCaseWord exists in wordCount), it will be used as the result.
  // If it's falsy (i.e., the key doesn't exist), the default value 0 is used.
  //key illengil 0 kodukum already word illenkil 1 kodukum
 //lowerCaseWord is encountered for the first time, there won't be an existing count in wordCount, so the logical OR operator provides the default value of 0.
 // If the word has been encountered before, it retrieves the existing count.
 //f wordCount[lowerCaseWord] is falsy (i.e., it's undefined, null, false, 0, NaN, or an empty string), then the logical OR operator kicks in,
 // and the expression evaluates to the default value 0.
});
//console.log(wordCount)
//{ 'hello': 1 }

//{ 'hello': 2, 'world': 1 }