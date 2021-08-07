// button
const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
    document.querySelector('.btn').style.background = ('grey');
});

btn.addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('.btn').style.background = ('purple');
});

btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('.btn').style.background = ('black');
});

const loginButton = document.getElementById("login-submit");
const goBackButton = document.getElementById("go-to-index");
const msg = document.querySelector('.msg');

// login
loginButton.addEventListener('click', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    
    if (username.value === '' || password.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
    } else {
        location.href = 'diary.html';
    }


    
}

