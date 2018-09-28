import './index.scss';

// your code here...

const getBase64 = (name, mobile) => {
    const $canvas = document.createElement('canvas');
    $canvas.style.border = '1px solid #eee';
    const ctx = $canvas.getContext('2d');
    const text = `${name.substr(0, 4)} ${mobile.substr(-4, 4)}`
    const fontSize = 14;
    const { width } = ctx.measureText(text);
    $canvas.width = width * 1.5;
    $canvas.height = width;
    ctx.fillStyle = `rgba(203, 207, 214, 0.5)`;
    ctx.font = `normal normal 100 ${fontSize}px sans-serif`;

    ctx.translate(0.5 * $canvas.width, 0.5 * $canvas.height);
    ctx.rotate(-15 * Math.PI / 180);
    ctx.fillText(text, -width / 2, 0);

    document.body.appendChild($canvas);
    document.body.style.backgroundImage = `url(${$canvas.toDataURL()})`;
};

getBase64('徐怀远的', '158681313233');

if (module.hot) {
    module.hot.accept();
}
