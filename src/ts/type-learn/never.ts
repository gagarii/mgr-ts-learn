// never type

/**
 * neverは"属する値が存在しない型"
 * どんな値もnever型の変数に入れることはできない
 */
// const neverNum: never = 0; // Type '0' is not assignable to type 'never'.

/**
 * 逆に、never型の値はどんな型にも入れられる
 * が、基本的にはTS上でnever型は値を持っているということはあり得ない
 * 
 * declareはJSに書き出されない
 */
declare const neverStr: never;

const neverInFoo: string = neverStr;

/**
 * never型を利用する(される)ケース
 * 1. swtichのdefault構文のreturn値
 * 2. 関数の返却値 (errorのthrowなどの際に返す値がない場合はneverを定義しておくなど)
 */