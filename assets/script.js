function PlayMusic(e){
    let audio, note, string;
    if(e instanceof KeyboardEvent){
        audio = document.querySelector(`audio[data-note="${e.keyCode}"]`);
        string = document.querySelector(`.string[data-note="${e.keyCode}"]`);
    }
    else if(e instanceof MouseEvent){
        audio = document.querySelector(`audio[data-note="${this.getAttribute('data-note')}"]`);
        string = document.querySelector(`.string[data-note="${this.getAttribute('data-note')}"]`);
    }

    if(!audio) false;
    audio.currentTime = 0;
    audio.play();
    string.classList.add('playing');
}
window.addEventListener('keydown', PlayMusic);


const strings = document.querySelectorAll('.string');
function removeTransition(){
    this.classList.remove('playing')
}

strings.forEach(string => string.addEventListener('click', PlayMusic))

strings.forEach(string => string.addEventListener('transitionend', removeTransition));