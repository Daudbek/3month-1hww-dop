let LoginInput = document.querySelector(".box1");
let PassInput = document.querySelector(".box2");
let EmailInput = document.querySelector(".box3");
let button = document.querySelector(".box4");
let ArremailInput = EmailInput.value.split('');
let warning = document.querySelector(".p3")


function checkEmail() {
    let regex = /./;
    let regex2 = /@/;
    let testdog = regex.test(EmailInput.value)
    let testTochka = regex2.test(EmailInput.value)

    if (testdog === true) {
        let indexdog = EmailInput.value.indexOf("@")
        if (indexdog == 0) {
        }
        else {
            if (EmailInput.value[indexdog + 2] == undefined) {
            }
            else if (testTochka == true) {
                let indexTochka = EmailInput.value.indexOf(".")
                if (EmailInput.value[indexTochka + 1] == undefined) {
                }
                else {
                    alert("Вы успешно зарегистрировались!")
                    warning.textContent = ''
                }
            }
            else {
                warning.textContent = "Не корректный формат почты";
                warning.style.color = 'red';
                EmailInput.style.border = '1px solid red'
            }
        }
    }
}

button.addEventListener("click", checkEmail)
