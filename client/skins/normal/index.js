import './index.scss';

$(() => {
    $('.nav').on('click', 'a', function navClick() {
        $('.panel .title').hide().eq($(this).index()).show();
    });
});

if (module.hot) {
    module.hot.accept();
}
