(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        functional: true,
        props: {
            tag: {
                type: String,
                required: true,
            },
            text: {
                type: String,
                required: true,
            },
            className: {
                type: String,
                required: false,
            },
        },
        render: function (createElement, context) {
            return createElement(context.props.tag, {
                'class': context.props.className
            }, context.props.text.split('\n').reduce(function (accumulator, string) {
                if (!Array.isArray(accumulator)) {
                    return [accumulator, createElement('br'), string];
                }
                return accumulator.concat([createElement('br'), string]);
            }));
        },
    };
});
//# sourceMappingURL=Nl2br.js.map