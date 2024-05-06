const palindromes = function (str) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let cleanedString = str.toLowerCase().split('').filter(item => alpha.includes(item)).join('');
    const reversedString = cleanedString.split('').reverse().join('');

    return reversedString == cleanedString;
};

// Do not edit below this line
module.exports = palindromes;
