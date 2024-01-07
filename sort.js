const paragraph =
  "In the tranquil embrace of twilight, the cityscape transformed into a canvas of muted hues, as the last rays of sunlight bid adieu to the day. The urban panorama, punctuated by towering skyscrapers and twinkling city lights, assumed an ethereal charm, casting long shadows that whispered tales of bustling activity now settling into a nocturnal rhythm.";

// Get unique words and sort them alphabetically
const sortedUniqueWords = [...new Set(paragraph.split(" "))]
  .sort((a, b) => a.localeCompare(b))
  .join(" ");

// Remove periods
const paragraphWithoutPunctuation = paragraph.replace(
  /[.,\/#!$%\^&\*;:{}=\-_`~()]/g,
  ""
);

// Find repeating words and their count
const wordCounts = {};
paragraphWithoutPunctuation.split(" ").forEach((word) => {
  wordCounts[word] = (wordCounts[word] || 0) + 1;
});

// Calculate the length of the paragraph
const paragraphLength = paragraphWithoutPunctuation.length;

console.log("Sorted Unique Words:", sortedUniqueWords);
console.log("Paragraph without periods:", paragraphWithoutPunctuation);
console.log("Repeating words and their counts:", wordCounts);
console.log("Length of the paragraph:", paragraphLength);

//this will do wrk with little errors

// const paragraph = "In the tranquil embrace of twilight, the cityscape transformed into a canvas of muted hues, as the last rays of sunlight bid adieu to the day The urban panorama, punctuated by towering skyscrapers and twinkling city lights, assumed an ethereal charm, casting long shadows that whispered tales of bustling activity now settling into a nocturnal rhythm";

// // Sort the paragraph
// const sortedParagraph = paragraph.split(' ').sort().join(' ');

// // Remove periods
// const paragraphWithoutPeriods = paragraph.replace(/\./g, '');

// // Find repeating words and their count
// const wordCounts = {};
// paragraphWithoutPeriods.split(' ').forEach(word => {
//   wordCounts[word] = (wordCounts[word] || 0) + 1;
// });

// // Calculate the length of the paragraph
// const paragraphLength = paragraphWithoutPeriods.length;

// console.log("Sorted Paragraph:", sortedParagraph);
// console.log("Paragraph without periods:", paragraphWithoutPeriods);
// console.log("Repeating words and their counts:", wordCounts);
// console.log("Length of the paragraph:", paragraphLength);

let roless = "I am cook and nurse and builder and a father";
let sortedRoles = roless.split(" ").sort().join(" ");


console.log(sortedRoles);

let thingss = [1, 23, 26, 4];
let thingsss = thingss.sort((a, b) => a - b);
console.log(thingsss);

let roles = "I am cook and nurse, and builder. and# a% father";
let wordss = roles.split(" ");

//  console.log(wordss);
let thing = wordss.map((word) => word.replace(/[#%]/g, " "));
// console.log(thing)

let resultt = thing.sort((a, b) =>
  a.toLowerCase().localeCompare(b.toLowerCase())
);

let result = resultt.join(" ");
console.log(result);

