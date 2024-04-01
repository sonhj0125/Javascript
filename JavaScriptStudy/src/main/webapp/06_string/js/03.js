window.onload = function() {
 
    /*
        1. "문자열".replace("기존문자열", "새로운문자열")
       ===> 문자열에서 첫번째로 나오는 "기존문자열" 을 "새로운문자열" 로 변경하여 리턴해준다. 
           "기존문자열" 은 대소문자를 구분한다.
           원본 문자열은 그대로 변경되지 않고 그대로 유지하게 된다.
    */
    const str = "Please visit Microsoft! ORACLE / Microsoft MS-SQL"; 
    
    let new_str = str.replace("Microsoft", "마이크로소프트");
    document.getElementById("replace_1").innerHTML = new_str; 
    // Please visit 마이크로소프트! ORACLE / Microsoft MS-SQL
    
    document.getElementById("str").innerHTML = str;
    // Please visit Microsoft! ORACLE / Microsoft MS-SQL
    
    
    /*
       2. "기존문자열" 의 대소문자를 구분치 않으려면 정규표현식을 사용하여 /i (대소문자 구분이 없는 insensitive) 를 사용하면 된다. 
    */
    new_str = str.replace(/MICROSOFT/i, "마이크로소프트");  //  / 와 / 사이에는 "가 없어야 한다. 
    document.getElementById("replace_2").innerHTML = new_str; 
    
    
    /*
       3. 문자열에서 모든 "기존문자열" 을 "새로운문자열" 로 변경하여 리턴해주려면 
          정규표현식을 사용하여 /g 를 사용하면 된다. 
          g 는 "모든, 모두 다" 를 의미
    */  
    new_str = str.replace(/MICROSOFT/gi, "마이크로소프트");  //  / 와 / 사이에는 "가 없어야 한다. 
    document.getElementById("replace_3").innerHTML = new_str; 
       
 } 