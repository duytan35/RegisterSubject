$(document).ready(function () {
    side__news = document.getElementsByClassName("main_container__side__news");
    function handleNews(obj) {
        var news_isSlected = false;
        var content = obj.parentElement.children[1];
        obj.addEventListener("click", e => {
            if (news_isSlected == false) {
                news_isSlected = true;
                obj.style.background = "#FF8207";
                obj.style.color = "#FFFFFF";
                obj.children[0].innerHTML = "▼";
                content.style.visibility = "visible";
                content.style.position = "unset";
            } else {
                news_isSlected = false;
                obj.style.background = "#FFD8B1";
                obj.style.color = "#FFA207";
                obj.children[0].innerHTML = "▶";
                content.style.visibility = "hidden";
                content.style.position = "absolute";
            }
        });
    }
    for (const b of side__news) {
        handleNews(b);
    }
    $(".main_container__side").sortable();
    $("#subject_left_list").sortable({ connectWith: "#subject_right_list" });
    $("#subject_right_list").sortable({ connectWith: "#subject_left_list" });
    var valid_identify = /^(1[7-9]|2[0-2])[0-9]{6}$/;
    var valid_fullname = /^([a-zA-Z]{0,10} ){1,}([a-zA-Z]{0,10})$/;
    var valid_address = /^\w{1,}$/;
    var valid_phone = /^0[0-9]{9}$/;
    var valid_birthday = /^(\d{2})[/](\d{2})[/](\d{4})$/;
    var valid_email = /^[a-z][a-z0-9_\.]{4,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,}){1,3}$/;
    CheckValid_input = function () {
        isValid = true;
        if (identify.value == "" || valid_identify.test(identify.value) == false) {
            identify.style.borderColor = "red";
            isValid = false;
        } else {
            identify.style.borderColor = "#6e7275";
        }

        if (fullname.value == "" || valid_fullname.test(fullname.value) == false) {
            fullname.style.borderColor = "red";
            isValid = false;
        } else {
            fullname.style.borderColor = "#6e7275";
        }

        if (address.value == "" || valid_address.test(address.value) == false) {
            address.style.borderColor = "red";
            isValid = false;
        } else {
            address.style.borderColor = "#6e7275";
        }

        if (phone.value == "" || valid_phone.test(phone.value) == false) {
            phone.style.borderColor = "red";
            isValid = false;
        } else {
            phone.style.borderColor = "#6e7275";
        }

        if (phone.value == "" || valid_phone.test(phone.value) == false) {
            phone.style.borderColor = "red";
            isValid = false;
        } else {
            phone.style.borderColor = "#6e7275";
        }

        if (male.checked == false && female.checked == false) {
            error_msg.innerHTML = "Chọn giới tính!";
            isValid = false;
        } else {
            error_msg.innerHTML = "";
        }

        if (birthday.value == "" || valid_birthday.test(birthday.value) == false) {
            birthday.style.borderColor = "red";
            isValid = false;
        } else {
            birthday.style.borderColor = "#6e7275";
        }

        if (email.value == "" || valid_email.test(email.value) == false) {
            email.style.borderColor = "red";
            isValid = false;
        } else {
            email.style.borderColor = "#6e7275";
        }
        return isValid;
    };
    $("#btnRegister").on("click", () => {
        if (CheckValid_input()) {
            var sex;
            if (male.checked == true) {
                sex = "Nam";
            } else {
                sex = "Nữ";
            }
            var row_insert = `<tr>
                                    <td>${identify.value}</td>
                                    <td>${fullname.value}</td>
                                    <td>${sex}</td>
                                    <td>${birthday.value}</td>
                                </tr>`;
            students_table.innerHTML += row_insert;
            var table = document.querySelectorAll("#students_table tr");
            for (i = 2; i < table.length; i += 1) {
                if (i % 2 == 0) {
                    table[i].style.background = "#FFE2B1";
                } else {
                    table[i].style.background = "white";
                }
            }
            var str = "Các môn học đã đăng ký: ";
            for (var p of subject_right_list.children) {
                str = str + p.innerHTML + ", ";
            }
            str = str.slice(0, str.length - 2);
            alert(str);
        }
    });
    $("#btnClearall").on("click", () => {
        identify.value = "";
        fullname.value = "";
        address.value = "";
        phone.value = "";
        birthday.value = "";
        email.value = "";
        male.checked = false;
        female.checked = false;
    });

    var btnNews = document.getElementsByClassName("btnNews")[0];
    var main_container__side = document.getElementsByClassName("main_container__side")[0];
    btnNews.addEventListener("click", () => {
        if(main_container__side.classList.contains('moveToLeft')) {
            setTimeout(() => {
                main_container__side.style.display = "none";
            }, 500);
            main_container__side.classList.add("moveToRight");
            main_container__side.classList.remove("moveToLeft");
        }
        else {
            main_container__side.style.display = "block";
            main_container__side.classList.add("moveToLeft");
            main_container__side.classList.remove("moveToRight");
        }
    })


    function handle_other_items(index) {
        for (var i = 0; i < list_menu_top.children.length; i++) {
            if (i != index) {
                list_menu_top.children[i].classList.remove('active');
                list_menu_bottom.children[i].classList.remove('active');
            }
        }
    }

    function handleMenu(obj, i) {
        obj.addEventListener("click", e => {
            list_menu_top.children[i].classList.add("active");
            list_menu_bottom.children[i].classList.add("active");
            handle_other_items(i);
        });
    }
    for (var i = 0; i < list_menu_top.children.length; i++) {
        handleMenu(list_menu_top.children[i], i);
        handleMenu(list_menu_bottom.children[i], i);
    }

    var subjectsLeft = document.getElementById('subject_left_list');
    var subjectsRight = document.getElementById('subject_right_list');

    function setOnClickSubject(obj) {
        obj.addEventListener("click", function (e) {
            if(obj.classList.contains("isClicked")){
                obj.classList.remove("isClicked");
            }
            else {
                obj.classList.add("isClicked");
            }
        });
    }

    function handleClickSubjects(){
        for (var i = 0; i < subjectsLeft.children.length; i++){
            setOnClickSubject(subjectsLeft.children[i])
        }
        for (var i = 0; i < subjectsRight.children.length; i++){
            setOnClickSubject(subjectsRight.children[i])
        }
    }

    function replaceElements(){
        let length = subjectsLeft.children.length;
        for (var i = 0; i < length; i++){
            let p = document.createElement("p");
            p.textContent = subjectsLeft.children[0].innerHTML;
            if(subjectsLeft.children[0].classList.contains("isClicked")){
                p.classList.add("isClicked");
            }
            subjectsLeft.appendChild(p);
            subjectsLeft.removeChild(subjectsLeft.children[0]);
        }
        length = subjectsRight.children.length;
        for (var i = 0; i < length; i++){
            let p = document.createElement("p");
            p.textContent = subjectsRight.children[0].innerHTML;
            if(subjectsRight.children[0].classList.contains("isClicked")){
                p.classList.add("isClicked");
            }
            subjectsRight.appendChild(p);
            subjectsRight.removeChild(subjectsRight.children[0]);
        }
    }
    handleClickSubjects();
    moveToRight.addEventListener("click", e => {
        replaceElements();
        for (var i = 0; i < subjectsLeft.children.length; i++){
            if (subjectsLeft.children[i].classList.contains("isClicked")){
                let p = document.createElement("p");
                p.textContent = subjectsLeft.children[i].innerHTML;
                subjectsRight.appendChild(p);
                subjectsLeft.removeChild(subjectsLeft.children[i]);
                i--;
            }
        }
        handleClickSubjects();
    })
    moveAllToRight.addEventListener("click", e => {
        replaceElements();
        while (subjectsLeft.children.length > 0){
            let p = document.createElement("p");
            p.textContent = subjectsLeft.children[0].innerHTML;
            subjectsRight.appendChild(p);
            subjectsLeft.removeChild(subjectsLeft.children[0]);
        }
        handleClickSubjects();
    })
    moveToLeft.addEventListener("click", e => {
        replaceElements();
        for (var i = 0; i < subjectsRight.children.length; i++){
            if (subjectsRight.children[i].classList.contains("isClicked")){
                let p = document.createElement("p");
                p.textContent = subjectsRight.children[i].innerHTML;
                subjectsLeft.appendChild(p);
                subjectsRight.removeChild(subjectsRight.children[i]);
                i--;
            }
        }
        handleClickSubjects();
    })
    moveAllToLeft.addEventListener("click", e => {
        replaceElements();
        while (subjectsRight.children.length > 0){
            let p = document.createElement("p");
            p.textContent = subjectsRight.children[0].innerHTML;
            subjectsLeft.appendChild(p);
            subjectsRight.removeChild(subjectsRight.children[0]);
        }
        handleClickSubjects();
    })
});