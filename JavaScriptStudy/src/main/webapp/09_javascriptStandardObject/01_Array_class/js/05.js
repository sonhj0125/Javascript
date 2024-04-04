window.onload = function() {

    document.querySelector("button#btn_1").onclick = function() {
        
        const person_arr = [{photo:"iyou.jpg", name: "아이유", age: "20", address: "서울시 강동구", unique: "가수 겸 탤런트<br/>팬들이 많음"},
                            {photo:"kimth.jpg", name: "김태희",age: "30", address: "서울시 강서구", unique: "탤런트<br/>팬들이 많음"},
                            {photo:"parkby.jpg", name: "박보영",age: "40", address: "서울시 강남구", unique: "탤런트<br/>팬들이 많음"}]

        let person_html = ``;

        for(let item of person_arr) {

            person_html += `<div style = 'border: solid 1px gray;'><ul style = 'list-style-type: none; '>`;

            for(let property_name in item) {

                let title;
                switch (property_name) {
                    case "photo":
                        title = "";
                        break;

                    case "name":
                        title = "성명";
                        break;

                    case "age":
                        title = "나이";
                        break;

                    case "address":
                        title = "주소";
                        break;
                
                    default:
                        title = "특이사항";
                        break;
            }
        
            if(property_name != 'photo') {
                person_html += `<li><label style = 'color:blue; '>${title}</label>&nbsp;:&nbsp;${item[property_name]}</li>`;
            }
            else if(property_name == 'unique') {
                person_html += `<li><label>${title}</label>&nbsp;:&nbsp;${item[property_name]}</li>`;
            }
            else {
                person_html += `<li><img src = "images/${item[property_name]}" width= "119px" height= "149px"/></li>`;
            }
            } // end of for(let property_name in item)
        
            person_html += `</ul></div>`;

        } // end of for(let item of person_arr)

        document.querySelector("div#view").innerHTML = person_html;

    }; // end of document.querySelector("button#btn_1").onclick = function() {}


} // end of window.onload = function() {}