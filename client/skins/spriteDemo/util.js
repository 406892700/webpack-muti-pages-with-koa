// 判断是否是有效事件
const isValidEvent = (self, evt) => {
    const {
        offsetX, 
        offsetY,
    } = evt;
    const [width, height] = self.contentSize;
    // 方案一 新创建画布去判断
    const $canvas = document.createElement('canvas');
    const $image = self.images[0];
    $canvas.width = width;
    $canvas.height = height;
    const ctx = $canvas.getContext('2d');
    ctx.drawImage($image, 0, 0, width, height);
    const { data } = ctx.getImageData(offsetX, offsetY, 1, 1);
    return data[3] > 0;
};
/* eslint-disable*/
export default (sprite) => {
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

        sprite.on('mouseleave', function (evt) {
            const self = this;
            const isValid = isValidEvent(self, evt);
            if (!isValid) {
                cancel && cancel.call(self, evt);
            }
        });

        return sprite;
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

        return sprite;
    };

    return sprite;
};
