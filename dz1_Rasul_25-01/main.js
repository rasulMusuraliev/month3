const emailInput = document.querySelector("#emailInput");
const passwordRepeat = document.querySelector("#passwordRepeat");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const error = document.querySelector(".error");

const emailRegExp = /@/

btn.addEventListener("click", () => {
    if(emailRegExp.test(emailInput.value)){
        emailInput.style.color = "green"
    } else {
        emailInput.style.color = "red"
    }
})

const passwordInput = document.getElementById("password");
const passwordConfirmInput = document.getElementById("password-confirm");
const passwordMessage = document.getElementById("password-message");
const passwordConfirmMessage = document.getElementById("password-confirm-message");

function validatePassword() {
    const password = passwordInput.value;
    const passwordConfirm = passwordConfirmInput.value;

    if (password.length < 8) {
        passwordMessage.textContent = "Пароль должен содержать не менее 8 символов";
    } else {
        passwordMessage.textContent = "";
    }

    if (passwordConfirm !== password) {
        passwordConfirmMessage.textContent = "Не правильный пароль";
    } else {
        passwordConfirmMessage.textContent = "";
    }
}

passwordInput.addEventListener("input", validatePassword);
passwordConfirmInput.addEventListener("input", validatePassword);



const showPasswordButton = document.getElementById("show-password");

function togglePasswordVisibility() {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
}

showPasswordButton.addEventListener("click", togglePasswordVisibility);





const movingBlock = document.getElementById("moving-block");
let left = 50;
let top = 50;

function moveBlock() {
    left += 1;
    top += 1;
    movingBlock.style.left = ${left}px;
    movingBlock.style.top = ${top}px;

    setTimeout(moveBlock, 10);
}

moveBlock();






















