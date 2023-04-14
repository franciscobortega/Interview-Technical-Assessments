/*
 *  For this challenge an input message is changed such that the vowels for each
 *  string are shifted to the next vowel position and the last vowel is shifted to
 *  the beginning of the string.
 */
function solution(message) {
  // Create a new array exclusively of the vowels in the string
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelsArray = [];

  let solMessage = "";
  for (let i = 0; i < message.length; i++) {
    vowels.forEach((vowel) => {
      if (message[i] == vowel) {
        vowelsArray.push(message[i]);
      }
    });
  }

  // shift last vowel to beginning of array
  let lastVowel = vowelsArray.pop();
  vowelsArray.unshift(lastVowel);

  let j = 0;
  for (let i = 0; i < message.length; i++) {
    if (vowels.includes(message[i])) {
      solMessage += vowelsArray[j];
      j++;
    } else {
      solMessage += message[i];
    }
  }

  return solMessage;
}

// Expected: leetcedo
console.log(solution("hello world"));
