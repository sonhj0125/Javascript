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




















}

