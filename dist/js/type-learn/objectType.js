"use strict";
// object Type
/**
 * 代入例
 * 型が合っているので代入可能
 */
const aa = {
    foo: 'hoge',
    bar: 1
};
/**
 * 代入例
 * barの型がnumberではないため代入不可
 * Type '{ foo: string; bar: string; }' is not assignable to type 'MyObjectA'.
 * Types of property 'bar' are incompatible.
 * Type 'string' is not assignable to type 'number'.
 */
// const bb: MyObjectA = {
//     foo: 'hoge',
//     bar: 'hoge'
// };
/**
 * 代入例
 * barが存在しないためオブジェクトとして代入不可能
 * Property 'bar' is missing in type '{ foo: string; }' but required in type 'MyObjectA'.
 */
// const cc: MyObjectA = {
//     foo: 'hoge'
// };
/**
 * 代入例
 * MyObjectBはstring型のプロパティfooを持ち、
 * MyObjectAも同様にstring型のプロパティfooを持っているため、
 * 部分的な代入が可能となる。
 */
const dd = aa;
/**
 * しかし、オブジェクトリテラルで代入しようとするとエラーとなってしまう。
 */
// const ee: MyObjectB = {
//     foo: 'hoge',
//     bar: 1
// }
