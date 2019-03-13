"use strict";
/**
 * 1-3. 関数の型
 * 以下のコードで定義される関数isPositiveは、
 * 数値を受け取ってその数値が0以上ならtrueを、0未満ならfalseを返す関数です。
 * 以下のコードに合うように適切な型IsPositiveFuncを定義してください。
 */
// 問題は、これにあうIsPositiveFuncを定義する。
const isPositive = num => num >= 0;
// 正解
// 引数名はなんでもおk。
//type IsPositiveFunc = (arg: number) => boolean;
// 使用例
isPositive(5);
// エラー例
//isPositive('foo'); // 文字列を引数としてとってるのでだめ
// const res: number = isPositive(123); // 関数の返却値booleanをnumber型に代入しようとしてるのでNG
