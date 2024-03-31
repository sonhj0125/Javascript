function myFunction() {
    window.alert("확인 버튼을 클릭하셨군요!");
    
    // 일반적으로 window 는 생략한다.
    // \n은 줄바꿈을 의미한다.
    alert("좋은 하루\n행복한 하루 되세요 :)");

    document.getElementById("name").innerHTML = "김다영";
}

function myClear() {
    document.getElementById("name").innerHTML = "";
}