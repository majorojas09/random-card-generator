window.onload = () => {
    document.querySelector('.card').classList.add(randomSuit());
    document.querySelector('.card').innerHTML = randomNumber();
};

function randomNumber() {
    let number = ['A', '2', '3', '4','5', '6', '7', '8','9', '10', 'J', 'Q','K'];    
    let randomNumber = Math.floor(Math.random() * number.length);
    return number[randomNumber];
}

function randomSuit(){
    let sign = ["diamond", "spade", "heart", "club"];
    let randomSign = Math.floor(Math.random() * sign.length);
    return sign[randomSign];
}
