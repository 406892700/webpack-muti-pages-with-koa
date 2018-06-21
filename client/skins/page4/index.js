import './index.scss';
import $ from 'jquery';

$(() => {
    $('body').append('123222222333333');
});

if (module.hot) {
    module.hot.accept();
}
