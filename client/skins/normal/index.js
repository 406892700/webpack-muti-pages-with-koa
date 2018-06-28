import './index.scss';
import component from '@/component';

const { say } = component;

say();

$(() => {
    $('.nav').on('click', 'a', function navClick() {
        $('.panel .title').hide().eq($(this).index()).show();
    });
});

if (module.hot) {
    module.hot.accept();
}
