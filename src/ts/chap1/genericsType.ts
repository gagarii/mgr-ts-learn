// generics type

/**
 * いわゆる多相型
 * 型名をFoo<S, T>のように、< >で囲った名前の列を与えて、それらの名前を型定義に使える
 */

interface foo<S, T> {
    foo: S;
    bar: T;
}

const genericsObj: foo<number, string> = {
    foo: 3,
    bar: 'hi'
};