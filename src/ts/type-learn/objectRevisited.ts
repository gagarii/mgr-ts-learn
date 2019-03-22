// objectRevisited

/**
 * オブジェクト型のプロパティに修飾子をつけることが可能
 * ?: 省略可能なプロパティを表す
 * readonly: 再代入不可
 */

// ? 省略可能なプロパティ
interface QuestionObj {
    foo: string,
    bar?: number // ?をつけると、自動的にunion型の number | undefinedになるため、使う側でcheckは必須
}
// barを省略してもエラーにならない
let questionObj: QuestionObj = {
    foo: 'hoge'
};
// barの代入はできる
questionObj = {
    foo: 'fuga',
    bar: 5
};

// barの存在もcheckしながら使わないといけない
function calcQuestionObj(obj: QuestionObj): number {
    return obj.bar != null ? obj.bar * 10 : 0;
}

// ?を使わずに、union型としてundefinedを使うとしても、同じように省略することができない
interface UndefinedObj {
    foo: string;
    bar: number | undefined;
};
// Property 'bar' is missing in type '{ foo: string; }' but required in type 'UndefinedObj'.
// let undefinedObj: UndefinedObj = {
//     foo: 'hoge'
// };


// readonly
interface ReadOnlyObj {
    readonly hoge: string
}
const readOnlyObj: ReadOnlyObj = {
    hoge: 'hoi!'
};
// Cannot assign to 'hoge' because it is a read-only property.
//readOnlyObj.hoge = 'nue!';

// readonlyでない型を経由して書き換えることも可能なので注意
interface ReadOnlyObj2 {
    hoge: string
}
const readOnlyObj2: ReadOnlyObj2 = readOnlyObj;
readOnlyObj2.hoge = 'hohohohoi!!!!'
console.log(readOnlyObj2.hoge);// hohohohoi!!!!

