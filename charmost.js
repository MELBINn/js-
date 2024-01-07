//find char appear most and how many times

const paragraph =
  "In the tranquil embrace of twilight, the cityscape transformed into a canvas of muted hues, as the last rays of sunlight bid adieu to the day. The urban panorama, punctuated by towering skyscrapers and twinkling city lights, assumed an ethereal charm, casting long shadows that whispered tales of bustling activity now settling into a nocturnal rhythm.";
const wordCount = [];
  let result = paragraph.split(' ').forEach((word)=>{wordCount[word] = (wordCount[word] || 0) + 1;
});
const repeatedWords = Object.keys(wordCount).filter((word) => wordCount[word] > 1);

repeatedWords.forEach((word) => {
    console.log(`${word}: ${wordCount[word]} times`);
});

//console.log(repeatedWords)

// the: 4 times
// of: 4 times
// into: 2 times
// a: 2 times