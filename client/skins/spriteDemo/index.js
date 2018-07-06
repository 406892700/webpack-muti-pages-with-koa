import './index.scss';
// import './demos/crop';
import mixin from './util';
import locked from './images/locked.png';
import opened from './images/opened.png';
import location from './images/crop.png';
import bg from './images/bg_03.png';

import { showCropModal } from './demos/modal';

// your code here...

$(() => {
    console.log(Set.toString());
    const {
        Scene,
        Sprite,
        Label,
        Group,
    } = window.spritejs;

    // 创建场景
    const scene = new Scene('#farm', {
        viewport: ['auto', 'auto'],
        resolution: [750, 370],
    });

    const layer = scene.layer();

    const createBg = (img) => {
        const bgSprite = new Sprite(img);
        bgSprite.attr({
            size: scene.resolution,
        });

        layer.append(bgSprite);
    };

    createBg(bg);

    // const field1 = new Sprite(locked, {
    //     size: [200, 200],
    //     pos: [0, 0],
    //     border: ['1', '#ccc']
    // });

    // 创建进度条
    const createProgress = (pos, remainTime = 1000) => {
        const group = new Group();
        group.attr({ 
            size: [200, 20],
            pos,
        });

        const wrap = new Sprite();
        wrap.attr({
            anchor: [0, 0],
            size: [200, 20],
            borderRadius: 10,
            bgcolor: 'rgba(0,0,0,0.5)',
        });

        let remainSeconds = (remainTime / 1000).toFixed(0);
        const progress = new Sprite();
        progress.attr({
            size: [12, 12],
            pos: [4, 4],
            borderRadius: 6,
            bgcolor: '#d00000',
        });

        // 转换格式
        const parseTime = (rSeconds) => {
            const minutes = (rSeconds / 60).toFixed(0); // 分数
            const seconds = rSeconds % 60; // 秒数

            return `${minutes}:${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
        };

        const label = new Label();
        label.attr({
            pos: [100, 10],
            anchor: [0.5, 0.5],
            text: parseTime(remainSeconds),
            color: '#Fff',
        });
        remainSeconds -= 1;
        label.text = parseTime(remainSeconds);
        const timer = setInterval(() => {
            label.text = parseTime(remainSeconds);
            if (remainSeconds > 0) {
                remainSeconds -= 1;
            } else {
                clearInterval(timer);
            }
        }, 1000);

        (async () => {
            await progress.animate([
                { width: 192 },
            ], {
                duration: remainTime,
                fill: 'forwards',
                // direction: 'alternate',
                // iterations: Infinity,
                easing: 'linear',
            }).finished;

            group.clear();
        })();        

        group.append(wrap, progress, label);

        layer.append(group);
        // layer.append(label);
    };
    
    // 创建种植引导
    const createLocation = (img, pos) => {
        const guide = new Sprite(img);
        const newPos = [pos[0] - 44, pos[1] - 111];
        guide.attr({
            size: [88, 111],
            pos: newPos,
            // border: [1, '#ccc'],
        });
        guide.animate([
            { y: newPos[1] - 10 },
            { y: newPos[1] },
        ], {
            duration: 500,
            fill: 'forwards',
            direction: 'alternate',
            iterations: Infinity,
            easing: 'ease',
        });

        layer.append(guide);
    };

    // 创建土地
    const createFiled = (img, pos, type) => {
        const field = new Sprite(img);
        field.attr({
            size: [190, 74],
            pos,
        });

        layer.append(field);

        if (type === 'location') {
            const newPos = [pos[0] + (field.attrs.width / 2), pos[1] + (field.attrs.height / 2)];
            createLocation(location, newPos);
        }

        field.animate([
            { width: field.attrs.width - 5 },
            { height: field.attrs.height - 5 },
        ], {
            duration: 1000,
            fill: 'forwards',
            direction: 'alternate',
            iterations: Infinity,
            easing: 'ease-in-out',
        });
        

        return mixin(field);
    };

    
    createFiled(opened, [350, 130], 'location').onClick(() => {
        // alert('你要种么');
        showCropModal();
    }); // 1
    createFiled(opened, [240, 170], 'location').onClick(() => {
        showCropModal();
    }); // 2
    createFiled(locked, [130, 210]); // 3
    createFiled(locked, [20, 250]); // 4
    
    createFiled(opened, [470, 170]); // 5
    createFiled(locked, [360, 210]); // 6
    createFiled(locked, [250, 250]); // 7
    createFiled(locked, [140, 290]); // 8

    createProgress([100, 100], 5000);
});


// 画布相关的，不要热更新了
// if (module.hot) {
//     module.hot.accept();
// }
