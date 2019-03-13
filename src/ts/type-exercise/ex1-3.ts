/**
 * 1-3. 関数の型
 * 以下のコードで定義される関数isPositiveは、
 * 数値を受け取ってその数値が0以上ならtrueを、0未満ならfalseを返す関数です。
 * 以下のコードに合うように適切な型IsPositiveFuncを定義してください。
 */

// 問題は、これにあうIsPositiveFuncを定義する。
const isPositive: IsPositiveFunc = num => num >= 0;

// 回答
// type構文を使って、引数numberを受け取ると、booleanを返す型の関数とする。
type IsPositiveFunc = (num: number) => boolean;

// 正解
// 引数名はなんでもおk。
//type IsPositiveFunc = (arg: number) => boolean;

// 使用例
isPositive(5);

// エラー例
//isPositive('foo'); // 文字列を引数としてとってるのでだめ
// const res: number = isPositive(123); // 関数の返却値booleanをnumber型に代入しようとしてるのでNG