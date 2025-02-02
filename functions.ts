function countChars(input: string): number {
    return input.length;
}

function countCharsTrimmed(input: string): number {
    return input.trim().length;
}

function countCharsWithOption(input: string, trimSpaces: boolean = false): number {
    return trimSpaces ? input.trim().length : input.length;
}

console.log(countChars(" test 1 ")); // 8
console.log(countCharsTrimmed(" test 1 ")); // 6
console.log(countCharsWithOption(" test 1 ", true)); // 6
console.log(countCharsWithOption(" test 1 ")); // 8
