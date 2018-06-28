import './app/App.jsx';
// import $ from 'jquery';
import component from '@/component';

const { say } = component;
say();

if (module.hot) {
    module.hot.accept();
}
