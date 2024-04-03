window.onload = function() {

    // === Array.from() === //
    // ES6에 새로 도입된 메소드로서 유사 배열 객체나 반복 가능한 객체를 실제 배열로 변환시켜주는 것이다. 
    
    const li_list = document.querySelectorAll("div#div_fruit > ul:first-child > li"); 
    
    console.log(li_list);
    // NodeList(4) [li, li, li, li]
    
    // **** Array.from(유사배열객체) **** //
    const li_arr = Array.from(li_list);  // 유사배열객체인 li_list 를 배열로 바꾸어 준다. 
    console.log(li_arr);
    // (4) [li, li, li, li]
    
    const fruitname_arr = li_arr.map(item => item.innerText);
    console.log(fruitname_arr);
    // (4) ['사과', '딸기', '수박', '참외']
    
    const fruitnames = fruitname_arr.join(", ");
    console.log(fruitnames);
    // 사과, 딸기, 수박, 참외
    
    document.querySelector("div#fruit_hangul").innerHTML = fruitnames; 
    

    //////////////////////////////////////////////////////////////////


    // *** Array.from(유사배열객체 , map()메소드와 비슷한 1:1 매핑 시켜주는 함수정의) *** // 
    
    const li_list2 = document.querySelectorAll("div#div_fruit > ul:last-child > li");
    
    const fruitname2_arr = Array.from(li_list2, function(item, index, array) {  // 배열로 바꾸고 map까지 한번에 함
                                                     // item 은 배열요소인 li 이다.
                                         return item.innerText;                   
                                      });
    
    console.log(fruitname2_arr);  
    // (4) ['apple', 'strawberry', 'watermelon', 'melon']                                
    
    document.querySelector("div#fruit_english").innerHTML = fruitname2_arr.join(", ");  // 배열을 문자열로 만듦
    
    
    const fruitname3_arr = Array.from(li_list2, item => item.innerText);    // function 대신 화살표함수 사용
    document.querySelector("div#fruit_english2").innerHTML = fruitname3_arr.join(", ");


    //////////////////////////////////////////////////////////////////


    


}; // end of window.onload = function() {}