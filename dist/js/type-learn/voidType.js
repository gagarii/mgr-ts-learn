"use strict";
// void type
/**
 * JSにおいて、何も返さない関数(returnがない、返り値のないreturnで返る)は、
 * undefinedを返すことになってる
 * すなわち、void型はundefinedをとる型。
 */
// void型の変数にはundefinedを入れられる
const a = undefined;
console.log(a); //undefined
// エラー: Type 'void' is not assignable to type 'undefined'.
// ...が出るらしいけど、実行してみても何も言われなかたわ とりまコメントアウト
//const b: undefined = a;
//console.log(b); // undefined
/**
 * 使い所は関数の返り値として。
 * 返り値のない関数は全てvoid型。
 * 逆にいえばvoid型の関数以外はすべて値を返す必要があるということ。(any型は除くらしい)
 * Javaやね。
 */
function func() {
    console.log('void, Hello');
}
func();
