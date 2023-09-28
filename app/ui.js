// Select DOM elements to work with
const welcomeDiv = document.getElementById("WelcomeMessage");
const copyButton = document.getElementById("copyToken");
const signInButton = document.getElementById("SignIn");
const cardDiv = document.getElementById("card-div");
const profileDiv = document.getElementById("profile-div");
const storesDiv = document.getElementById("stores-div");
const productsDiv = document.getElementById("products-div");
const tokenDiv = document.getElementById("token-div");

function showWelcomeMessage(username) {
    // Reconfiguring DOM elements
    cardDiv.style.display = 'initial';
    welcomeDiv.innerHTML = `<strong>Welcome ${username}</strong></br>`;
    
    profileDiv.style.display = 'initial'
    const token = document.createElement('textarea');
    token.innerHTML = `${localStorage.getItem('accessToken')}`;
    tokenDiv.appendChild(token);

    storesDiv.style.display = 'initial';
    productsDiv.style.display = 'initial';

    signInButton.setAttribute("onclick", "signOut();");
    signInButton.setAttribute('class', "btn btn-success");
    signInButton.innerHTML = "Sign Out";
}

function copyToken() {
    navigator.clipboard.writeText(localStorage.getItem('accessToken'));
    console.log(localStorage.getItem('accessToken'))
    copyButton.setAttribute('class', "btn btn-success")
}
