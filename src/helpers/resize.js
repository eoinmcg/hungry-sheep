const resize = () => {

    let scale = 1, top = 0;

    const w = 320, h = 480;
    const game = document.querySelector('#root');
    let winH = window.innerHeight;
    let winW = window.innerWidth;

    const gameRatio = w / h;
    const winRatio = winW / winH;

    if (gameRatio > winRatio) {
        winH *= (w / winW);
    }

    scale = winH / game.clientHeight;
    top = (winH - game.clientHeight) / 2;

    game.style.scale = scale;
    game.style.marginTop = top + 'px';

}

window.addEventListener('resize', () => {
    resize();
}, false);

export default resize;
