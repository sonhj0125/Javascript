window.onload = function () {

    const btnSubmit = document.querySelector("button#btnSubmit"); // "제출하기" 버튼

    const timerDiv = document.querySelector("div#timer"); // 타이머를 보여줄 장소

    let time = 600; // 타이머 시간을 10분으로 지정

    let current_index = 0;  // 현재 인덱스 번호
    let positionValue = 0;   // images 위치값
    const quiz_display = 900;    // 한번 이동 시 이미지 크기만큼 이동한다.

    const btn_previous = document.querySelector("button#previous"); // 이전버튼
    const btn_next = document.querySelector("button#next"); // 다음버튼
    const quiz = document.querySelector("div#quiz_display");


    // ==== 타이머 함수 만들기 시작 ====
    const timer = function () {

        if (time < 0) {
            alert("시험시간 종료!!\n자동으로 제출됩니다.");

            clearInterval(interval_timer); // 타이머 삭제하기

            btnSubmit.setAttribute('disabled', 'true'); // "제출하기" 버튼 비활성화

            check(); // 채점하는 함수 호출


        } else {
            let minute = "";
            let second = "";

            minute = parseInt(time / 60);  // 소수부를 없애고 정수부만 가져오는 것이다.

            if (minute < 10) {
                minute = "0" + minute;
            }

            second = time % 60;  // time을 60으로 나눈 나머지

            if (second < 10) {
                second = "0" + second;
            }

            timerDiv.innerHTML = `종료시간까지 : ${minute}:${second}`;

            time--;
        }
    };
    // ==== 타이머 함수 만들기 끝 ====


    timer(); // 타이머 함수 호출하기
 // const interval_timer = setInterval(function() { timer(); }, 1000); // 타이머 함수가 1초마다 주기적으로 호출되도록 지정
 // 또는
    const interval_timer = setInterval(timer, 1000); // 타이머 함수가 1초마다 주기적으로 호출되도록 지정


    // == 다음으로 이동하는 함수 == //
    const func_next = function() {
        if(current_index < 3) { // 현재 인덱스 번호가 마지막(지금은 3)이 아닌 경우
            btn_previous.removeAttribute('disabled');   // 이전 버튼을 활성화 상태로 만든다.
            positionValue -=  quiz_display;  // images 의 위치를 왼쪽으로 이동시키도록 quiz_display 만큼 감소시켜 positionValue에 저장한다.
            quiz.style.transform = `translateX(${positionValue}px)`;   // x축 방향(가로방향)으로 positionValue 만큼 이동하도록 변형시킨다.
            document.querySelector("h2#msg").innerHTML = "";

            current_index++;     // 현재 인덱스 번호를 1 증가시킨다.
        }
        else {  // 현재 인덱스 번호가 마지막인 경우
            btn_next.setAttribute('disabled', ' true');     // 마지막 문제일 때 다음버튼을 disabled 로 만든다.
            document.querySelector("h2#msg").innerHTML = "마지막 문제 입니다.";
        }
    }; // end of const func_next = function(){}



    // == 이전으로 이동하는 함수 == //
    const func_previous = function() {
        if(current_index > 0) { // 현재 인덱스 번호가 처음이 아닌 두번째 이상인 경우
            btn_next.removeAttribute('disabled');   // 다음 버튼을 활성화 상태로 만든다.
            positionValue +=  quiz_display;  // images 의 위치를 오른쪽으로 이동시키도록 quiz_display 만큼 증가시켜 positionValue에 저장한다.
            quiz.style.transform = `translateX(${positionValue}px)`;   // x축 방향(가로방향)으로 positionValue 만큼 이동하도록 변형시킨다.
            document.querySelector("h2#msg").innerHTML = "";

            current_index--;     // 현재 인덱스 번호를 1 감소시킨다.
        }
        else {  // 현재 인덱스 번호가 처음인 경우
            btn_previous.setAttribute('disabled', ' true');     // 처음 문제일 때 이전버튼을 disabled 로 만든다.
            document.querySelector("h2#msg").innerHTML = "처음 문제 입니다.";
        }
    }; // end of const func_previous = function(){}

    btn_previous.setAttribute('disabled', 'true');          // 이전 버튼은 초기화로 사용하지 못하도록 disabled 로 만든다.


    btn_previous.addEventListener('click', func_previous)   // 이전버튼 클릭시 이전으로 이동하는 함수를 호출한다.
    btn_next.addEventListener('click', func_next)           // 다음버튼 클릭시 다음으로 이동하는 함수를 호출한다.
    

    ///////////////////////////////////////////////////////////////////////////////////////////////



    const arr_quizData = [
        {
            question: "<문제1> 다음 중 기념일이 아닌 것은?",
            answers: {
                1: "어린이 날",
                2: "상공의 날",
                3: "바다의 날",
                4: "영화의 날"
            },
            correct: 4
        },

        {
            question: "<문제2> 인도네시아의 수도는?",
            answers: {
                1: "자카르타",
                2: "반둥",
                3: "족자카르타",
                4: "수라바야"
            },
            correct: 1
        },

        {
            question: "<문제3> 다음 중 넥슨 게임이 아닌 것은?",
            answers: {
                1: "카트라이더",
                2: "메이플스토리",
                3: "블레이드 앤 소울",
                4: "던전앤파이터",
                5: "바람의 나라"
            },
            correct: 3
        },

        {
            question: "<문제4> 사진 속 인물의 이름은?<div><img src='images/moana.jpg'/></div>",
            answers: {
                1: "픽시",
                2: "미키마우스",
                3: "모아나",
                4: "오로라"
            },
            correct: 3
        }
    ];

    const quizDiv = document.querySelector("div#quiz_display"); // 퀴즈 문항을 보여줄 장소

    // ==== 퀴즈 문항을 html로 만들기 시작 ====
    let html = ``;

    arr_quizData.forEach((item, index) => {

        html += `<div id = "quiz"><p id="q${index}">${item.question}</p>`;

        html += `<ol>`;

        for(let property_name in item.answers) { // 어떤 객체의 속성(키)들을 모두 불러올 때는 for문에서 of 가 아니라 in 을 사용한다.
            html += `<li><label for="${index}_${property_name}">${item.answers[property_name]}</label>&nbsp;
                     <input type="radio" name="question_${index}" value="${property_name}" id="${index}_${property_name}" /></li>`;
           
        } // end of for --------------

        html += `</ol>`;
        html += `<div class="ox" id="ox_${index}"></div></div>`; // 퀴즈 문항에 대해 정답 여부를 보여줄 장소

    }); // end of arr_quizData.forEach() --------------

    quizDiv.innerHTML = html;
    // ==== 퀴즈 문항을 html로 만들기 끝 ====


    ///////////////////////////////////////////////////////////////////////////////////////


    // ==== "제출하기" 버튼 클릭 시 이벤트 처리하기 시작 ====
    const handleSubmit = function() {
        alert("제출이 완료되었습니다.");

        clearInterval(interval_timer); // 타이머 삭제하기
        // interval_timer 는 중단해야 할 setInterval 함수를 가리키는 것이다.

        timerDiv.innerHTML = `00:00`;

     // btnSubmit.disabled = true; // "제출하기" 버튼 비활성화
     // 또는
        btnSubmit.setAttribute('disabled', 'true'); // "제출하기" 버튼 비활성화

        check(); // 채점하는 함수 호출
    };
    
    // btnSubmit 은 "제출하기" 버튼이다. 이것은 맨 위에서 만들었다.
    btnSubmit.addEventListener('click', handleSubmit);
    // ==== "제출하기" 버튼 클릭 시 이벤트 처리하기 끝 ====



    ////////////////////////////////////////////////////////////////////



    // ==== 채점하는 함수 만들기 시작 ====
    const check = function() {

        let answer_cnt = 0; // 정답 개수 누적용

        arr_quizData.forEach((item, index) => {

         
            // 퀴즈 문항 뒤에 정답 번호 공개하기
            const question = document.querySelector(`p#q${index}`).innerHTML; // 정답을 보여주기 전, 해당 문제를 읽어와서 확인해본다.
        
            document.querySelector(`p#q${index}`).innerHTML = question + `&nbsp;&nbsp;<span style='color: red; font-weight: bold;'>${item.correct}</span>`;
            // 문제 뒤에 정답을 붙여 같이 보여준다.

            // === 해당 문제의 라디오 개수가 몇 개인지 알아오기 ===
            let radio_length = document.querySelectorAll(`input[name="question_${index}"]`).length;

      
            let isCheckAnswer = false;  // 라디오의 선택 유무 검사용
            for(let i=0; i<radio_length; i++) {
                if(document.querySelectorAll(`input[name="question_${index}"]`)[i].checked) {
                    isCheckAnswer = true;
                    break; // 한 문제당 한 개만 체크할 수 있으므로, 어떤 한 문항에 체크가 되어 있다면 반복문 바로 종료
                }
            } // end of for --------------------

    

            let user_answer;

            if(isCheckAnswer) { // 사용자가 답을 선택한 경우
                user_answer = document.querySelector(`input[name="question_${index}"]:checked`).value; // ★라디오/체크박스 중에서 체크된 문항★
                                                                                    // :checked 은 라디오 중에 선택된 라디오를 말한다.

            } else { // 사용자가 답을 선택하지 않은 경우
                user_answer = "선택안함";
            }

            if(user_answer == item.correct) {
                answer_cnt++;
                document.querySelector(`div#ox_${index}`).innerHTML = "<span style='color:blue;'>정답</span>";

            } else {
                document.querySelector(`div#ox_${index}`).innerHTML = "<span style='color:red;'>오답</span>";
            }

        }); // arr_quizData.forEach() -----------------------------

        document.querySelector("div#score").innerHTML = `<span style='font-weight:bold;'>정답 개수 : ${answer_cnt}</span>`;
    };
    // ==== 채점하는 함수 만들기 끝 ====


} // end of window.onload = function() {} ------------