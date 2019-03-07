// union type

/**
 * Type Scriptで力入れてるみたい。
 * Union型は、値が複数の型のいずれかに当てはまりますよというのを表してる
 * 例えば、値がstring か numberならば、 string | number のように
 * 複数の型を '|' でつなぎ合わせて表現する。
 */
let unionVal: string | number = 'foo'; // stringの代入
unionVal = 5; // numberの代入も可能

// しかし、boolean型は定義していないため代入不可
//unionVal = true;

/**
 * オブジェクト型でも表現可能
 */
interface UniHoge {
    foo: string;
    bar: number;
}

interface UniFuga {
    foo: number;
    baz: boolean;
}

// type構文は新しい型を定義する構文。
type UniHoFu = UniHoge | UniFuga;

const uniObj: UniHoFu = {
    foo: 'hoge',
    bar: 2
};

/**
 * union型の絞り込み
 * 上記のUniHoFu型のuniObjにおいて、そのままbarプロパティは参照できない。
 * なぜならこのObjはUniHoge型なのかUniFuga型かわからないから。
 * UniHogeにはbarはあるが、UniFugaにはbarはない。
 * bazプロパティについても同様の理由から参照できない。(らしい)
 */

// そのため、実行時にプロパティがあるかどうかを判別する必要がある
function useHogeFuga(obj: UniHoge | UniFuga): void {
    // ここで判定 inを使う
    if ('bar' in obj) {
        // barがあるということはUniHoge型
        console.log(`型はUniHoge: bar->${obj.bar}`);
    } else {
        // barがないということはbazが入っているのでUniFuga型
        console.log(`型はUniFuga: baz->${obj.baz}`);
    }
}

useHogeFuga(uniObj);

/**
 * 注意 inを使う判定をする場合、以下のようなケースで意図しない結果となる
 * 要は、UniHogeは foo: string, bar: number
 *      UniFugaは foo: number, baz: boolean
 * のため、ここではUniFugaとなるところだが、
 * 上記のuseHogeFuga関数を使った場合、barがinしてれば
 * UniHoge型と見なされるので意図しない結果となることに。
 */
const objEx: UniHoge | UniFuga = {
    foo: 123,
    bar: 'hoge',
    baz: true
}

/**
 * typeofを使った判定ならば、型違いは起きない
 */
function premitiveJudge(val: string | number): number {
    if ('string' === typeof val) {
        return val.length; //stringはlengthを返せる
    } else {
        return val; // stringでないならばnumber。
    }
}