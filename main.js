const main = (() => {
  const capitalize = (string) => {
    console.log(string[0].toUpperCase() + string.slice(1));
    return string[0].toUpperCase() + string.slice(1);
  };

  const reverseString = (string) => {
    let output = "";
    for (let i = string.length - 1; i >= 0; i--) {
      output += string[i];
    }
    return output;
  };

  const calculator = {
    add: (num1, num2) => {
      return num1 + num2;
    },
    subtract: (largeNum, smallerNum) => {
      console.log(largeNum - smallerNum);
      return largeNum - smallerNum;
    },
    divide: (biggerNum, smallerNum) => {
      return biggerNum / smallerNum;
    },
    multiply: (num1, num2) => {
      return num1 * num2;
    },
  };

  caesarCipher = (string, shiftFactor) => {
    let output = "";
    for (let i = 0; i < string.length; i++) {
      let isLetter = true;
      let higher;
      let index = string.charCodeAt(i) + shiftFactor;
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        higher = 90;
      } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        higher = 122;
      } else {
        isLetter = false;
      }
      if (!isLetter) {
        output += String.fromCharCode(string.charCodeAt(i));
        continue;
      }
      while (isLetter && index > higher) {
        index = index - 26;
      }
      output += String.fromCharCode(index);
    }
    console.log(output);
    return output;
  };

  analyzeArray = (array) => {
    const sum = array.reduce((prev, curr) => prev + curr, 0);
    const average = sum / array.length;

    const min = Math.min(...array);
    const max = Math.max(...array);
    const length = array.length;

    return {
      average,
      min,
      max,
      length,
    };
  };

  return {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
  };
})();

module.exports = main;
