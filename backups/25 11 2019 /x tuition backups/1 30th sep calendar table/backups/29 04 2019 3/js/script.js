
let randNum = Math.floor(Math.random() * 5);


let randomNumber = function() {
    if (randNum === 0) {
        console.log('Always');
    } else if (randNum === 1) {
        console.log('Counting Down The Days');
    } else if (randNum === 2) {
        console.log('Sun & Moon'); 
    } else if (randNum === 3) {
         console.log('A Thing Called love');
    } else if (randNum === 4) {
        console.log('Alchemy');
    } else { console.log('Failed!')};
};


let pushTheButton = document.getElementById('ptb');
let lyricBox = document.getElementById('lyric');
let box2 = document.getElementById('box2');

pushTheButton.onclick = () => {
lyricBox.innerHTML = randomNumber;
box2.style.backgroundColor = 'black';
}

// Mobile-only: Select today

