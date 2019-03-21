"use strict";
// union type
/**
 * Type Scriptで力入れてるみたい。
 * Union型は、値が複数の型のいずれかに当てはまりますよというのを表してる
 * 例えば、値がstring か numberならば、 string | number のように
 * 複数の型を '|' でつなぎ合わせて表現する。
 */
let unionVal = 'foo'; // stringの代入
unionVal = 5; // numberの代入も可能
const uniObj = {
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
function useHogeFuga(obj) {
    // ここで判定 inを使う
    if ('bar' in obj) {
        // barがあるということはUniHoge型
        console.log(`型はUniHoge: bar->${obj.bar}`);
    }
    else {
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
const objEx = {
    foo: 123,
    bar: 'hoge',
    baz: true
};
/**
 * typeofを使った判定ならば、型違いは起きない
 */
function premitiveJudge(val) {
    if ('string' === typeof val) {
        return val.length; //stringはlengthを返せる
    }
    else {
        return val; // stringでないならばnumber。
    }
}
/**
 * unionを使うケースとして、nullableな値を扱いたい場合などがある
 * 例えば、string型の値かnullの値が来るかわからないケースも
 * unionならば string | null のように表すことができる
 */
function strLength(str) {
    if (str != null) {
        return str.length;
    }
    else {
        return 0;
    }
}
function tMap(obj, f) {
    if (obj.type === 'Some') {
        // ここではobjはSome<T>型
        return {
            type: 'Some',
            val: f(obj.val)
        };
    }
    else {
        return {
            type: 'None'
        };
    }
}
