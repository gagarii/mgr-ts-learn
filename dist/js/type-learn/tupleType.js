"use strict";
// tuple type
/**
 * TSでは、タプルの代わりに配列で表現する
 * > これは、関数から複数の値を返したい場合に配列に入れてまとめて返す
 * > みたいなユースケースを想定していると思われます。
 */
const fooTuple = ['hoge', 1];
const strTup = fooTuple[0];
function makePair(x, y) {
    return [x, y];
}
/**
 * TSでタプルと呼んでいるものはあくまでも配列。配列操作が可能である。
 */
const tuple = ['hoge', 1];
console.log(tuple); // [ 'hoge', 1 ]
tuple.pop();
console.log(tuple); // [ 'hoge' ]
tuple.push('fuga');
console.log(tuple); // [ 'hoge', 'fuga' ]
const num = tuple[1];
console.log(num); // fuga
const nas1 = [1, 'hoge'];
const nas2 = [2, 'hoge', 'fuga'];
const nas3 = [3];
const sn1 = ['hoge'];
const sn2 = ['fuga', 2];
/**
 * タプル型と可変長引数とジェネリクス
 * タプル型をとるような型変数を用いることで、関数の引数列をジェネリクスで扱える
 *
 * 下記の例
 * bindが関数名
 * 引数がfunc, value
 * 返却値の型はこれは、、、Uの型を持つ...argsに対してRを返す関数か
 * ほんで、bind関数のreturnは↑のまんま。
 * 渡されているfuncとvalueを使ってる。
 *
 * U extends any[]
 * 型引数U は any[]の部分型でならなければならない
 */
function bind(func, value) {
    return (...args) => func(value, ...args);
}
const addBindFunc = (x, y) => x + y;
const add1 = bind(addBindFunc, 1);
console.log(add1(5)); // 6
// Argument of type '"foo"' is not assignable to parameter of type 'number'.
//add1('foo');
