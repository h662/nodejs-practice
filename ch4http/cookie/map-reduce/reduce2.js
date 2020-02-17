// 배열.reduce((누적값, 현재값, 인덱스, 요소) => {
//     return 결과
// }, 초기값)

const oneTwoThree = [1, 2, 3];

// let result = oneTwoThree.reduce((acc, cur, i) => {
//     console.log(acc, cur, i);
//     return acc + cur;
// }, 0);

// let result2 = oneTwoThree.reduceRight((acc, cur, i) => {
//     console.log(acc, cur, i);
//     return acc + cur;
// }, 0);

// let array = [];
// console.log(array);
// array.push(1);
// console.log(array);
// array.push(2);
// console.log(array);

let oddEven = oneTwoThree.reduce((acc, cur) => {
    acc.push(cur % 2 ? '홀수' : '짝수');
    return acc;
}, [])

let test = oneTwoThree.reduce((acc, cur) => {
    acc.push(cur);
    console.log(acc);
    return acc
}, [])

// ? 

console.log(test);

const oneTwoThree = [1, 2, 3];

oddEven = oneTwoThree.reduce((acc, cur) => {
    if (cur % 2) {
        acc.push(cur)
    };
    return acc;
}, []);