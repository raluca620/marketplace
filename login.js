var signUp=document.querySelector("#button-submit");
signUp.addEventListener("click", login);
function login(e){
    e.preventDefault();
    var email=document.querySelector("#email").value;
    var password=document.querySelector("#password").value;
    var body={
        email,
        password,
    };
    fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        body: JSON.stringify(body)
    })
    .then(resp => resp.json())
    .then(function tokenFunction(response){
        sessionStorage.setItem("token",response.token)
        window.location.assign("index.html")
    })
    .catch(error => console.log("my error",error))
};


function show() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'text');
}

function hide() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'password');
}

var pwShown = 0;

document.getElementById("eye").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show();
    } else {
        pwShown = 0;
        hide();
    }
}, false);

