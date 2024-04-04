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

    tbl.addEventListener('keyup', function(e){
        func_calculate(e.target);   // e.target이 input 태그를 가리키는 것이다.
    }); // end of tbl.addEventListener('keyup', function(e){}




    tbl.addEventListener('change', function(e){

        // alert(e.target.id) // change event가 발생되어진 element 태그 => e.target, input 태그를 가리키는 것
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
        
        // alert(price);    // 단가 1000 2000 3000
        // alert(typeof price); // number

        let su = Number(e.target.value)  // 개수

        price *= su;    // price = price * su; // price 는 개수*단가인 금액이 된다.

        // alert(`가격 : ${price}`);    // 1000 2000 3000 4000
        
        // 숫자.toLocaleString('en'); // 숫자를 3자리 마다 콤마를 찍어서 문자열로 리턴시켜줌.
        // alert(`가격 : ${price.toLocaleString('en')}`);  // 1,000 2,000 3,000 4,000

        // alert("확인용 : " + e.target.parentNode.nextSibling.innerHTML); // 사과는 0, 딸기도 0, 참외는 undefined 나온다.

        const id = e.target.id; // 이벤트가 발생되어진 input의 아이디는 id(apple, strawberry, melon)
        // alert("확인용 : " + document.querySelector(`td#${id}`).innerHTML);   // 사과는 0, 딸기도 0, 참외도 0이 나온다.

        document.querySelector(`td#${id}`).innerHTML = price.toLocaleString('en');
        // 숫자.toLocaleString('en'); // 숫자를 3자리 마다 콤마를 찍어서 문자열로 리턴시켜줌.


        // 총 금액 합산 넣기
        const td_list = document.querySelectorAll("table#tbl > tbody > tr > td:last-child");

        const arr_td = Array.from(td_list, function(item,index,array) {
            return item.innerText.split(",").join("");
        });

        console.log(arr_td);
        /*
            (3) ['1000', '0', '0']
            (3) ['1000', '2000', '0']
            (3) ['1000', '2000', '3000']
        */

        let sum = 0;
        for(let price of arr_td) {
            sum += Number(price);
        } // end of for(let price of arr_td)

        console.log(sum);
        /*
            (3) ['1000', '0', '0']
            1000
            (3) ['1000', '2000', '0']
            3000
            (3) ['1000', '2000', '3000']
            6000
        */

        document.querySelector("table#tbl > tfoot > tr > td:last-child").innerHTML = sum.toLocaleString('en');

    }); // end of tbl.addEventListener('change', function(e)


} // end of window.onload = function()


// Function Declaration
function func_calculate(target) {

    // alert(`확인용 : ${target.value}`);

    const su = Number(target.value)  // 개수

    if(su < 0 || su > 10) {
        document.querySelector("div#display_error > span").style.display = "inline";
        target.value = "0";
        document.querySelector(`td#${target.id}`).innerHTML = "0"; 
    }
    else {
        document.querySelector("div#display_error > span").style.display = "";

        let price = target.parentNode.innerText;  // "1,000"
        price = Number(price.split(",").join(""));   // ["1","000"] => "1000" => 1000 
        
        // alert(price);    // 단가 1000 2000 3000
        // alert(typeof price); // number
    
        price *= su;    // price = price * su; // price 는 개수*단가인 금액이 된다.
    
        // alert(`가격 : ${price}`);    // 1000 2000 3000 4000
        
        // 숫자.toLocaleString('en'); // 숫자를 3자리 마다 콤마를 찍어서 문자열로 리턴시켜줌.
        // alert(`가격 : ${price.toLocaleString('en')}`);  // 1,000 2,000 3,000 4,000
    
        // alert("확인용 : " + e.target.parentNode.nextSibling.innerHTML); // 사과는 0, 딸기도 0, 참외는 undefined 나온다.
    
        const id = target.id; // 이벤트가 발생되어진 input의 아이디는 id(apple, strawberry, melon)
        // alert("확인용 : " + document.querySelector(`td#${id}`).innerHTML);   // 사과는 0, 딸기도 0, 참외도 0이 나온다.
    
        document.querySelector(`td#${id}`).innerHTML = price.toLocaleString('en');
        // 숫자.toLocaleString('en'); // 숫자를 3자리 마다 콤마를 찍어서 문자열로 리턴시켜줌.
    
    
        // 총 금액 합산 넣기
        const td_list = document.querySelectorAll("table#tbl > tbody > tr > td:last-child");
    
        const arr_td = Array.from(td_list, function(item,index,array) {
            return item.innerText.split(",").join("");
        });
    
        console.log(arr_td);
        /*
            (3) ['1000', '0', '0']
            (3) ['1000', '2000', '0']
            (3) ['1000', '2000', '3000']
        */
    
        let sum = 0;
        for(let price of arr_td) {
            sum += Number(price);
        } // end of for(let price of arr_td)
    
        console.log(sum);
        /*
            (3) ['1000', '0', '0']
            1000
            (3) ['1000', '2000', '0']
            3000
            (3) ['1000', '2000', '3000']
            6000
        */
    
        document.querySelector("table#tbl > tfoot > tr > td:last-child").innerHTML = sum.toLocaleString('en');
    }

   
} // end of function func_calculate(target){}


