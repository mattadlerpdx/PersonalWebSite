let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    checkUser();
    checkEmail();
    checkMessage();
    event.preventDefault(event);
}
function checkUser() {
    let userName = form.elements.username.value;
    if (userName !== "") {
        console.log("Username: ", userName);
        return true;
    } else {
        console.log("no submission");
        return false;
    }
}
function checkEmail() {
    let email = form.elements.email.value;
    if (email !== "") {
        console.log("Email: ", email);
        return true;
    } else {
        console.log("no submission");
        return false;
    }
}
function checkMessage() {
    let message = form.elements.message.value;
    if (message !== "") {
        console.log("message: ", message);
        return true;
    } else {
        console.log("no submission");
        return false;
    }
}



let item1 = document.querySelector(".item-1");
let divImg = document.createElement("div");
let img = document.createElement("img");
img.src = 'me.jpeg';

img.setAttribute("alt", "Matthew");
img.style.borderRadius = "2.5%";
img.style.margin = "5%";
item1.append(divImg);
divImg.append(img);