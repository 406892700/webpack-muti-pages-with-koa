function Modal(tpl, options) {
    this.$tpl = $(tpl);
    this.options = $.extend({}, {
        callback: () => {},
        btnClass: 'modal-btn',
        closeClass: 'modal-close',
    }, options);

    return this.init();
}

Modal.fn = Modal.prototype;

Modal.fn.show = function () {
    $('body').append(this.$tpl);
    return this;
};

Modal.fn.hide = function () {
    this.$tpl.remove();
    return this;
};

Modal.fn.initEvent = function () {
    const btnClass = `.${this.options.btnClass}`;
    const closeClass = `.${this.options.closeClass}`;

    this.$tpl.on('click', `${btnClass}, ${closeClass}`, () => {
        this.$tpl.remove();
    });

    this.$tpl.on('click', `${btnClass}`, () => {
        this.options.callback();
    });

    return this;
};

Modal.fn.init = function () {
    return this.initEvent().show();
};

/* eslint-disable */
export const showCropModal = () => {
    const tpl = $('#modal_tpl').html();
    new Modal(tpl);
}
