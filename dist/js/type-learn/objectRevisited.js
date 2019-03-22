"use strict";
// objectRevisited
// barを省略してもエラーにならない
let questionObj = {
    foo: 'hoge'
};
// barの代入はできる
questionObj = {
    foo: 'fuga',
    bar: 5
};
// barの存在もcheckしながら使わないといけない
function calcQuestionObj(obj) {
    return obj.bar != null ? obj.bar * 10 : 0;
}
;
const readOnlyObj = {
    hoge: 'hoi!'
};
const readOnlyObj2 = readOnlyObj;
readOnlyObj2.hoge = 'hohohohoi!!!!';
console.log(readOnlyObj2.hoge); // hohohohoi!!!!
