/**
 * 1-1. 関数に型をつけよう
 * 次の関数isPositiveは、数値を受け取ってそれが0以上ならtrue、0未満ならfalseを返す関数です。
 * この関数に正しく型アノテーションを付けてください。
 * 型アノテーションとは、引数や返り値の型をソースコード中に明示することです。
 */

// 問題がこれ
// function isPositive(num) {
//     return num >= 0;
// }

// 回答
// 引数と関数の返り値に型をつけてあげるだけ。
function isPositive(num: number): boolean {
    return num >= 0;
}

// 正解
// function isPositive(num: number): boolean {
//     return num >= 0;
// }


// 使用例
isPositive(3);

// エラー例
// isPositive('123'); // 引数が文字列では呼び出せない
// const numVar: number = isPositive(-5); // 関数の返却値の代入先の型がnumberで、booleanではない。
