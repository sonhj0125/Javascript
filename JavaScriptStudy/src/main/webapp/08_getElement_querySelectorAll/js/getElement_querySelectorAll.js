window.onload = function() {

    // === 1. 자바스크립트에서 태그를 가지고 선택자를 잡는 방법 === //
    /*
        document.getElementsByTagName("태그명"); 이다.

        document.getElementsByTagName("태그명"); 을 실행하면 NodeList 타입(배열과 거의 비슷함)으로 반환해준다. 즉, 쉽게 말하자면 객체(object)가 여러개인 형태로 반환해준다.        
    */

    const divList = document.getElementsByTagName("div");

    console.log("divList", divList);

//  alert("divList 의 길이 : " + divList.length); 
    // divList 의 길이 : 3

    for(let i=0; i<divList.length; i++){
    //  alert(divList[i].innerText);    // red green blue

        divList[i].style.display = "inline-block";
        divList[i].style.border = "solid 1px gray"; 
        divList[i].style.width = "200px";
        divList[i].style.height = "150px";
        divList[i].style.margin = "20px";
        divList[i].style.color = "white";

        divList[i].style.backgroundColor = divList[i].innerText;
        // CSS 에서 background-color 와 같이 스네이크기법으로 했던 것은 자바스크립트에서는 backgroundColor 와 같이 카멜기법으로 바꾸어야만 한다.

    } // end of for(let i=0; i<divList.length; i++)

    const btnList = document.getElementsByTagName("button");

    for(let i=0; i<btnList.length; i++){
        btnList[i].style.width = "100px";
        btnList[i].style.height = "50px";
        btnList[i].style.margin = "20px";

    } // end of for(let i=0; i<btnList.length; i++)

    // 버튼4의 배경색을 노란색으로 한다.
    // btnList[3].style.backgroundColor = "yellow"; 또는
    document.getElementsByTagName("button")[3].style.backgroundColor = "yellow";
    



    // === 2. 자바스크립트에서 클래스명을 가지고 선택자를 잡는 방법 === //
    /*
        document.getElementsByClassName("클래스명");
        
        document.getElementsByClassName("클래스명"); 을 실행하면 NodeList 타입(배열과 거의 비슷함)으로 반환해준다. 즉, 쉽게 말하자면 객체(object)가 여러개인 형태로 반환해준다.        
    */

    const btn_navy_list = document.getElementsByClassName("btn_navy");

    for(let i=0; i<btn_navy_list.length; i++){
        btn_navy_list[i].style.backgroundColor = "navy";
        btn_navy_list[i].style.color = "white";

    } // end of for(let i=0; i<btn_navy_list.length; i++)


    // 게임, 영화감상, 글쓰기, 음악감상에 기호 표시 없애기
    document.getElementsByTagName("ul")[0].style.listStyleType = "none";

    // 게임, 영화감상, 글쓰기, 음악감상에 글자색, 크기, 굵기 변경
    const label_list = document.getElementsByTagName("label");
    
    for(i=0; i<label_list.length; i++){
        label_list[i].style.color = "red";
        label_list[i].style.fontSize = "16pt";
        label_list[i].style.fontWeight = "bold";
    } // end of for(i=0; i<label_list.length; i++)
   



    // === 3. 자바스크립트에서 name 속성을 가지고 선택자를 잡는 방법 === //
    /*
        document.getElementsByName("name값");
      
        document.getElementsByName("name값"); 을 실행하면 NodeList 타입(배열과 거의 비슷함)으로 반환해준다. 즉, 쉽게 말하자면 객체(object)가 여러개인 형태로 반환해준다.        
    */

    const checkbox_hobby_list = document.getElementsByName("hobby");

    for(i=0; i<checkbox_hobby_list.length; i++) {
        console.log(checkbox_hobby_list[i].value);
        /*
            game
            movie
            writing
            music
        */

    } // end of for(i=0; i<checkbox_hobby_list.length; i++)

    const span_hobby_list = document.getElementsByClassName("hobby_val");

    for(i=0; i<span_hobby_list.length; i++) {
        span_hobby_list[i].innerHTML = checkbox_hobby_list[i].value;
    } // end of for(i=0; i<span_hobby_list.length; i++)






    // === 4. 자바스크립트에서 id 값을 가지고 선택자를 잡는 방법 === //
    /*
        document.getElementById("id값");
      
        document.getElementById("id값"); 을 실행하면 리턴타입은 1개의 객체(object)이다.         
    */

    const btn_ok_1 = document.getElementById("btn_ok_1");

    // === 엘리먼트(객체)에 마우스가 올라가면 발생하는 이벤트 핸들러 생성하기 === //
    btn_ok_1.onmouseover = function() {
        
        // btn_ok_1 를 "이벤트소스" 라고 부른다. 
        // onmouseover 를 "이벤트" 라고 부른다. 지금은 마우스가 올라가면 발생하는 이벤트이다. 
        // function() { } 부분을 핸들러(처리)라고 부른다.
      
        // alert("확인용 : 체크박스확인1에 마우스가 올라갔군요~~");

        this.style.backgroundColor = "purple";
        // this 는 "이벤트소스" 인 자기자신의 객체(btn_ok_1)를 가리키는 것이다.
    };

    btn_ok_1.onmouseout = function() {

        this.style.backgroundColor = "";    // CSS에서 준 원래 색상 값으로 돌아간다.
        // this 는 "이벤트소스" 인 자기자신의 객체(btn_ok_1)를 가리키는 것이다.
    };



} // end of window.onload = function(){}