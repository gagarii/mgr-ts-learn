// any type

/**
 * あ！よくTwitterとかで見る 「ついついanyにしちゃうんだよねー」のanyさんだ！！
 * ウッヒョー
 */

/**
 * any型はなんでもありな型
 * はいワリオのピクロス
 */
const anyTypeA: any = 1;
const strA: string = anyTypeA;

console.log(`anyTypeA: ${anyTypeA}`); // anyTypeA: 1
console.log(`strA: ${strA}`); // strA: 1

// typeofしたらどうなるん？
console.log(typeof anyTypeA); // number
console.log(typeof strA); // number 
// えぇ..........