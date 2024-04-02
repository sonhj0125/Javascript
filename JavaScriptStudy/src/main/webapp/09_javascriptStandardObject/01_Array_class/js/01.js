window.onload = function() {

    // === 1. 자바스크립트에서 배열은 아래와 같이 나타냅니다. === //
    // const arr_fruit1 = []; // 배열도 객체이다.
    // 또는
    const arr_fruit1 = new Array(); // 배열도 객체이다.

    arr_fruit1.push("사과");
    // 배열명.push() : 배열의 마지막에 새로운 요소를 추가한 후, 변경된 배열의 길이를 리턴시켜줌.
    arr_fruit1.push("딸기");
    // 배열명.push() : 배열의 마지막에 새로운 요소를 추가한 후, 변경된 배열의 길이를 리턴시켜줌.
    arr_fruit1.push("메론");
    // 배열명.push() : 배열의 마지막에 새로운 요소를 추가한 후, 변경된 배열의 길이를 리턴시켜줌.
    arr_fruit1.push("참외");
    // 배열명.push() : 배열의 마지막에 새로운 요소를 추가한 후, 변경된 배열의 길이를 리턴시켜줌.
    let len = arr_fruit1.push("수박");
    // 배열명.push() : 배열의 마지막에 새로운 요소를 추가한 후, 변경된 배열의 길이를 리턴시켜줌.

    console.log("1. 배열 arr_fruit1 의 길이 => ", arr_fruit1.length);
    // 1. 배열 arr_fruit1 의 길이 => 5

    console.log("2. 변수 len 의 값 => ", len);
    // 2. 변수 len 의 값 => 5


    // === !!!!!!!!! 자바스크립트에서 사용되어지는 for 문 !!!!!!!!! === //
    let html_1 = `<ol>`;

    for(let i=0; i<arr_fruit1.length; i++) {
        html_1 += `<li>${arr_fruit1[i]}</li>`;
    } // end of for(let i=0; i<arr_fruit1.length; i++)

    html_1 += `</ol>`;

    document.querySelector("div#fruitDisplay1").innerHTML = html_1;

    /////////////////////////////////////////////////////////////////////

    let html_2 = `<ol>`;

    for(let i=0; i<arr_fruit1.length; i+=1) {
        html_2 += `<li>${arr_fruit1[i]}</li>`;
    } // end of for(let i=0; i<arr_fruit1.length; i+=1)

    html_2 += `</ol>`;

    document.querySelector("div#fruitDisplay2").innerHTML = html_2;

    /////////////////////////////////////////////////////////////////////

    let html_3 = `<ol>`;

    // 자바 확장 for 문과 동일하게 : 대신 of 사용
    for(let item of arr_fruit1) {
        // [참고] for ... of 는 배열값을 가져올때 사용하는 것이고,  for ... in 은 객체의 속성목록을 가져올때 사용하는 것이다.
        // 배열도 객체인데 배열의 속성은 바로 인덱스번호 이다. 그래서 of 대신에 in 을 사용하면 배열요소의 인덱스번호가 나온다.
        html_3 += `<li>${item}</li>`;
    } // end of for(let item of arr_fruit1)

    html_3 += `</ol>`;

    document.querySelector("div#fruitDisplay3").innerHTML = html_3;


    ////////////////////////////////////////////////////////////////////


    //  배열명.forEach(function(item, index, array){}); 아주아주 많이 사용!!
    /*  item  - 현재 처리 중인 배열의 각 요소  
        index - (optional) 처리 중인 요소의 인덱스 
        array - (optional) forEach()가 적용되고 있는 배열 */

        let html_4 = `<ol>`;

        arr_fruit1.forEach(function(item, index, array){
            html_4 += `<li>${item}</li>`;
        });
        html_4 += `</ol>`;
    
        document.querySelector("div#fruitDisplay4").innerHTML = html_4;



























} // end of window.onload = function() {}