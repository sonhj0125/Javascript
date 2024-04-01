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
}