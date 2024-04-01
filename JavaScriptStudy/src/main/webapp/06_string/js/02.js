window.onload = function() {

/*
    자바스크립트에서 문자열을 발췌하여 리턴하는 메소드는 3가지가 있다.
    3가지 모두 원본 문자열은 그대로 변경되지 않고 그대로 유지하게 된다.
   
    1. "문자열".slice(startIndex, endIndex)
   ===> 문자열에서 startIndex 부터 endIndex 앞 까지만 발췌하여 리턴해준다.
        역방향을 사용시 startIndex 와 endIndex 에 -를 사용하면 된다.  
*/
    
    const str = "Apple, Banana, Kiwi";

    let part = str.slice(7, 13);   
    document.getElementById("slice_forward").innerHTML = part;  // Banana

    part = str.slice(-12, -6);    
    document.getElementById("slice_reverse").innerHTML = part;   // Banana

} //  end of window.onload = function() {}