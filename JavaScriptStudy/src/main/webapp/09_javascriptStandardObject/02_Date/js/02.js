window.onload = function() {

    const timerDiv = document.querySelector("div#timer")  // 타이머를 보여줄 장소

    let time = 600;              // 타이머 시간을 600초(== 10분)로 지정
    let time_continue = 0;       // 타이머가 중지했던 그때의 time 값을 기억하는 용도. 

    


    // === 타이머 함수 만들기 시작 === //
    const timer = function(){

        let minute = "";
        let second = "";

        minute = parseInt(time/60);     // 소수부는 없애고, 정수부만 가져오기
        if(minute < 10) {
            minute = "0" + minute;
        }
        
        second = time%60;     // time 을 60으로 나누었을 때의 나머지
        if(second < 10) {
            second = "0" + second;
        }

        const html = `${minute}:${second}`;
        timerDiv.innerHTML = html;

        time--;
    };
    // === 타이머 함수 만들기 끝 === //

    
    timer();        // 타이머 함수 호출
    
    // let interval_timer = setInterval(function(){timer(); }, 1000);    // 1초 마다 주기적으로 타이머 함수가 호출되도록 지정함.
    // 또는
    let interval_timer = setInterval(timer, 1000);




    // === 타이머 중지 시작 === //
    const btnTimerClear = document.querySelector("div#timerclear > button#btnTimerClear");

    btnTimerClear.addEventListener('click', () => {
        clearInterval(interval_timer);  // 타이머 삭제하기
                                        // interval_timer 는 중단해야할 setInterval 함수를 가리키는 것이다.
        /*
            만약에 setTimeout 으로 지정된 것이라면 clearTimeout(interval_timer); 으로 한다.
            interval_timer 는 중단해야할 setTimeout 함수를 가리키는 것이다. 
       */

        time_continue = time;   // 타이머가 중지했던 그때의 time 값을 기억하는 용도. 

    });
    // === 타이머 중지 끝 === //





    // === 타이머 처음부터 시작 === //
    const btnTimerRestart = document.querySelector("div#timerclear > button#btnTimerRestart");

    btnTimerRestart.addEventListener('click', () => {
        
        /* 타이머를 다시 생성하려면 먼저 타이머를 없애고 만들어야 한다. */
        time = 600;     // 타이머 시간을 600초(== 10분)로 지정
        clearInterval(interval_timer);  // 타이머 삭제하기

        interval_timer = setInterval(timer, 1000);    // 1초 마다 주기적으로 타이머 함수가 호출되도록 지정함.
    
    });
    // === 타이머 처음부터 끝 === //





    // === 타이머 중지이후 부터 이어서 시작 === // 
    const btnTimerContinue = document.querySelector("div#timerclear > button#btnTimerContinue");

    btnTimerContinue.addEventListener('click', () => {

         /* 타이머를 다시 생성하려면 먼저 타이머를 없애고 만들어야 한다. */
         time = time_continue;     // 타이머 시간은 중지한 시간 이후부터 지정
         clearInterval(interval_timer);  // 타이머 삭제하기
 
         interval_timer = setInterval(timer, 1000);    // 1초 마다 주기적으로 타이머 함수가 호출되도록 지정

    });
    // === 타이머 중지이후 부터 이어서 끝 === // 







} // end of window.onload = function(){}