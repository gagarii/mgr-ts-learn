/**
 * 1-2. オブジェクトの型
 * 1人のユーザーのデータを表すオブジェクトは、
 * nameプロパティとageプロパティ、そしてprivateプロパティを持っています。
 * nameは文字列、ageは数値、privateは真偽値です。
 * ユーザーデータのオブジェクトの型Userを定義してください。
 */

// 問題がこれ
// ここでは、オブジェクトUserの型を定義する。
function showUserInfo(user: User) {
     // 省略
}

// 回答
// interface宣言をして、Userというオブジェクトに含まれる各プロパティの型を定義してあげる。
interface User {
    name: string;
    age: number;
    private: boolean;
}

// 正解
// interface User {
//     name: string;
//     age: number;
//     private: boolean;
// }

// 使用例
showUserInfo({
    name: 'John Smith',
    age: 16,
    private: false,
});

// エラー例
// User型のオブジェクトにageプロパティは必須。
// showUserInfo({
//     name: 'Mary Sue',
//     private: false,
// });

// User型のオブジェクトにprivateプロパティは必須。
// const usr: User = {
//     name: 'Gombe Nanashino',
//     age: 100,
// };

/**
 * 必須なプロパティではないようにするためには、interfaceの定義のタイミングで、
 * プロパティの名前の後に '?' をつけてあげると良い。
 * 例えば
 * age?: number;
 * みたいな。
 */