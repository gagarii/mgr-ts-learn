// object Type

/**
 * interfaceはTS独自の構文。オブジェクトに名前をつけられる。
 * fooがstring
 * barがnumber
 */
interface MyObjectA {
    foo: string,
    bar: number
}

interface MyObjectB {
    foo: string
}

/**
 * 代入例
 * 型が合っているので代入可能
 */
const aa: MyObjectA = {
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
const dd: MyObjectB = aa;

/**
 * しかし、オブジェクトリテラルで代入しようとするとエラーとなってしまう。
 */
// const ee: MyObjectB = {
//     foo: 'hoge',
//     bar: 1
// }