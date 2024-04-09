window.onload = function() {

    // ==== 체크 박스 여러 개 중 라디오처럼 1개만 선택되도록 만든 것 ==== //
    const checkbox_list = document.querySelectorAll("input[name='product_old']");

    for(let checkbox of checkbox_list) {

        checkbox.addEventListener('click', () => {
            for(let checkbox_product_old of checkbox_list) {
                if(checkbox_product_old != checkbox) {
                    checkbox_product_old.checked = false;
                }
            }
        });

    } // end of for --------------------




    // === 체크박스 전체선택/전체해제 === //
    const allCheck = document.querySelector("input[id='allCheck']");

    allCheck.addEventListener('click', () => {
        const checkbox_list = document.querySelectorAll("input[name='product_usa']");

        for(let checkbox of checkbox_list) {
            checkbox.checked = allCheck.checked; // 각 체크박스의 속성을 '전체선택/해제' 체크박스의 속성과 동일하게 설정
        } // end of for ---------------------
    });




    // === 체크박스 전체선택/전체해제 에서 
    //     하위 체크박스에 체크가 1개라도 해제되면 체크박스 전체선택/전체해제 체크박스도 체크가 해제되고
    //     하위 체크박스에 체크가 모두 체크되면 체크박스 전체선택/전체해제 체크박스도 체크가 되도록 하는 것 === //
    const checkbox_product_usa_list = document.querySelectorAll("input[name='product_usa']");

    // === 이벤트 소스를 잡은 것(복수 개이므로 for문 사용) ===
    for(let checkbox of checkbox_product_usa_list) {

        checkbox.addEventListener('click', () => {
            
            if(!checkbox.checked) { // 체크박스에 체크를 해제한 클릭인 경우
                document.querySelector("input[id='allCheck']").checked = false;
                
            } else { // 체크박스에 체크를 한 클릭인 경우
                     // ==> name 값이 product_usa 인 모든 체크박스를 검사해서 모든 체크박스가 체크가 되어 있는 경우라면 
                     //     체크박스 전체선택/전체해제 체크박스에 체크를 해주도록 한다. 

                let is_all_checked = true;

                for(let checkbox_product_usa of checkbox_product_usa_list) {
                    if(!checkbox_product_usa.checked) {
                        is_all_checked = false;
                        break;
                    }
                } // end of for ---------------------------------

                if(is_all_checked) {
                    document.querySelector("input[id='allCheck']").checked = true;
                }
            }

        });
        
    } // end of for --------------------------------
    
    



} // end of window.onload = function() {} -----------