function togglePassword() {

    const togglePassword = document.querySelector("#togglePassword");
    const password = document.querySelector("#inputPassword");

    togglePassword.addEventListener("click", function () {

        // toggle the type attribute
        const type = password.getAttribute("type") === "password" ? "text" : "password";
        password.setAttribute("type", type);
        // toggle the eye icon
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    })
};


function OTPInput() {
    const inputs = document.querySelectorAll("#otp > *[id]");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("keyup", function (event) {
            if (inputs[i].value.length > 0) {
                const slicedvalue = inputs[i].value.slice(0, 1);
                console.log(slicedvalue)
                inputs[i].value = slicedvalue
            }
        })
        inputs[i].addEventListener("keydown", function (event) {
            if (event.key === "Backspace") {
                inputs[i].value = "";
                if (i !== 0) inputs[i - 1].focus();
            }

            else {
                if (i === inputs.length - 1 && inputs[i].value !== "") {
                    return true;
                }

                else if (event.keyCode > 47 && event.keyCode < 58) {
                    inputs[i].value = event.key;
                    if (i !== inputs.length - 1) inputs[i + 1].focus();
                    event.preventDefault();
                }
            }
        });
    }
}