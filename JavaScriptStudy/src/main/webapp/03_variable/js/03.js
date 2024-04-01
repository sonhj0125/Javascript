/**
 * 
 */

function func_1() {
    var num1 = 10; // num1은 10
    var num2 = 20;

    {
        var num1 = 30; // num1은 30
    }

    var sum = num1 + num2;
    //         30  +  20

    document.getElementById("span1").innerHTML = sum; // 50
} // en of function func_1() --------------


function func_2() {
    const num1 = 10; // num1은 10
    const num2 = 20;

    {
        const num1 = 30; // num1은 30
        // { } block 속에 선언된 const num1 은 { } 내에서만 사용 가능한 것이며, { } 을 벗어나는 순간 자동으로 소멸된다.
        // 그러므로 { } 내에서는 새로 선언이 가능하다 !!
        
        const sum = num1 + num2;
        //         30  +  20
        // { } block 속에 선언된 const sum 은 { } 내에서만 사용 가능한 것.
        // { } 을 벗어나는 순간 const sum은 자동으로 소멸된다.

     // sum = num1 - num2; // 실행 시 오류 발생
        // Uncaught TypeError: Assignment to constant variable.
        // ---- const sum에 이미 값을 할당한 후 재할당은 불가하므로 오류이다 !!
        
        document.getElementById("span2-1").innerHTML = sum;
    }

    const sum = num1 + num2;
    //           10  +  20

    document.getElementById("span2-2").innerHTML = sum; // 30

} // en of function func_2() --------------


function func_3() {
    let num1 = 10; // num1은 10
    let num2 = 20;

    {
        let num1 = 30; // num1은 30
        // { } block 속에 선언된 const num1 은 { } 내에서만 사용 가능한 것이며, { } 을 벗어나는 순간 자동으로 소멸된다.
        // 그러므로 { } 내에서는 새로 선언이 가능하다 !!
        
        let sum = num1 + num2;
        //         30  +  20
        // { } block 속에 선언된 const sum 은 { } 내에서만 사용 가능한 것.
        // { } 을 벗어나는 순간 const sum은 자동으로 소멸된다.

        sum = num1 - num2; // 실행 시 오류 발생
        // Uncaught TypeError: Assignment to constant variable.
        // ---- const sum에 이미 값을 할당한 후 재할당은 불가하므로 오류이다 !!
        
        document.getElementById("span2-1").innerHTML = sum;
    }

    let sum = num1 + num2;
    //           10  +  20

    document.getElementById("span2-2").innerHTML = sum; // 30

} // en of function func_3() --------------



function func_4() {
    
    const num1 = 10; // num1 은 10임
  // let num1 = 20;
  // Uncaught SyntaxError: Identifier 'num1' has already been declared 
  
    let num2 = 20;
  // const num2 = 30; 
  // Uncaught SyntaxError: Identifier 'num2' has already been declared 
    
  //  num1 += num2;  // num1 = num1 + num2;
  //  Uncaught TypeError: Assignment to constant variable.
  // --- num1 은 const 이므로 값을 할당한 후 재할당이 불가하므로 오류이다.!!
    
    num2 += num1;  // num2 = num2 + num1;
  // --- num2 은 let 이므로 값을 할당한 후 재할당이 가능하다.!!   
        
    document.getElementById("span4").innerHTML = num2; // 30  
  }// end of function func_4()-------------------