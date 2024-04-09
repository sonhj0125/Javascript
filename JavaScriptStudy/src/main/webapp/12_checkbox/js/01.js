// ==== 체크 박스 여러 개 중 라디오처럼 1개만 선택되도록 만든 것 ==== //
function onlyOneCheck(obj) {
    const checkbox_list = document.querySelectorAll("input[name='product_old']");

    for(let checkbox of checkbox_list) {
        if(checkbox != obj) {
            // checkbox != obj 은 체크박스에 체크를 하지 않은 나머지 모든 체크박스를 말한다.
            checkbox.checked = false;
        }
    } // end of for ---------------------
} // end of function onlyOneCheck(obj) {} -------------------



// === 체크박스 전체선택/전체해제 === //
function func_allCheck(bool) {
    const checkbox_list = document.querySelectorAll("input[name='product_usa']");

    for(let checkbox of checkbox_list) {
        checkbox.checked = bool;  // 각 체크박스의 속성을 '전체선택/해제' 체크박스의 속성과 동일하게 설정
    } // end of for ---------------------

} // end of function func_allCheck(bool) {} -----------------



// === 체크박스 전체선택/전체해제 에서 
//     하위 체크박스에 체크가 1개라도 해제되면 체크박스 전체선택/전체해제 체크박스도 체크가 해제되고
//     하위 체크박스에 체크가 모두 체크되면 체크박스 전체선택/전체해제 체크박스도 체크가 되도록 하는 것 === //
function func_usaCheck(bool) {
 // if(!bool) {
 // 또는
    if(bool == false) {
        // 미국산 체크박스 6개 중 클릭한 체크박스가 체크가 해제된 상태로 넘어온 경우
     // document.querySelector("input#allCheck");
     // 또는
        document.querySelector("input[id='allCheck']").checked = false;

    } else {
        // 미국산 체크박스 6개 중 클릭한 체크박스가 체크된 상태로 넘어온 경우

        const checkbox_list = document.querySelectorAll("input[name='product_usa']");
        
        let is_all_checked = true;
        for(let checkbox of checkbox_list) {
            if(!checkbox.checked) { // 미국산 체크박스 6개를 반복할 때, 해당 체크박스가 체크가 해제된 경우라면
                is_all_checked = false;
                break;
            }
        } // end of for ---------------------

        if(is_all_checked) { // 미국산 체크박스 6개 모두 체크된 상태라면
            document.querySelector("input[id='allCheck']").checked = true;
        }

    }
} // end of function func_usaCheck(bool) {} -----------------