import App from './app/App.vue';
import router from './app/router';
import component from '@/component';

const { say } = component;
say();

new Vue({
    el: '#root',
    router,
    template: '<App/>',
    components: { App },
});

if (module.hot) {
    module.hot.accept();
}
