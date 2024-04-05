window.onload = function () {

    const btnSubmit = document.querySelector("button#btnSubmit"); // "제출하기" 버튼

    const timerDiv = document.querySelector("div#timer"); // 타이머를 보여줄 장소

    let time = 600; // 타이머 시간을 10분으로 지정

    // ==== 타이머 함수 만들기 시작 ====
    const timer = function () {

        if (time < 0) {
            alert("시험시간 종료!!\n자동으로 제출됩니다.");

            clearInterval(interval_timer); // 타이머 삭제하기
         // interval_timer 는 중단해야 할 setInterval 함수를 가리키는 것이다.

         // btnSubmit.disabled = true; // "제출하기" 버튼 비활성화
         // 또는
            btnSubmit.setAttribute('disabled', 'true'); // "제출하기" 버튼 비활성화

         // [참고] btnSubmit.disabled = false; // "제출하기" 버튼 활성화
         //        또는
         //        btnSubmit.setAttribute('disabled', 'false'); // "제출하기" 버튼 활성화

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

            timerDiv.innerHTML = `${minute}:${second}`;

            time--;
        }
    };
    // ==== 타이머 함수 만들기 끝 ====


    timer(); // 타이머 함수 호출하기
 // const interval_timer = setInterval(function() { timer(); }, 1000); // 타이머 함수가 1초마다 주기적으로 호출되도록 지정
 // 또는
    const interval_timer = setInterval(timer, 1000); // 타이머 함수가 1초마다 주기적으로 호출되도록 지정



    ///////////////////////////////////////////////////////////////////////////////////////////////



    const arr_quizData = [
        {
            question: "문제1. 대한민국의 수도는?",
            answers: {
                1: "부산",
                2: "수원",
                3: "서울",
                4: "인천"
            },
            correct: 3
        },

        {
            question: "문제2. 1+1은?",
            answers: {
                1: "1",
                2: "2",
                3: "3",
                4: "4"
            },
            correct: 2
        },

        {
            question: "문제3. 미국의 수도는?",
            answers: {
                1: "뉴욕",
                2: "파리",
                3: "로스엔젤러스",
                4: "워싱턴",
                5: "런던"
            },
            correct: 4
        },

        {
            question: "문제4. 사진 속 인물의 이름은?<div><img src='images/iyou.jpg'/></div>",
            answers: {
                1: "엄정화",
                2: "아이유",
                3: "김태희",
                4: "박보영"
            },
            correct: 2
        }
    ];


    const quizDiv = document.querySelector("div#quiz_display"); // 퀴즈 문항을 보여줄 장소

    // ==== 퀴즈 문항을 html로 만들기 시작 ====
    let html = ``;

    arr_quizData.forEach((item, index) => {
        html += `<p id="q${index}">${item.question}</p>`;
        html += `<ol>`;

        for(let property_name in item.answers) { // 어떤 객체의 속성(키)들을 모두 불러올 때는 for문에서 of 가 아니라 in 을 사용한다.
            html += `<li><label for="${index}_${property_name}">${item.answers[property_name]}</label>&nbsp;
                     <input type="radio" name="question_${index}" value="${property_name}" id="${index}_${property_name}" /></li>`;
            // 객체명.속성명  => 속성명에는 변수가 사용될 수 없다.
            // 객체명[속성명] => 속성명에 변수가 사용될 수 있다.
            // ${item.answers[property_name]} 는 "부산" 과 같은 것을 말하는 것이다.
            
            // 라디오는 반드시 name 값이 동일해야 한다. (한 문제당)
            // value 값은 item.answers 의 속성명인 1 2 3 4 로 된다.
        } // end of for --------------

        html += `</ol>`;
        html += `<div class="ox" id="ox_${index}"></div>`; // 퀴즈 문항에 대해 정답 여부를 보여줄 장소


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

         // console.log(`${index + 1}번 문제 정답은 ${item.correct} 이다.`);
            /*
                1번 문제 정답은 3 이다.
                2번 문제 정답은 2 이다.
                3번 문제 정답은 4 이다.
                4번 문제 정답은 2 이다.
            */

            // 퀴즈 문항 뒤에 정답 번호 공개하기
            const question = document.querySelector(`p#q${index}`).innerHTML; // 정답을 보여주기 전, 해당 문제를 읽어와서 확인해본다.
         // console.log(question);
            /*
                문제1. 대한민국의 수도는?
                문제2. 1+1은?
                문제3. 미국의 수도는?
                문제4. 사진 속 인물의 이름은?
            */

            document.querySelector(`p#q${index}`).innerHTML = question + `&nbsp;&nbsp;<span style='color: red; font-weight: bold;'>${item.correct}</span>`;
            // 문제 뒤에 정답을 붙여 같이 보여준다.

            // === 해당 문제의 라디오 개수가 몇 개인지 알아오기 ===
            let radio_length = document.querySelectorAll(`input[name="question_${index}"]`).length;

         // console.log(`${index+1}번 문제의 라디오 개수는 ${radio_length}개입니다.`);
            /*
                1번 문제의 라디오 개수는 4개입니다.
                2번 문제의 라디오 개수는 4개입니다.
                3번 문제의 라디오 개수는 5개입니다.
                4번 문제의 라디오 개수는 4개입니다.
            */

            let isCheckAnswer = false;  // 라디오의 선택 유무 검사용
            for(let i=0; i<radio_length; i++) {
                if(document.querySelectorAll(`input[name="question_${index}"]`)[i].checked) {
                    isCheckAnswer = true;
                    break; // 한 문제당 한 개만 체크할 수 있으므로, 어떤 한 문항에 체크가 되어 있다면 반복문 바로 종료
                }
            } // end of for --------------------

         // console.log(`${index+1}번 문제 답을 선택하셨나요? ${isCheckAnswer}`);
            /*
                1번 문제 답을 선택하셨나요? true
                2번 문제 답을 선택하셨나요? false
                3번 문제 답을 선택하셨나요? true
                4번 문제 답을 선택하셨나요? false
            */

            let user_answer;

            if(isCheckAnswer) { // 사용자가 답을 선택한 경우
                user_answer = document.querySelector(`input[name="question_${index}"]:checked`).value; // ★라디오/체크박스 중에서 체크된 문항★
                                                                                    // :checked 은 라디오 중에 선택된 라디오를 말한다.

            } else { // 사용자가 답을 선택하지 않은 경우
                user_answer = "선택안함";
            }

         // console.log("사용자가 선택한 답 번호 => ", user_answer);
            /*
                사용자가 선택한 답 번호 =>  선택안함
                사용자가 선택한 답 번호 =>  2
                사용자가 선택한 답 번호 =>  선택안함
                사용자가 선택한 답 번호 =>  3
            */

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