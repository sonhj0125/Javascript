
window.onload = function() {
    // 문서가 로딩이 끝난 다음에 자동으로 수행해야 할 일들은 여기서 기술한다.
    document.getElementById("num1").focus();
}


/* 더하기 */

function func_sum_error() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    // document.getElementById("").value로 나온 결과는 무조건 string 타입으로 인식

    console.log("확인용 num1 타입 : " + typeof(num1)); // string
    console.log("확인용 num2 타입 : " + typeof(num2)); // string
    // typeof(변수명) 은 변수명의 타입을 알려주는 것이다.
    
    var sum = num1 + num2;
    // 자바스크립트에서 string(문자열)을 나타낼 때는 ""와 '' 모두 가능하다.
    // 또한, 자바스크립트에서 변수의 타입은 입력되는 값에 의해서 결정된다.

    console.log("확인용 sum 타입 : " + typeof(sum)); // string

    document.getElementById("sum").innerHTML = "<span style=\"color: red; font-weight: bold;\">" + sum + "</span>";;
} // end of function func_sum_error() -----------------------------------


function func_sum_correct() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    // document.getElementById("").value로 나온 결과는 무조건 string 타입으로 인식

    console.log("확인용 num1 타입 : " + typeof num1); // string
    console.log("확인용 num2 타입 : " + typeof(num2)); // string
    // typeof 변수명 또는 typeof(변수명) 은 변수명의 타입을 알려주는 것이다.
    
    if(isNaN(Number(num1)) || isNaN(Number(num2))) {
        alert("입력하려는 값은 두 개 모두 숫자로만 입력하셔야 합니다.");
        func_clear();
        return; // 함수 func_minus() 종료

    }

    var sum = Number(num1) + Number(num2);
    // Number()가 없으면 숫자 덧셈이 아닌 !!문자열 결합!!으로 계산된다.
    // string 타입인 num1을 (정수, 실수 상관없이) 숫자 타입인 number 타입으로 바꿔주는 것이다.
    // 자바스크립트에서 변수의 타입은 입력되는 값에 의해서 결정된다.

    console.log("확인용 sum 타입 : " + typeof(sum)); // number

    document.getElementById("sum").innerHTML = '<span style="color: blue; font-weight:bold;">' + sum + '</span>';
} // end of function func_sum_correct() ----------------------------------


function func_clear() {
    document.getElementById("num1").value = ""; // input 태그 안에 값 넣기 / 불러오기 => .value
    document.getElementById("num2").value = "";
    document.getElementById("sum").innerHTML = ""; // span 태그 안에 값 넣기 / 불러오기 => innerHTML

    document.getElementById("num1").focus();

} // end of function func_clear() --------------------


/* 빼기 */

function func_minus() {
    var num3 = document.getElementById("num3").value;
    var num4 = document.getElementById("num4").value;

    if(isNaN(Number(num3)) || isNaN(Number(num4))) {
        alert("입력하려는 값은 두 개 모두 숫자로만 입력하셔야 합니다.");
        func_clear_2();
        return; // 함수 func_minus() 종료

    }

    var num3 = Number(num3) - Number(num4);
    // 이미 선언된 var num3을 다시 var num3으로 선언해서 사용해도 오류가 나지 않는다 (정상이다).
    
    document.getElementById("minus").innerHTML = "<span style='color: green; font-weight:bold; font-style:italic;'>" + num3 + "</span>";

    // !!! 자바스크립트는 자바처럼 변수의 데이터 타입이 정해져 있지 않고,
    //     변수에 입력되는 데이터값에 따라 데이터 타입이 정해진다.  !!!
    var num3 = "안녕하세요 ~";
    // 이미 선언된 var num3을 다시 var num3으로 선언해서 사용해도 오류가 나지 않는다 (정상이다).

    document.getElementById("greeting").innerHTML = num3;
    // input 태그만 .value 사용, 나머지 = .innerHTML
    console.log("확인용 num3 의 데이터 타입 : " + typeof(num3));
    // 확인용 num3 의 데이터 타입 : string

    num3 = 1.2345; // var로 선언된 변수는 재사용이 가능하다!!
    document.getElementById("float").innerHTML = num3;
    console.log("확인용 num3 의 데이터 타입 : " + typeof num3);
    // 확인용 num3 의 데이터 타입 : number
    
    var num5;
    num5 = 999; // var 변수는 선언 후에 값을 넣어도 가능하다.
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


/* 곱하기 */

function func_multiple() {
    var num5 = Number(document.getElementById("num5").value);
    var num6 = Number(document.getElementById("num6").value);
    
    /*
    1995년부터 2015년까지는 모든 JavaScript 코드에서 변수 선언시 var 를 사용하였음.
    2015년 이후부터 JavaScript 코드에서 변수 선언 시 사용되는 const 와 let 가 추가 되었음. 
  
    ※ ES6(ECMAScript 6) 
    ==> ES6이란? ECMA라는 정보와 통신 시스템을 위한 국제적 표준화 기구에서 만든 ECMAScript 표준문서의 6번째 개정판 문서에 있는 표준 스펙이다.  
        ES5는 2011년에 나왔고, ES6은 2015년에 나왔는데 내용이 2배 이상 많아졌음. 
        ES7은 2016년에 나왔지만 ES6과 ES7은 바뀐것이 거의 없음. 
        그래서 일반적으로 ES7이라고 부르지 않고 ES6이라고 부름.
    */

    if(isNaN(num5) || isNaN(num6)) {
        alert("입력하려는 값은 두 개 모두 숫자로만 입력하셔야 합니다.");
        func_clear_3();
        return; // 함수 func_minus() 종료

    }

    // 키보드 숫자 1 왼쪽에 있는 ` 기호를 '백틱'이라고 한다.
    document.getElementById("multiple").innerHTML = 
    `<span style='color: purple; font-weight: bold; font-style: italic;'>
        ${num5 * num6}
     </span>`;

} // end of function func_multiple() --------------------


function func_clear_3() {
    document.getElementById("num5").value = "";
    document.getElementById("num6").value = "";
    document.getElementById("multiple").innerHTML = "";
 
    document.getElementById("num5").focus();
} // end of function func_clear_3() --------------------

