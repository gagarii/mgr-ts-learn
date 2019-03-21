"use strict";
// never type
const neverInFoo = neverStr;
/**
 * never型を利用する(される)ケース
 * 1. swtichのdefault構文のreturn値
 * 2. 関数の返却値 (errorのthrowなどの際に返す値がない場合はneverを定義しておくなど)
 */ 
