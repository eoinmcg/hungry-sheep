const resize = () => {
    const game = document.querySelector('#root');
    const winH = window.innerHeight;

    const scale = winH / game.clientHeight;
    const top = (winH - game.clientHeight) / 2;

    game.style.scale = scale;
    game.style.marginTop = top + 'px';
}

window.addEventListener('resize', () => {
    resize();
}, false);

export default resize;
