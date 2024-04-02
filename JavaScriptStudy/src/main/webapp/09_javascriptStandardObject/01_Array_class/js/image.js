window.onload = function() {

    const person_arr = [{name:"아이유", photo:"iyou.jpg", age:25, address:"서울시 강남구", largePhoto:"iyouLarge.jpg"},
                        {name:"김태희", photo:"kimth.jpg", age:27, address:"서울시 마포구", largePhoto:"kimthLarge.jpg"},
                        {name:"박보영", photo:"parkby.jpg", age:30, address:"인천시 미추홀구", largePhoto:"parkbyLarge.jpg"}];

    let html_1 = ``;
    person_arr.forEach(function(item, index, array){    // 배열은 item
        html_1 += `<th>${item.name}</th>`;
    });

    const name_tr = document.querySelector("div#container > table > thead > tr");
    name_tr.innerHTML = html_1;

    const th_list = document.querySelectorAll("div#container > table > thead > tr > th ");
    const photo_tr = document.querySelector("div#container > table > tbody > tr:first-child");
    const age_tr = document.querySelector("div#container > table > tbody > tr:nth-child(2)");
    const address_tr = document.querySelector("div#container > table > tbody > tr:last-child");
    

    // 처음에 마우스오버 하지 않아도 아이유 사진만 먼저 뜨게 하기
    photo_tr.innerHTML = `<td colspan = '3'><img src = 'images/${person_arr[0].photo}'></td>`;


    th_list.forEach(function(elmt, index, array){   // 유사 배열 Nodelist 는 item이라 안쓰고, elmt 라 쓴다.
       
        elmt.onmouseover = function(){

            // alert("확인용 헤헤헤");
            // alert(person_arr[index].photo);

            photo_tr.innerHTML = `<td colspan = '3'><img src = 'images/${person_arr[index].photo}'></td>`;
            
            elmt.style.backgroundColor = "#ff9966";
            elmt.style.color = "white";
            elmt.style.cursor = "pointer";
            elmt.style.transition = "1s";
            elmt.innerHTML = "클릭하세요";
            elmt.style.width = "33.3333%";

            document.querySelector("div#container > table > tbody > tr > td > img").style.opacity = "1.0";

        };

        elmt.onmouseout = function() {
            elmt.innerHTML = person_arr[index].name;
            elmt.style.backgroundColor = "";
            elmt.style.color = "";
            elmt.style.cursor = "";
            elmt.style.transition = "1s";
            elmt.style.width = "";

            document.querySelector("div#container > table > tbody > tr > td > img").style.opacity = "";

            age_tr.style.display = "none";
            address_tr.style.display = "none";

            photo_tr.innerHTML = `<td colspan = '3'><img src = 'images/${person_arr[index].photo} </td>`;
        };

        elmt.onclick = function() {
            
            age_tr.innerHTML = `<td colspan = '3' style ='height: 30px; font-weight: bolder;'> 나이 : ${person_arr[index].age}세 </td>`;
            address_tr.innerHTML = `<td colspan = '3' style ='height: 30px; font-weight: bolder;'> 주소 : ${person_arr[index].address} </td>`;
            
            age_tr.style.display = "";
            address_tr.style.display = "";

            photo_tr.innerHTML = `<td colspan = '3'><img src = 'images/${person_arr[index].largePhoto}'> </td>`;
            document.querySelector("div#container > table > tbody > tr > td > img").style.opacity = "1.0";

        };

        
    }); // end of th_list.forEach(function(elmt, index, array){}


    
} // end of window.onload = function() {}