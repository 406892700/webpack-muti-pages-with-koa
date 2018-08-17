import './index.scss';

// your code here...
const logger = (myClass) => {
    myClass.prototype.logger = (str) => { // eslint-disable-line no-param-reassign
        console.log(str);
    };
};

const log = (target, name, descriptor) => {
    const oldValue = descriptor.value;
    descriptor.value = function (...args) { // eslint-disable-line no-param-reassign
        console.log('输出日志~');
        return oldValue.apply(target, args);
    };
    return descriptor;
};
/* eslint-disable */
@logger
class MyClass {

    @log
    add(a, b) {
        return a + b;
    }
}
/* eslint-enable */ 

console.log(new MyClass().add(1, 2));

if (module.hot) {
    module.hot.accept();
}
