const oneTwoThree = [1, 2, 3];

const test = oneTwoThree

let result = oneTwoThree.map(v => {
    return v;
});

console.log(oneTwoThree);
console.log(result);

console.log(oneTwoThree === result);
console.log(oneTwoThree === test);

result = oneTwoThree.map(v => {
    return v + 1;
});

const oddEven = oneTwoTherr.map(v => {
    if (v%2) {
        return '홀수';
    }
    return '짝수';
})

