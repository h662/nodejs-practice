// 배열.reduce((누적값, 현잿값, 인덱스, 요소) => {
//     return 결과
// }, 초깃값);

const oneTwoThree = [1, 2, 3];

let result = oneTwoThree.reduce((acc, cur, i) => {
    console.log(acc, cur, i);
    return acc + cur;
}, 0);

result;

result = oneTwoThree.reduceRight((acc, cur, i) => {
    console.log(acc, cur, i);
    return acc + cur;
}, 0);

result;

let oddEven = oneTwoThree.reduce((acc, cur) => {
    acc.push(cur % 2 ? '홀수' : '짝수');
    return acc;
}, [])

console.log(oddEven);

oddEven = oneTwoThree.reduce((acc, cur) => {
    if (cur % 2) acc.push(cur);
    return acc;
}, []);

console.log(oddEven);