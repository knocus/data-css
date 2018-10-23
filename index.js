"use strict";
function dataCSS(attribute, wrapper) {
    var s = document.querySelectorAll("[data-" + attribute + "]");
    s.forEach(function (elem) {
        var u = elem.getAttribute("data-" + attribute);
        if (wrapper) {
            elem.style[attribute] = wrapper + "(" + u + ")";
        }
        else {
            elem.style[attribute] = u;
        }
    });
}
var init = function () {
    var CSSAttributes = window.getComputedStyle(window.document.body);
    var attributes = Object.keys(CSSAttributes);
    for (var i = 0; i < attributes.length; i++) {
        var attribute = CSSAttributes[attributes[i]];
        switch (attribute) {
            case 'background-image':
                dataCSS(attribute, 'url');
            default:
                dataCSS(attribute);
        }
    }
};
document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        init();
    }
};
