class StringCalculator {
    add(numbers) {
      if (!numbers) return 0;
  
      const customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);
      let delimiter = /,|\n/;
      let numberString = numbers;
  
      if (customDelimiterMatch) {
        delimiter = new RegExp(customDelimiterMatch[1]);
        numberString = numbers.split('\n').slice(1).join('\n');
      }
  
      const numArray = numberString.split(delimiter).map((num) => parseInt(num, 10));
      const negatives = numArray.filter((n) => n < 0);
  
      if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
      }
  
      return numArray.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
    }
  }
  
  module.exports = StringCalculator;
  