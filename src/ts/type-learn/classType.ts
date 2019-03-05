// class type

/**
 * TSではclassを定義すると同時に同名の型が定義される
 */
class Foo {
    method(): void {
        console.log('class is Foo');
    }
}

// obj: FooのFooは型としてのFoo
// new Foo()のFooはclassとしてのFoo
const obj: Foo = new Foo();

obj.method(); // class is Foo

/**
 * TypeScriptはあくまでも構造的型付け
 * 
 * 通常のJavaScriptでは実行時に、あるオブジェクトがあるクラスのインスタンスか否かは
 * プロトタイプチェーンによって特徴付けられるが、TypeScriptではそうではない
 */
interface MyBar {
    method: () => void;
}

class Bar {
    method(): void {
        console.log('class is Bar');
    }
}

const barObj: MyBar = new Bar();
const barObjB: Bar = barObj;

// 上記の例では、Barクラスのオブジェクトは、同様の構造を持つMyBar型で代替が可能であるということを示している。
