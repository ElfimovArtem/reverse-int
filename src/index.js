module.exports = function reverse (n) {
    if (n<0) n = n * (-1);
    const newStr = String(n);
    return Number(newStr.split('').reverse().join(''));
};
