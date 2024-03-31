function myFunction() {
    console.log("확인 버튼을 클릭하셨군요!");
    // 크롬 웹브라우저에서 키보드 F12(개발자 도구)를 눌러 콘솔에서 확인하는 것이다.

    document.getElementById("name").innerHTML = "김다영";
}

function myClear() {
    document.getElementById("name").innerHTML = "";
}