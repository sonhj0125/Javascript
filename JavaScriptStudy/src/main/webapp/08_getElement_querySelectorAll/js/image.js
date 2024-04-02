window.onload = function() {

    // const thList = document.getElementsByTagName("th");
    // const imgList = document.getElementsByTagName("img");

    const thList = document.querySelectorAll("table:first-child th")
    const imgList = document.querySelectorAll("table:first-child img");

    for(let i=0; i<thList.length; i++){

         // === 엘리먼트(객체)에 마우스가 올라가면 발생하는 이벤트 핸들러 생성하기 === //
        thList[i].onmouseover = function() {    // 이벤트소스.이벤트 = 핸들러
            this.style.backgroundColor = "#ff9966";
            this.style.color = "white";
            this.style.cursor = "ponter";
            this.style.transition = "3s";

            imgList[i].style.transition = "2s";
            imgList[i].style.opacity = "1.0";
        };

        // === 엘리먼트(객체)에 마우스가 올라갔다가 빠지면 발생하는 이벤트 핸들러 생성하기 === // 
        thList[i].onmouseout = function() {    // 이벤트소스.이벤트 = 핸들러
            this.style.backgroundColor = "";
            this.style.color = "";
            this.style.cursor = "";
            this.style.transition = "3s";

            imgList[i].style.transition = "2s";
            imgList[i].style.opacity = "";
        };

    } // end of for(let i=0; i<thList.length; i++)





} // end of window.onload = function(){}