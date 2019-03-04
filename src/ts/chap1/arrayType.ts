// array type

/**
 * 配列の型を表す場合、'[]'を使う
 */
const foo: number[] = [0, 1, 2, 3];
foo.push(4);
console.log(foo); // [ 0, 1, 2, 3, 4 ]

const bar: string[] = ['aa', 'bb', 'cc'];
bar.push('dd');
console.log(bar); //[ 'aa', 'bb', 'cc', 'dd' ]