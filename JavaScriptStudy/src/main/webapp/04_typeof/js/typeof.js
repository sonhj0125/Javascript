/*
window.onload = function() {} 은 웹페이지 문서가 모두 로드되어진 다음에 자동적으로 실행해주는 것이다.

*/
window.onload = function() {
//  const val_1 = document.getElementById("val_1").innerHTML;
//  console.log("val_1 => ", val_1);
    // val_1 =>  <span style="color: red;">1234</span>

    const val_1 = document.getElementById("val_1").innerText;
    console.log("val_1 => ", val_1);
    // val_1 =>  1234

    console.log("변수 val_1 의 타입 => ", typeof val_1);
    // 변수 val_1 의 타입 => string

    console.log("변수 val_1 의 타입 => ", typeof (val_1));
    // 변수 val_1 의 타입 => string

//  document.getElementById("type_1").innerHTML = "<span style = 'color: blue'>"+typeof val_1+"</span>";

//  document.getElementById("type_1").innerText = "<span style = 'color: blue'>"+typeof val_1+"</span>";
    // <span style = 'color: blue'>"+typeof val_1+"</span> 그대로 입력함

    document.getElementById("type_1").innerText = typeof val_1;
    // string


    ///////////////////////////////////////////////////////////////////////
    

    const val_2 = document.getElementById("val_2").innerText;
    console.log("val_2 => ", val_2);
    // val_2 => 1234

    document.getElementById("type_2").innerHTML = "<span style = 'color: blue'>"+typeof parseInt(val_2)+"</span>";
    // parseInt => String 타입을 int로 변환


    ///////////////////////////////////////////////////////////////////////


    const val_3 = document.getElementById("val_3").innerText;
    console.log("val_3 => ", val_3);
    // val_3 => 1234.567    String 타입

    console.log("parseFloat(val_3) => ", parseFloat(val_3));
    // parseFloat(val_3) => 1234.567    Number 타입

    console.log("parseInt(val_3) => ", parseInt(val_3));
    // parseFloat(val_3) => 1234    parseInt를 하면 절삭해버림(정수부만 보여줌)

    document.getElementById("type_3").innerHTML = "<span style = 'color: green'>"+typeof parseFloat(val_3)+"</span>";
    // parseFloat => String 타입을 float로 변환(스크립트에서는 정수, 실수이든 모두 데이터 타입은 Number)


    /////////////////////////////////////////////////////////////////////// 


    const val_4 = document.getElementById("val_4").innerText;
    console.log("val_4 => ", val_4);
    // val_4 => 1234    String 타입

    console.log("Number(val_4) => ", Number(val_4));
    // val_4 => 1234    Number 타입

    document.getElementById("type_4").innerHTML = "<span style = 'color: blue'>"+typeof Number(val_4)+"</span>";
    

    /////////////////////////////////////////////////////////////////////// 


    const val_5 = document.getElementById("val_5").innerText;
    console.log("val_5 => ", val_5);
    // val_5 => 1234.567    String 타입

    console.log("Number(val_5) => ", Number(val_5));
    //  Number(val_5) => 1234.567    Number 타입

    document.getElementById("type_5").innerHTML = "<span style = 'color: blue'>"+typeof Number(val_5)+"</span>";
    
    // 정수, 실수 모두 Number 사용이 편하다.!!


    ///////////////////////////////////////////////////////////////////////


    const val_6 = document.getElementById("val_6").innerText;
    document.getElementById("type_6").innerHTML = typeof val_6;


    ///////////////////////////////////////////////////////////////////////


    const sum = Number(document.getElementById("val_7").innerText) + Number(document.getElementById("val_8").innerText);
    document.getElementById("sum").innerHTML = sum;
    console.log("typeof sum => ", typeof sum);
    // typeof sum => Number

    const sum_type = typeof document.getElementById("sum").innerText;
    document.getElementById("type_8").innerHTML = sum_type;
    console.log("typeof sum_type => ", typeof sum_type);
    // typeof sum_typeof => String 겉보기는 Number 지만, 타입은 String으로 나옴
    

    /////////////////////////////////////////////////////////////////////// 

    // document.getElementById("btn_10") 을 "이벤트 소스" 라고 부른다.
    // onclick 을 "이벤트" 라고 부른다. 즉, 지금은 마우스 왼쪽 클릭 이벤트이다.
    // = function(){} 을 "이벤트 핸들러" 라고 부른다.
    document.getElementById("btn_10").onclick = function(){
        
        let val_9 = document.getElementById("val_9").value;     // input 태그는 .value로 읽어옴
        let val_10 = document.getElementById("val_10").value;     // input 태그는 .value로 읽어옴

        document.getElementById("type_9").innerHTML = val_9 + " => " + typeof val_9;    // String
        document.getElementById("type_10").innerHTML = val_10 + " => " + typeof val_10; // String 자바스크립트는 디폴트가 String


        if(val_9 === val_10) {
            document.getElementById("result_10").innerHTML = val_9 +" 와 "+ val_10 +" 은 데이터 타입 및 데이터 값도 같습니다.";
        }
        else {
            document.getElementById("result_10").innerHTML = val_9 +" 와 "+ val_10 +" 은 데이터 타입 또는 데이터 값이 같지 않습니다.";  
        } 


        val_9 = String(Number(val_9)); // val_9은 String, 그거를 숫자로 변환후 문자열로 형변환 시키는 함수이다.
        console.log("typeof val_9 => ", typeof val_9);
        // typeof val_9 => string
        
        val_10 = Number(val_10); // 문자열을 숫자로 형변환 시키는 것
        console.log("typeof val_10 => ", typeof val_10);
        // typeof val_10 => number
        
        
        if(val_9 === val_10) {
            document.getElementById("result_11").innerHTML = val_9 +" 와 "+ val_10 +" 은 데이터 타입 및 데이터 값도 같습니다.";
        }
        else {
            document.getElementById("result_11").innerHTML = val_9 +" 와 "+ val_10 +" 은 데이터 타입 또는 데이터 값이 같지 않습니다.";  
        } 
        

        if(val_9 == val_10) {
            document.getElementById("result_12").innerHTML = val_9 +" 와 "+ val_10 +" 은 데이터 값이 같습니다.";
        }
        else {
            document.getElementById("result_12").innerHTML = val_9 +" 와 "+ val_10 +" 은 데이터 값이 같지 않습니다.";  
        }

    };


    ///////////////////////////////////////////////////////////////////////


    let val_13;
    // 자바스크립트에서 변수에 값을 넣지 않을 경우 
    document.getElementById("type_13").innerHTML = typeof val_13; // undefined


    ///////////////////////////////////////////////////////////////////////


    // ===== !!!! 자바스크립트에서 사용되어지는 객체 사용법 -1 !!!! ===== //

 // const person1 = new Object();   // 자바스크립트에서 말하는 빈 객체이다.
 // 또는 
    const person1 = {};   // 주로 사용, 자바스크립트에서 말하는 빈 객체이다.
    person1.userid = "leess";    // 객체에 새 속성을 추가하는 방법은 .표기법이 있다. 즉, 객체명.속성명 = 값; 으로 한다.
    person1.pwd = 'qwer1234$';   // 객체에 새 속성을 추가하는 방법은 .표기법이 있다. 즉, 객체명.속성명 = 값; 으로 한다.
//  person1.moblie phone = "010-5678-9987"; // 속성명에 공백을 추가하고 싶은 경우, 대괄호 표기법 사용
    person1["moblie phone"] = "010-5678-9987";  // 객체에 새 속성을 추가하는 방법은 대괄호 표기법이 있다. 즉, 객체명["속성명"] = 값; 으로 한다.
    person1["name"] = '이순신';       // 객체에 새 속성을 추가하는 방법은 대괄호 표기법이 있다. 즉, 객체명["속성명"] = 값; 으로 한다.
    person1["age"] = 25;             // 객체에 새 속성을 추가하는 방법은 대괄호 표기법이 있다. 즉, 객체명["속성명"] = 값; 으로 한다.

    document.getElementById("type_14").innerHTML = typeof person1;  // Object

    document.getElementById("val_15").innerHTML = person1.userid;
    document.getElementById("type_15").innerHTML = typeof person1.userid;

    document.getElementById("val_16").innerHTML = person1.pwd;
    document.getElementById("type_16").innerHTML = typeof person1.pwd;

    document.getElementById("val_17").innerHTML = person1["moblie phone"];
    document.getElementById("type_17").innerHTML = typeof person1["moblie phone"];

/*
    document.getElementById("val_18").innerHTML = person1["name"];
    document.getElementById("type_18").innerHTML = typeof person1["name"];
*/
 // 또는
    document.getElementById("val_18").innerHTML = person1.name;
    document.getElementById("type_18").innerHTML = typeof person1.name;

    document.getElementById("val_19").innerHTML = person1["age"];
    document.getElementById("type_19").innerHTML = typeof person1["age"];


    /////////////////////////////////////////////////////////////////////// 


    // ===== !!!! 자바스크립트에서 사용되어지는 객체 사용법 -2 !!!! ===== //

    // {속성명1 : 값1, 속성명2 : 값2, 속성명3 : 값3 } 이 자바스크립트에서 말하는 객체이다. 
    const person2 = {userid : "eomjh",  // 속성명에 "", '', 없음 중 아무거나 사용 가능(공백이 있는 경우는 "" 나 '' 사용)
                     pwd : 'abcd1234',
                     "moblie phone" : '010-3456-7788',
                     name : "엄정화",
                     age : 27
                    };

    document.getElementById("type_20").innerHTML = typeof person2;  // Object

    document.getElementById("val_21").innerHTML = person2.userid;
    document.getElementById("type_21").innerHTML = typeof person2.userid;

    document.getElementById("val_22").innerHTML = person2.pwd;
    document.getElementById("type_22").innerHTML = typeof person2.pwd;

    document.getElementById("val_23").innerHTML = person2["moblie phone"];
    document.getElementById("type_23").innerHTML = typeof person2["moblie phone"];

/*
    document.getElementById("val_24").innerHTML = person2["name"];
    document.getElementById("type_24").innerHTML = typeof person2["name"];
*/
 // 또는
    document.getElementById("val_24").innerHTML = person2.name;
    document.getElementById("type_24").innerHTML = typeof person2.name;

    document.getElementById("val_25").innerHTML = person2["age"];
    document.getElementById("type_25").innerHTML = typeof person2["age"];


    ///////////////////////////////////////////////////////////////////////
                    

    // === !!!! 자바스크립트에서는 함수도 변수에 넣을 수 있다. !!!! === //

    // 자바스크립트에서 함수를 선언하는 방법1 : 함수 표현식(Function expression)
    const func_sum = function(num1, num2) {

    if(isNaN(num1)) {
        alert("첫번째 입력값은 숫자형태이어야 합니다.")
        return;
    }


    if(isNaN(num2)) {
        alert("두번째 입력값은 숫자형태이어야 합니다.")
        return;
    }

    return Number(num1) + Number(num2);

};

// ==== 함수 호출하기 ==== //
const val_26 = document.getElementById("val_26").innerText;        // 문자열 "40"
const val_27 = document.getElementById("val_27").innerText;        // 문자열 "50"

document.getElementById("result_27").innerHTML = func_sum(val_26, val_27);
// 90

console.log(typeof func_sum);
// function

document.getElementById("type_27").innerHTML= typeof func_sum;



///////////////////////////////////////////////////////////////////////


// ==== 함수 호출하기 ==== //
const val_28 = document.getElementById("val_28").innerText;        // 문자열 "60"
const val_29 = document.getElementById("val_29").innerText;        // 문자열 "70"

document.getElementById("result_29").innerHTML = func_minus(val_28, val_29);
// 60-70 = -10


///////////////////////////////////////////////////////////////////////


// === "화살표 함수" 란?
   // ES6(ECMAScript 6)에서 처음으로 소개된 것으로써 화살표(=>)를 사용하여 함수를 선언하는 방법이다. 
   // 다른말로 람다 표현식(lambda expression)이라고 부른다.
   // 이것은 function 과 return 을 생략하기 위해서 개발한 것이다.

    const func_multiply_1 = (num1, num2) => {
        
        if(isNaN(num1)) {
            alert("첫번째 입력값은 숫자형태이어야 합니다.")
            return;
        }
    
    
        if(isNaN(num2)) {
            alert("두번째 입력값은 숫자형태이어야 합니다.")
            return;
        }

        return`${Number(num1) * Number(num2)}`;
        // 앞뒤에 백틱 `` 을 쓰고 백틱 속에 ${} 을 쓰고 {}속에 변수를 넣어준다.

    };

    const func_multiply_2 = (num1, num2) => { return`${Number(num1) * Number(num2)}`};

    const func_multiply_3 = (num1, num2) =>  `${Number(num1) * Number(num2)}`;
    // 함수의 내용물이 return 값만 있을 경우에는 {} 와 return 을 생략할 수 있다. 

    const func_multiply_4 = num =>  `${Number(num) * 5}`;
    // 매개변수가 1개만 있을 경우 ()를 생략할 수 있다.

    const func_multiply_5 = () =>  {return 200};
    // 매개변수가 없을 경우에는 ()를 사용해야 하며, return이 있을 경우 {}를 사용해야 한다.

    const n1 = Number(document.getElementById("val_30").innerText); // 20
    const n2 = Number(document.getElementById("val_31").innerText); // 30


    document.getElementById("result_32").innerHTML = func_multiply_1(n1, n2);
    document.getElementById("result_33").innerHTML = func_multiply_2(n1, n2);
    document.getElementById("result_34").innerHTML = func_multiply_3(n1, n2);
    document.getElementById("result_35").innerHTML = n1*func_multiply_4(6);
    document.getElementById("result_36").innerHTML = func_multiply_5()*3;
    
    document.getElementById("type_37").innerHTML = typeof func_multiply_4;


} // end of window.onload = function(){}



// 자바스크립트에서 함수를 선언하는 방법2 : 함수 선언식(Function declaration)
function func_minus(num1, num2) {

    if(isNaN(num1)) {
        alert("첫번째 입력값은 숫자형태이어야 합니다.")
        return;
    }


    if(isNaN(num2)) {
        alert("두번째 입력값은 숫자형태이어야 합니다.")
        return;
    }

    return Number(num1) - Number(num2);



} // end of function func_minus(num1, num2);






























