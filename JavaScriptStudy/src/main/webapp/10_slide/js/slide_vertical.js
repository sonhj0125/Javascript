window.onload = function() {

    let current_index = 0;  // 현재 인덱스 번호
    let positionValue = 0;   // images 위치값
    const image_height = 300;    // 한번 이동 시 이미지 크기만큼 이동한다.

    const btn_previous = document.querySelector("button#previous");
    const btn_next = document.querySelector("button#next");
    const images = document.querySelector("div#images");



    // == 다음으로 이동하는 함수 == //
    const func_next = function() {
        if(current_index < 3) { // 현재 인덱스 번호가 마지막(지금은 3)이 아닌 경우
            btn_previous.removeAttribute('disabled');   // 이전 버튼을 활성화 상태로 만든다.

            // 또는
            // btn_previous.disabled= false;   // 이전 버튼을 활성화 상태로 만든다.

            positionValue -=  image_height;  // images 의 위치를 위쪽으로 image_height 만큼 감소시켜 positionValue에 저장한다.
            images.style.transform = `translateY(${positionValue}px)`;   // y축 방향(세로방향)으로 positionValue 만큼 이동하도록 변형시킨다.
            document.querySelector("h2#msg").innerHTML = "";

            current_index++;     // 현재 인덱스 번호를 1 증가시킨다.
        }
        else {  // 현재 인덱스 번호가 마지막인 경우
            btn_next.setAttribute('disabled', ' true');     // 마지막 사진일 때 다음버튼을 disabled 로 만든다.
            document.querySelector("h2#msg").innerHTML = "마지막 사진 입니다.";
        }
    }; // end of const func_next = function(){}




    // == 이전으로 이동하는 함수 == //
    const func_previous = function() {
        if(current_index > 0) { // 현재 인덱스 번호가 처음이 아닌 두번째 이상인 경우
            btn_next.removeAttribute('disabled');   // 다음 버튼을 활성화 상태로 만든다.

            // 또는
            // btn_next.disabled = true;   // 다음 버튼을 비활성화 상태로 만든다.

            positionValue +=  image_height;  // images 의 위치를 아래쪽으로 이동시키도록 image_height 만큼 증가시켜 positionValue에 저장한다.
            images.style.transform = `translateY(${positionValue}px)`;   // y축 방향(세로방향)으로 positionValue 만큼 이동하도록 변형시킨다.
            document.querySelector("h2#msg").innerHTML = "";

            current_index--;     // 현재 인덱스 번호를 1 감소시킨다.
        }
        else {  // 현재 인덱스 번호가 처음인 경우
            btn_previous.setAttribute('disabled', ' true');     // 처음 사진일 때 이전버튼을 disabled 로 만든다.
            document.querySelector("h2#msg").innerHTML = "처음 사진 입니다.";
        }
    }; // end of const func_previous = function(){}

    btn_previous.setAttribute('disabled', 'true');          // 이전 버튼은 초기화로 사용하지 못하도록 disabled 로 만든다.


    btn_previous.addEventListener('click', func_previous)   // 이전버튼 클릭시 이전으로 이동하는 함수를 호출한다.
    btn_next.addEventListener('click', func_next)           // 다음버튼 클릭시 다음으로 이동하는 함수를 호출한다.
    
    
} // end of window.onload = function(){}