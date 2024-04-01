const a = 100;
const b = "100";

console.log("a 값 => ", a)      // a 값 => 100
console.log("b 값 => ", b)      // b 값 => 100

console.log("변수 a 타입 => ", typeof a);       // 변수 a 타입 => number
console.log("변수 b 타입 => " + typeof b);      // 변수 b 타입 => string

console.log("-----------------------------------------------")


if(a==b){   // == 은 값만 비교하는 것이다.
    console.log('변수 a 와 변수 b의 값은 같습니다.');
}
else{
    console.log('변수 a 와 변수 b의 값은 같지 않습니다.');
}
// 변수 a 와 변수 b의 값은 같습니다.

console.log("-----------------------------------------------")


if(a===b){  // === 은 데이터 타입 및 값 모두 비교하는 것이다.
    console.log('변수 a 와 변수 b의 데이터 타입도 같으며, 값도 같습니다.');  
}
else{
    console.log('변수 a 와 변수 b의 데이터 타입이 같지 않거나 값이 같지 않습니다.');
}
// 변수 a 와 변수 b의 데이터 타입이 같지 않거나 값이 같지 않습니다.










