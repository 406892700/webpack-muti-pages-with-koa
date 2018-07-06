/* eslint-disable */
import earphone from '../images/earphone.png';
import earphone_active from '../images/earphone_active.png';

$(() => {
    const {
        Scene,
        Path,
        Sprite,
        Label,
    } = window.spritejs;

    const scene = new Scene('#crop', {
        viewport: ['auto', 'auto'],
        // resolution: [500, 250],
    });

    const layer = scene.layer();

    const sprite = new Sprite(earphone);
    sprite.attr({
        size: [400, 400],
        pos: [0, 0],
        border: [1, '#eee'],
    });

    // 判断是否是有效事件
    const isValidEvent = (self, evt) => {
        const {
            offsetX, 
            offsetY,
        } = evt;
        const [width, height] = self.contentSize;
        // 方案一 新创建画布去判断
        const $canvas = document.createElement('canvas');
        const $image = sprite.images[0];
        $canvas.width = width;
        $canvas.height = height;
        const ctx = $canvas.getContext('2d');
        ctx.drawImage($image, 0, 0, width, height);
        const { data } = ctx.getImageData(offsetX, offsetY, 1, 1);
        return data[3] > 0;
    };

    // hover事件
    sprite.onHover = function (done, cancel) {
        sprite.on('mousemove', function (evt) {
            const self = this;
            const isValid = isValidEvent(self, evt);
            if (isValid) {
                done && done.call(self, evt);
            } else {
                cancel && cancel.call(self, evt);
            }
        });
    };


    // click事件

    sprite.onClick = function (done) {
        sprite.on('click', function (evt) {
            const self = this;
            const isValid = isValidEvent(self, evt);
            if (isValid) {
                done && done.call(self, evt);
            }
        });
    };

    sprite.onHover((evt) => {
        sprite.attr('textures', earphone_active);
    }, () => {
        sprite.attr('textures', earphone);
    });

    sprite.onClick((evt) => {
        console.log('有效的点击');
    });

    layer.append(sprite);
    // layer.append(sprite2);
    let flag = true;
    $('#toggle').click(() => {
        if (flag) {
            sprite.attr('textures', earphone_active);
            flag = false;
        } else {
            sprite.attr('textures', earphone);
            flag = true;
        }
    });
});
