function countChars(input) {
    return input.length;
}
function countCharsTrimmed(input) {
    return input.trim().length;
}
function countCharsWithOption(input, trimSpaces) {
    if (trimSpaces === void 0) { trimSpaces = false; }
    return trimSpaces ? input.trim().length : input.length;
}
console.log(countChars(" test 1 ")); // 8
console.log(countCharsTrimmed(" test 1 ")); // 6
console.log(countCharsWithOption(" test 1 ", true)); // 6
console.log(countCharsWithOption(" test 1 ")); // 8
