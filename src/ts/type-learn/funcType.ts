// func type

/**
 * function宣言
 * 下記では、funcというfunction宣言した関数を
 * 関数型 (foo: string)=>number のfに代入している (という理解をした)
 */
const f: (foo: string)=>number = functionEx;

function functionEx(arg: string): number {
    return Number(arg);
}
console.log('funcの動作確認: ' + f("1"));

/**
 * 関数の部分型関係
 * string型のfooというプロパティを持つMyObjBに対して、
 * 同様のプロパティを持つMyObjAに対しては代入は可能。
 * 逆の場合は、number型のbarというプロパティをMyObjBは持たないので代入不可能
 */
interface MyObjA {
    foo: string;
    bar: number;
}

interface MyObjB {
    foo: string;
}

const hoge: (obj: MyObjB)=>void = () => {};
const fuga: (obj: MyObjA)=>void = hoge;

/**
 * 関数の場合、引数の数に関しても部分型関係が生じる
 * 以下のように、foo:stringを持つf2に対して、同様の引数を持つf2に代入できる
 */

const f1: (foo: string)=>void = () => {};
const f2: (foo: string, bar: number)=> void = f1;

// もちろん、呼び出し側で引数を増やしてもエラーになる
//console.log(f1("hoge", 1));

 /**
  * 可変長引数
  * jsとしての可変長引数: (foo, ...bar)=> barのように、'...'を引数の前につけると
  * 引数の2番目以降の引数が全て取られるというアレ。
  * 
  * TypeScriptにおける可変長引数
  * 可変長引数をとる場合、配列型とする必要がある
  * 以下の場合は、可変長引数とする...barの部分は数値型の配列としている
  * すなわち、2番目以降の引数は全て数値でなければならない
  */
const funcC = (foo: string, ...bar: number[]) => bar;
console.log(funcC('hoge', 1,2,3,4)); // [1,2,3,4]
