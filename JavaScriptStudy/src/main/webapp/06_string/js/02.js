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

/*
   2. "문자열".substring(startIndex, endIndex)
   ===> 문자열에서 startIndex 부터 endIndex 앞 까지만 발췌하여 리턴해준다.
        위의 slice 와 같지만 차이점은 - 를 사용하여 역방향을 사용할 수 없다는 것이다.
*/

    part = str.substring(7, 13);   // Banana
    document.getElementById("substring").innerHTML = part;  


/*
   3. "문자열".substr(startIndex, length)
   ===> 문자열에서 startIndex 부터 length 길이만큼 발췌하여 리턴해준다.
        출발점을 역방향으로 하려면 -startIndex 을 사용하면 된다.
       
   ===> "문자열".substr(startIndex) 
       문자열에서 startIndex 부터 문자열 끝까지 발췌하여 리턴해준다.
       출발점을 역방향으로 하려면 -startIndex 을 사용하면 된다.
*/

    part = str.substr(7, 6);   // Banana
    document.getElementById("substr_forward1").innerHTML = part;  

    part = str.substr(7);   // Banana, Kiwi
    document.getElementById("substr_forward2").innerHTML = part;  

    part = str.substr(-12, 6);   // Banana
    document.getElementById("substr_reverse1").innerHTML = part;  

    part = str.substr(-12);   // Banana, Kiwi 
    document.getElementById("substr_reverse1").innerHTML = part;  

    document.getElementById("str").innerHTML = str; // Apple, Banana, Kiwi



} //  end of window.onload = function() {}