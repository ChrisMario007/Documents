function sumPositiveNumbers(str1, str2) {
    function extractAndSumNumbers(str) {
        const numRegex = /-?\d+/g;
        const numbers = str.match(numRegex);
        let sum = 0;
        let skipNext = false;

        if (numbers) {
            for (const num of numbers) {
                if (!skipNext) {
                    if (num.startsWith("-")) {
                        skipNext = true;
                    } else {
                        sum += parseInt(num, 10);
                    }
                } else {
                    skipNext = false;
                }
            }
        }
        return sum;
    }

    const sum1 = typeof str1 === 'string' ? extractAndSumNumbers(str1) : (Number.isInteger(str1) && str1 >= 0 ? str1 : 0);
    const sum2 = typeof str2 === 'string' ? extractAndSumNumbers(str2) : (Number.isInteger(str2) && str2 >= 0 ? str2 : 0);

    return sum1 + sum2;
}

// Example usage:
const result1 = sumPositiveNumbers("abc123xyz", "def-456hh7898hyg-78");
console.log(result1); 

