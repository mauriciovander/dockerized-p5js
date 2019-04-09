/*global debug*/
global.window = global;
global.debug  = global.debug||false;

window.addEventListener = window.addEventListener || function(...args) {
    debug && console.log('window.addEventListener', ...args);
    if (args[0] == 'load') {
        setTimeout(args[1], 0);
    }
};


window.removeEventListener = window.removeEventListener || function(...args) {
    debug && console.log('window.addEventListener', ...args);
};



global.performance = global.performance || {};

var canvasLib = require('canvas');
Object.assign(global, canvasLib);

/* global performance*/
performance.now = performance.now || function() {
    return new Date().getTime();
};


global.document = global.document || {};


document.body = {
    childNodes:[]
};
document.body.appendChild = function(child){
    this.childNodes.push(child);
};


document.getElementsByTagName = function(child){
    return this.body.childNodes[0];  
};

document._elements = [];

document.createElement = document.createElement || function(tag) {
    if (tag == 'canvas') {
        var res = new Canvas();
        res.classList = {
            add:function(cl){
                debug&& console.log('classList.add', cl);
            }  
        };
        res.dataset = {};
        res.style = {};
        document._elements.push(res);
        return res;
    }

    else throw Error("not support tag", tag);
};

document.createCanvas = function(w, h) {
    var res = new Canvas(w, h);
    document._elements.push(res);
    return res;
}

document.getElementById = document.getElementById || function(id) {
    for (var i = 0; i < document._elements.length; ++i)
        if (document._elements[i].id == id) return document._elements[i].id;
    return null;
};

document.hasFocus = document.hasFocus || function() {
    return true;
};

document.addEventListener = document.addEventListener || function(...args) {
    debug && console.log('document.addEventListener', ...args);
};

global.screen = global.screen || {};
screen.width = 1920;
screen.height = 1024;
