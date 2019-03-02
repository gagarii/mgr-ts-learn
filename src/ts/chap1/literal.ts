// literal type
const foo: 'foo' = 'foo';

// 'bar'型に'foo'やfoo型などの異なる型は代入できない
//const bar: 'bar' = 'foo';
//const bar: 'bar' = foo;

// 型推論
const hogeConst = 'hoge'; // constは再代入されないので、hogeConstは'hoge'型とされる
let hogeLet = 'hoge'; // letやvarなどは代入もあり得るため、プリミティブ型(string)とされる


/**
 * 補足
 * 
 * リテラル型の変数についてTypeOfしてみてもプリミティブ型で表現されるぽい
 */
console.log("foo Type is: " + typeof foo); //foo Type is: string
console.log("hogeConst Type is: " + typeof hogeConst); // hogeConst Type is: string
console.log("hogeLet Type is: " + typeof hogeLet); // hogeLet Type is: string
