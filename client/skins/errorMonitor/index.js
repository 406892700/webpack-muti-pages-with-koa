import './index.scss';

const fileList = [];
for (let i = 0; i < 100; i += 1) {
    fileList.push(`file${i + 1}`);
}
const upload = (files, queueLen = 4) => {
    const start = new Date().getTime();
    let count = 0;
    const total = files.length;
    const sendFile = (file) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                Math.random() < 0.2 ? reject() : resolve();
            }, 2000 * Math.random());
        }).then(() => {
            console.log(`${file} send success~`);
        }, () => {
            console.error(`${file} send fail~`);
        }).finally(() => {
            const next = files.shift();

            if (next) {
                sendFile(next);
            } 
            count += 1;

            if (count >= total) {
                console.log(`缓冲池上限为:${queueLen}, 共耗时: ${new Date().getTime() - start} ms`);
            }
        });
    };

    for (let i = 0; i < queueLen; i += 1) {
        sendFile(files.shift());
    }
};

upload(fileList, 10);


if (module.hot) {
    module.hot.accept();
}
