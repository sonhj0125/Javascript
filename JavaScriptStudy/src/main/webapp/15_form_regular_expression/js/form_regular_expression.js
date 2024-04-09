window.onload = function(){

    const now = new Date();  // 자바스크립트에서 현재날짜시각을 알려주는 것이다.
    const currentYear = now.getFullYear();  //  현재년도

    let option_birthYear = `<option>출생년도</option>`;
    for(let i=0; i<currentYear-1950+1; i++){
        option_birthYear += `<option>${1950+i}</option>`;
    }   //  end of for-------

    let option_birthMonth = `<option>출생월</option>`;
    for(let i=0; i<=12; i++){
        let month = (i<10)?"0"+i:i;
        option_birthMonth += `<option>${month}</option>`;
    }   //  end of for-------

    let option_birthDate = `<option>출생일</option>`;
    for(let i=0; i<=31; i++){
        let date = (i<10)?"0"+i:i;
        option_birthDate += `<option>${date}</option>`;
    }   //  end of for-------


    document.querySelector("select#birthYear").innerHTML = option_birthYear;
    document.querySelector("select#birthMonth").innerHTML = option_birthMonth;
    document.querySelector("select#birthDate").innerHTML = option_birthDate;


    
    //  === 만나이를 구하기 시작
    const birthSelect_list = document.querySelectorAll("select.birthSelect");
    
    for(let birthSelect of birthSelect_list){
        //  console.log("확인용: " , birthSelect.id);

        //  birthSelect.addEventListener('change', function(){
        //  또는
        birthSelect.onchange= function(){   //  // onchange 으로 해야지 onChange 하면 작동을 하지 않는다.!!!
         //    console.log("확인용 this.value => ", this.value);
         // 확인용 this.value =>  1998
         // 확인용 this.value =>  09
         // 확인용 this.value =>  출생년도
         // 확인용 this.value =>  출생월
         
         // console.log("확인용 ", isNaN(this.value));
         // 확인용  false  
         // 확인용  false
         // 확인용  true
         // 확인용  true
         /*
            NaN ==> Not a Number 
            isNaN(값) ==> 값이 숫자가 아니라면 true
            isNaN(값) ==> 값이 숫자 이라면 false  
         */

            if(isNaN(this.value)){   //  "출생년도" 또는 "출생월"을 선택한 경우

                if(this.id == "birthYear"){
                    alert("태어나신 년도를 선택하세요.");
                }
                else{
                    alert("태어나신 월을 선택하세요.");
                }

                document.querySelector("span#age").innerHTML = "";
                
            }
            else {   // 숫자년도 및 숫자월 그리고 숫자일을 모두 숫자로 선택한 경우
                     // 숫자로 된 날짜가 실제 달력에 존재하는 날짜인지 검사하도록 하는 함수를 호출 

            /*
               console.log(checkValidDate("2023-04-31")); // false
               console.log(checkValidDate("2023-08-31")); // true
               console.log(checkValidDate("2019-02-28")); // true
               console.log(checkValidDate("2019-02-29")); // false
               console.log(checkValidDate("2020-02-29")); // true
            */ 

                const birthday =  document.querySelector("select#birthYear").value + "-" + 
                                  document.querySelector("select#birthMonth").value + "-" + 
                                  document.querySelector("select#birthDate").value;

            //    console.log("확인용 birthday => " + birthday);   // 2023-04-31   2023-08-31   2019-02-28   2019-02-29   2020-02-29
            //    console.log(checkValidDate(birthday));
                if(checkValidDate(birthday)) {
                    const age = go_age(birthday);   // 만나이 구하기
                    document.querySelector("span#age").innerHTML = age;
                }

                if( !isNaN(document.querySelector("select#birthYear").value) &&  
                    !isNaN(document.querySelector("select#birthMonth").value)&&  
                    !isNaN(document.querySelector("select#birthDate").value) &&
                    !checkValidDate(birthday)) {  // 생일이 달력에 없는 경우

                    alert("달력상에 존재하지 않는 날짜를 선택하셨습니다.")
                    document.querySelector("span#age").innerHTML = "";
                }
            }

        }; // end of birthSelect.onchange= function()

    } //  end of for(let birthSelect of birthSelect_list){---------
    //  === 만나이를 구하기 끝




    // ======== 전송(button) 클릭시 시작 ======== //
    document.querySelector("input[type='button']").onclick = function(){

        name = "register_form"

        const frm = document.register_form
        // 문서에서 name의 값이 register_form인 태그(오브젝트)를 잡는 것이다.

        // 1. 사용자 ID는 5글자 이상 20글자 이하 이어야 하고, 첫글자는 영문자 이어야 하고 그 나머지는 영문자 또는 숫자로 이루어져야 한다. 
        //    올바른예 : superman , Batman007 , s9man
        //    틀린예  :  007superman, Lees, Batman007$


        // ==== 정규표현식 객체 만들기 ==== //
        // 정규표현식 객체는 항상 / 로 시작해서 / 로 끝나고 ; 을 붙여주면 된다.
        const regExp_userid = /^[A-Za-z] /;






    }; // end of document.querySelector("input[type='button']").onclick = function()
    // ======== 전송(button) 클릭시 끝 ======== //


} // end of window.onload = function(){-----------------



// 생년월일을 입력받아서 만나이를 구해주는 함수 만들기
function go_age(birthday) {

    const d_birthday = new Date(birthday); // 문자열(날짜형식의 문자열이어야 함)을 날짜로 변경하기
                                           // 날짜형식의 문자열은 2023-09-05 또는 2023/09/05 또는 2023.09.05 이다.

    const birthYear = d_birthday.getFullYear(); // 생일년도(number 타입이다)

    const now = new Date(); // 자바스크립트에서 현재날짜시각을 알려주는 것이다. 
    const currentYear = now.getFullYear(); // 현재년도 

    if(d_birthday.getMonth() < now.getMonth() || 
       (d_birthday.getMonth() == now.getMonth() && d_birthday.getDate() < now.getDate() ) ) { 
       // 생일이 현재일자 보다 작은 경우, 즉 생일이 지난 경우       
       return currentYear - birthYear;
    } 
    else {
       return currentYear - birthYear - 1;
    }

}; // end of function go_age(birthday)



// 생년월일에서 출생일 select 태그의 값을 변경했을 때 호출되는 함수
function go_birthDate(select){

    if(isNaN(select.value)) {   //  "출생일"을 선택한 경우임
        alert("태어나신 일를 선택하세요.");
        document.querySelector("span#age").innerHTML = "";
    }
    else {   //  출생일을 제외한 숫자를 선택한 경우임
       
        const birthday =  document.querySelector("select#birthYear").value + "-" + 
                          document.querySelector("select#birthMonth").value + "-" + 
                          document.querySelector("select#birthDate").value;

        if(checkValidDate(birthday)) {  // 생일이 달력에 있다면,
            const age = go_age(birthday);   // 만나이 구하기
            document.querySelector("span#age").innerHTML = age;
        }
        
        if( !isNaN(document.querySelector("select#birthYear").value) &&  
            !isNaN(document.querySelector("select#birthMonth").value)&&  
            !isNaN(document.querySelector("select#birthDate").value) &&
            !checkValidDate(birthday)) {  // 생일이 달력에 없는 경우

            alert("달력상에 존재하지 않는 날짜를 선택하셨습니다.")
            document.querySelector("span#age").innerHTML = "";
        }
   
    }

};  //  end of function go_birthDate(select){---------------------


