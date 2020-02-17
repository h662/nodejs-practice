const oneTwoThree = [1, 2, 3];
let result = oneTwoThree.map((v) => {
    return v;
});

console.log(oneTwoThree);
console.log(result);

// 서로 다른 객체이고, 기존 배열을 건들지 않고 새로운 배열을 생성해낸다.
console.log(oneTwoThree === result);

const data1 = new Date();
const data2 = new Date();
console.log(data1, data2); 
const data3 = data1;

console.log(data1 === data2);
console.log(data1 === data3);

result = oneTwoThree.map(v => {
    return v + 1;
});

console.log(result);

const oddEven = oneTwoThree.map(v => {
    if ( v % 2) {
        return '홀수';
    }
    return '짝수';
});

console.log(oddEven);