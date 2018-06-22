import Vue from 'vue';
import App from './app/App.vue';
import router from './app/router';

new Vue({
    el: '#root',
    router,
    template: '<App/>',
    components: { App },
});

if (module.hot) {
    module.hot.accept();
}
