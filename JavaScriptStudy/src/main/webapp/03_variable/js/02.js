window.onload = function() {
    // 문서가 로딩이 끝난 다음에 자동으로 수행해야 할 일들은 여기서 기술한다.
    document.getElementById("num1").focus();
}


/* 더하기 */

function func_sum_correct() {
    const num1 = document.getElementById("num1").value;

 // const num1 = document.getElementById("num2").value;
    // 블록 범위 변수 'num1'을(를) 다시 선언할 수 없습니다.ts(2451)
    // const num1이 이미 선언되어 있으므로 다시 선언하는 것은 오류이다!!

 // num1 = document.getElementById("num1").value;
    // Uncaught TypeError: Assignment to constant variable.
    // => num1은 const 타입이므로 num1에 이미 값이 할당된 이후에 또 값을 할당하는 것은 오류이다.
    // => 그러므로 const는 자바의 final 변수와 비슷한 상수 변수 형태로 사용된다.

    const num2 = document.getElementById("num2").value;
    // DB에서 불러오는 값(변하면 안되는 값)은 const 사용!

    if(isNaN(Number(num1)) || isNaN(Number(num2))) {
        alert("입력하려는 값은 두 개 모두 숫자로만 입력하셔야 합니다.");
        func_clear();
        return; // 함수 func_minus() 종료

    }
    
    document.getElementById("sum").innerHTML = 
    `<span style= "color: blue; font-weight:bold;">              
        ${Number(num1) + Number(num2)}
     </span>`;
} // end of function func_sum_correct() ----------------------------------



function func_clear() {
    document.getElementById("num1").value = ""; // input 태그 안에 값 넣기 / 불러오기 => .value
    document.getElementById("num2").value = "";
    document.getElementById("sum").innerHTML = ""; // span 태그 안에 값 넣기 / 불러오기 => innerHTML

    document.getElementById("num1").focus();

} // end of function func_clear() --------------------



/* 빼기 */

function func_minus() {
    let num3 = Number(document.getElementById("num3").value);
 // let num3 = Number(document.getElementById("num4").value);
    // 블록 범위 변수 'num3'을(를) 다시 선언할 수 없습니다.ts(2451)
    // --- let num3 은 이미 선언되어져 있으므로 또 선언하는 것은 오류이다.!!

    num3 = "호호호하하하";
    num3 = Number(document.getElementById("num3").value);
    // --- num3 은 let 타입이므로 num3 에 이미 값이 할당된 이후에 또 값을 할당해도 가능하다.!!!!

    let num4 = Number(document.getElementById("num4").value);

    console.log("~~~~~~확인용 num3 의 값 : ", num3);    
    // ~~~~~~확인용 num3 : 50
    // ~~~~~~확인용 num3 : NaN

    console.log("~~~~~~확인용 num4 의 값 : ", num4);
    // ~~~~~~확인용 num4 : 20
    // ~~~~~~확인용 num4 : NaN

    if(isNaN(num3) || isNaN(num4)) {
        alert("입력하려는 값은 두 개 모두 숫자로만 입력하셔야 합니다.");
        func_clear_2();
        return; // 함수 func_minus() 종료

    }


    document.getElementById("minus").innerHTML = 
    `<span style= "color: red; font-weight: bold;">              
        ${num3 - num4}
     </span>`;

    // !!! 자바스크립트는 자바처럼 변수의 데이터 타입이 정해져 있지 않고,
    //     변수에 입력되는 데이터값에 따라 데이터 타입이 정해진다.  !!!
    num3 = "안녕하세요 ~";  // let 로 선언되어진 변수는 다른 값을 받아서 쓸 수 있는 재사용이 가능하다.

    document.getElementById("greeting").innerHTML = num3;
    console.log("확인용 num3 의 데이터 타입 : " + typeof(num3));
    // 확인용 num3 의 데이터 타입 : string

    num3 = 1.2345; // let로 선언된 변수는 재사용이 가능하다!!
    document.getElementById("float").innerHTML = num3;
    console.log("확인용 num3 의 데이터 타입 : " + typeof num3);
    // 확인용 num3 의 데이터 타입 : number

/*
    const num5;
    num5 = 999;
    // 'const' declarations must be initialized.ts(1155)
    // const 는 반드시 변수의 선언과 함께 값을 넣어주어야 한다.
    // 위와 같이 하면 오류가 발생한다.!!
*/

    let num5;
    num5 = 999; // let 변수는 선언 후에 값을 넣어도 가능하다.
    document.getElementById("point").innerHTML = num5;

} // end of function func_minus() --------------------



function func_clear_2() {
    document.getElementById("num3").value = "";
    document.getElementById("num4").value = "";
    document.getElementById("minus").innerHTML = ""; // span 태그 안에 있는 값 불러오기 => innerHTML

    document.getElementById("greeting").innerHTML = "";
    document.getElementById("float").innerHTML = "";
    document.getElementById("point").innerHTML = "";

    document.getElementById("num3").focus();
} // end of function func_clear_2() --------------------
