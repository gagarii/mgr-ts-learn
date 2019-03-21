// intersection type

/**
 * 交差型。
 * unionと対になるものっぽい。
 * Hoge | Fuga でなく、Hoge & Fuga のように&を使って表現する
 * 以下の例では、InterSecObjはInterSecHogeであり、InterSecFugaである。
 */
interface InterSecHoge {
    foo: string;
    bar: number;
}
interface InterSecFuga {
    foo: string;
    baz: boolean;
}

const InterSecObj: InterSecHoge & InterSecFuga = {
    foo: 'foooooo',
    bar: 5,
    baz: true
};

/**
 * unionと組み合わせることもできる。
 */
interface UHoge {
    type: 'hoge';
    foo: string;
}
interface UFuga {
    type: 'fuga';
    bar: number;
}
interface IBaz {
    baz: boolean;
}

type ISUObj = (UHoge | UFuga) & IBaz;

function ISUFunc(obj: ISUObj) {
    // objはIBazなので、bazを参照可能
    console.log(obj.baz);
    if (obj.type === 'hoge') {
        // ここではobjはUHoge & IBaz
        console.log(obj.foo);
    } else {
        // ここではobjはUFuga & IBaz
        console.log(obj.bar);
    }
}
