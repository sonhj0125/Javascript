window.onload = function() {

    const tbl = document.querySelector("table#tbl");

    /* 
        tbl.onchange = function() {
            // alert("확인용1");
        } 
        // 또는

        tbl.addEventListener('change', function(){
                alert("확인용2");
        });
    */

    /*  
        tbl.onkeydown = function() {
            alert("확인용3");
        };
    
        // 또는
        tbl.addEventListener('keydown', function(){
                alert("확인용3");
        });
    */

    /* 
        tbl.onkeyup = function() {
        alert("확인용4");
        };

        // 또는
        tbl.addEventListener('keyup', function(){
                alert("확인용4");
        });

    */

    tbl.addEventListener('change', function(e){

        // alert(e.target.id) // change event가 발생되어진 element 태그 => e.target
        // apple, strawberry, melon

        // input 태그에 값을 알아오기
        // alert(e.target.value);  // 0 1 2 3 ...

        /*
            노드.parentNode.parentNode - 부모노드의 부모노드(할아버지, 할머니)
            노드.parentNode      - 부모노드
            노드.childNodes      - 모든자식노드들
            노드.firstChild      - 첫째자식노드
            노드.lastChild       - 막내자식노드
            노드.nextSibling     - 나의바로밑동생노드(형제노드)
            노드.previousSibling - 나의바로위형노드(형제노드)
         
         !! 조심할 사항은 태그사이에 띄어쓰기를 하거나 태그를 줄 바꿈을 해버리면
            띄어쓰기나 줄바꿈을 텍스트 노드(text node)로 취급해버리므로 
            원하는 노드의 값을 가지고 오지 않고 undefined 가 나온다.  
                          
            이렇게 undefined 가 나오지 않도록 하기 위해서 우리는 노드에 id 값을 주어서 처리하도록 한다. 
      */

            
        // 단가가 얼마인지 알아보기
        // alert(e.target.parentNode.innerText);   
        // "1,000" "2,000" => 문자열 출력, 콤마를 빼야함
        // ["1", "000"] 콤마를 기준으로 split
        // join 으로 합치기 "1000"
        // Number 로 변환 "1000" -> 1000

        let price = e.target.parentNode.innerText;  // "1,000"
        price = Number(price.split(",").join(""));   // ["1","000"] => "1000" => 1000 
        
        alert(price);
        alert(typeof price);

        

    });





























} // end of window.onload = function()