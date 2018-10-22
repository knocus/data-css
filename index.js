"use strict";
function decamelize(key) {
    var decamelized = "";
    var low = key.toLowerCase();
    for (var i = 0; i < low.length + 1; i++) {
        if (i === low.length) {
            return decamelized;
        }
        if (key[i] !== low[i]) {
            decamelized += "-" + low[i];
        }
        else {
            decamelized += low[i];
        }
    }
    return decamelized;
}
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
var attributes = Object.keys(window.document.body.style);
attributes.forEach(function (elem) {
    var attribute = decamelize(elem);
    switch (attribute) {
        case 'background-image':
            dataCSS(attribute, 'url');
        default:
            dataCSS(attribute);
    }
});
