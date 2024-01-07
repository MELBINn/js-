//You are given an array of strings words and a string chars.

//A string is good if it can be formed by characters from chars (each character can only be used once).

//Return the sum of lengths of all good strings in words.
function countCharacters(words, chars) {
    function isGoodWord(word, chars) {
      const charCount = new Map();
  
      // Count the occurrences of each character in chars
      for (let i = 0; i < chars.length; i++) {
        const char = chars[i];
        charCount.set(char, (charCount.get(char) || 0) + 1);
      }
  
      // Check if the word can be formed using characters from chars
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!charCount.has(char) || charCount.get(char) === 0) {
          return false;
        }
        charCount.set(char, charCount.get(char) - 1);
      }
  
      return true;
    }
  
    // Calculate the sum of lengths of good strings
    let sum = 0;
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (isGoodWord(word, chars)) {
        sum += word.length;
      }
    }
  
    return sum;
  }
  
  // Example usage
  const wordss = ["cat", "bt", "hat", "tree"];
  const charss = "atach";
  const resultt = countCharacters(words, chars);
  
  console.log(result); // Output: 6 (because "cat" and "hat" are good strings)
  

  function countCharacters(words, chars) {
    function isGoodWord(word, chars) {
      const charCount = chars.split('').reduce((map, char) => {
        map[char] = (map[char] || 0) + 1;
        return map;
      }, {});
  
      return word.split('').every(char => {
        if (charCount[char] && charCount[char] > 0) {
          charCount[char]--;
          return true;
        }
        return false;
      });
    }
  
    return words.filter(word => isGoodWord(word, chars)).join('').length;
  }
  
  // Example usage
  const words = ["cat", "bt", "hat", "tree"];
  const chars = "atach";
  const result = countCharacters(words, chars);
  
  console.log(result); // Output: 6 (because "cat" and "hat" are good strings)
  