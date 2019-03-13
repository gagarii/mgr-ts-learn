/**
 * 1-4. 配列の型
 * 以下のコードで定義される関数sumOfPosは、数値の配列を受け取って、
 * そのうち0以上の値の和を返す関数です。適切な型アノテーションをつけてください。
 */

// 問題
// function sumOfPos(arr) {
//     return arr.filter(num => num >= 0).reduce((acc, num) => acc + num, 0);
// }

// 回答
// 引数の型をnumberの配列型にして、number型で返すようにしただけ。
function sumOfPos(arr: number[]): number {
    return arr.filter(num => num >= 0).reduce((acc, num) => acc + num, 0);
}

// 正解
// function sumOfPos(arr: number[]): number {
//     return arr.filter(num => num >= 0).reduce((acc, num) => acc + num, 0);
// }

// 使用例
const sum: number = sumOfPos([1, 3, -2, 0]);
  
// エラー例
//sumOfPos(123, 456); // 配列ではないのでNG
//sumOfPos([123, "foobar"]); // 文字列が配列に含まれているのでNG