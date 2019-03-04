"use strict";
// class type
/**
 * TSではclassを定義すると同時に同名の型が定義される
 */
class Foo {
    method() {
        console.log('class is Foo');
    }
}
// obj: FooのFooは型としてのFoo
// new Foo()のFooはclassとしてのFoo
const obj = new Foo();
obj.method(); // class is Foo
class Bar {
    method() {
        console.log('class is Bar');
    }
}
const barObj = new Bar();
const barObjB = barObj;
// 上記の例では、Barクラスのオブジェクトは、同様の構造を持つMyBar型で代替が可能であるということを示している。
