"use strict";
// intersection type
const InterSecObj = {
    foo: 'foooooo',
    bar: 5,
    baz: true
};
function ISUFunc(obj) {
    // objはIBazなので、bazを参照可能
    console.log(obj.baz);
    if (obj.type === 'hoge') {
        // ここではobjはUHoge & IBaz
        console.log(obj.foo);
    }
    else {
        // ここではobjはUFuga & IBaz
        console.log(obj.bar);
    }
}
