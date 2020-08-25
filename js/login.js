const idInput = document.getElementById('userID');
const pwInput = document.getElementById('userPW');
const loginInput = document.getElementsByClassName('container')[0];
const loginBtn = document.getElementById('btn_login');
const linkToMain = document.getElementsByTagName('a')[0];

loginInput.addEventListener('keyup', function(event) {
    const completedInput = !!(idInput.value && pwInput.value);
    loginBtn.disabled = completedInput ? false : true;
    linkToMain.href = completedInput ? "https://miajlee.github.io/westagram/main" : "#none"; 
})

document.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn_login").click();
    }
})
