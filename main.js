const passwordInput = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const error = document.getElementById('error');

passwordInput.addEventListener("input", checkPassword);
confirmPassword.addEventListener("input", checkPassword);

function checkPassword(){
    const password = passwordInput.value;
    const confirmp = confirmPassword.value;
    if (password != confirmp){
        error.innerHTML = "Password don't match. Please try again!";
    }
    else{
        error.innerHTML = "";

    }
}