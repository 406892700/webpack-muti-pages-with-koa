import './app/App.jsx';
// import $ from 'jquery';
// import component from '@/component';
import './index.scss';

class $Obj {
    constructor(slc) {
        this.selector = slc;
        this.elems = [].slice.call(document.querySelectorAll(slc));
    }
    on(eventType, subSlc, callback) {
        this.elems.forEach((item) => {
            item.addEventListener(eventType, (e) => {
                const allChildren = [].slice.call(document.querySelectorAll(`${this.selector} ${subSlc}`));
                for (let i = 0; i < allChildren.length; i += 1) {
                    /* eslint-disable */
                    if (allChildren[i] == e.target) {
                        callback(e);
                        return;
                    }
                    /* eslint-enable */
                }
            });
        });
        return this;
    }
}
const _$ = (slc) => {
    return new $Obj(slc);
};

_$('ul').on('click', 'li', (e) => {
    alert(e.target.innerText);
});

class Event {
    constructor() {
        this.eventList = {};
    }

    trigger(eventType) {
        const eventArr = this.eventList[eventType];
        eventArr.forEach((item) => {
            item(this);
        });
    }

    on(eventType, callback) {
        const eventArr = this.eventList[eventType];
        !eventArr && (this.eventList[eventType] = []);

        this.eventList[eventType].push(callback);
        return this;
    }

    off(eventType, callback) {
        const eventArr = this.eventList[eventType];
        const index = eventArr.indexOf(callback);
        index !== -1 && eventArr.splice(index, 1);
        return this;
    }
}

const e = new Event();
const callback = () => {
    alert('我被触发了');
};
e.on('click', callback);

// e.off('click', callback);

// e.trigger('click');

if (module.hot) {
    module.hot.accept();
}
