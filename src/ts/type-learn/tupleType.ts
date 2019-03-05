// tuple type

/**
 * TSでは、タプルの代わりに配列で表現する
 * > これは、関数から複数の値を返したい場合に配列に入れてまとめて返す
 * > みたいなユースケースを想定していると思われます。
 */

 const fooTuple: [string, number] = ['hoge', 1];

 const strTup: string = fooTuple[0];

 function makePair(x: string, y: number): [string, number] {
     return [x, y];
 }

 /**
  * TSでタプルと呼んでいるものはあくまでも配列。配列操作が可能である。
  */
 const tuple: [string, number] = ['hoge', 1];
 console.log(tuple); // [ 'hoge', 1 ]
 tuple.pop();
 console.log(tuple); // [ 'hoge' ]
 tuple.push('fuga');
 console.log(tuple); // [ 'hoge', 'fuga' ]
 const num: number = tuple[1];
 console.log(num); // fuga
// 上記のようなケースがTypeScriptの限界。そのため、より注意するなりタプル型を避けるなり。

/**
 * 可変長のタプル型も生成可能
 * もはやそれはタプルなのか()
 */
type NumAndStrings = [number, ...string[]];

const nas1: NumAndStrings = [1, 'hoge'];
const nas2: NumAndStrings = [2, 'hoge', 'fuga'];
const nas3: NumAndStrings = [3];
// Type 'string' is not assignable to type 'number'.
//const nas4: NumAndStrings = ['hoge', 'fuga'];

/**
 * オプショナルな要素を持つタプルも。
 * [string, number?]のように '?'をつけることで、あってもなくても良いものになるが、
 * ある場合には必ずnumberであること。
 * また、オプショナルな型はオプショナルでないものより後に来ないといけない。
 * つまり、[string?, number]のような表現はNG
 */
type SNType = [string, number?];

const sn1: SNType = ['hoge'];
const sn2: SNType = ['fuga', 2];

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
function bind<T, U extends any[], R>
    (func: (arg1: T, ...rest: U) => R, value: T): ((...args: U) => R) {
    return (...args: U) => func(value, ...args);
}

const addBindFunc = (x: number, y: number) => x + y;
const add1 = bind(addBindFunc, 1);
console.log(add1(5)); // 6

// Argument of type '"foo"' is not assignable to parameter of type 'number'.
//add1('foo');