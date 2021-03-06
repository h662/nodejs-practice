const string ='abc';
const number = 1;
const boolean = true;
const obj = {
  // d0
  outside: {
    // d1
    inside: {
      // d2
      key:'value',
    },
  },
};
// [ a, b, c ] 배열, { key: value } 객체

// console.time 
// 같은 태그 값이 부여된 사이의 코드의 실행 시간을 계산한다
console.time('전체 시간');
console.log('평범한 로그입니다 쉼표로 구분해 여러 값을 찍을 수 있습니다');
console.log(string, number, boolean);
console.error('에러 메시지는 console.error에 담아주세요');

// 뎁스 0 추가
// console.dir(obj, { colors: false, depth: 0 });
console.dir(obj, { colors: false, depth: 2 });
console.dir(obj, { colors: true, depth: 1 });


console.time('시간 측정');
for (let i = 0; i < 100000; i++) {
  continue;
}
console.timeEnd('시간 측정');

function b() {
  console.trace('에러 위치 추적');
}
function a() {
  b();
}
a();

console.timeEnd('전체 시간');