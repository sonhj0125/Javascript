window.onload = function() {

    let text = `안녕하세요? "이순신" 과 '엄정화' 를 소개합니다.`;
    document.getElementById("p_1").innerHTML = text;
    
    let man = "이순신";
    let woman = '엄정화';
  //   document.getElementById("p_2").innerHTML = `안녕하세요? ${man} 과 ${woman} 를 소개합니다.`;
  //   document.getElementById("p_2").innerHTML = "안녕하세요? "+man+" 과 "+woman+" 를 소개합니다."; 
    
  //   document.getElementById("p_2").innerHTML = "안녕하세요? \""+man+"\" 과 '"+woman+"' 를 소개합니다."; 
    document.getElementById("p_2").innerHTML = `안녕하세요? "${man}" 과 '${woman}' 를 소개합니다.`;     
    
    document.getElementById("p_3").innerHTML = `안녕하세요? "${man}" 과 '${woman}' 를 ${''/* 이것은 주석문입니다. */} 소개합니다.`; 
    
     let price = 100;
     const VAT = 0.1; 
     let total = `총액 : ${price + price*VAT}`;        
  //   let total = "총액 : " + (price + price*VAT);
    
    document.getElementById("p_4").innerHTML = total; 
    

    //////////////////////////////////////////////////////////////
    

    var title_1 = "분식 메뉴1";
    var html_1 = "<h2>"+title_1+"</h2>";
        html_1 += "<ul>";
        html_1 += "<li>라면</li>" +
                  "<li>떡볶이</li>" +
                  "<li>튀김</li>" +
                  "<li>김밥</li>" +
                  "<li>어묵</li>"; 
        html_1 += "</ul>";
        
     document.getElementById("p_5").innerHTML = html_1;   
     
     
     let title_2 = "분식 메뉴2";
    let html_2 = `<h2>${title_2}</h2>`;
        html_2 += `<ul>
                     <li>라면</li>
                     <li>떡볶이</li>
                     <li>튀김</li>
                     <li>김밥</li>
                     <li>어묵</li> 
                   </ul>`;
                   
    document.getElementById("p_6").innerHTML = html_2;  
    

    //////////////////////////////////////////////////////////////
    

    var title_1 = "분식 메뉴3";
    var food_arr = ["라면","떡볶이","튀김","김밥","어묵"];  // 자바스크립트에서의 {} : 객체, [] : 배열
 
    var html_1 = "<h2>"+title_1+"</h2><ul>";
        
    for(var i=0; i<food_arr.length; i++) {

        html_1 +="<li>" + food_arr[i] + "</li>"
    
     } // end of for(var i=0; i<food_arr.length; i++)

        html_1 += "</ul>";

    document.getElementById("p_7").innerHTML = html_1;  


    //////////////////////////////////////////////////////////////


    const title = "분식 메뉴4";
    const foodArr = ["라면","떡볶이","튀김","김밥","어묵"];

    let html = `<h2>${title}</h2>
                <ul>`

    for(let i=0; i<foodArr.length; i++) {

        html +=`<li>${foodArr[i]}</li>`
        
    } // end of for(let i=0; i<foodArr.length; i++)
    
        html += `</ul>`;

    document.getElementById("p_8").innerHTML = html;  






 } 