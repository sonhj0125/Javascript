window.onload = function() {
    // window.onload는 브라우저에 html 페이지 로딩이 끝나면 자동으로 호출(실행)되는 것이다.
    // 자동으로 호출되어 실행돼야 할 명령은 function() { } 안에 기술한다.
    
    document.getElementById("h1").innerHTML = "<span style='color: green;'>h1</span> 태그입니다.";
    document.getElementById("demo").innerHTML = "변경 전 p 태그";
}

function myFunction() {
    document.getElementById("demo").innerHTML = "p 태그의 <span style='color: orange; font-weight: bold;'>내용이 변경</span>되었습니다.";
}


