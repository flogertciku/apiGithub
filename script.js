var username = "";
var cards = document.querySelector('.cards')

function getUsername(element) {
    username = element.value;
    console.log(username);
}


function cardsDiv(data) {
    if (data.login != undefined){
    var res =  `<div class="card">
            <img src="${data.avatar_url}"  alt="${data.login}">
            <h1 class="green-text">Username: ${data.login}</h1>
            <p>Type: ${data.type} </p>
            <p>Followers: ${data.followers} </p>
        </div>`
    }
    else {
        var res = `<p class='red'> There is no such username in GitHub </p>`
    }
    return res;

}

async function search() {
    var response = await fetch('https://api.github.com/users/'+ username )
    var coderData = await response.json();
    console.log(coderData);
    cards.innerHTML = cardsDiv(coderData);
}
