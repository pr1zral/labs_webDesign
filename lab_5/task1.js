function checkCorrect(input, label, value) {
    if (document.getElementById(input).value.length == 0) document.getElementById(label).innerHTML = value;
    else document.getElementById(label).innerHTML = '';

    if (valid('name_input', 'name_helper', 'name_img') &&
        valid('mail_input', 'mail_helper', 'mail_img') &&
        valid('myPage_input', 'myPage_helper', 'myPage_img')) {
              document.getElementById('submit').disabled = false;
    }
    else document.getElementById('submit').disabled = true;
}

function valid(input, helper, img) {
    var object = {
        input : document.getElementById(input),
        img : document.getElementById(img),
        helper : document.getElementById(helper)
    };

    switch (input) {
        case 'name_input' :
            var reg = /^[а-я]+$/i;
            break;
        case 'mail_input' :
            var reg = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/i;
            break;
        case 'myPage_input' :
            var reg = /^((https?|ftp)\:\/\/)?([a-z0-9]{1})((\.[a-z0-9-])|([a-z0-9-]))*\.([a-z]{2,6})(\/?)$/;
            break;
    }

    if (object.input.value.match(reg) == null) {
        if (object.input.value.length == 0) object.img.src = '';
        else object.img.src = 'delete.png';
        return false;
    } else {
        object.img.src = 'galochka.png';
        return true;
    }
}

function resetAll() {
    /* name */
    document.getElementById('name_input').innerHTML = '';
    document.getElementById('name_img').src = '';
    document.getElementById('name_helper').innerHTML = 'введите имя';
    /* e-mail */
    document.getElementById('mail_input').innerHTML = '';
    document.getElementById('mail_img').src = '';
    document.getElementById('mail_helper').innerHTML = 'введите e-mail';
    /* adres */
    document.getElementById('myPage_input').innerHTML = '';
    document.getElementById('myPage_img').src = '';
    document.getElementById('myPage_helper').innerHTML = 'введите адрес';
    /* captcha */
    document.getElementById('captcha_helper').innerHTML = 'введите код';
}
