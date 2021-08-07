

// button
const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
    document.querySelector('.btn').style.background = ('grey');
});

btn.addEventListener('mouseover', (e) => {
    e.preventDefault();  // Prevent the form from being submitted
    document.querySelector('.btn').style.background = ('purple');
});

btn.addEventListener('mouseout', (e) => {
    e.preventDefault();  // Prevent the form from being submitted
    document.querySelector('.btn').style.background = ('black');
});

const signupButton = document.getElementById("signup-submit");
const goBackButton = document.getElementById("go-to-index");
const username = document.getElementById('username');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('confirm');
const msg = document.querySelector('.msg');

// submit
signupButton.addEventListener('click', onSubmit);
function onSubmit(e) {
    e.preventDefault();

    if (username.value === '' || password.value === '' || passwordConfirm.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
    } else if (password.value != passwordConfirm.value) {
        msg.classList.add('error');
        msg.innerHTML = 'Passwords do not match';
        // } else if (checkDuplicity(username.value)) {
        //     msg.classList.add('error');
        //     msg.innerHTML = 'Username already exists!';
    } else {
        // var test = document.getElementById('username').value;
        // console.log(username);

        var a = addUser();
        console.log(a);
    }
}

// function checkDuplicity(username) {
//     return false;
//
// }
//
// document.getElementById('get-back').addEventListener('click', goBack);
// function goBack() {
//
// }



// class NewUser {
//     constructor(username, password) {
//         this.username = username;
//         this.password = password;  // TODO: encrypt this
//     }
//
//     addJournal(journal) {
//         this.journals = [journal];
//     }
//
//     toJson() {
//         var personJson = {
//             "username": this.username,
//             "password": this.password
//         }
//
//         if (this.journals != null) {
//             personJson["journals"] = this.journals;
//         }
//
//         return JSON.stringify(personJson);
//     }
// }

function addUser() {

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var newJSON  = {'username': username, 'password': password};
    addUserInJSON(newJSON);
    return username;
}

function addUserInJSON(newUser) {
    var username = newUser['username'];
    var password = newUser['password'];

    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", `http://localhost:8080/login/add?username=${username}&password=${password}`, true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(newUser));
    document.getElementById("my-form").innerHTML = `<h1>New User Added!</h1>`;

}