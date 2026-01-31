let inputslider = document.getElementById("inputslider");
let slidervalue = document.getElementById("slidervalue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let gentBtn = document.getElementById("gentBtn");
let strengthText = document.getElementById("strengthText");
let resultBox = document.getElementById("resultBox");
let msg = document.getElementById("msg");
let errorText = document.getElementById("errorText");
let copybtn = document.getElementById("copybtn");

slidervalue.textContent = inputslider.value;
passBox.addEventListener('input', () => {

    let len = passBox.value.length;
    inputslider.value = len;
    slidervalue.textContent = len;

    if (len > 30) {
        passBox.value = passBox.value.slice(0, 30);
        len = 30;
    }
    inputslider.value = len;
    slidervalue.textContent = len;
    let value = passBox.value;



    let haslower = /[a-z]/.test(value);
    let hasupper = /[A-Z]/.test(value);
    let hasnumber = /[0-9]/.test(value);
    let hassymbol = /[^a-zA-Z0-9\s]/.test(value);

    lowercase.checked = haslower;
    uppercase.checked = hasupper;
    numbers.checked = hasnumber;
    symbols.checked = hassymbol;

    let count = 0;

    if (haslower) count++;
    if (hasupper) count++;
    if (hasnumber) count++;
    if (hassymbol) count++;
    strengthText.classList.remove("weak", "medium", "decent", "strong")
    inputslider.classList.remove("w", "m", "d", "s")
    if (len == 0) {
        strengthText.textContent = "";
        msg.textContent = "";
        resultBox.textContent = "";
    }
    else if (len < 5) {
        strengthText.textContent = "";
    }
    else if (count <= 1) {
        strengthText.textContent = "Weak";
        strengthText.classList.add("weak");
        inputslider.classList.add("w");
    }
    else if (count <= 2) {
        strengthText.textContent = "Medium";
        strengthText.classList.add("medium");
        inputslider.classList.add("m");
    }
    else if (count <= 3) {
        strengthText.textContent = "Decent";
        strengthText.classList.add("decent");
        inputslider.classList.add("d");
    }
    else {
        strengthText.textContent = "Strong";
        strengthText.classList.add("strong");
        inputslider.classList.add("s");
    }
});
gentBtn.addEventListener('click', () => {
    if (passBox.value.length < 5) {
        errorText.textContent = "password should be atleast 5 characters";
        msg.textContent = "";
        resultBox.textContent = "";
    }
    else {
        errorText.textContent = "";
        msg.textContent = "Password Generated Successfully!!";
        resultBox.textContent = passBox.value;
    }
});
copybtn.addEventListener('click', () => {

    if (passBox.value.length == 0) {
        return;
    }

    navigator.clipboard.writeText(passBox.value);

    copybtn.innerHTML = "✔";
    copybtn.title = "Password Copied";

    setTimeout(() => {
        copybtn.innerHTML = "⧉";
    }, 1000);

});
