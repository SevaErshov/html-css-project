function verify() {
    let sum_price = parseInt(document.getElementsByTagName("input")[1].value);
    console.log(sum_price)

    if (sum_price >= 750 && sum_price < 1000) {
        result = "Ваша скидка: 5%"
        document.getElementById("result").innerText = messageText + result;
        check = true;
    } else if (sum_price >= 1000 && sum_price < 1600) {
        result = "Ваша скидка: 10%"
        document.getElementById("result").innerText = messageText + result;
        check = true;
    } else if (sum_price >= 1600) {
        result = "Ваша скидка: 15%"
        document.getElementById("result").innerText = messageText + result;
        check = true;
    } else {
        result = "Вам недоступна скидка :("
        document.getElementById("result").innerText = messageText + result;
        check = false;
    }
}

function send() {
    if (check) {
        let textCondition = document.getElementsByTagName('p')[1].innerText
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById("UserEnter").submit();
    } else {
        alert("К сожалению, с такой суммой скидка недоступна :(")
    }
}

function verify_send() {
    verify();
    send();
}

let messageText = document.getElementById("result").innerText
let result;
let check = false;

const elementPrice = document.getElementById("price");
elementPrice.addEventListener('keyup', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)