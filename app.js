function changeBackgroundColor() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);

    document.body.style.backgroundColor = "#" + randomColor;
    displayHex(randomColor);
}

function displayHex(hexcode) {
    var elHexcode = document.getElementById('hex-code');
    elHexcode.textContent = hexcode;
}

var elButton = document.getElementById('change-btn');
elButton.addEventListener('click', changeBackgroundColor, false);